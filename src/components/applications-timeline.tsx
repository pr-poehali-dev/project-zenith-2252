import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Безопасность на улице и дома",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Учебный проект — брошюра «Безопасность на улице и дома. Простые правила, которые спасут жизнь».
            Включает правила поведения на улице и дома, оформленные в наглядный дидактический материал для школьников.
          </p>
          <div className="mb-6">
            <img
              src="https://cdn.poehali.dev/projects/719842d6-d2bc-4fa6-a8af-5161c873974d/bucket/f7b5f4f2-1e83-472d-9d65-c3f16f743796.png"
              alt="Безопасность на улице и дома"
              className="rounded-lg w-full max-w-lg object-cover border border-red-500/20"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Правила безопасности на улице: освещённые маршруты, незнакомцы, преследование
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Правила безопасности дома: электричество, газ, незнакомцы у двери
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Наглядное оформление для использования на уроках ОБЖ
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Видеоматериал по безопасности",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Видеоурок «Безопасность на улице и дома — правила и советы» — наглядное пособие для проведения
            классных часов и уроков ОБЖ в начальной и средней школе.
          </p>
          <div className="mb-6">
            <img
              src="https://cdn.poehali.dev/projects/719842d6-d2bc-4fa6-a8af-5161c873974d/bucket/5dbe51d0-63d2-4650-8ac0-b511cfb87b27.png"
              alt="Видеоматериал по безопасности"
              className="rounded-lg w-full max-w-lg object-cover border border-red-500/20"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Видеопособие для классных часов и уроков ОБЖ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подходит для учеников начальной и средней школы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Наглядный формат для лучшего усвоения материала
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Практические ситуации и действия",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Дидактический материал «Практические ситуации и действия» — разбор конкретных опасных ситуаций:
            незнакомцы, пожар, запах газа, подозрительные предметы. С номерами экстренных служб и советами родителям.
          </p>
          <div className="mb-6">
            <img
              src="https://cdn.poehali.dev/projects/719842d6-d2bc-4fa6-a8af-5161c873974d/bucket/28628959-47f6-4243-bbe9-0da69cf0bdfb.png"
              alt="Практические ситуации и действия"
              className="rounded-lg w-full max-w-lg object-cover border border-red-500/20"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Алгоритмы действий в экстренных ситуациях для детей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Экстренные службы: 112, 101, 102, 103, 104
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Советы родителям по проверке домашней безопасности
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Мои проекты и работы</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Учебные и методические материалы, созданные в рамках педагогической подготовки на первом курсе.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}