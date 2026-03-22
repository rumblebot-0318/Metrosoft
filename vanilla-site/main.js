const state = {
  locale: localStorage.getItem('metrosoft-locale') || 'ko',
  translations: null,
  legacy: {},
  metroNews: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const heroTitle = $('[data-hero-title]');
const heroDescription = $('[data-hero-description]');
const heroCta = $('[data-hero-cta]');
const nav = $('[data-nav]');
const localeButtons = $$('[data-locale]');
const metricsTarget = $('[data-metrics]');

const spotlightEyebrow = $('[data-spotlight-eyebrow]');
const spotlightTitle = $('[data-spotlight-title]');
const spotlightDescription = $('[data-spotlight-description]');
const spotlightPoints = $('[data-spotlight-points]');

const ctaTitle = $('[data-cta-title]');
const ctaDescription = $('[data-cta-description]');
const ctaButton = $('[data-cta-button]');

const productTableTitle = $('[data-product-table-title]');
const productTableSub = $('[data-product-table-sub]');
const productTable = $('[data-product-table]');
const productImages = $('[data-product-images]');
const productTree = $('[data-product-tree]');
const customerTable = $('[data-customer-table]');
const hospitalTitle = $('[data-hospital-title]');
const hospitalSub = $('[data-hospital-sub]');
const hospitalGrid = $('[data-hospital-grid]');

const newsTitle = $('[data-news-title]');
const newsSub = $('[data-news-sub]');
const newsList = $('[data-news-list]');

const productPrevBtn = $('[data-carousel-prev="product"]');
const productNextBtn = $('[data-carousel-next="product"]');
const hospitalPrevBtn = $('[data-carousel-prev="hospital"]');
const hospitalNextBtn = $('[data-carousel-next="hospital"]');

const sectionTargets = {
  highlights: $('[data-highlights]'),
  business: $('[data-business]'),
  product: $('[data-product]'),
  introduce: $('[data-introduce]'),
  customer: $('[data-customer]')
};

const cardImages = {
  highlights: ['assets/product_icons/EMR.svg', 'assets/product_icons/OCS.svg', 'assets/product_icons/ERP.svg'],
  business: ['assets/product_icons/OCS.svg', 'assets/product_icons/EMR.svg', 'assets/product_icons/CRM.svg'],
  product: ['assets/product_icons/EMR.svg', 'assets/product_icons/iEMR.svg', 'assets/product_icons/OCS.svg', 'assets/product_icons/ERP.svg', 'assets/product_icons/CRM.svg', 'assets/product_icons/mPOC.svg'],
  introduce: ['assets/ui_icons/core.svg', 'assets/ui_icons/business.svg'],
  customer: ['assets/product_icons/CRM.svg', 'assets/product_icons/OCS.svg']
};

const titleTargets = {
  highlights: $('[data-title="highlights"]'),
  business: $('[data-title="business"]'),
  product: $('[data-title="product"]'),
  introduce: $('[data-title="introduce"]'),
  customer: $('[data-title="customer"]')
};

const subTargets = {
  highlights: $('[data-sub="highlights"]'),
  business: $('[data-sub="business"]'),
  product: $('[data-sub="product"]'),
  introduce: $('[data-sub="introduce"]'),
  customer: $('[data-sub="customer"]')
};

const menuTargets = {
  business: $('[data-menu="business"]'),
  product: $('[data-menu="product"]'),
  introduce: $('[data-menu="introduce"]'),
  customer: $('[data-menu="customer"]')
};

const originalMenus = {
  ko: {
    nav: [
      { label: '회사소개', target: 'introduce' },
      { label: '사업영역', target: 'business' },
      { label: '제품소개', target: 'product' },
      { label: '고객센터', target: 'customer' }
    ],
    strips: {
      introduce: ['인사말', '조직도', '회사소개', '연혁', '오시는 길'],
      business: ['의료정보사업', 'Metro-cERP', '헬스케어 서비스', 'VOIP 사업', 'MetroSMS', '알림톡', '주요 고객사'],
      product: ['EMR', 'iEMR', 'OCS', 'T-BIZ 모바일 EMR', 'ERP', 'CRM'],
      customer: ['고객지원', '원격지원']
    }
  },
  en: {
    nav: [
      { label: 'Introduce', target: 'introduce' },
      { label: 'Business', target: 'business' },
      { label: 'Products', target: 'product' },
      { label: 'Customer', target: 'customer' }
    ],
    strips: {
      introduce: ['Greetings', 'Organization', 'About', 'Timeline', 'Directions'],
      business: ['Healthcare IT', 'Metro-cERP', 'Healthcare Service', 'VOIP', 'MetroSMS', 'AlimTalk', 'Clients'],
      product: ['EMR', 'iEMR', 'OCS', 'T-BIZ', 'ERP', 'CRM'],
      customer: ['Support', 'Remote']
    }
  }
};

const clearChildren = (el) => {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
};

const renderCards = (target, cards = [], key = '') => {
  if (!target) return;
  clearChildren(target);

  cards.forEach((card, idx) => {
    const article = document.createElement('article');
    article.className = `card card--${key}`;

    const imagePool = cardImages[key] || [];
    const imageSrc = imagePool[idx % imagePool.length];
    if (imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = card.title || 'card image';
      img.className = 'card__image';
      article.appendChild(img);
    }

    const title = document.createElement('h3');
    title.textContent = card.title;

    const desc = document.createElement('p');
    desc.textContent = card.description;

    const list = document.createElement('ul');
    (card.points || []).forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      list.appendChild(li);
    });

    article.appendChild(title);
    article.appendChild(desc);
    article.appendChild(list);
    target.appendChild(article);
  });
};

