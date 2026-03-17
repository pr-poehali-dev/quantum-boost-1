import ArcGalleryHero from "@/components/ArcGalleryHero";
import Icon from "@/components/ui/icon";

const POSTER_BLOCKS = [
  {
    icon: "BookOpen",
    title: "Словарный запас",
    desc: "«Назови признаки», «Подбери синонимы/антонимы»",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: "MessageSquare",
    title: "Грамматический строй",
    desc: "Упражнения на согласование, словообразование",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "Mic",
    title: "Звуковая культура",
    desc: "Артикуляционная гимнастика, чистоговорки",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: "Users",
    title: "Связная речь",
    desc: "Рассказы по картинкам, пересказ по схеме",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: "Star",
    title: "Подготовка к грамоте",
    desc: "Первый звук в слове, слоги, звуковой анализ",
    color: "bg-pink-100 text-pink-700",
  },
];

const PRINCIPLES = [
  { icon: "Eye", text: "Наглядность" },
  { icon: "Activity", text: "Деятельностный подход" },
  { icon: "Users", text: "Сотрудничество" },
  { icon: "UserCheck", text: "Индивидуальность" },
  { icon: "Layers", text: "Интеграция" },
];

const Index = () => {
  const images = [
    "/freepik__enhance__98192.png",
    "/LS.png",
    "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
    "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
    "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
    "/slide.png",
    "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
    "/abstract-blue-gradient.webp",
    "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
    "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero Arc Gallery */}
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        title='Постер-технология «Күнчээнэ»'
        subtitle="Методический инструмент для развития речи детей старшего дошкольного возраста (5–7 лет)"
        primaryBtnText="Скачать постер"
        secondaryBtnText="Узнать больше"
      />

      {/* Актуальность */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Актуальность
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Речевое развитие — фундамент личности
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Постер-технология «Күнчээнэ» создана на основе национального
            компонента «Үгэс эргиирэ» и отвечает требованиям ФГОС и ФОП ДО.
            Это гибкий инструмент для молодых педагогов, который помогает
            быстро планировать занятия, подбирать приёмы и системно отслеживать
            прогресс каждого ребёнка.
          </p>
        </div>
      </section>

      {/* Принципы */}
      <section className="py-14 px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">
            Принципы реализации
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {PRINCIPLES.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-border"
              >
                <Icon name={p.icon} size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Направления развития речи */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
            Ключевые направления постера
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            5 блоков речевой работы с детьми 5–7 лет
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTER_BLOCKS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-border p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${block.color}`}
                >
                  <Icon name={block.icon} size={20} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Планируемые результаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <Icon name="Baby" size={28} className="mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Для детей</h3>
              <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                <li>Активный словарь +20–30%</li>
                <li>Рассказы до 8–10 предложений</li>
                <li>Диалогические навыки</li>
                <li>Уверенность в выступлениях</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <Icon
                name="GraduationCap"
                size={28}
                className="mb-3 text-yellow-300"
              />
              <h3 className="font-bold text-lg mb-2">Для педагогов</h3>
              <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                <li>Быстрое планирование занятий</li>
                <li>Банк методических идей</li>
                <li>Инструмент самообразования</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <Icon name="Heart" size={28} className="mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Для родителей</h3>
              <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                <li>Понимание важности речи</li>
                <li>Приёмы для занятий дома</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Сроки и цель */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Цель проекта
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Создание методического инструментария постера для молодых педагогов
            ДОУ — для быстрой постановки целей, подбора приёмов и упражнений,
            повышения качества речевого развития детей.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5 text-amber-800 text-sm font-medium">
            <Icon name="Calendar" size={16} />
            Сентябрь — Май · Учебный год
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-muted/40 border-t border-border text-center text-sm text-muted-foreground">
        Педагогический проект · Постер-технология «Күнчээнэ» · Конкурс
        «Воспитатель года»
      </footer>
    </main>
  );
};

export default Index;