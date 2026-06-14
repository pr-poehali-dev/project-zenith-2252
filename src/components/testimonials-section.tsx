import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Профессор Иванова А.В.",
    role: "Кафедра отечественной истории",
    content:
      "Студент проявляет искренний интерес к предмету, задаёт глубокие вопросы и тщательно работает с первоисточниками. Большой потенциал.",
  },
  {
    name: "Доцент Петров С.И.",
    role: "Кафедра педагогики и методики",
    content:
      "Грамотно строит аргументацию в письменных работах. Видна системность мышления и серьёзный подход к академическому письму.",
  },
  {
    name: "Старостова М.К.",
    role: "Студенческий научный кружок",
    content:
      "Активный участник нашего исторического кружка. Всегда приходит подготовленным, делится интересными находками из архивных источников.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Обо мне говорят</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Отзывы преподавателей и однокурсников о моей учёбе и работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
