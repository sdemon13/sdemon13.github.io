(() => {
  'use strict';
  const content = {
    en: {
      title: 'Sergei Butorin — Multilingual Contributor & Maintenance Trainee',
      skip: 'Skip to content', brandSub: 'Personal portfolio', navExpertise: 'Expertise', navAbout: 'My journey', navContact: 'Contact',
      available: 'Open to freelance opportunities', heroRole: 'A practical mind.<br>A multilingual perspective.',
      heroDescription: 'Multilingual contributor and industrial maintenance trainee. I bring a technical mindset, clear communication and care in the details.',
      getInTouch: 'Let’s connect', downloadCV: 'Download CV', location: 'Based in Nice, France', remote: 'Remote ready', artCaption: 'Different skills.<br>One connected perspective.',
      russian: 'Russian', native: 'Native', french: 'French', fluent: 'Fluent', english: 'English', professional: 'Professional working',
      expertiseLabel: 'What I bring', expertiseNote: 'Language. Logic. Reliability.', expertiseTitle: 'Different skills.<br>The same attention to detail.',
      tabLanguage: 'Language & AI', tabTechnical: 'Technical mindset', tabIndependent: 'Independent work',
      aboutLabel: 'The journey so far', aboutTitle: 'Grounded in experience.<br>Always learning.',
      aboutParagraphOne: 'Based in Nice, I’m building a professional path that combines practical technical work with multilingual communication. I currently study industrial maintenance at CAMAS Formation.',
      aboutParagraphTwo: 'Logistics, hospitality assignments and self-employed delivery work have taught me to adapt, follow procedures and communicate clearly. I’m now looking to bring that same care to new opportunities.',
      trainingDate: 'Sep 2026 — Present', trainingTag: 'CURRENT FOCUS', trainingTitle: 'Industrial maintenance training', niceArea: 'Nice area, France',
      trainingDescription: 'Learning diagnostics, repair and preventive maintenance across mechanical, electrical, pneumatic and hydraulic systems.',
      logisticsDate: 'May 2025 — Sep 2026', logisticsTitle: 'Forklift operator',
      logisticsDescription: 'Stock and delivery checks, equipment operation and clear anomaly reporting. Following strict safety and quality procedures.',
      ongoing: 'Ongoing', deliveryTitle: 'Independent delivery courier',
      deliveryDescription: 'Managing my own schedule, planning routes and keeping customer communication clear in a fast-moving environment.',
      temporary: 'Temporary assignments', eventsTitle: 'Event & catering staff', riviera: 'French Riviera',
      eventsDescription: 'Adapting to new teams, locations and instructions while supporting hospitality and event operations.',
      certLabel: 'Certified to work with care.', certDescription: 'CACES R489 · Forklift categories 1, 3 and 5', fullCV: 'View full CV',
      contactLabel: 'The next conversation', contactAvailable: 'Open to opportunities', contactTitle: 'Good work starts<br>with a conversation.',
      contactDescription: 'Have a freelance project or a professional opportunity in mind? I’d be happy to hear about it.',
      emailMe: 'Email Sergei', sayHello: 'SAY HELLO', copyEmail: 'Copy email address', backTop: 'Back to top ↑',
      copied: 'Email address copied', copyFallback: 'Please copy this address: sergeibutorin5@gmail.com', openMenu: 'Open navigation', closeMenu: 'Close navigation',
      panels: {
        language: { kicker: 'WORDS WITH CONTEXT', title: 'Clear language.<br>Considered feedback.', description: 'I’m interested in helping improve AI through careful language review, response comparison and clear written feedback.', bullets: ['Proofreading for grammar, natural phrasing and tone', 'Comparing answers against detailed written criteria', 'Communicating feedback clearly and consistently'], caption: 'AN APPROACH TO REVIEW', steps: ['Read carefully', 'Compare thoughtfully', 'Refine clearly'], foot: 'Context matters as much as the words.' },
        technical: { kicker: 'PRACTICAL UNDERSTANDING', title: 'A technical mindset.<br>A methodical approach.', description: 'My industrial maintenance training is building a practical understanding of how equipment works and how to approach problems systematically.', bullets: ['Mechanical and electrical systems in vocational training', 'Pneumatic, hydraulic and preventive maintenance fundamentals', 'Safety procedures and accurate anomaly reporting'], caption: 'AN APPROACH TO PROBLEMS', steps: ['Observe the system', 'Understand the issue', 'Check the outcome'], foot: 'Careful observation comes before action.' },
        independent: { kicker: 'OWNERSHIP IN THE EVERYDAY', title: 'Adapt to the task.<br>Take responsibility.', description: 'Self-employed delivery work and temporary assignments have made organisation, adaptability and clear communication part of my everyday routine.', bullets: ['Managing my own schedule and priorities', 'Adapting to unfamiliar teams and instructions', 'Communicating clearly with customers and colleagues'], caption: 'AN APPROACH TO WORK', steps: ['Understand the brief', 'Organise the task', 'Follow through'], foot: 'Reliability is built in the everyday details.' }
      }
    },
    fr: {
      title: 'Sergei Butorin — Contributeur multilingue et maintenance industrielle',
      skip: 'Aller au contenu', brandSub: 'Portfolio personnel', navExpertise: 'Compétences', navAbout: 'Mon parcours', navContact: 'Contact',
      available: 'Ouvert aux missions freelance', heroRole: 'Un esprit pratique.<br>Une perspective multilingue.',
      heroDescription: 'Contributeur multilingue en formation en maintenance industrielle. Un esprit technique, une communication claire et le souci du détail.',
      getInTouch: 'Échangeons', downloadCV: 'Télécharger le CV', location: 'Basé à Nice, France', remote: 'Travail à distance', artCaption: 'Des compétences variées.<br>Une perspective qui les relie.',
      russian: 'Russe', native: 'Langue maternelle', french: 'Français', fluent: 'Courant', english: 'Anglais', professional: 'Professionnel',
      expertiseLabel: 'Ce que j’apporte', expertiseNote: 'Langues. Logique. Fiabilité.', expertiseTitle: 'Des compétences variées.<br>La même attention aux détails.',
      tabLanguage: 'Langues et IA', tabTechnical: 'Esprit technique', tabIndependent: 'Autonomie',
      aboutLabel: 'Mon parcours', aboutTitle: 'De l’expérience concrète.<br>Toujours apprendre.',
      aboutParagraphOne: 'Basé à Nice, je construis un parcours professionnel qui associe travail technique et communication multilingue. Je suis actuellement une formation en maintenance industrielle chez CAMAS Formation.',
      aboutParagraphTwo: 'La logistique, les missions dans l’événementiel et la livraison en indépendant m’ont appris à m’adapter, à respecter les procédures et à communiquer clairement. Je souhaite aujourd’hui apporter cette rigueur à de nouvelles missions.',
      trainingDate: 'Sept. 2026 — Aujourd’hui', trainingTag: 'FORMATION EN COURS', trainingTitle: 'Formation en maintenance industrielle', niceArea: 'Région de Nice, France',
      trainingDescription: 'Apprentissage du diagnostic, de la réparation et de la maintenance préventive des systèmes mécaniques, électriques, pneumatiques et hydrauliques.',
      logisticsDate: 'Mai 2025 — Sept. 2026', logisticsTitle: 'Cariste',
      logisticsDescription: 'Contrôle des stocks et des livraisons, conduite d’engins et signalement des anomalies. Respect des procédures de sécurité et de qualité.',
      ongoing: 'En cours', deliveryTitle: 'Livreur indépendant',
      deliveryDescription: 'Gestion autonome des horaires, organisation des trajets et communication avec les clients dans un environnement réactif.',
      temporary: 'Missions ponctuelles', eventsTitle: 'Événementiel et restauration', riviera: 'Côte d’Azur',
      eventsDescription: 'Adaptation à de nouvelles équipes, de nouveaux lieux et de nouvelles consignes lors de missions en restauration et en événementiel.',
      certLabel: 'Une certification pour travailler avec rigueur.', certDescription: 'CACES R489 · Catégories 1, 3 et 5', fullCV: 'Voir le CV complet',
      contactLabel: 'Le prochain échange', contactAvailable: 'Ouvert aux opportunités', contactTitle: 'Un beau projet commence<br>par une conversation.',
      contactDescription: 'Vous avez une mission freelance ou une opportunité professionnelle à proposer ? Je serais ravi d’en discuter.',
      emailMe: 'Écrire à Sergei', sayHello: 'PRENONS CONTACT', copyEmail: 'Copier l’adresse e-mail', backTop: 'Retour en haut ↑',
      copied: 'Adresse e-mail copiée', copyFallback: 'Copiez cette adresse : sergeibutorin5@gmail.com', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
      panels: {
        language: { kicker: 'LES MOTS DANS LEUR CONTEXTE', title: 'Des mots justes.<br>Des retours réfléchis.', description: 'Je souhaite contribuer à l’amélioration de l’IA grâce à la relecture, à la comparaison de réponses et à des commentaires écrits clairs.', bullets: ['Relecture de la grammaire, des formulations et du ton', 'Comparaison de réponses selon des critères écrits précis', 'Commentaires clairs, cohérents et compréhensibles'], caption: 'UNE MÉTHODE DE RELECTURE', steps: ['Lire attentivement', 'Comparer avec soin', 'Améliorer la clarté'], foot: 'Le contexte compte autant que les mots.' },
        technical: { kicker: 'COMPRENDRE CONCRÈTEMENT', title: 'Un esprit technique.<br>Une méthode structurée.', description: 'Ma formation en maintenance industrielle développe ma compréhension pratique des équipements et une approche méthodique des problèmes.', bullets: ['Systèmes mécaniques et électriques en formation professionnelle', 'Bases en pneumatique, hydraulique et maintenance préventive', 'Procédures de sécurité et signalement précis des anomalies'], caption: 'UNE MÉTHODE DE DIAGNOSTIC', steps: ['Observer le système', 'Comprendre le problème', 'Vérifier le résultat'], foot: 'Bien observer avant d’agir.' },
        independent: { kicker: 'RESPONSABLE AU QUOTIDIEN', title: 'S’adapter à la mission.<br>Prendre ses responsabilités.', description: 'La livraison en indépendant et les missions ponctuelles ont fait de l’organisation, de l’adaptabilité et de la communication des habitudes de travail.', bullets: ['Gérer mes horaires et mes priorités en autonomie', 'M’adapter à de nouvelles équipes et consignes', 'Communiquer clairement avec les clients et les collègues'], caption: 'UNE MÉTHODE DE TRAVAIL', steps: ['Comprendre la demande', 'Organiser la mission', 'Aller jusqu’au bout'], foot: 'La fiabilité se construit dans les détails du quotidien.' }
      }
    },
    ru: {
      title: 'Сергей Буторин — Языки и промышленное обслуживание',
      skip: 'Перейти к содержанию', brandSub: 'Личное портфолио', navExpertise: 'Навыки', navAbout: 'Мой путь', navContact: 'Контакты',
      available: 'Открыт к проектной работе', heroRole: 'Практический подход.<br>Три языка. Широкий взгляд.',
      heroDescription: 'Многоязычный специалист, обучаюсь промышленному обслуживанию. Техническое мышление, понятное общение и внимание к деталям.',
      getInTouch: 'Давайте обсудим', downloadCV: 'Скачать резюме', location: 'Ницца, Франция', remote: 'Готов к удалённой работе', artCaption: 'Разные навыки.<br>Единый подход.',
      russian: 'Русский', native: 'Родной', french: 'Французский', fluent: 'Свободно', english: 'Английский', professional: 'Рабочий уровень',
      expertiseLabel: 'Мои навыки', expertiseNote: 'Языки. Логика. Надёжность.', expertiseTitle: 'Разные навыки.<br>Одно внимание к деталям.',
      tabLanguage: 'Языки и ИИ', tabTechnical: 'Технический подход', tabIndependent: 'Самостоятельность',
      aboutLabel: 'Мой профессиональный путь', aboutTitle: 'Практический опыт.<br>Постоянное развитие.',
      aboutParagraphOne: 'Живу в Ницце и развиваюсь в направлении, которое объединяет техническую работу и многоязычное общение. Сейчас прохожу обучение промышленному обслуживанию в CAMAS Formation.',
      aboutParagraphTwo: 'Логистика, работа на мероприятиях и самостоятельная курьерская деятельность научили меня адаптироваться, соблюдать инструкции и понятно общаться. Хочу применять этот подход в новых проектах.',
      trainingDate: 'Сентябрь 2026 — Сейчас', trainingTag: 'ТЕКУЩЕЕ ОБУЧЕНИЕ', trainingTitle: 'Обучение промышленному обслуживанию', niceArea: 'Регион Ниццы, Франция',
      trainingDescription: 'Изучаю диагностику, ремонт и профилактическое обслуживание механических, электрических, пневматических и гидравлических систем.',
      logisticsDate: 'Май 2025 — Сентябрь 2026', logisticsTitle: 'Водитель погрузчика',
      logisticsDescription: 'Проверка запасов и поставок, управление техникой и точное сообщение об отклонениях. Соблюдение требований безопасности и качества.',
      ongoing: 'Продолжаю работать', deliveryTitle: 'Независимый курьер',
      deliveryDescription: 'Самостоятельно планирую график и маршруты, поддерживаю понятное общение с клиентами в условиях быстрых изменений.',
      temporary: 'Временные задания', eventsTitle: 'Мероприятия и кейтеринг', riviera: 'Лазурный Берег',
      eventsDescription: 'Быстро адаптируюсь к новым командам, площадкам и инструкциям на мероприятиях и в сфере общественного питания.',
      certLabel: 'Подтверждённая квалификация.', certDescription: 'CACES R489 · Погрузчики категорий 1, 3 и 5', fullCV: 'Посмотреть резюме',
      contactLabel: 'Начнём с разговора', contactAvailable: 'Открыт к предложениям', contactTitle: 'Хорошая работа<br>начинается с разговора.',
      contactDescription: 'Есть проект или профессиональное предложение? Буду рад узнать подробнее и обсудить сотрудничество.',
      emailMe: 'Написать Сергею', sayHello: 'ДАВАЙТЕ СВЯЖЕМСЯ', copyEmail: 'Скопировать e-mail', backTop: 'Наверх ↑',
      copied: 'Адрес e-mail скопирован', copyFallback: 'Скопируйте адрес: sergeibutorin5@gmail.com', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню',
      panels: {
        language: { kicker: 'ЯЗЫК И КОНТЕКСТ', title: 'Понятный язык.<br>Продуманная оценка.', description: 'Хочу участвовать в улучшении ИИ: проверять тексты, сравнивать ответы и давать понятную письменную обратную связь.', bullets: ['Проверка грамматики, естественности формулировок и тона', 'Сравнение ответов по подробным письменным критериям', 'Понятные и последовательные комментарии'], caption: 'ПОДХОД К ПРОВЕРКЕ', steps: ['Внимательно прочитать', 'Вдумчиво сравнить', 'Улучшить формулировку'], foot: 'Контекст важен не меньше самих слов.' },
        technical: { kicker: 'ПОНИМАТЬ НА ПРАКТИКЕ', title: 'Техническое мышление.<br>Последовательный подход.', description: 'Обучение промышленному обслуживанию помогает мне понимать устройство оборудования и последовательно подходить к поиску неисправностей.', bullets: ['Механические и электрические системы в рамках обучения', 'Основы пневматики, гидравлики и профилактического обслуживания', 'Техника безопасности и точное сообщение об отклонениях'], caption: 'ПОДХОД К ДИАГНОСТИКЕ', steps: ['Изучить систему', 'Понять проблему', 'Проверить результат'], foot: 'Внимательно разобраться, прежде чем действовать.' },
        independent: { kicker: 'ОТВЕТСТВЕННОСТЬ КАЖДЫЙ ДЕНЬ', title: 'Адаптироваться к задаче.<br>Отвечать за свою работу.', description: 'Самостоятельная курьерская работа и временные задания сделали организованность, гибкость и понятное общение частью моего рабочего дня.', bullets: ['Самостоятельное планирование графика и приоритетов', 'Адаптация к новым командам и инструкциям', 'Понятное общение с клиентами и коллегами'], caption: 'ПОДХОД К РАБОТЕ', steps: ['Понять задачу', 'Организовать работу', 'Довести до результата'], foot: 'Надёжность проявляется в повседневных деталях.' }
      }
    }
  };

  let language = 'en';
  let activeTab = 'language';
  let toastTimeout;
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const tabs = [...document.querySelectorAll('[data-tab]')];

  function updatePanel() {
    const data = content[language].panels[activeTab];
    document.getElementById('panel-kicker').textContent = data.kicker;
    document.getElementById('panel-title').innerHTML = data.title;
    document.getElementById('panel-description').textContent = data.description;
    document.getElementById('panel-list').replaceChildren(...data.bullets.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    }));
    document.getElementById('process-caption').textContent = data.caption;
    document.getElementById('process-foot').textContent = data.foot;
    document.getElementById('process-flow').replaceChildren(...data.steps.map((text, i) => {
      const row = document.createElement('div');
      const index = document.createElement('span'); index.textContent = `0${i + 1}`;
      const label = document.createElement('strong'); label.textContent = text;
      const arrow = document.createElement('span'); arrow.textContent = i === 2 ? '↗' : '↓'; arrow.setAttribute('aria-hidden', 'true');
      row.append(index, label, arrow); return row;
    }));
    document.getElementById('expertise-panel').setAttribute('aria-labelledby', `tab-${activeTab}`);
    tabs.forEach(tab => {
      const selected = tab.dataset.tab === activeTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  function setLanguage(next, persist = true) {
    if (!Object.hasOwn(content, next)) return;
    language = next;
    const text = content[language];
    document.documentElement.lang = language;
    document.title = text.title;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (typeof text[key] === 'string') element.innerHTML = text[key];
    });
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? text.closeMenu : text.openMenu);
    updatePanel();
    if (persist) {
      try { localStorage.setItem('sergei-portfolio-language', language); } catch { /* Preference storage is optional. */ }
    }
  }

  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', content[language].openMenu);
  }

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { activeTab = tab.dataset.tab; updatePanel(); });
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activeTab = tabs[next].dataset.tab;
      updatePanel();
      tabs[next].focus();
    });
  });

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? content[language].closeMenu : content[language].openMenu);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  function showToast(message) {
    const toast = document.getElementById('toast');
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3200);
  }
  document.getElementById('copy-email').addEventListener('click', async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText('sergeibutorin5@gmail.com');
      } else {
        const field = document.createElement('textarea');
        field.value = 'sergeibutorin5@gmail.com';
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
        document.body.append(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard not available');
      }
      showToast(content[language].copied);
    } catch {
      showToast(content[language].copyFallback);
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  let initialLanguage = new URLSearchParams(location.search).get('lang');
  if (!initialLanguage) { try { initialLanguage = localStorage.getItem('sergei-portfolio-language'); } catch { /* Use English. */ } }
  setLanguage(initialLanguage || 'en', false);
})();
