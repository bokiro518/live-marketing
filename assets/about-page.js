(() => {
  const pageHtml = String.raw`
<a class="skip-link" href="#about-course-bridge">Перейти к логике курса</a>
  <header class="site-header" id="top">
    <div class="header-inner">
      <a class="brand" href="#about-hero" aria-label="Живой маркетинг">
        <strong>Живой маркетинг</strong>
        <span>JTBD · CJM · AI</span>
      </a>
      <nav class="nav" aria-label="Основная навигация">
        <a href="#about-hero">Практика</a>
        <a href="#about-veles-export">Кейсы</a>
        <a href="https://www.live-marketing.ru/">Курс</a>
        <a href="https://www.live-marketing.ru/">Промо-сайт</a>
        <a href="https://www.live-marketing.ru/#contact">Встреча</a>
      </nav>
      <a class="header-cta" href="https://www.live-marketing.ru/#contact">Записаться на встречу-знакомство</a>
      <button class="menu-button" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-inner">
        <nav aria-label="Мобильная навигация">
          <a href="#about-hero">Практика</a>
          <a href="#about-veles-export">Кейсы</a>
          <a href="https://www.live-marketing.ru/">Курс</a>
          <a href="https://www.live-marketing.ru/">Промо-сайт</a>
          <a href="https://www.live-marketing.ru/#contact">Встреча</a>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <section class="section" id="about-hero" data-screen-name="about-hero">
      <div class="wrap grid hero-grid">
        <figure class="hero-photo">
          <img src="https://live-marketing.vercel.app/assets/about-hero-photo.jpg" alt="Родион Бокий, автор курса Живой маркетинг" />
        </figure>
        <div>
          <span class="screen-code">Практика курса</span>
          <div class="eyebrow">Практика, на которой построен курс</div>
          <h1>Практика, на которой построен курс</h1>
          <div class="copy">
            <p>Меня зовут Родион Бокий. Я консультант по маркетинговой стратегии, основатель бренда «Грани Империи». Раньше я руководил экспортным направлением VELES.</p>
            <p>В маркетинге я с 2013 года. Сначала запустил собственный образовательный центр, потом работал с экспортом, промышленностью, B2B, пищевыми продуктами, потребительскими брендами и сложными продажами. Еще я регулярно преподаю на президентской программе переподготовки управленческих кадров.</p>
          </div>
          <div class="actions">
            <a class="button-primary" href="https://www.live-marketing.ru/#contact">Записаться на встречу-знакомство</a>
            <a class="button-secondary" href="https://www.live-marketing.ru/">Открыть промо-сайт курса</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt" id="about-system" data-screen-name="about-system">
      <div class="wrap grid reverse">
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-system-map.png" alt="Схема превращения хаотичного маркетинга в управляемую систему" />
        </figure>
        <div>
          <span class="screen-code">Система вместо хаоса</span>
          <div class="eyebrow">Система вместо хаоса</div>
          <h2>Почему маркетинг вроде бы есть, а управлять им трудно</h2>
          <div class="copy">
            <p class="case-lead">Маркетинг становится управляемым, когда команда видит не набор действий, а систему причин и решений.</p>
            <ul class="case-steps">
              <li><strong>Проблема.</strong> Реклама запускается, сайт есть, подрядчики работают, но решения все равно принимаются интуитивно.</li>
              <li><strong>Разбор.</strong> Я раскладываю систему на клиента, ценность продукта, сомнения, путь к заявке, работу сайта и продавца.</li>
              <li><strong>Результат.</strong> Команда получает конкретные решения: что менять, что объяснять, какие гипотезы проверять и что измерять.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о подходе к системе маркетинга</summary>
              <p>Моя работа обычно начинается с вопроса: почему маркетинг вроде бы есть, а управлять им трудно? Реклама запускается, сайт есть, подрядчики что-то делают, бюджеты сливаются, но все равно нет понятной системы: действия хаотичные, решения принимаются интуитивно, а не на основе данных.</p>
              <p>Я помогаю разложить это на части: кто клиент, в чем клиент видит ценность продукта, где он сомневается, почему не оставляет заявку, что должен объяснять сайт, что должен делать продавец и какие действия правда стоит измерять.</p>
              <p>Мне важно, чтобы результатом моей работы стали конкретные решения, основанные на объективных исследованиях и фактах: что менять в продукте, как объяснять ценность, какие материалы нужны продажам, какие гипотезы проверять и что команда должна делать завтра.</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about-veles-export" data-screen-name="about-veles-export">
      <div class="wrap grid">
        <div>
          <span class="screen-code">VELES · экспорт</span>
          <div class="eyebrow">VELES · экспорт</div>
          <h2>Экспортные рынки и полный коммерческий процесс</h2>
          <div class="copy">
            <p class="case-lead">Экспорт оказался не рекламной задачей, а полным коммерческим процессом от выбора рынка до сервиса.</p>
            <ul class="case-steps">
              <li><strong>Зона ответственности.</strong> Территория вне России и Казахстана: рынок, конкуренты, позиционирование, продажи и дилеры.</li>
              <li><strong>Что собирали.</strong> Маркетинг, дилерскую сеть, постпродажное обслуживание и логистику как одну связанную систему.</li>
              <li><strong>Итог.</strong> За время работы бренд вышел на 12 экспортных рынков.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о подходе к коммерческому процессу</summary>
              <p>Эта логика проходила через разные проекты: экспорт, промышленность, пищевые продукты, потребительские бренды и B2B-продажи.</p>
              <p>В VELES я отвечал за работу компании на внешних рынках. В моей зоне ответственности была территория вне России и Казахстана. Я отвечал за весь процесс: от выбора внешнего рынка, анализа рынка и конкурентов, разработки позиционирования до маркетинга, продаж, выстраивания дилерской сети, постпродажного обслуживания и логистики. За время этой работы мы вывели бренд на 12 экспортных рынков.</p>
            </details>
          </div>
          <div class="fact-strip" aria-label="Ключевые факты">
            <div class="fact"><strong>12</strong><span>экспортных рынков</span></div>
            <div class="fact"><strong>VELES</strong><span>территория вне России и Казахстана</span></div>
            <div class="fact"><strong>весь процесс</strong><span>рынок, позиционирование, продажи, дилеры, сервис, логистика</span></div>
          </div>
        </div>
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-veles-export-map.png" alt="Карта экспортных рынков VELES и этапов коммерческого процесса" />
        </figure>
      </div>
    </section>

    <section class="section alt" id="about-veles-germany" data-screen-name="about-veles-germany">
      <div class="wrap grid reverse">
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-veles-germany-jtbd.png" alt="Схема переосмысления продажи пружинной бороны VELES на рынке Германии" />
        </figure>
        <div>
          <span class="screen-code">VELES · Германия</span>
          <div class="eyebrow">VELES · Германия · JTBD</div>
          <h2>VELES и рынок Германии</h2>
          <div class="copy">
            <p class="case-lead">Один разговор с клиентом изменил всю логику продажи.</p>
            <ul class="case-steps">
              <li><strong>Что не работало.</strong> Мы продавали немецким фермерам так же, как российским: выставки, холодные звонки, привычные аргументы.</li>
              <li><strong>Что выяснили.</strong> JTBD-интервью показало: немецкие фермеры покупают борону под другие задачи и оценивают ее по другим критериям.</li>
              <li><strong>Что изменили.</strong> Пересобрали аргументацию и рекламу под реальную задачу клиента.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>Один из важных кейсов связан с выходом пружинной бороны VELES на рынок Германии.</p>
              <p>Сначала мы пытались продавать ее немецким фермерам так же, как в России. Логика казалась разумной: технология выращивания похожая, машина та же, значит и задачи примерно те же. Но это не сработало. Мы тратили деньги на выставки, холодные звонки и привычные каналы продаж, а результата не получали.</p>
              <p>Перелом случился после глубинного интервью по Jobs To Be Done. Оказалось, что немецкие фермеры используют борону иначе. Они покупают ее под другие задачи и оценивают по другим критериям.</p>
              <p>Когда мы перестроили аргументацию под эти задачи, стало видно, что у VELES сильное предложение по цене, качеству и технологическим параметрам.</p>
              <p>Я пересобрал наш маркетинг под эти задачи и запустил рекламу. И мы сразу получили результат: бюджет около 30 000 рублей за месяц дал продажи примерно на 300 000 евро. После этого пошли рекомендации и входящие обращения.</p>
            </details>
          </div>
          <div class="result-box">
            <div class="result-pill"><strong>30 000 рублей</strong><span>рекламного бюджета за месяц</span></div>
            <div class="result-pill"><strong>300 000 евро</strong><span>примерный объем продаж</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section compact" aria-label="Переход к курсу">
      <div class="wrap">
        <div class="mid-cta">
          <p>Если вам важно понять не только мой опыт, но и сам формат практикума, можно открыть основную страницу курса.</p>
          <div class="actions">
            <a class="button-primary" href="https://www.live-marketing.ru/">На страницу курса</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about-industrial" data-screen-name="about-industrial">
      <div class="wrap grid">
        <div>
          <span class="screen-code">Промышленный проект</span>
          <div class="eyebrow">Промышленный проект · NDA</div>
          <h2>Промышленный проект</h2>
          <div class="copy">
            <p class="case-lead">Задача была не “сделать рекламу”, а пересобрать маркетинг промышленной группы как систему роста.</p>
            <ul class="case-steps">
              <li><strong>Что делали.</strong> Стратегия, команда, анализ продуктового портфеля, материалы для продаж и новое позиционирование.</li>
              <li><strong>Что получила продажа.</strong> Заявки с потенциальным объемом 645 млн рублей. Это не выручка, а объем возможных сделок, переданных в работу.</li>
              <li><strong>Что запустили дальше.</strong> R&amp;D-команду и новый продукт под рынок с оценочным объемом 11 млрд рублей в год.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>В одном промышленном проекте я руководил пересборкой маркетинга группы компаний в сфере техники и оборудования. Название компании не могу раскрыть из-за требований NDA, но могу кратко рассказать о задаче и результате.</p>
              <p>Я руководил маркетинговой стратегией, формированием команды, анализом продуктового портфеля, подготовкой материалов для продаж и разработкой нового позиционирования группы компаний.</p>
              <p>Результат: маркетинг передал в отдел продаж заявки с потенциальным объемом 645 млн рублей. Это не выручка, а объем заявок и возможных сделок, переданных в продажи.</p>
              <p>Еще в этом проекте мы собрали R&amp;D-команду и запустили разработку нового продукта под рынок с оценочным объемом 11 млрд рублей в год.</p>
            </details>
          </div>
          <div class="result-box">
            <div class="result-pill"><strong>645 млн рублей</strong><span>объем заявок, переданных в продажи</span></div>
            <div class="result-pill"><strong>11 млрд рублей в год</strong><span>оценочный объем рынка для нового продукта</span></div>
          </div>
        </div>
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-industrial-645m.png" alt="Промышленный маркетинговый проект с заявками на 645 млн рублей и запуском R&amp;D-команды" />
        </figure>
      </div>
    </section>

    <section class="section alt" id="about-food-growth" data-screen-name="about-food-growth">
      <div class="wrap grid reverse">
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-food-growth-options.png" alt="Стратегическая развилка пищевого производства между ростом в соседние ниши и экспортом" />
        </figure>
        <div>
          <span class="screen-code">Потолок роста</span>
          <div class="eyebrow">Пищевое производство · стратегия роста</div>
          <h2>Пищевое производство: потолок роста</h2>
          <div class="copy">
            <p class="case-lead">Когда рынок кажется освоенным, рост часто находится не в рекламе, а в выборе новой стратегической траектории.</p>
            <ul class="case-steps">
              <li><strong>Ситуация.</strong> Крупные покупатели уже были клиентами компании, а бизнес хотел расти дальше.</li>
              <li><strong>Первый вариант.</strong> Идти в соседние ниши на том же рынке.</li>
              <li><strong>Вывод анализа.</strong> С тем же продуктом можно выходить на экспорт; приоритетным рынком стал Китай.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>В проекте для пищевого производства из крупного регионального холдинга я руководил маркетингом. Стояла задача провести стратегический анализ положения предприятия на рынке и найти новые источники роста.</p>
              <p>Компания столкнулась с «потолком роста»: ее уже хорошо знали на рынке. Все крупные покупатели уже были клиентами компании. При этом у бизнеса были ресурсы и желание расти дальше.</p>
              <p>На поверхности лежал рост «вбок»: идти в соседние ниши на том же рынке. Моя задача состояла в том, чтобы выбрать соседнюю нишу для развития компании. Но анализ показал другой путь: с тем же продуктом можно выходить на экспорт. Приоритетным рынком мы выбрали Китай.</p>
            </details>
          </div>
          <div class="case-kicker"><span>соседние ниши</span><span>экспорт</span><span>Китай</span><span>стратегические альтернативы</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="about-china" data-screen-name="about-china">
      <div class="wrap grid">
        <div>
          <span class="screen-code">Китай</span>
          <div class="eyebrow">Пищевое производство · Китай</div>
          <h2>Пищевое производство и Китай</h2>
          <div class="copy">
            <p class="case-lead">Выход на Китай требовал не “перевести сайт”, а собрать маршрут входа на рынок.</p>
            <ul class="case-steps">
              <li><strong>Маршрут.</strong> Стратегия выхода, логистика и разрешительные документы для работы на рынке Китая.</li>
              <li><strong>Первые контакты.</strong> Участие в крупнейшей отраслевой выставке Юго-Восточной Азии и первые партнеры.</li>
              <li><strong>Параллельная работа.</strong> Ассортимент, новые продукты, исследования потребителей и конкурентов.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>Я разработал стратегию выхода на китайский рынок, проработал логистику, организовал участие в крупнейшей отраслевой выставке Юго-Восточной Азии, где появились первые партнеры, и получил все разрешительные документы для работы на рынке Китая.</p>
              <p>Параллельно мы работали с ассортиментом, новыми продуктами, исследованиями потребителей и конкурентов.</p>
            </details>
          </div>
          <div class="case-kicker"><span>логистика</span><span>выставка</span><span>первые партнеры</span><span>разрешительные документы</span></div>
        </div>
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-food-china-route.png" alt="Стратегия выхода пищевого производства на рынок Китая" />
        </figure>
      </div>
    </section>

    <section class="section alt" id="about-terraful" data-screen-name="about-terraful">
      <div class="wrap grid reverse">
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-terraful-germany.png" alt="Проект Terraful GmbH с брендом БАДов для немецкого рынка и удаленным отделом маркетинга" />
        </figure>
        <div>
          <span class="screen-code">Terraful GmbH</span>
          <div class="eyebrow">Terraful GmbH · бренд и команда</div>
          <h2>Terraful GmbH</h2>
          <div class="copy">
            <p class="case-lead">Бренд для Германии собирался из России: продукт, сайт, логистика и команда должны были работать как единая модель.</p>
            <ul class="case-steps">
              <li><strong>Задача.</strong> Создать с нуля собственную торговую марку БАДов для рынка Германии.</li>
              <li><strong>Что собрали.</strong> Продуктовую линейку, бренд, стратегию выхода, логистические маршруты и сайт на немецком языке.</li>
              <li><strong>Команда.</strong> Удаленный отдел маркетинга находился в Алтайском крае, но работал на немецкий рынок.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>Нужно было «с нуля» создать бренд собственной торговой марки для продажи БАДов российского производства на рынке Германии.</p>
              <p>Мы разработали продуктовую линейку, бренд, стратегию выхода, логистические маршруты и сайт на немецком языке.</p>
              <p>Еще мы создали удаленный отдел маркетинга. Команда находилась в Алтайском крае, но работала на немецкий рынок. Я руководил этим отделом.</p>
              <p>Для проекта это было важным преимуществом. Держать маркетинговую команду в Германии было бы намного дороже. Удаленная модель позволяла работать с немецким рынком и держать расходы ниже. Проект был собран как рабочая модель, пошли первые продажи, но проект остановился после начала СВО.</p>
            </details>
          </div>
          <div class="case-kicker"><span>бренд</span><span>БАДы</span><span>сайт на немецком языке</span><span>удаленная команда</span><span>СВО</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="about-altai-masters" data-screen-name="about-altai-masters">
      <div class="wrap grid">
        <div>
          <span class="screen-code">Алтайские Мастера</span>
          <div class="eyebrow">Алтайские Мастера · JTBD</div>
          <h2>Алтайские Мастера</h2>
          <div class="copy">
            <p class="case-lead">Разные компании группы оказались частями одной большой работы клиента.</p>
            <ul class="case-steps">
              <li><strong>Вопрос.</strong> Продвигать каждую компанию отдельно или объединить их под зонтичным брендом.</li>
              <li><strong>Что показал JTBD.</strong> Бизнесы разные, но закрывают одну большую задачу клиента разными способами.</li>
              <li><strong>Решение.</strong> Зонтичный бренд дал конкурентное преимущество там, где рынок был раздроблен.</li>
            </ul>
            <details class="case-details">
              <summary>Подробнее о кейсе</summary>
              <p>В «Алтайских Мастерах» нужно было ответить на стратегический вопрос: объединять несколько компаний группы под один зонтичный бренд или продвигать каждую отдельно.</p>
              <p>В группу входили разные юридические лица, специализирующиеся на строительстве из дерева и производстве деревянных конструкций. На первый взгляд это были разные бизнесы. Но исследование по Jobs To Be Done показало, что они закрывают одну большую работу клиента, просто разными способами.</p>
              <p>Потом мы посмотрели на конкурентов. На рынке почти не было игрока, который закрывал бы эту работу целиком. Если продвигать каждую компанию отдельно, они оставались бы похожими на остальных. Зонтичный бренд позволил сформировать конкурентное преимущество и выделиться на рынке.</p>
              <p>На этой основе я разработал стратегию развития добавочной ценности бренда, фактическую карту пути клиента и долгосрочную стратегию маркетинга. Позже в этой логике провели ребрендинг. Компания использует стратегический документ в работе.</p>
            </details>
          </div>
        </div>
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-altai-masters-umbrella-brand.png" alt="Зонтичный бренд Алтайских Мастеров как способ закрыть одну большую работу клиента разными способами" />
        </figure>
      </div>
    </section>

    <section class="section alt" id="about-course-bridge" data-screen-name="about-course-bridge">
      <div class="wrap grid reverse">
        <figure class="visual-card">
          <img src="https://live-marketing.vercel.app/assets/about-course-logic.png" alt="Логика курса Живой маркетинг от рынка и задачи клиента до действий команды" />
        </figure>
        <div>
          <span class="screen-code">Основа курса</span>
          <div class="eyebrow">Логика курса</div>
          <h2>Почему это стало основой курса</h2>
          <div class="copy">
            <p class="case-lead">Все кейсы разные, но рабочая логика в них одна.</p>
            <ul class="case-steps">
              <li><strong>Сначала.</strong> Понять рынок и реальную задачу клиента.</li>
              <li><strong>Потом.</strong> Собрать продуктовую ценность, путь к сделке и материалы для продаж.</li>
              <li><strong>В итоге.</strong> Связать команду и метрики так, чтобы маркетинг стал измеримым и управляемым.</li>
            </ul>
            <p>На этой практике и построен курс «Живой маркетинг».</p>
            <details class="case-details">
              <summary>Подробнее о логике курса</summary>
              <p>Все эти проекты разные, но логика в них одна: сначала нужно понять рынок и задачу клиента, потом собрать продуктовую ценность, путь к сделке, материалы для продаж, команду и систему метрик, чтобы процесс стал измеримым и управляемым.</p>
              <p>На этой практике и построен курс «Живой маркетинг».</p>
            </details>
          </div>
          <div class="actions">
            <a class="button-primary" href="https://www.live-marketing.ru/#contact">Записаться на встречу-знакомство</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section compact" id="final-contact">
      <div class="wrap">
        <div class="final-cta">
          <div class="eyebrow">Следующий шаг</div>
          <h2>Начнем с вашего проекта</h2>
          <p class="lead">Оставьте заявку на встречу-знакомство. Расскажете о своей ситуации и задаче, а мы вместе посмотрим, какого прогресса вы хотите достичь и подходит ли вам формат группы.</p>
          <div class="actions">
            <a class="button-primary" href="https://www.live-marketing.ru/#contact">Записаться на встречу-знакомство</a>
            <a class="button-secondary" href="https://www.live-marketing.ru/">Вернуться на страницу курса</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap">
      <span>Живой маркетинг: JTBD, CJM и AI</span>
      <a href="#top">Наверх</a>
    </div>
  </footer>
`;

  document.body.innerHTML = pageHtml;

      const menuButton = document.querySelector(".menu-button");
      const mobileMenu = document.querySelector("#mobile-menu");
      function closeMenu() {
        if (!menuButton || !mobileMenu) return;
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
      }
      if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
          const open = menuButton.getAttribute("aria-expanded") === "true";
          menuButton.setAttribute("aria-expanded", String(!open));
          mobileMenu.classList.toggle("open", !open);
          mobileMenu.setAttribute("aria-hidden", String(open));
          document.body.classList.toggle("menu-open", !open);
        });
        mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") closeMenu();
        });
      }
})();