const renderNav = (items = []) => {
  clearChildren(nav);
  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = `#${item.target}`;
    link.textContent = item.label;
    nav.appendChild(link);
  });
};

const renderMenuStrips = (menus = {}) => {
  Object.entries(menuTargets).forEach(([key, target]) => {
    if (!target) return;
    clearChildren(target);
    (menus[key] || []).forEach((label) => {
      const chip = document.createElement('span');
      chip.className = 'menu-chip';
      chip.textContent = label;
      target.appendChild(chip);
    });
  });
};

const bindCarousel = (container, prevBtn, nextBtn, step = 320) => {
  if (!container) return;

  const updateButtons = () => {
    const maxScroll = container.scrollWidth - container.clientWidth - 2;
    if (prevBtn) prevBtn.disabled = container.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = container.scrollLeft >= maxScroll;
  };

  if (prevBtn) {
    prevBtn.onclick = () => {
      container.scrollBy({ left: -step, behavior: 'smooth' });
      setTimeout(updateButtons, 220);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      container.scrollBy({ left: step, behavior: 'smooth' });
      setTimeout(updateButtons, 220);
    };
  }

  container.addEventListener('scroll', updateButtons, { passive: true });
  setTimeout(updateButtons, 80);
};

const renderMetrics = (metrics = []) => {
  clearChildren(metricsTarget);
  metrics.forEach((metric) => {
    const box = document.createElement('div');
    box.className = 'metric';
    box.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
    metricsTarget.appendChild(box);
  });
};

const renderSpotlight = (spotlight = {}) => {
  spotlightEyebrow.textContent = spotlight.eyebrow || '';
  spotlightTitle.textContent = spotlight.title || '';
  spotlightDescription.textContent = spotlight.description || '';
  clearChildren(spotlightPoints);
  (spotlight.points || []).forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    spotlightPoints.appendChild(li);
  });
};

