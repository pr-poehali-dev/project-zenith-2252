import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"

extend(THREE as unknown as Record<string, unknown>)

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform vec2 uPointer;
      uniform float uTime;
      varying vec2 vUv;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;

        vec2 pointer = uPointer * 0.3;
        vec2 distorted = uv + pointer * 0.04;

        float n1 = noise(distorted * 4.0 + uTime * 0.15);
        float n2 = noise(distorted * 8.0 - uTime * 0.1);
        float n3 = noise(distorted * 2.0 + uTime * 0.05);

        float wave = sin(distorted.x * 6.0 + uTime * 0.8 + n1 * 2.0) * 0.5 + 0.5;
        float wave2 = sin(distorted.y * 5.0 - uTime * 0.6 + n2 * 2.0) * 0.5 + 0.5;

        float scan = sin(uv.y * 80.0 + uTime * 0.5) * 0.03 + 0.97;

        float combined = wave * wave2 * n3;
        float glow = smoothstep(0.3, 0.8, combined);

        vec3 dark = vec3(0.02, 0.0, 0.0);
        vec3 mid = vec3(0.18, 0.0, 0.0);
        vec3 bright = vec3(0.85, 0.05, 0.05);

        vec3 col = mix(dark, mid, glow);
        col = mix(col, bright, pow(glow, 3.0));
        col *= scan;

        float dist = length(uv - vec2(0.5));
        col *= smoothstep(0.85, 0.2, dist);

        gl_FragColor = vec4(col, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uPointer: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [])

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uPointer.value = pointer
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]} material={material}>
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleWords = "Мажара Антон".split(" ")
  const subtitle = "Студент-историк. Педагогический институт, 1 курс."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1] }}
        style={{ background: "#000000" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL