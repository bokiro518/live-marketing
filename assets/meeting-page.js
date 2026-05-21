(() => {
  const pageHtml = String.raw`
<a class="skip-link" href="#meeting-purpose">Перейти к содержанию</a>
  <header class="site-header" id="top">
    <div class="header-inner">
      <a class="brand" href="https://www.live-marketing.ru/" aria-label="Живой маркетинг">
        <strong>Живой маркетинг</strong>
        <span>JTBD · CJM · AI</span>
      </a>
      <nav class="nav" aria-label="Основная навигация">
        <a href="https://www.live-marketing.ru/">Курс</a>
        <a href="https://www.live-marketing.ru/about">Обо мне</a>
        <a href="#meeting-purpose">Встреча</a>
      </nav>
      <a class="header-cta" href="https://www.live-marketing.ru/#contact">Записаться на встречу</a>
      <button class="menu-button" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-inner">
        <nav aria-label="Мобильная навигация">
          <a href="https://www.live-marketing.ru/">Курс</a>
          <a href="https://www.live-marketing.ru/about">Обо мне</a>
          <a href="#meeting-purpose">Встреча</a>
          <a href="https://www.live-marketing.ru/#contact">Записаться на встречу</a>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <section class="section" id="meeting-purpose" data-block-name="meeting-purpose">
      <div class="wrap grid">
        <div>
          <span class="block-label">Зачем нужна встреча</span>
          <div class="eyebrow">Без давления и быстрых решений</div>
          <h1>Сначала встречаемся, потом решаем про участие</h1>
          <p class="lead">Встреча нужна, чтобы спокойно понять вашу ситуацию, посмотреть на текущий маркетинг и решить, подходит ли вам формат практикума.</p>
          <div class="actions">
            <a class="button-primary" href="https://www.live-marketing.ru/#contact">Записаться на встречу</a>
            <a class="button-secondary" href="https://www.live-marketing.ru/">Посмотреть курс</a>
          </div>
          <p class="microcopy">Онлайн или офлайн — как вам удобнее.</p>
          <div class="copy">
            <p>Перед участием в «Живом маркетинге» мы сначала встречаемся. Это не продажный созвон и не разговор в духе «решайте прямо сейчас». Встреча нужна, чтобы спокойно понять вашу ситуацию и проверить, подходит ли вам формат практикума.</p>
            <p>«Живой маркетинг» — это 6 месяцев работы на реальном проекте: задания, разборы, малая группа и персональная обратная связь. Такой формат лучше не покупать сгоряча. Сначала стоит понять, что сейчас происходит с маркетингом: где уходят деньги, где теряются заявки, что не получается у команды или подрядчиков, какой участок требует внимания первым.</p>
          </div>
          <div class="working-map" aria-label="Рабочая схема встречи">
            <div class="map-cell"><span>01</span><strong>Ситуация</strong></div>
            <div class="map-cell"><span>02</span><strong>Что уже делаем</strong></div>
            <div class="map-cell"><span>03</span><strong>Где разрыв</strong></div>
            <div class="map-cell"><span>04</span><strong>Первый шаг</strong></div>
          </div>
        </div>
        <figure class="visual-panel">
          <img src="https://live-marketing.vercel.app/assets/meeting-purpose-visual.png" alt="Спокойная встреча для разбора маркетинговой ситуации перед участием в Живом маркетинге" />
        </figure>
      </div>
    </section>

    <section class="section alt" id="meeting-process" data-block-name="meeting-process">
      <div class="wrap grid reverse">
        <figure class="visual-panel">
          <img src="https://live-marketing.vercel.app/assets/meeting-process-map.png" alt="Схема прохождения встречи-знакомства перед участием в Живом маркетинге" />
        </figure>
        <div>
          <span class="block-label">Как пройдет встреча</span>
          <div class="eyebrow">Нормальный деловой разговор</div>
          <h2>Смотрим задачу и честно решаем, есть ли смысл идти в группу</h2>
          <div class="copy">
            <p>Встреча может пройти онлайн или офлайн — как вам удобнее. Вы расскажете о проекте, текущем маркетинге, команде, подрядчиках и том, что сейчас больше всего мешает двигаться.</p>
            <p>Дальше мы вместе посмотрим, где находится главный разрыв: в понимании клиента, пути к заявке, оффере, рекламе, сайте, продажах, бюджете или показателях. Я объясню, как такая задача может разбираться внутри курса, и мы честно решим, есть ли смысл идти в группу.</p>
          </div>
          <div class="step-list" aria-label="Пять шагов встречи">
            <div class="step-item"><span class="step-number">01</span><span class="step-text">Заявка</span></div>
            <div class="step-item"><span class="step-number">02</span><span class="step-text">Встреча</span></div>
            <div class="step-item"><span class="step-number">03</span><span class="step-text">Разбор задачи</span></div>
            <div class="step-item"><span class="step-number">04</span><span class="step-text">Подходит или не подходит</span></div>
            <div class="step-item"><span class="step-number">05</span><span class="step-text">Следующий шаг</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section result-section" id="meeting-result" data-block-name="meeting-result">
      <div class="wrap grid">
        <div>
          <span class="block-label">Что будет после встречи</span>
          <div class="eyebrow">Результат без обещаний</div>
          <h2>После разговора задача должна стать яснее</h2>
          <div class="copy">
            <p>После встречи вам станет понятнее, с какого участка начинать. Если формат подходит — обсудим участие в группе. Если нет — вы все равно уйдете с более ясной формулировкой своей задачи.</p>
          </div>
          <div class="result-grid" aria-label="Что человек получает после встречи">
            <div class="result-card"><span>Результат 01</span><strong>Понятная задача</strong></div>
            <div class="result-card"><span>Результат 02</span><strong>Первый участок для проверки</strong></div>
            <div class="result-card"><span>Результат 03</span><strong>Решение по участию</strong></div>
          </div>
          <div class="final-cta" aria-label="Финальный призыв">
            <h2>Разберем вашу ситуацию на встрече</h2>
            <p>Оставьте заявку. Договоримся об удобном формате — онлайн или офлайн — и спокойно посмотрим, подходит ли вам «Живой маркетинг».</p>
            <div class="actions">
              <a class="button-primary" href="https://www.live-marketing.ru/#contact">Записаться на встречу</a>
              <a class="button-secondary" href="https://www.live-marketing.ru/">Вернуться на страницу курса</a>
            </div>
          </div>
        </div>
        <figure class="visual-panel">
          <img src="https://live-marketing.vercel.app/assets/meeting-result-card.png" alt="Что человек получает после встречи-знакомства" />
        </figure>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap">
      <span>Живой маркетинг · JTBD · CJM · AI</span>
      <a href="#top">Наверх</a>
    </div>
  </footer>
  `;

  document.body.innerHTML = pageHtml;

  const button = document.querySelector(".menu-button");
  const menu = document.querySelector("#mobile-menu");
  const links = menu ? Array.from(menu.querySelectorAll("a")) : [];

  function setMenu(open) {
    if (!button || !menu) return;
    button.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  }

  if (button && menu) {
    button.addEventListener("click", () => {
      setMenu(button.getAttribute("aria-expanded") !== "true");
    });
    links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });
  }
})();