const renderProductDetailTable = () => {
  const ocs = state.legacy.ocs;
  if (!productTable) return;
  clearChildren(productTable);
  if (!ocs || !ocs.composition) return;

  const headers = ['원무/보험', '진료', '진료지원', '경영관리'];
  const thead = document.createElement('thead');
  const htr = document.createElement('tr');
  headers.forEach((h) => {
    const th = document.createElement('th');
    th.textContent = h;
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  productTable.appendChild(thead);

  const tbody = document.createElement('tbody');
  const maxRows = Math.max(...ocs.composition.map((col) => col.length));
  for (let i = 0; i < maxRows; i += 1) {
    const tr = document.createElement('tr');
    ocs.composition.forEach((col) => {
      const td = document.createElement('td');
      td.textContent = col[i] || '';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
  productTable.appendChild(tbody);
};

const renderProductImageGrid = () => {
  if (!productImages) return;
  clearChildren(productImages);

  const items = [
    'assets/product_icons/EMR.svg',
    'assets/product_icons/iEMR.svg',
    'assets/product_icons/OCS.svg',
    'assets/product_icons/ERP.svg',
    'assets/product_icons/CRM.svg',
    'assets/product_icons/mPOC.svg',
    'assets/product_icons/mEAMS.svg'
  ];

  const ocs = state.legacy.ocs;
  if (ocs && Array.isArray(ocs.Lists)) {
    ocs.Lists.forEach((group) => {
      (group.contents || []).forEach((item) => {
        if (item.image && item.image.url) {
          const file = item.image.url.replace(/^\//, '');
          items.push(`assets/Metro_product/OCS/${file}`);
        }
      });
    });
  }

  // Normalize by filename stem (case-insensitive) to reduce duplicates like 01.jpg / 01.JPG
  const seen = new Set();
  const unique = [];
  items.forEach((src) => {
    const file = src.split('/').pop() || src;
    const stem = file.replace(/\.[^.]+$/, '').toLowerCase();
    if (seen.has(stem)) return;
    seen.add(stem);
    unique.push(src);
  });

  unique.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'product asset';
    img.onerror = () => {
      img.remove();
    };
    productImages.appendChild(img);
  });
};

const renderTreeList = (items = []) => {
  const ul = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    if (typeof item === 'string') {
      li.textContent = item;
    } else if (item && typeof item === 'object') {
      li.textContent = item.title || '';
      if (Array.isArray(item.contents) && item.contents.length) {
        li.appendChild(renderTreeList(item.contents));
      }
    }
    ul.appendChild(li);
  });
  return ul;
};

const renderProductTree = () => {
  if (!productTree) return;
  clearChildren(productTree);
  const ocs = state.legacy.ocs;
  if (!ocs || !Array.isArray(ocs.Lists)) return;

  ocs.Lists.forEach((group) => {
    const block = document.createElement('article');
    block.className = 'tree-block';

    const title = document.createElement('h4');
    title.textContent = group.title || '';

    const desc = document.createElement('p');
    desc.textContent = (group.description || '').replace(/\|/g, ' ');

    block.appendChild(title);
    block.appendChild(desc);

    if (Array.isArray(group.contents) && group.contents.length) {
      block.appendChild(renderTreeList(group.contents));
    }

    productTree.appendChild(block);
  });
};

const renderCustomerTable = () => {
  const customer = state.legacy.customer;
  if (!customerTable) return;
  clearChildren(customerTable);
  if (!customer || !customer.address || !customer.address.length) return;

  const headCols = customer.address.map((row) => row.title).filter(Boolean);
  const thead = document.createElement('thead');
  const htr = document.createElement('tr');
  headCols.forEach((h) => {
    const th = document.createElement('th');
    th.textContent = h;
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  customerTable.appendChild(thead);

  const rowCount = Math.max(...customer.address.map((row) => (row.content || []).length));
  const tbody = document.createElement('tbody');

  for (let i = 0; i < rowCount; i += 1) {
    const tr = document.createElement('tr');
    customer.address.forEach((row) => {
      if (!row.title) return;
      const td = document.createElement('td');
      const cell = (row.content && row.content[i]) || '';
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
  customerTable.appendChild(tbody);
};

const renderHospitalGrid = () => {
  const hospitals = state.legacy.hospitals;
  if (!hospitalGrid) return;
  clearChildren(hospitalGrid);
  if (!hospitals || !Array.isArray(hospitals.content)) return;

  hospitals.content.forEach((h) => {
    if (!h || !h.title) return;
    const a = document.createElement('a');
    a.className = 'hospital-logo';
    a.href = h.url || '#';
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    a.title = h.title || 'hospital';

    const img = document.createElement('img');
    img.src = `assets/Hospital_icon/${(h.img || '').replace(/^\//, '')}`;
    img.alt = h.title || 'hospital icon';

    const label = document.createElement('span');
    label.className = 'hospital-name';
    label.textContent = h.title;

    img.onerror = () => {
      img.remove();
    };

    a.appendChild(img);
    a.appendChild(label);
    hospitalGrid.appendChild(a);
  });
};

const renderNews = () => {
  if (!newsList) return;
  clearChildren(newsList);
  if (!state.metroNews.length) {
    const fallback = document.createElement('article');
    fallback.className = 'news-card loading';
    fallback.textContent = state.locale === 'ko' ? '관련 뉴스를 찾지 못했습니다.' : 'No Metrosoft-related news found.';
    newsList.appendChild(fallback);
    return;
  }

  state.metroNews.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'news-card';
    const safeDate = item.pubDate ? new Date(item.pubDate).toLocaleString() : '';
    card.innerHTML = `
      <a href="${item.link}" target="_blank" rel="noreferrer noopener">${item.title}</a>
      <div class="meta">${safeDate}</div>
    `;
    newsList.appendChild(card);
  });
};

const fetchMetroNews = async () => {
  const query = encodeURIComponent('메트로소프트 OR metrosoft');
  const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=ko&gl=KR&ceid=KR:ko`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;

  try {
    const res = await fetch(proxyUrl);
    if (!res.ok) throw new Error('Failed to fetch RSS');
    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const items = Array.from(doc.querySelectorAll('item')).map((item) => ({
      title: item.querySelector('title')?.textContent?.trim() || '',
      link: item.querySelector('link')?.textContent?.trim() || '',
      pubDate: item.querySelector('pubDate')?.textContent?.trim() || ''
    }));

    state.metroNews = items
      .filter((it) => /메트로소프트|metrosoft/i.test(it.title))
      .slice(0, 8);
  } catch (error) {
    console.error('Failed to fetch Metrosoft news:', error);
    state.metroNews = [];
  }

  renderNews();
};

const setLocale = (locale) => {
  state.locale = locale;
  localStorage.setItem('metrosoft-locale', locale);
  render();
};

const firstSentence = (text = '') => {
  const cleaned = String(text).replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';
  const bySlash = cleaned.split('/')[0].trim();
  return bySlash || cleaned;
};

const titleBlockToCard = (block, points = []) => {
  if (!block) return null;
  const title = `${block.title || ''} ${block.subtitle || ''}`.trim();
  return {
    title: title || 'Legacy Product',
    description: firstSentence(block.content || ''),
    points: (points || []).slice(0, 6)
  };
};

const buildLegacyCards = () => {
  const out = {};
  const his = state.legacy.metroHis;
  if (his && (his.features || his.effects)) {
    out.business = [
      {
        title: 'MetroHIS (Legacy JSON)',
        description: '기존 MetroHIS 데이터 파일(src/database/Business/MetroHIS.json) 기반 내용입니다.',
        points: [...(his.features || []).slice(0, 4), ...(his.effects || []).slice(0, 2)]
      }
    ];
  }

  const productCards = [];
  const emr = state.legacy.emr;
  if (emr && emr.intro) {
    // 원본 컴포넌트 순서: EMR 소개 -> 진료 EMR -> 간호 EMR -> 보안 및 인증
    productCards.push({
      title: `${emr.intro.title || 'EMR'} ${emr.intro.subtitle || ''}`.trim(),
      description: firstSentence(emr.intro.content || ''),
      points: []
    });
    productCards.push({
      title: '진료 EMR',
      description: '원본 컴포넌트의 진료 EMR 항목',
      points: (emr.treatment || []).slice(0, 7)
    });
    productCards.push({
      title: '간호 EMR',
      description: '원본 컴포넌트의 간호 EMR 항목',
      points: (emr.nurse || []).slice(0, 6)
    });
    const securityIntro = emr.security && emr.security[0] ? firstSentence(emr.security[0].title || '') : '';
    const securityPoints = emr.security && emr.security[1] ? (emr.security[1].content || []).slice(0, 6) : [];
    productCards.push({
      title: '보안 및 인증',
      description: securityIntro || '전자 인증/전자 서명/권한 설정',
      points: securityPoints
    });
  }

  const iemr = state.legacy.iemr;
  const iemrCard = titleBlockToCard(iemr && iemr.Title, iemr && iemr.features);
  if (iemrCard) productCards.push(iemrCard);

  const ocs = state.legacy.ocs;
  if (ocs && ocs.title) {
    const ocsPoints = [
      ...(ocs.composition && ocs.composition[0] ? ocs.composition[0] : []),
      ...(ocs.composition && ocs.composition[1] ? ocs.composition[1] : [])
    ];
    productCards.push({
      title: `${ocs.title.title || 'OCS'} ${ocs.title.subtitle || ''}`.trim(),
      description: firstSentence(ocs.title.content || ''),
      points: ocsPoints.slice(0, 7)
    });
  }

  const mpoc = state.legacy.mpoc;
  const mpocCard = titleBlockToCard(mpoc && mpoc.Title, mpoc && mpoc.features);
  if (mpocCard) productCards.push(mpocCard);

  const erp = state.legacy.erp;
  if (erp && erp.MetroERP) {
    productCards.push({
      title: `${erp.MetroERP.title || 'ERP'} ${erp.MetroERP.subtitle || ''}`.trim(),
      description: firstSentence(erp.MetroERP.content || ''),
      points: [
        ...(erp.management || []).slice(0, 2),
        ...(erp.accounting || []).slice(0, 2),
        ...(erp.stock || []).slice(0, 2)
      ]
    });
  }

  const crm = state.legacy.crm;
  const crmCard = titleBlockToCard(crm && crm.Title, crm && crm.features);
  if (crmCard) productCards.push(crmCard);

  if (productCards.length) {
    out.product = productCards;
  }

  const ceo = state.legacy.ceo;
  if (ceo) {
    out.introduce = [
      {
        title: ceo.title || '인사말',
        description: ceo.subtitle || '회사 소개',
        points: (ceo.content || []).slice(0, 4)
      }
    ];
  }

  const customer = state.legacy.customer;
  if (customer && customer.address) {
    out.customer = [
      {
        title: '고객 문의 (Legacy JSON)',
        description: 'src/database/Customer/index.json 기반 주요 연락처',
        points: customer.address.slice(1, 5).map((row) => (row.content || []).slice(0, 3).join(' / '))
      }
    ];
  }

  return out;
};

const mergeCards = (base, legacyKey, legacyCards) => {
  const add = legacyCards[legacyKey] || [];
  if (state.locale !== 'ko') return base;
  if (!add.length) return base;

  // 제품/고객은 원본 컴포넌트 데이터를 우선 사용해 중복 카드 최소화
  if (legacyKey === 'product' || legacyKey === 'customer') {
    return add;
  }

  return [...add, ...base];
};

const render = () => {
  if (!state.translations) return;
  const t = state.translations[state.locale] || state.translations.ko;
  const legacyCards = buildLegacyCards();
  const menuConfig = originalMenus[state.locale] || originalMenus.ko;

  heroTitle.textContent = t.hero.title;
  heroDescription.textContent = t.hero.description;
  heroCta.textContent = t.hero.cta;

  renderNav(menuConfig.nav || t.nav || []);
  renderMenuStrips(menuConfig.strips || {});
  renderMetrics(t.metrics || []);
  renderSpotlight(t.spotlight || {});
  if (productTableTitle) productTableTitle.textContent = state.locale === 'ko' ? 'Product 상세 구성표 (기존 OCS 구성)' : 'Product Detailed Composition (Legacy OCS Matrix)';
  if (productTableSub) productTableSub.textContent = state.locale === 'ko' ? '기존 컴포넌트에서 사용하던 표 형식 내용을 그대로 재구성했습니다.' : 'Reconstructed from the original table-based component structure.';

  Object.keys(titleTargets).forEach((key) => {
    if (titleTargets[key]) titleTargets[key].textContent = t.titles[key] || key;
    if (subTargets[key]) subTargets[key].textContent = (t.subs && t.subs[key]) || '';
  });

  renderCards(sectionTargets.highlights, t.highlights, 'highlights');
  renderCards(sectionTargets.business, mergeCards(t.business, 'business', legacyCards), 'business');
  renderCards(sectionTargets.product, mergeCards(t.product, 'product', legacyCards), 'product');
  renderCards(sectionTargets.introduce, mergeCards(t.introduce, 'introduce', legacyCards), 'introduce');
  renderCards(sectionTargets.customer, mergeCards(t.customer, 'customer', legacyCards), 'customer');

  renderProductDetailTable();
  renderProductImageGrid();
  renderProductTree();
  renderCustomerTable();
  renderHospitalGrid();

  bindCarousel(productImages, productPrevBtn, productNextBtn, 380);
  bindCarousel(hospitalGrid, hospitalPrevBtn, hospitalNextBtn, 420);

  if (hospitalTitle) hospitalTitle.textContent = state.locale === 'ko' ? '주요 고객사 병원' : 'Major Partner Hospitals';
  if (hospitalSub) hospitalSub.textContent = state.locale === 'ko' ? '기존 프로젝트 아이콘 자산을 그대로 사용합니다.' : 'Using the original hospital icon assets from the legacy project.';

  if (newsTitle) newsTitle.textContent = state.locale === 'ko' ? 'Metrosoft News' : 'Metrosoft News';
  if (newsSub) newsSub.textContent = state.locale === 'ko' ? 'Google RSS에서 메트로소프트가 제목에 포함된 기사만 표시합니다.' : 'Showing only Google RSS headlines containing Metrosoft.';
  renderNews();

  if (t.cta) {
    ctaTitle.textContent = t.cta.title || '';
    ctaDescription.textContent = t.cta.description || '';
    ctaButton.textContent = t.cta.button || '';
  }

  localeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.locale === state.locale);
  });
};

const fetchJson = (path) => fetch(path).then((res) => (res.ok ? res.json() : null)).catch(() => null);

Promise.all([
  fetchJson('data/translations.json'),
  fetchJson('data/legacy/Business/MetroHIS.json'),
  fetchJson('data/legacy/Product/EMR.json'),
  fetchJson('data/legacy/Product/iEMR.json'),
  fetchJson('data/legacy/Product/OCS.json'),
  fetchJson('data/legacy/Product/ERP.json'),
  fetchJson('data/legacy/Product/CRM.json'),
  fetchJson('data/legacy/Product/mPOC.json'),
  fetchJson('data/legacy/Introduce/CeoIntroduce.json'),
  fetchJson('data/legacy/Customer/index.json'),
  fetchJson('data/legacy/Business/Hospital.json')
]).then(([
  translations,
  metroHis,
  emr,
  iemr,
  ocs,
  erp,
  crm,
  mpoc,
  ceo,
  customer,
  hospitals
]) => {
  state.translations = translations;
  state.legacy = { metroHis, emr, iemr, ocs, erp, crm, mpoc, ceo, customer, hospitals };
  render();
  fetchMetroNews();
}).catch((err) => {
  console.error('Failed to initialize data:', err);
});

localeButtons.forEach((button) => {
  button.addEventListener('click', () => setLocale(button.dataset.locale));
});
