(() => {
  const pageHtml = String.raw`
<a class="skip-link" href="#contact">Перейти к заявке</a>

    <header class="site-header" id="top">
      <div class="header-inner">
        <a class="brand" href="#hero" aria-label="Живой маркетинг">
          <strong>Живой маркетинг</strong>
          <span>JTBD · CJM · AI</span>
        </a>
        <nav class="nav" aria-label="Основная навигация">
          <a href="#audiences">Для предпринимателя</a>
          <a href="#format">Формат</a>
          <a href="#methods">Методики</a>
          <a href="#concept-video">Видео</a>
          <a href="#work">Как работаем</a>
          <a href="#program">Программа</a>
          <a href="#conditions">Условия</a>
          <a href="#contact">Заявка</a>
        </nav>
        <a class="header-cta" href="#contact">Записаться на встречу-знакомство</a>
        <button class="menu-button" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-inner">
          <nav aria-label="Мобильная навигация">
            <a href="#audiences">Для предпринимателя</a>
            <a href="#format">Формат</a>
            <a href="#methods">Методики</a>
            <a href="#concept-video">Видео</a>
            <a href="#work">Как работаем</a>
            <a href="#program">Программа</a>
            <a href="#conditions">Условия</a>
            <a href="#contact">Заявка</a>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <section class="section hero" id="hero">
        <div class="wrap grid hero-grid">
          <div class="visual-panel hero-visual">
            <img src="assets/gamma-hero-desk.svg" alt="Line-art рабочий стол с блокнотом, растением и материалами практикума" />
          </div>
          <div>
            <div class="eyebrow">Для предпринимателей · 6 месяцев · Реальный проект · старт - май 2026</div>
            <h1>Маркетинг есть. Бюджет уходит. Управляемости нет.</h1>
            <p class="lead">
              Практикум для владельца малого бизнеса, который хочет собрать рекламу, сайт, подрядчиков, продавцов,
              бюджет и показатели в понятную систему действий на своем реальном проекте.
            </p>
            <div class="hero-actions">
              <a class="button-primary" href="#contact">Записаться на встречу-знакомство</a>
              <a class="button-secondary" href="#concept-video">Что такое JTBD и CJM?</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section alt" id="problem">
        <div class="wrap">
          <div class="problem-intro">
            <div class="eyebrow">Проблема</div>
            <h2>Проблема часто не в одном канале. Не собрана система управления маркетингом</h2>
            <a class="concept-shortcut" href="#concept-video">Что такое JTBD и CJM? Посмотреть короткое видео</a>
          </div>
          <div class="problem-board">
            <div class="visual-panel problem-visual">
              <img src="assets/gamma-problem-visual.svg" alt="Line-art банка с перепутанными материалами внутри" />
            </div>
            <div class="problem-stack">
              <article class="problem-card">
                <div>
                  <h3>Действий много - управляемости нет</h3>
                  <p>Реклама запускается, посты выходят, макеты согласуются, акции придумываются, но цельная картина не складывается.</p>
                </div>
              </article>
              <article class="problem-card">
                <div>
                  <h3>Бюджет уходит, результат неясен</h3>
                  <p>Непонятно, какие действия реально приближают заявку, покупку или повторное обращение.</p>
                </div>
              </article>
              <article class="problem-card">
                <div>
                  <h3>Приходится управлять мелочами</h3>
                  <p>Вместо стратегии собственник уходит в тексты, картинки, правки, срочные задачи и споры о вкусе.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="audiences">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Один маршрут</div>
            <h2>Если вы предприниматель малого бизнеса</h2>
          </div>
          <div class="grid three">
            <article class="audience-card">
              <div class="audience-visual">
                <img src="assets/gamma-audience-owner.svg" alt="Line-art предприниматель за рабочим столом" />
              </div>
              <h3>Есть команда или подрядчики</h3>
              <p>Но маркетинг распадается на отдельные задачи: реклама, посты, сайт, акции, звонки, правки и срочные идеи.</p>
            </article>
            <article class="audience-card">
              <div class="audience-visual">
                <img src="assets/gamma-problem-visual.svg" alt="Line-art банка с перепутанными материалами внутри" />
              </div>
              <h3>Нет ясной системы заявок</h3>
              <p>Деньги тратятся, люди заняты, но трудно понять, где теряется клиент и что именно нужно менять.</p>
            </article>
            <article class="audience-card">
              <div class="audience-visual">
                <img src="assets/jtbd-cjm-gamma.png" alt="Схема JTBD и CJM как основы управляемого маркетинга" />
              </div>
              <h3>Нужен понятный план</h3>
              <p>Не теория ради теории, а стратегия, бюджет, показатели и задачи, которые можно обсуждать с командой.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap grid segment-layout">
          <div class="segment-blue">
            <h2>Вы - предприниматель, который устал сливать бюджет</h2>
            <p class="lead">Маркетинг вроде бы есть: люди, подрядчики, реклама, сайт, соцсети. Но системы управления и ясной эффективности нет.</p>
          </div>
          <div>
            <ul class="arrow-list">
              <li>Вы согласовываете посты и макеты вместо управления стратегией.</li>
              <li>Реклама тратит деньги, а вклад в продажи трудно объяснить.</li>
              <li>Команда и подрядчики спорят о действиях, но не сходятся в одной картине клиента.</li>
            </ul>
            <div class="result-panel">Результат: стратегия, бюджет, показатели и осмысленные задачи команде.</div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap grid two">
          <div class="common-diagram">
            <img
              src="assets/common-ground-gamma.png"
              alt="Схема: реальный проект, обратная связь, безопасная группа и план действий"
            />
          </div>
          <div>
            <div class="eyebrow">Что меняется</div>
            <h2>Маркетинг становится управляемой системой</h2>
            <ul class="common-points">
              <li><strong>Реальный проект</strong><span>Работа идет на вашем бизнесе, а не на учебном примере.</span></li>
              <li><strong>Обратная связь</strong><span>Разбираем вашу ситуацию, путь клиента, гипотезы, бюджет и следующие действия.</span></li>
              <li><strong>Группа</strong><span>Можно сравнивать решения с другими предпринимателями и видеть не только свой угол.</span></li>
              <li><strong>Готовый план</strong><span>На выходе нужны документы, задачи и решения, а не набор конспектов.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section alt" id="format">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Формат</div>
            <h2>Почему обычные форматы не срабатывают</h2>
          </div>
          <div class="comparison">
            <div class="comparison-row">
              <strong>Обычный курс</strong>
              <p>Много знаний, но они общие. Не учитывает специфику вашего бизнеса. Внедрять некому.</p>
            </div>
            <div class="comparison-row">
              <strong>Разовый совет</strong>
              <p>Нет системы и сопровождения. Через неделю ситуация не изменится.</p>
            </div>
            <div class="comparison-row">
              <strong>Полноценный консалтинг</strong>
              <p>Дорого. Консультант делает работу вместо вас - понимания, как поддерживать результат, не возникает.</p>
            </div>
          </div>
          <div class="blue-callout">Решение: нужен гибрид: обучение + консалтинг + группа + персональный разбор вашего проекта.</div>
        </div>
      </section>

      <section class="section">
        <div class="wrap grid hybrid-layout">
          <div>
            <div class="eyebrow">Гибрид</div>
            <h2>Что такое «Живой маркетинг»</h2>
            <p class="lead">«Живой маркетинг» - это курс, консалтинг и рабочая группа в одном формате.</p>
            <p class="lead">Каждую неделю вы превращаете свой проект в планы, документы, решения и действия.</p>
          </div>
          <div class="hybrid-board" aria-label="Схема курса, консалтинга и рабочей группы">
            <div class="hybrid-center">
              <img src="assets/gamma-file-icon.svg" alt="" aria-hidden="true" />
              <div>
                <strong>Реальный проект участника</strong>
                <span>Планы, документы и действия.</span>
              </div>
            </div>
            <div class="hybrid-item"><strong>Обучение</strong><span>Методики и инструменты.</span></div>
            <div class="hybrid-item"><strong>Консалтинг</strong><span>Разбор вашего проекта.</span></div>
            <div class="hybrid-item"><strong>Группа</strong><span>Коллективный разум.</span></div>
            <div class="hybrid-item"><strong>Обратная связь</strong><span>Персонально по задаче.</span></div>
          </div>
        </div>
      </section>

      <section class="section alt" id="methods">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Методики</div>
            <h2>Две методики - основа управляемого маркетинга</h2>
          </div>
          <div class="grid methods-layout">
            <div class="methods-visual">
              <img
                src="assets/jtbd-cjm-gamma.png"
                alt="Venn-схема JTBD и CJM: в пересечении управляемая система маркетинга с показателями, метриками и бюджетами"
              />
            </div>
            <div class="method-notes">
              <article class="method-note">
                <strong>Зачем они нужны именно вам</strong>
              </article>
              <article class="method-note">
                <strong>JTBD</strong>
                <p>Отвечает на вопрос: за что клиент платит на самом деле?</p>
                <p>Убирает догадки, заменяет их фактами из интервью.</p>
              </article>
              <article class="method-note">
                <strong>CJM</strong>
                <p>Показывает полный маршрут клиента: где теряем, где выигрываем, где точки роста.</p>
              </article>
              <article class="method-note">
                <strong>Вместе</strong>
                <p>Дают основу для стратегии, бюджета, KPI и конкретных действий.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="concept-video">
        <div class="wrap grid concept-video-layout">
          <div class="concept-video-copy">
            <div class="eyebrow">Видео</div>
            <h2>JTBD и CJM простым языком</h2>
            <p class="lead">
              Короткое объяснение двух методик, на которых строится практикум: как понять реальную работу клиента и
              собрать путь к решению в управляемую систему.
            </p>
            <a class="button-primary concept-video-cta" href="#contact">Записаться на встречу-знакомство</a>
          </div>
          <figure class="concept-video-media">
            <video controls preload="metadata" playsinline poster="assets/video/concepts-jtbd-cjm-poster.jpg">
              <source src="assets/video/concepts-jtbd-cjm.mp4" type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <figcaption>
              Посмотрите перед заявкой, если хотите быстро понять, зачем в программе нужны JTBD и CJM.
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Артефакты</div>
            <h2>Что вы соберете за 6 месяцев</h2>
            <p class="lead">Конкретные рабочие артефакты под ваши бизнес-задачи.</p>
          </div>
          <div class="artifact-grid">
            <article class="artifact-card">
              <div class="artifact-mark">01</div>
              <h3>Исследование клиентов</h3>
              <p>Глубинные интервью, подтвержденные JTBD-гипотезы и портреты.</p>
            </article>
            <article class="artifact-card">
              <div class="artifact-mark">02</div>
              <h3>Карта пути клиента</h3>
              <p>CJM с барьерами, точками контакта, офферами и сообщениями.</p>
            </article>
            <article class="artifact-card">
              <div class="artifact-mark">03</div>
              <h3>Стратегия и план</h3>
              <p>Каналы, мероприятия, бюджет и KPI - под ваш проект.</p>
            </article>
            <article class="artifact-card">
              <div class="artifact-mark">04</div>
              <h3>Система метрик</h3>
              <p>Показатели эффективности и инструменты для их измерения.</p>
            </article>
            <article class="artifact-card">
              <div class="artifact-mark">05</div>
              <h3>База знаний и решений с AI-движком</h3>
              <p>Автоматизированная система накопления знаний и решений по вашему проекту.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap ai-editorial">
          <div class="ai-header">
            <div>
            <div class="eyebrow">AI</div>
            <h2>На практике учимся использовать нейросети эффективно для экономии времени и денег</h2>
            </div>
            <div class="ai-icon">
              <img src="assets/gamma-ai-visual.svg" alt="Line-art компактная схема связанных узлов для работы с AI" />
            </div>
          </div>
            <ul class="ai-list">
              <li>Анализ рынка, конкурентов, отзывов, интервью и анкет.</li>
              <li>Поиск повторяющихся мотивов, барьеров и инсайтов.</li>
              <li>Черновики документов, ТЗ, предложений, планов и презентаций.</li>
              <li>Контроль и проверка.</li>
            </ul>
            <div class="blue-callout">AI - усилитель вашей работы, а не волшебная кнопка.</div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Устойчивость</div>
            <h2>Устойчивая работа с агентскими нейросетями</h2>
          </div>
          <div class="agent-grid">
            <article class="agent-card">
              <div class="agent-mark">01</div>
              <h3>Инструменты</h3>
              <p>AI-инструменты под вашу задачу.</p>
            </article>
            <article class="agent-card">
              <div class="agent-mark">02</div>
              <h3>Доступ и оплата</h3>
              <p>Рабочие пространства, доступ и оплата без блокировок.</p>
            </article>
            <article class="agent-card">
              <div class="agent-mark">03</div>
              <h3>Безопасность</h3>
              <p>Меры защиты в условиях блокировок и санкций.</p>
            </article>
            <article class="agent-card">
              <div class="agent-mark">04</div>
              <h3>Техническое внедрение</h3>
              <p>Проведем «за руку»: покажем, куда нажать и что вставить.</p>
            </article>
          </div>
          <div class="blue-callout">Итог: создадим автоматизированную, самообучаемую базу знаний вашего проекта с AI-движком.</div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap grid knowledge-layout">
          <div>
            <div class="eyebrow">База знаний</div>
            <h2>Умная база знаний вашего проекта</h2>
            <p class="lead">Хранит все, что накоплено: связывает источники, выводы и решения в единую систему.</p>
            <p class="lead">База умнеет по мере работы - нейросети получают качественный контекст.</p>
            <ul class="knowledge-list">
              <li>Источники и интервью.</li>
              <li>JTBD-инсайты и CJM.</li>
              <li>Решения и аргументы.</li>
              <li>Шаблоны и документы.</li>
              <li>Задачи и следующие шаги.</li>
              <li>Результаты экспериментов.</li>
            </ul>
          </div>
          <div class="knowledge-visual">
            <img src="assets/gamma-knowledge-visual.svg" alt="Line-art карта связей базы знаний проекта" />
          </div>
          <div class="knowledge-result">Итог: создадим автоматизированную, самообучаемую базу знаний вашего проекта с AI-движком.</div>
        </div>
      </section>

      <section class="section" id="work">
        <div class="wrap grid work-layout">
          <div class="work-copy">
            <div class="eyebrow">Как мы будем работать</div>
            <h2>Как выглядит работа каждую неделю</h2>
            <p class="lead">
              Встречаемся один раз в неделю, ориентировочно на 2-3 часа. Время осознанно не ограничиваю: важно разобрать задачи и результаты каждого участника. Продолжаем, пока не закончим.
            </p>
          </div>
          <div class="work-visual">
            <img src="assets/gamma-work-visual.png" alt="Gamma-схема weekly-цикла: новый блок, применение, обратная связь и разбор ДЗ" />
          </div>
        </div>
      </section>

      <section class="section alt" id="program">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Программа</div>
            <h2>Программа на 6 месяцев</h2>
          </div>
          <div class="program-timeline">
            <article class="timeline-item">
              <div class="timeline-number">01</div>
              <div class="timeline-body"><div class="month">Месяц 1</div><h3>Диагностика проекта и целей.</h3></div>
            </article>
            <article class="timeline-item">
              <div class="timeline-number">02</div>
              <div class="timeline-body"><div class="month">Месяц 2</div><h3>Исследование клиентов, сегментация по Jobs To Be Done.</h3></div>
            </article>
            <article class="timeline-item">
              <div class="timeline-number">03</div>
              <div class="timeline-body"><div class="month">Месяц 3</div><h3>Customer Journey Map.</h3></div>
            </article>
            <article class="timeline-item">
              <div class="timeline-number">04</div>
              <div class="timeline-body"><div class="month">Месяц 4</div><h3>Нейросети и база знаний с AI-движком.</h3></div>
            </article>
            <article class="timeline-item">
              <div class="timeline-number">05</div>
              <div class="timeline-body"><div class="month">Месяц 5</div><h3>Стратегия, план действий, бюджет, KPI и метрики.</h3></div>
            </article>
            <article class="timeline-item">
              <div class="timeline-number">06</div>
              <div class="timeline-body"><div class="month">Месяц 6</div><h3>Сопровождение внедрения.</h3></div>
            </article>
          </div>
          <div class="blue-callout">Каждый модуль завершается рабочим артефактом - документом или инструментом для вашего проекта.</div>
        </div>
      </section>

      <section class="section" id="results">
        <div class="wrap">
          <div class="section-head">
            <div class="eyebrow">Результаты</div>
            <h2>Что вы получаете на выходе?</h2>
          </div>
          <div class="results-table">
            <article class="result-column">
              <h3>Управление маркетингом</h3>
              <ul class="check-list">
                <li>Стратегия под реальный бизнес, а не общая схема из курса.</li>
                <li>Понятные цели, бюджет, KPI и простые метрики.</li>
                <li>Критерии, по которым видно, что маркетинг становится эффективнее.</li>
              </ul>
            </article>
            <article class="result-column">
              <h3>Задачи команде и подрядчикам</h3>
              <ul class="check-list">
                <li>Осмысленные задачи для рекламы, сайта, контента и продаж.</li>
                <li>Единая логика пути клиента вместо разрозненных правок.</li>
                <li>Меньше микроменеджмента и больше управленческой ясности.</li>
              </ul>
            </article>
            <article class="result-column">
              <h3>Накопление решений</h3>
              <ul class="check-list">
                <li>База знаний проекта с выводами, гипотезами и решениями.</li>
                <li>Фиксация того, что сработало, что не сработало и почему.</li>
                <li>Осмысленные задачи для команды и подрядчиков.</li>
              </ul>
            </article>
          </div>
          <div class="overall-result">Главный результат: маркетинг становится обычным управляемым бизнес-процессом, а не набором догадок, вкусовых споров и разовых действий.</div>
        </div>
      </section>

      <section class="section alt" id="conditions">
        <div class="wrap grid conditions-layout">
          <div>
            <div class="section-head">
              <div class="eyebrow">Первый поток</div>
              <h2>Условия первого потока</h2>
            </div>
            <div class="price-grid">
              <article class="price-panel">
                <h3>Первый поток</h3>
                <span class="price">10 000 ₽</span>
                <p>в месяц</p>
              </article>
              <article class="price-panel">
                <h3>Второй поток</h3>
                <span class="price">15 000 ₽</span>
                <p>в месяц</p>
              </article>
            </div>
            <div class="conditions-note">
              Сейчас набираем первую группу. Для первого потока цена - 10 000 ₽ в месяц. Группа номер два будет стоить 15 000 ₽ в месяц.
              <br /><br />
              Первая группа - 10 человек. Старт - май 2026. Длительность - 6 месяцев. Оплата ежемесячная. Участие начинается после короткой встречи-знакомства.
              <br /><br />
              Подробные условия участия и оплаты обсуждаются после встречи.
            </div>
          </div>
          <div class="conditions-visual">
            <img src="assets/gamma-contact-visual.svg" alt="Line-art монеты и график условий первого потока" />
          </div>
        </div>
      </section>

      <section class="section" id="author">
        <div class="wrap grid author-layout">
          <div>
            <div class="eyebrow">Автор</div>
            <h2>Практика, на которой построен курс</h2>
            <p class="lead">
              Родион Бокий. Консультант по маркетинговой стратегии, основатель бренда «Грани Империи». В прошлом - руководитель экспортного направления компании VELES.
            </p>
            <div class="author-facts">
              <div class="fact"><strong>С 2013 года</strong><span>В маркетинге и продажах.</span></div>
              <div class="fact"><strong>12 экспортных рынков</strong></div>
              <div class="fact"><strong>Опыт:</strong><span>B2B, промышленность, потребительские продукты.</span></div>
            </div>
            <div class="author-proof">
              <p>Комбинация двух методик JTBD и CJM здесь - проверенный на практике способ структурировать работу маркетинга.</p>
              <p>Подход проверен в проектах, где нужно было понять клиента, пересобрать маркетинг, структурировать путь к сделке и довести стратегию до практических действий.</p>
            </div>
          </div>
          <div class="author-visual">
            <img src="assets/gamma-author-visual.svg" alt="Line-art группа участников за рабочим столом" />
          </div>
        </div>
      </section>

      <section class="section alt" id="contact">
        <div class="wrap grid contact-layout">
          <div class="contact-card">
            <div class="eyebrow">Заявка</div>
            <h2>Начнем с вашего проекта</h2>
            <p class="lead">
              Оставьте заявку на встречу-знакомство. Расскажете о своей ситуации и задаче, а мы вместе посмотрим, какого прогресса вы хотите достичь и подходит ли вам формат группы.
            </p>
            <div class="contact-lines" aria-label="Контакты">
              <span>Родион Бокий</span>
              <a href="tel:+79130238565">8-913-023-85-65</a>
              <span>Telegram по номеру</span>
              <span>MAX по номеру</span>
            </div>
          </div>

          <form class="lead-form" id="lead-form" action="https://form.live-marketing.ru/lead.php" method="post">
            <div class="field">
              <label for="name">Имя</label>
              <input id="name" name="name" type="text" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="phone">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                placeholder="+7 (900) 000-00-00"
                maxlength="18"
                aria-describedby="phone-hint phone-error"
                required
              />
              <span class="field-hint" id="phone-hint">Российский сотовый номер в формате +7 (900) 000-00-00</span>
              <span class="field-error" id="phone-error" aria-live="polite"></span>
            </div>
            <label class="consent">
              <input type="checkbox" name="consent" required />
              <span>
                Даю согласие на обработку персональных данных на условиях
                <a href="/consent">Согласия на обработку персональных данных</a> и подтверждаю, что ознакомлен(а) с
                <a href="/privacy">Политикой обработки персональных данных</a>.
              </span>
            </label>
            <button class="button-primary" type="submit">Записаться на встречу</button>
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <span>Живой маркетинг: JTBD, CJM и AI</span>
        <a href="/privacy">Политика обработки персональных данных</a>
        <a href="/consent">Согласие на обработку персональных данных</a>
        <a href="#hero">Наверх</a>
      </div>
    </footer>
`;

  document.body.innerHTML = pageHtml;

      const menuButton = document.querySelector(".menu-button");
      const mobileMenu = document.querySelector("#mobile-menu");
      const mobileLinks = mobileMenu.querySelectorAll("a");
      const leadForm = document.querySelector("#lead-form");
      const formStatus = document.querySelector("#form-status");
      const phoneInput = document.querySelector("#phone");
      const phoneError = document.querySelector("#phone-error");

      function closeMenu() {
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
      }

      function openMenu() {
        menuButton.setAttribute("aria-expanded", "true");
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
      }

      function scrollToTarget(targetId) {
        const target = document.querySelector(targetId);
        if (!target) {
          return false;
        }

        const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header")) || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, "", targetId);
        return true;
      }

      menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          const targetId = link.getAttribute("href");
          closeMenu();

          if (!targetId || !targetId.startsWith("#")) {
            return;
          }

          if (scrollToTarget(targetId)) {
            event.preventDefault();
          }
        });
      });

      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        if (mobileMenu.contains(link)) {
          return;
        }

        link.addEventListener("click", (event) => {
          const targetId = link.getAttribute("href");
          if (!targetId || targetId === "#" || !targetId.startsWith("#")) {
            return;
          }

          if (scrollToTarget(targetId)) {
            event.preventDefault();
          }
        });
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      });

      function getRuMobileDigits(value) {
        const digits = value.replace(/\D/g, "");
        if (!digits) {
          return "";
        }

        let localDigits = digits;
        if (localDigits.startsWith("7") || localDigits.startsWith("8")) {
          localDigits = localDigits.slice(1);
        }

        return `7${localDigits.slice(0, 10)}`;
      }

      function formatRuMobilePhone(value) {
        const normalized = getRuMobileDigits(value);
        if (!normalized) {
          return "";
        }

        const localDigits = normalized.slice(1);
        let formatted = "+7";

        if (localDigits.length > 0) {
          formatted += ` (${localDigits.slice(0, 3)}`;
        }

        if (localDigits.length >= 3) {
          formatted += ")";
        }

        if (localDigits.length > 3) {
          formatted += ` ${localDigits.slice(3, 6)}`;
        }

        if (localDigits.length > 6) {
          formatted += `-${localDigits.slice(6, 8)}`;
        }

        if (localDigits.length > 8) {
          formatted += `-${localDigits.slice(8, 10)}`;
        }

        return formatted;
      }

      function getPhoneValidationMessage(value) {
        const normalized = getRuMobileDigits(value);

        if (!normalized) {
          return "Укажите номер телефона.";
        }

        if (normalized.length < 11) {
          return "Введите полный номер: +7 (900) 000-00-00.";
        }

        if (!/^79\d{9}$/.test(normalized)) {
          return "Укажите российский сотовый номер: +7 (9XX) XXX-XX-XX.";
        }

        return "";
      }

      function updatePhoneValidity(showMessage) {
        const message = getPhoneValidationMessage(phoneInput.value);
        const shouldShowMessage = Boolean(message && showMessage);
        phoneInput.setCustomValidity(shouldShowMessage ? message : "");
        phoneInput.classList.toggle("invalid", shouldShowMessage);
        phoneError.textContent = shouldShowMessage ? message : "";
        return !message;
      }

      phoneInput.addEventListener("input", () => {
        phoneInput.value = formatRuMobilePhone(phoneInput.value);
        updatePhoneValidity(phoneInput.classList.contains("invalid"));
      });

      phoneInput.addEventListener("blur", () => {
        updatePhoneValidity(Boolean(phoneInput.value));
      });

      leadForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        formStatus.classList.remove("error");
        updatePhoneValidity(true);

        if (!leadForm.checkValidity()) {
          leadForm.reportValidity();
          return;
        }

        const payload = {
          name: leadForm.elements.name.value.trim(),
          phone: leadForm.elements.phone.value.trim(),
          consent: leadForm.elements.consent.checked ? "1" : ""
        };

        if (window.location.protocol === "file:") {
          formStatus.classList.add("error");
          formStatus.textContent = "Форма готова к подключению: на опубликованном сайте заявка будет отправляться через защищенный обработчик.";
          return;
        }

        formStatus.textContent = "Отправляю заявку...";

        try {
          const response = await fetch(leadForm.action, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            throw new Error("Lead submission failed");
          }

          formStatus.textContent = "Заявка отправлена. Я свяжусь с вами, чтобы договориться о короткой встрече-знакомстве.";
          leadForm.reset();
          phoneInput.classList.remove("invalid");
          phoneInput.setCustomValidity("");
          phoneError.textContent = "";
        } catch (error) {
          formStatus.classList.add("error");
          formStatus.textContent = "Не удалось отправить заявку автоматически. Пожалуйста, позвоните или напишите по номеру 8-913-023-85-65.";
        }
      });

})();
