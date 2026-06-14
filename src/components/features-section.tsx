import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Исторический анализ",
    description: "Умею работать с первоисточниками, анализировать исторические документы и выявлять причинно-следственные связи событий.",
    icon: "book",
    badge: "Источниковедение",
  },
  {
    title: "Академическое письмо",
    description: "Пишу рефераты, эссе и научные работы с соблюдением требований ГОСТ и академического стиля.",
    icon: "pen",
    badge: "Письмо",
  },
  {
    title: "Педагогика",
    description: "Изучаю методику преподавания истории: как объяснять сложное простым языком и вовлекать аудиторию.",
    icon: "users",
    badge: "Обучение",
  },
  {
    title: "Работа с архивами",
    description: "Осваиваю навыки работы в библиотеках и архивах: поиск, систематизация и цитирование исторических материалов.",
    icon: "archive",
    badge: "Архивы",
  },
  {
    title: "Хронология и картография",
    description: "Составляю хронологические таблицы, работаю с историческими картами и разбираюсь в периодизации событий.",
    icon: "map",
    badge: "Карты",
  },
  {
    title: "Критическое мышление",
    description: "Умею сопоставлять различные точки зрения историков, оценивать достоверность источников и формировать аргументированную позицию.",
    icon: "target",
    badge: "Анализ",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Мои компетенции</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Навыки и знания, которые я приобретаю на первом курсе педагогического института
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "book" && "📖"}
                    {feature.icon === "pen" && "✍️"}
                    {feature.icon === "users" && "🎓"}
                    {feature.icon === "archive" && "🗂️"}
                    {feature.icon === "map" && "🗺️"}
                    {feature.icon === "target" && "🔍"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
