import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "На каком курсе вы учитесь и какое направление?",
      answer:
        "Я студент 1 курса педагогического института по направлению «История». Обучение включает как глубокое изучение исторических дисциплин, так и педагогическую подготовку для будущей работы учителем.",
    },
    {
      question: "Какие темы вам наиболее интересны в истории?",
      answer:
        "Особый интерес вызывает отечественная история: эпоха реформ, революционные периоды и советский период. Также увлекаюсь военной историей и историей повседневности.",
    },
    {
      question: "Готовы ли вы к репетиторству или помощи школьникам?",
      answer:
        "Да, я готов помогать школьникам в изучении истории — объяснять материал, помогать с подготовкой к ОГЭ и ЕГЭ. Педагогическое образование помогает мне найти правильный подход к каждому ученику.",
    },
    {
      question: "Участвуете ли вы в научной жизни института?",
      answer:
        "Да, активно участвую в студенческом историческом кружке и готовлюсь к участию в научных конференциях. Работаю над исследовательскими проектами под руководством научного руководителя.",
    },
    {
      question: "Как с вами связаться?",
      answer:
        "Вы можете написать мне через контактную форму на этом сайте или нажать кнопку «Написать мне» в меню. Я отвечаю в течение суток.",
    },
    {
      question: "Планируете ли вы дальнейшую научную карьеру?",
      answer:
        "Да, планирую продолжить обучение в магистратуре после бакалавриата. Интересует как педагогическая деятельность, так и историческая наука — хочу совмещать преподавание с исследовательской работой.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы обо мне, моей учёбе и планах на будущее.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
