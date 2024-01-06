  /* CONFIGURATION STARTS HERE */
  
  /* Step 1: enter your domain name like fruitionsite.com */
  const MY_DOMAIN = 'fdd.davidshekunts.ru';
  
  /*
   * Step 2: enter your URL slug to page ID mapping
   * The key on the left is the slug (without the slash)
   * The value on the right is the Notion page ID
   */
  const SLUG_TO_PAGE = {
    '': '8375ba5873e24b099f3c3b5b31889b93',
    'introduction': 'c506a4ca0ef940438c9c140729dedff4',
    'usefull-links': 'a3f46c6483184ed580643fd414c89b58',
    'announcements': '7fad0a963a31475ab8a33598c1efe684',
    'dictionary': 'd32daa38bc8041b18ef2547e92361892',
    'what-you-will-learn': 'fd238fa697b641e185a781e878571c35',
    'fp-vs-oop': 'aac139f3ac7a437f8854a80bae39188c',
    'fp-vs-oop/encapsulation-vs-data-behaviour-separation': '005a6a4404d340138ad1538eb4668fdf',
    'fp-vs-oop/composition-over-inheritance': 'ccc2d96d59ce418e82262e0ad667ddfb',
    'fp-vs-oop/polymorphism-oop-and-fp': '363a8808be5c42a6ac1dbd70f048f319',
    'fp-vs-oop/abstraction': '5ff5ed05df6f4e75b4ded9e7439a5378',
    'fp-vs-oop/oop-main-problem-and-advantage': 'abae4c50e231470ba017a45c3e7ffb02',
    'fp-vs-oop/oop-vs-fp-conclusions': '97400e5c82de4f7ea39888d9a90629c0',
    'cqs-cqrs-vs-crud-api': '7f51bced7d244958b4c8d454c60bce45',
    'crud-mvc-to-cqrs-eda-module-monolith': 'a281996b58ad4f79af8b12f62d97e362',
    'eda': '676cec023e4a44a1ab9902b57b7a4ca2',
    'tdd-bdd-ut-int': '163d742f10e0429c9db408f1818dac99',
    'first-conclusions': '698e52a61e7e47e6bf2ac6fc75dcdd15',
    'microservices': '054c0be89e1d434d9037d5a6d275cc46',
    'design': 'f48f7c002aaa41369b3e756bc3a2ca5b',
    'advanced-node-js-typescript-course': 'c9ad1e164763442dbf157597e3b96c56'
  };
  
  /* Step 3: enter your page title and description for SEO purposes */
  const PAGE_TITLE = 'Fatigue Driven Development (FDD) – когда устал от Монолита на MVC / REST / CRUD / Clean Architecture / DDD';
  const PAGE_DESCRIPTION = 'Когда ты устал от ООП и Монолитов на MVC / REST-API / CRUD / Clean Architecture / DDD и пора бы 💥бануть 12-ти факторный Функциональный Модульный Монолит на CQRS с Event Driven Architecture.';

  const PAGE_ID_TO_TITLE_AND_DESCRIPTION = {
    'c9ad1e164763442dbf157597e3b96c56': {
      'title': 'Курс Advanced Node.js & TypeScript',
      'description': 'Как создавать крупные масштабируемые приложения на Node.js и TypeScript'
    },
    'd32daa38bc8041b18ef2547e92361892': {
      'title': 'Словарь по FDD',
      'description': 'Все самые важные термины, которые вам нужны при изучении FDD'
    },
    'fd238fa697b641e185a781e878571c35': {
        'title': 'Чему вас научит FDD',
        'description': 'В книге затронуто ооочень много концепций. В данной главе я хочу вывести эссенцию конкретных техник, которым вы научитесь, прочитав ее.'
    },
    '7f51bced7d244958b4c8d454c60bce45': {
      'title': 'CQS/CQRS vs CRUD API',
      'description': 'CQS и CQRS – принципы, которые позволят вам улучшить качество вашего кода и сделать систему гораздо более масштабируемой.'
    },
    'a281996b58ad4f79af8b12f62d97e362': {
      'title': 'MVC CRUD Монолит vs 12-ти факторный Функциональные Модульный Монолит c CQRS',
      'description': 'Сначала я покажу вам стандартный CRUD REST API MVC Монолит и постепенно, задача за задачей, мы будем трансформировать его в конфетку.'
    },
    '676cec023e4a44a1ab9902b57b7a4ca2': {
      'title': 'Event Driven Architecture (EDA)',
      'description': 'Реализуем систему, масштабирующуюся засчет Событий.'
    },
    '163d742f10e0429c9db408f1818dac99': {
      'title': 'TDD, BDD, UT & InT',
      'description': 'Тестирования бывают разные. Но у них есть одна общая черта – если не подготовиться, они будут очень болезненные.'
    },
    '698e52a61e7e47e6bf2ac6fc75dcdd15': {
      'title': 'Промежуточные итоги FDD',
      'description': 'Подведем итоги по всему написанному выше и сформулируем набор правил.'
    },
    '054c0be89e1d434d9037d5a6d275cc46': {
      'title': 'Микросервисы',
      'description': 'Создадим первые микросервисы и научим их общаться друг с другом напрямую и через систему событий (EDA).'
    },
    'f48f7c002aaa41369b3e756bc3a2ca5b': {
      'title': 'Проектирование FDD',
      'description': 'До того, как вы садитесь писать код, стоит впринципе подумать о грядущей системе.'
    },
    'aac139f3ac7a437f8854a80bae39188c': {
      'title': 'Функциональное (ФП) vs Объектно Ориентированное Программирование (ООП)',
      'description': 'В этой серии статей я хочу рассказать вам, почему я считаю ФП гораздо более простой и чаще применимой парадигмой и как ее правильно реализовать на JS / TS.'
    },
    '005a6a4404d340138ad1538eb4668fdf': {
      'title': 'Инкапсуляция vs Разделение Данных и Поведения',
      'description': 'Как ООП Инкапсуляция усложняет ваши приложения и как от нее избавиться.'
    },
    'ccc2d96d59ce418e82262e0ad667ddfb': {
      'title': 'Композиция над Наследованием в ООП и ФП',
      'description': 'Композиция, как альтернатива Наследованию как в ООП, так и в ФП.'
    },
    '363a8808be5c42a6ac1dbd70f048f319': {
      'title': 'Полиморфизм в ООП и ФП',
      'description': 'Как правильно реализовать Полиморфизм в ООП и ФП'
    },
    '5ff5ed05df6f4e75b4ded9e7439a5378': {
        'title': 'ООП Абстракция',
        'description': 'Короче... я бы мог попробовать сейчас разжевать что такое ООП-шная Абстракция, как она использует Наследование, чем отличается от Инкапсуляции... Но не буду'
    },
    'abae4c50e231470ba017a45c3e7ffb02': {
      'title': 'Основная проблема ООП и как ее решают React, Actor model и... Erlang?',
      'description': 'Каждую из моих претензий можно вполне себе парировать, потому что реальная "проблема" ООП не в самом нем или столпах а в...'
    },
    '97400e5c82de4f7ea39888d9a90629c0': {
      'title': 'Промежуточные итоги ООП vs ПП... ой, то есть ФП... а точнее ФОП... упс...',
      'description': 'Итак, все столпы ООП были разрушены и пора подвести итоги победы функционального подхода.'
    }
  }
  
  /* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
  const GOOGLE_FONT = 'Inter';
  
  /* Step 5: enter any custom scripts you'd like */
  const CUSTOM_SCRIPT = `
  <style>
  .notion-cursor-listener > div > div {
    box-shadow: rgb(0 0 0 / 18%) 0px 4px 8px -2px;
    padding: 5px 0;
  }
  .ds-notion-button {
    user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 3px;
    height: 32px;
    padding: 0px 8px;
    font-size: 14px;
    line-height: 1.2;
    border: 1px solid rgba(255, 255, 255, 0.14);
    margin-right: 8px;
  }
  h1 {
    font-size: inherit;
    margin: 0;
  }
  /* div[placeholder="Heading 1"] {
      display: none;
  }
  div[placeholder="Heading 2"] {
      font-size: 2rem;
  }
  div[placeholder="Heading 3"] {
    font-size: 1.5rem;
  } * /
  </style>
  <script>
    function __initds() {
      var old_element = document.querySelector("div.notion-topbar > div > div:nth-child(3)");
      const h1Block = document.querySelector(".notion-scroller .notion-page-block")
      if (!old_element || !h1Block) {
        return setTimeout(__initds, 1000)
      }
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
      new_element.addEventListener("click", () => {
          let slug = SLUG_TO_PAGE[getPage().replace("/", "")]
          if (!slug) slug = getPage()
          window.open("https://www.notion.so/itkachalka/" + slug, '_blank')
      })
      new_element.innerHTML = new_element.innerHTML.replace("Comment", "Комментировать")
      const search_element = document.querySelector("div.notion-topbar > div > div:nth-child(4)");
      search_element.innerHTML = search_element.innerHTML.replace("Search", "Поиск")
      h1Block.innerHTML = h1Block.innerHTML.replace("div", "h1")
    }
    __initds()
  </script>
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" defer>
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(86078440, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
    });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/86078440" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script defer src="https://www.googletagmanager.com/gtag/js?id=G-FFSV8DP4H7"></script>
  <script defer>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-FFSV8DP4H7');
  </script>
  <!-- /Global site tag (gtag.js) - Google Analytics -->
  `;
  
  /* CONFIGURATION ENDS HERE */
  
  const PAGE_TO_SLUG = {};
  const slugs = [];
  const pages = [];
  Object.keys(SLUG_TO_PAGE).forEach(slug => {
    const page = SLUG_TO_PAGE[slug];
    slugs.push(slug);
    pages.push(page);
    PAGE_TO_SLUG[page] = slug;
  });
  
  addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
  });

  function generateSitemap() {
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    slugs.forEach(
      (slug) =>
        (sitemap +=
          '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
    );
    sitemap += '</urlset>';
    return sitemap;
  }
  
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  function handleOptions(request) {
    if (request.headers.get('Origin') !== null &&
      request.headers.get('Access-Control-Request-Method') !== null &&
      request.headers.get('Access-Control-Request-Headers') !== null) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      });
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
        }
      });
    }
  }
  
  async function fetchAndApply(request) {
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }
    let url = new URL(request.url);
    url.hostname = 'www.notion.so';
    if (url.pathname === '/robots.txt') {
        return new Response(`User-agent: *
Disallow: /`);
      // return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
    }
    if (url.pathname === '/sitemap.xml') {
      let response = new Response(generateSitemap());
      response.headers.set('content-type', 'application/xml');
      return response;
    }
    let response;
    if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
      response = await fetch(url.toString());
      let body = await response.text();
      response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
      response.headers.set('Content-Type', 'application/x-javascript');
      return response;
    } else if ((url.pathname.startsWith('/api'))) {
      // Forward API
      response = await fetch(url.toString(), {
        body: url.pathname.startsWith('/api/v3/getPublicPageData') ? null : request.body,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
        },
        method: 'POST',
      });
      response = new Response(response.body, response);
      response.headers.set('Access-Control-Allow-Origin', '*');
      return response;
    } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
      const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
      return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
    } else {
      response = await fetch(url.toString(), {
        body: request.body,
        headers: request.headers,
        method: request.method,
      });
      response = new Response(response.body, response);
      response.headers.delete('Content-Security-Policy');
      response.headers.delete('X-Content-Security-Policy');
    }
  
    return appendJavascript(request, response, SLUG_TO_PAGE);
  }
  
  class MetaRewriter {
    constructor(req) {
      this.req = req;
    }
    element(element) {
      let pageTitle = PAGE_TITLE
      let pageDescription = PAGE_DESCRIPTION
      let url = new URL(this.req.url);
      let changedTitleAndDescription = PAGE_ID_TO_TITLE_AND_DESCRIPTION[url.pathname.slice(1)]
      if (changedTitleAndDescription) {
        pageTitle = changedTitleAndDescription.title
        pageDescription = changedTitleAndDescription.description
      }
      if (pageTitle !== '') {
        if (element.getAttribute('property') === 'og:title'
          || element.getAttribute('name') === 'twitter:title') {
          element.setAttribute('content', pageTitle);
        }
        if (element.tagName === 'title') {
          element.setInnerContent(pageTitle);
        }
      }
      if (pageDescription !== '') {
        if (element.getAttribute('name') === 'description'
          || element.getAttribute('property') === 'og:description'
          || element.getAttribute('name') === 'twitter:description') {
          element.setAttribute('content', pageDescription);
        }
      }
      if (element.getAttribute('property') === 'og:url'
        || element.getAttribute('name') === 'twitter:url') {
        element.setAttribute('content', MY_DOMAIN);
      }
      if (element.getAttribute('name') === 'apple-itunes-app') {
        element.remove();
      }
    }
  }
  
  class HeadRewriter {
    element(element) {
      // if (GOOGLE_FONT !== '') {
      //   element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
      //   <style>* { font-family: "${GOOGLE_FONT}", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important; }</style>`, {
      //     html: true
      //   });
      // }
      // element.append(`<link rel="icon" href="https://davidshekunts.ru/wp-content/uploads/2019/12/LogoWhite-2.png" type="image/x-icon">`, {html: true})
      // element.append(`<link rel="shortcut icon" href="https://davidshekunts.ru/wp-content/uploads/2019/12/LogoWhite-2.png">`, {html: true})
      element.append(`<link rel="icon" type="image/x-icon" href="data:image/png;base64,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">`, {html: true})
      element.append(`<style>
      /* Comment button*/
      /* div.notion-topbar > div > div:nth-child(3) { display: none !important; } */
      /* Try Notion button*/
      div.notion-topbar > div > div:nth-child(7) { display: none !important; }
      /* Search */
      /* div.notion-topbar > div > div:nth-child(4) { display: none !important; } */
      div.notion-topbar > div > div:nth-child(5) { display: none !important; }
      /* Devider */
      /* div.notion-topbar > div > div:nth-child(6) { display: none !important; } */
      /* Search mobile */
      /* div.notion-topbar-mobile > div:nth-child(3) { display: none !important; } */
      div.notion-topbar-mobile > div:nth-child(5) { display: none !important; }
      div.notion-topbar-mobile > .toggle-mode { padding-left: 10px; order: 1; }
      div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
      div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
      </style>`, {
        html: true
      })
    }
  }
  
  class BodyRewriter {
    constructor(req, SLUG_TO_PAGE) {
      this.SLUG_TO_PAGE = SLUG_TO_PAGE;
      this.req = req;
    }
    element(element) {
      if (GOOGLE_FONT !== '') {
        element.append(`
        <link rel="preload" href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>
        * { font-family: "${GOOGLE_FONT}", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important; }
        .notion-code-block * {
            font-family: SFMono-Regular, Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace !important;
        }
        </style>`, {
          html: true
        });
      }
      element.append(`<div style="display:none">Powered by <a href="http://fruitionsite.com">Fruition</a></div>
      <script>
      window.CONFIG.domainBaseUrl = 'https://${MY_DOMAIN}';
      const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
      const PAGE_TO_SLUG = {};
      const slugs = [];
      const pages = [];
      const el = document.createElement('div');
      let redirected = false;
      Object.keys(SLUG_TO_PAGE).forEach(slug => {
        const page = SLUG_TO_PAGE[slug];
        slugs.push(slug);
        pages.push(page);
        PAGE_TO_SLUG[page] = slug;
      });
      function getPage() {
        return location.pathname.slice(-32);
      }
      function getSlug() {
        return location.pathname.slice(1);
      }
      function updateSlug() {
        const slug = PAGE_TO_SLUG[getPage()];
        if (slug != null) {
          history.replaceState(history.state, '', '/' + slug);
        }
      }
      function onDark() {
        el.innerHTML = '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
        document.body.classList.add('dark');
        __console.environment.ThemeStore.setState({ mode: 'dark' }, true);
      };
      function onLight() {
        el.innerHTML = '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
        document.body.classList.remove('dark');
        __console.environment.ThemeStore.setState({ mode: 'light' }, true);
      }
      function toggle() {
        if (document.body.classList.contains('dark')) {
          onLight();
        } else {
          onDark();
        }
      }
      function addDarkModeButton(device) {
        const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');
        el.className = 'toggle-mode';
        el.addEventListener('click', toggle);
        nav.appendChild(el);
        onDark();
      }
      const observer = new MutationObserver(function() {
        if (redirected) return;
        const nav = document.querySelector('.notion-topbar');
        const mobileNav = document.querySelector('.notion-topbar-mobile');
        if (nav && nav.firstChild && nav.firstChild.firstChild
          || mobileNav && mobileNav.firstChild) {
          redirected = true;
          updateSlug();
          addDarkModeButton(nav ? 'web' : 'mobile');
          const onpopstate = window.onpopstate;
          window.onpopstate = function() {
            if (slugs.includes(getSlug())) {
              const page = SLUG_TO_PAGE[getSlug()];
              if (page) {
                history.replaceState(history.state, 'bypass', '/' + page);
              }
            }
            onpopstate.apply(this, [].slice.call(arguments));
            updateSlug();
          };
        }
      });
      observer.observe(document.querySelector('#notion-app'), {
        childList: true,
        subtree: true,
      });
      const replaceState = window.history.replaceState;
      window.history.replaceState = function(state) {
        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
        return replaceState.apply(window.history, arguments);
      };
      const pushState = window.history.pushState;
      window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        const id = dest.pathname.slice(-32);
        if (pages.includes(id)) {
          arguments[2] = '/' + PAGE_TO_SLUG[id];
        }
        return pushState.apply(window.history, arguments);
      };
      // const open = window.XMLHttpRequest.prototype.open;
      // window.XMLHttpRequest.prototype.open = function() {
        // console.log(arguments[1], arguments[1].indexOf('${MY_DOMAIN}'))
        // // If нужен чтобы подменять только когда запрос идет именно на Domain
        // if (arguments[1].indexOf < 15) arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
        // return open.apply(this, [].slice.call(arguments));
      // };
    </script>${CUSTOM_SCRIPT}`, {
        html: true
      });
    }
  }
  
  async function appendJavascript(req, res, SLUG_TO_PAGE) {
    return new HTMLRewriter()
      .on('title', new MetaRewriter(req))
      .on('meta', new MetaRewriter(req))
      .on('head', new HeadRewriter())
      .on('body', new BodyRewriter(req, SLUG_TO_PAGE))
      .transform(res);
  }