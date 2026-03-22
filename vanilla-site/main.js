const state = {
  locale: localStorage.getItem('metrosoft-locale') || 'ko',
  translations: null,
  legacy: {},
  metroNews: [],
  newsLoading: false,
  activeProductTab: 'treatment',
  activeFeatureTab: 0,
  activeTimelineCategory: 'all',
  timelineExpanded: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const heroTitle = $('[data-hero-title]');
const heroDescription = $('[data-hero-description]');
const heroCta = $('[data-hero-cta]');
const nav = $('[data-nav]');
const headerInner = document.querySelector('.header-inner');
const navToggle = $('[data-nav-toggle]');
const localeButtons = $$('[data-locale]');
const metricsTarget = $('[data-metrics]');
const certifiedTitle = $('[data-certified-title]');
const certifiedSub = $('[data-certified-sub]');
const certifiedGrid = $('[data-certified-grid]');
const certifiedHistoryTabs = $('[data-certified-history-tabs]');
const certifiedTimeline = $('[data-certified-timeline]');
const companyFacts = $('[data-company-facts]');

const spotlightEyebrow = $('[data-spotlight-eyebrow]');
const spotlightTitle = $('[data-spotlight-title]');
const spotlightDescription = $('[data-spotlight-description]');
const spotlightCards = $('[data-spotlight-cards]');

const ctaTitle = $('[data-cta-title]');
const ctaDescription = $('[data-cta-description]');
const ctaButton = $('[data-cta-button]');
const companyTitle = $('[data-company-title]');
const companyOverviewTitle = $('[data-company-overview-title]');
const companyOverviewList = $('[data-company-overview-list]');
const companyContactTitle = $('[data-company-contact-title]');
const companyContactList = $('[data-company-contact-list]');
const companyAccessTitle = $('[data-company-access-title]');
const companyAccessList = $('[data-company-access-list]');
const quickInquiryText = $('[data-quick-inquiry-text]');
const quickRemoteText = $('[data-quick-remote-text]');

const productTableTitle = $('[data-product-table-title]');
const productTableSub = $('[data-product-table-sub]');
const featureTabs = $('[data-feature-tabs]');
const featurePanel = $('[data-feature-panel]');
const productImages = $('[data-product-images]');
const productTree = $('[data-product-tree]');
const productFocusKicker = $('[data-product-focus-kicker]');
const productFocusTitle = $('[data-product-focus-title]');
const productFocusDesc = $('[data-product-focus-desc]');
const productTabs = $('[data-product-tabs]');
const productTabContent = $('[data-product-tab-content]');
const customerTable = $('[data-customer-table]');
const orgSummary = $('[data-org-summary]');
const timelineSummary = $('[data-timeline-summary]');
const ceoMessage = $('[data-ceo-message]');
const remoteSupport = $('[data-remote-support]');
const supportLinks = $('[data-support-links]');
const supportContacts = $('[data-support-contacts]');
const companyMap = $('[data-company-map]');
const hospitalTitle = $('[data-hospital-title]');
const hospitalSub = $('[data-hospital-sub]');
const hospitalGrid = $('[data-hospital-grid]');

const newsTitle = $('[data-news-title]');
const newsSub = $('[data-news-sub]');
const newsList = $('[data-news-list]');

const productPrevBtn = $('[data-carousel-prev="product"]');
const productNextBtn = $('[data-carousel-next="product"]');
const productDots = $('[data-carousel-dots="product"]');

const sectionTargets = {
  highlights: $('[data-highlights]'),
  business: $('[data-business]'),
  product: $('[data-product]'),
  introduce: $('[data-introduce]'),
  customer: $('[data-customer]')
};

const cardIcons = {
  highlights: ['heart-pulse', 'messages-square', 'server-cog'],
  business: ['building-2', 'shield-check', 'cloud-cog'],
  product: ['file-heart', 'tablet-smartphone', 'network', 'briefcase-business', 'users-round', 'smartphone'],
  introduce: ['landmark', 'users'],
  customer: ['headset', 'phone-call']
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

const refreshIcons = () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons({
      attrs: {
        'stroke-width': 1.9
      }
    });
  }
};

const renderSimpleList = (target, items = []) => {
  if (!target) return;
  clearChildren(target);
  items.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    target.appendChild(li);
  });
};

const getProductCardImage = (title = '', idx = 0) => {
  const t = String(title).toLowerCase();

  if (t.includes('보안') || t.includes('인증')) return 'assets/sign.png';
  if (t.includes('간호')) return 'assets/iEMR.png';
  if (t.includes('진료 emr')) return 'assets/EMR.png';
  if (t.includes('iemr')) return 'assets/iEMR.png';
  if (t.includes('emr')) return 'assets/EMR.png';
  if (t.includes('ocs')) return 'assets/HIS.png';
  if (t.includes('erp')) return 'assets/ERP.png';
  if (t.includes('crm')) return 'assets/CRM.png';
  if (t.includes('mpoc') || t.includes('모바일') || t.includes('t-biz')) return 'assets/TBiz.png';

  const fallback = ['assets/EMR.png', 'assets/iEMR.png', 'assets/HIS.png', 'assets/ERP.png', 'assets/CRM.png', 'assets/TBiz.png'];
  return fallback[idx % fallback.length];
};

const renderCards = (target, cards = [], key = '') => {
  if (!target) return;
  clearChildren(target);

  cards.forEach((card, idx) => {
    const article = document.createElement('article');
    article.className = `card card--${key}`;

    if (key === 'product') {
      const img = document.createElement('img');
      img.src = getProductCardImage(card.title, idx);
      img.alt = `${card.title || 'product'} image`;
      img.className = 'card__image';
      img.onerror = () => {
        img.src = 'assets/product_icons/EMR.svg';
      };
      article.appendChild(img);
    } else {
      const icons = cardIcons[key] || [];
      const iconName = icons[idx % icons.length] || 'circle';
      const badge = document.createElement('div');
      badge.className = 'card__icon-badge';
      badge.innerHTML = `<i data-lucide="${iconName}"></i>`;
      article.appendChild(badge);
    }

    const title = document.createElement('h3');
    title.textContent = card.title;

    const desc = document.createElement('p');
    desc.textContent = card.description;

    const list = document.createElement('ul');
    const limitedPoints = key === 'product' ? (card.points || []).slice(0, 3) : (card.points || []);
    limitedPoints.forEach((point) => {
      const li = document.createElement('li');
      li.textContent = point;
      list.appendChild(li);
    });

    article.appendChild(title);
    article.appendChild(desc);
    article.appendChild(list);

    if (key === 'product') {
      const detailBtn = document.createElement('a');
      detailBtn.href = '#product-detail';
      detailBtn.className = 'card__more';
      detailBtn.textContent = state.locale === 'ko' ? '자세히 보기' : 'View details';
      article.appendChild(detailBtn);
    }

    target.appendChild(article);
  });
};

const renderNav = (items = []) => {
  clearChildren(nav);
  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = `#${item.target}`;
    link.dataset.target = item.target;
    link.textContent = item.label;
    nav.appendChild(link);
  });
};

const setActiveNavById = (sectionId = '') => {
  const links = nav ? nav.querySelectorAll('a[data-target]') : [];
  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.target === sectionId);
  });
};

const bindActiveNav = () => {
  if (!nav) return;

  const links = nav.querySelectorAll('a[data-target]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((link) => document.getElementById(link.dataset.target))
    .filter(Boolean);

  const syncWithHash = () => {
    const hashId = (window.location.hash || '').replace('#', '');
    if (hashId) setActiveNavById(hashId);
  };

  syncWithHash();
  window.addEventListener('hashchange', syncWithHash);

  if (nav.dataset.observerBound === '1') return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible && visible.target && visible.target.id) {
      setActiveNavById(visible.target.id);
    }
  }, {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: [0.2, 0.45, 0.7]
  });

  sections.forEach((section) => observer.observe(section));
  nav.dataset.observerBound = '1';
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

const bindMobileNav = () => {
  if (!navToggle || !headerInner || !nav) return;

  const closeMenu = () => {
    headerInner.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle.dataset.bound !== '1') {
    navToggle.addEventListener('click', () => {
      const next = !headerInner.classList.contains('nav-open');
      headerInner.classList.toggle('nav-open', next);
      navToggle.setAttribute('aria-expanded', next ? 'true' : 'false');
    });

    nav.addEventListener('click', (event) => {
      if (event.target && event.target.closest('a')) {
        closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    }, { passive: true });

    navToggle.dataset.bound = '1';
  }
};

const bindCarousel = (container, prevBtn, nextBtn, dotsTarget, step = 320) => {
  if (!container) return;

  const getPageCount = () => Math.max(1, Math.ceil(container.scrollWidth / Math.max(container.clientWidth, 1)));
  const getPageIndex = () => {
    const width = Math.max(container.clientWidth, 1);
    return Math.round(container.scrollLeft / width);
  };

  const renderDots = () => {
    if (!dotsTarget) return;
    clearChildren(dotsTarget);
    const pages = getPageCount();
    const active = getPageIndex();
    for (let i = 0; i < pages; i += 1) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === active ? 'active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.onclick = () => {
        container.scrollTo({ left: i * container.clientWidth, behavior: 'smooth' });
      };
      dotsTarget.appendChild(dot);
    }
  };

  const updateUI = () => {
    const maxScroll = container.scrollWidth - container.clientWidth - 2;
    if (prevBtn) prevBtn.disabled = container.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = container.scrollLeft >= maxScroll;
    renderDots();
  };

  if (prevBtn) {
    prevBtn.onclick = () => {
      container.scrollBy({ left: -step, behavior: 'smooth' });
      setTimeout(updateUI, 240);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      container.scrollBy({ left: step, behavior: 'smooth' });
      setTimeout(updateUI, 240);
    };
  }

  container.onscroll = updateUI;
  if (!container.dataset.resizeBound) {
    window.addEventListener('resize', updateUI, { passive: true });
    container.dataset.resizeBound = '1';
  }
  setTimeout(updateUI, 100);
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

const renderCertified = () => {
  if (!certifiedGrid) return;
  clearChildren(certifiedGrid);

  const items = [
    { src: 'assets/Certified/01.png', alt: 'Microsoft Partner', label: 'Microsoft Partner' },
    { src: 'assets/Certified/02.png', alt: 'HP Partner', label: 'HP e-Korea Partner' },
    { src: 'assets/Certified/03.png', alt: 'OCS Certified', label: 'OCS Certified' }
  ];

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'certified-card';
    card.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" />
      <p>${item.label}</p>
    `;
    certifiedGrid.appendChild(card);
  });
};

const renderCertifiedTimeline = () => {
  if (!certifiedTimeline || !certifiedHistoryTabs) return;
  clearChildren(certifiedTimeline);
  clearChildren(certifiedHistoryTabs);

  const timeline = state.legacy.timeline;
  if (!timeline || !Array.isArray(timeline.content)) return;

  const isKo = state.locale === 'ko';
  const categories = {
    all: {
      label: isKo ? '전체 주요 연혁' : 'All Milestones',
      icon: 'calendar-range',
      test: /./i
    },
    cert: {
      label: isKo ? '인증' : 'Certification',
      icon: 'badge-check',
      test: /인증|cert|inno-biz|msp/i
    },
    award: {
      label: isKo ? '수상' : 'Awards',
      icon: 'trophy',
      test: /수상|award|대상/i
    },
    partner: {
      label: isKo ? '대외협력' : 'Partnership',
      icon: 'handshake',
      test: /협력|협정|partnership|partner|isv|hp|samsung|microsoft/i
    },
    product: {
      label: isKo ? '제품출시/공급' : 'Product Milestones',
      icon: 'rocket',
      test: /공급|출시|솔루션|개발|구축|수주|서비스/i
    }
  };

  if (!categories[state.activeTimelineCategory]) {
    state.activeTimelineCategory = 'cert';
  }

  Object.entries(categories).forEach(([key, category]) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `history-tab ${state.activeTimelineCategory === key ? 'active' : ''}`;
    btn.innerHTML = `<i data-lucide="${category.icon}"></i><span>${category.label}</span>`;
    btn.onclick = () => {
      state.activeTimelineCategory = key;
      state.timelineExpanded = false;
      renderCertifiedTimeline();
      refreshIcons();
    };
    certifiedHistoryTabs.appendChild(btn);
  });

  const activeCategory = categories[state.activeTimelineCategory];
  const flatEntries = timeline.content
    .filter((row) => row && row.year && Array.isArray(row.content))
    .flatMap((row) => row.content
      .filter((text) => activeCategory.test.test(text))
      .map((text) => ({ year: row.year, text })));

  if (!flatEntries.length) {
    const empty = document.createElement('article');
    empty.className = 'timeline-item';
    empty.innerHTML = `<ul class="timeline-list"><li>${isKo ? '해당 분류의 연혁 데이터가 없습니다.' : 'No timeline entries for this category.'}</li></ul>`;
    certifiedTimeline.appendChild(empty);
    return;
  }

  const collapsedLimit = state.activeTimelineCategory === 'all' ? 8 : 10;
  const visibleEntries = state.timelineExpanded ? flatEntries : flatEntries.slice(-collapsedLimit);

  const feed = document.createElement('div');
  feed.className = 'timeline-feed';

  visibleEntries.forEach((entry, idx) => {
    const row = document.createElement('article');
    row.className = 'timeline-feed-item';
    const isLast = idx === visibleEntries.length - 1;

    row.innerHTML = `
      <div class="timeline-rail">
        <span class="timeline-dot"></span>
        <span class="timeline-line ${isLast ? 'is-end' : ''}"></span>
      </div>
      <div class="timeline-body">
        <div class="timeline-meta">${entry.year}</div>
        <p>${entry.text}</p>
      </div>
      <span class="timeline-thumb"><i data-lucide="${activeCategory.icon}"></i></span>
    `;
    feed.appendChild(row);
  });

  const tags = document.createElement('div');
  tags.className = 'timeline-tags';
  const tagItems = [activeCategory.label, isKo ? '연혁' : 'Timeline', isKo ? '파트너십' : 'Partnership'];
  tagItems.forEach((label) => {
    const chip = document.createElement('span');
    chip.className = 'timeline-tag';
    chip.textContent = `#${label}`;
    tags.appendChild(chip);
  });

  certifiedTimeline.appendChild(feed);
  certifiedTimeline.appendChild(tags);

  if (flatEntries.length > collapsedLimit) {
    const moreBtn = document.createElement('button');
    moreBtn.type = 'button';
    moreBtn.className = 'timeline-more';
    moreBtn.textContent = state.timelineExpanded
      ? (isKo ? '접기' : 'Collapse')
      : (isKo ? `전체 연혁 보기 (${flatEntries.length}건)` : `View all milestones (${flatEntries.length})`);
    moreBtn.onclick = () => {
      state.timelineExpanded = !state.timelineExpanded;
      renderCertifiedTimeline();
      refreshIcons();
    };
    certifiedTimeline.appendChild(moreBtn);
  }
};

const renderCompanyFacts = () => {
  if (!companyFacts) return;
  const timeline = state.legacy.timeline;
  if (!timeline || !timeline.init) {
    companyFacts.innerHTML = '';
    return;
  }

  const isKo = state.locale === 'ko';
  const init = timeline.init;
  const facts = [
    { label: isKo ? '회사명' : 'Company', value: init.company || '-' },
    { label: isKo ? '설립' : 'Founded', value: init.birth || '-' },
    { label: isKo ? '대표' : 'CEO', value: init.ceo || '-' },
    { label: isKo ? '사업영역' : 'Business Area', value: init.area || '-' }
  ];

  companyFacts.innerHTML = `
    <article class="company-facts-card">
      <h3>${isKo ? '기업 기본 이력' : 'Company Snapshot'}</h3>
      <ul>
        ${facts.map((fact) => `<li><strong>${fact.label}</strong><span>${fact.value}</span></li>`).join('')}
      </ul>
    </article>
  `;
};

const renderSpotlight = (spotlight = {}) => {
  spotlightEyebrow.textContent = spotlight.eyebrow || '';
  spotlightTitle.textContent = spotlight.title || '';
  spotlightDescription.textContent = spotlight.description || '';
  clearChildren(spotlightCards);

  const icons = ['heart-pulse', 'briefcase-business', 'cloud-cog'];
  (spotlight.points || []).slice(0, 3).forEach((point, idx) => {
    const item = document.createElement('article');
    item.className = 'spotlight-card';
    item.innerHTML = `
      <span class="spotlight-card__icon"><i data-lucide="${icons[idx % icons.length]}"></i></span>
      <p>${point}</p>
    `;
    spotlightCards.appendChild(item);
  });
};

const renderProductFocus = () => {
  if (!productTabs || !productTabContent || !productFocusTitle || !productFocusDesc || !productFocusKicker) return;

  const isKo = state.locale === 'ko';
  const emr = state.legacy.emr || {};
  const tabMap = {
    treatment: {
      label: isKo ? '진료 EMR' : 'Clinical EMR',
      title: isKo ? '종이 없는 스마트 진료 환경 구축' : 'Paperless clinical workflow',
      points: (emr.treatment || []).slice(0, 3),
      image: 'assets/Metro_product/OCS/01.JPG',
      imageLabel: isKo ? '레거시 OCS 진료 화면' : 'Legacy OCS clinical screen'
    },
    nurse: {
      label: isKo ? '간호 EMR' : 'Nursing EMR',
      title: isKo ? '간호 프로세스 표준화와 기록 자동화' : 'Standardized nursing operations',
      points: (emr.nurse || []).slice(0, 3),
      image: 'assets/Metro_product/OCS/00.png',
      imageLabel: isKo ? '레거시 OCS 간호 화면' : 'Legacy OCS nursing screen'
    },
    security: {
      label: isKo ? '보안/인증' : 'Security',
      title: isKo ? '의료정보 보호를 위한 인증 체계' : 'Protection-focused authentication',
      points: ((emr.security && emr.security[1] && emr.security[1].content) || []).slice(0, 3),
      image: 'assets/Metro_product/OCS/08.JPG',
      imageLabel: isKo ? '레거시 OCS 관리 화면' : 'Legacy OCS management screen'
    }
  };

  const defaultTab = tabMap[state.activeProductTab] ? state.activeProductTab : 'treatment';
  state.activeProductTab = defaultTab;

  productFocusKicker.textContent = isKo ? 'Metro-EMR Value' : 'Metro-EMR Value';
  productFocusTitle.textContent = isKo ? '병원 도입 후 바로 체감하는 운영 효율' : 'Immediate operational value for hospitals';
  productFocusDesc.textContent = isKo
    ? '기능 목록이 아닌 실제 업무 개선 포인트 중심으로 핵심만 요약했습니다.'
    : 'We summarize practical workflow benefits rather than listing every technical feature.';

  clearChildren(productTabs);
  Object.entries(tabMap).forEach(([key, tab]) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `product-tab ${key === state.activeProductTab ? 'active' : ''}`;
    btn.textContent = tab.label;
    btn.onclick = () => {
      state.activeProductTab = key;
      renderProductFocus();
      refreshIcons();
    };
    productTabs.appendChild(btn);
  });

  const current = tabMap[state.activeProductTab];
  productTabContent.innerHTML = `
    <h4>${current.title}</h4>
    <ul>${(current.points || []).map((p) => `<li>${p}</li>`).join('')}</ul>
    <div class="product-mockup">
      <div class="product-mockup__header">
        <span></span><span></span><span></span>
      </div>
      <div class="product-mockup__screen">
        <img src="${current.image}" alt="${current.imageLabel}" />
      </div>
      <p class="product-mockup__label">${current.imageLabel}</p>
    </div>
  `;
};

const renderFeatureStack = () => {
  const ocs = state.legacy.ocs;
  if (!featureTabs || !featurePanel) return;
  clearChildren(featureTabs);
  clearChildren(featurePanel);
  if (!ocs || !Array.isArray(ocs.composition)) return;

  const isKo = state.locale === 'ko';
  const headers = isKo
    ? ['원무/보험', '진료', '진료지원', '경영관리']
    : ['Admin/Insurance', 'Clinical', 'Care Support', 'Management'];
  const icons = ['file-text', 'heart-pulse', 'flask-conical', 'chart-no-axes-column'];

  if (state.activeFeatureTab >= headers.length) state.activeFeatureTab = 0;

  headers.forEach((label, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `feature-tab ${state.activeFeatureTab === idx ? 'active' : ''}`;
    btn.innerHTML = `<i data-lucide="${icons[idx] || 'circle'}"></i><span>${label}</span>`;
    btn.onclick = () => {
      state.activeFeatureTab = idx;
      renderFeatureStack();
      refreshIcons();
    };
    featureTabs.appendChild(btn);
  });

  const mockImages = [
    'assets/Metro_product/OCS/00.png',
    'assets/Metro_product/OCS/01.JPG',
    'assets/Metro_product/OCS/03.JPG',
    'assets/Metro_product/OCS/08.JPG'
  ];

  const selected = ocs.composition[state.activeFeatureTab] || [];
  const title = document.createElement('h4');
  title.textContent = headers[state.activeFeatureTab];

  const list = document.createElement('ul');
  list.className = 'feature-list';
  selected.slice(0, 12).forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });

  const mock = document.createElement('div');
  mock.className = 'feature-mock';
  mock.innerHTML = `
    <img src="${mockImages[state.activeFeatureTab]}" alt="${headers[state.activeFeatureTab]} mock" />
  `;

  featurePanel.appendChild(title);
  featurePanel.appendChild(list);
  featurePanel.appendChild(mock);
};

const renderProductImageGrid = () => {
  if (!productImages) return;
  clearChildren(productImages);

  const iconCycle = ['file-text', 'shield-check', 'stethoscope', 'flask-conical', 'folder-open', 'messages-square', 'tablet-smartphone'];
  const ocs = state.legacy.ocs;

  const labels = [];
  if (ocs && Array.isArray(ocs.Lists)) {
    ocs.Lists.forEach((group) => {
      const title = (group.title || '').replace(/^\d+\.\s*/, '').trim();
      if (title) labels.push(title);
    });
  }

  const fallback = state.locale === 'ko'
    ? ['원무/보험', '진료', '진료지원', '검진', '약국', '경영관리', '모바일']
    : ['Admin', 'Clinical', 'Support', 'Checkup', 'Pharmacy', 'Management', 'Mobile'];

  const uniqueLabels = Array.from(new Set((labels.length ? labels : fallback))).slice(0, 8);

  uniqueLabels.forEach((label, idx) => {
    const tile = document.createElement('article');
    tile.className = 'feature-thumb';
    tile.innerHTML = `
      <span class="feature-thumb__icon"><i data-lucide="${iconCycle[idx % iconCycle.length]}"></i></span>
      <p>${label}</p>
    `;
    productImages.appendChild(tile);
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

const renderOrganizationSummary = () => {
  if (!orgSummary) return;
  clearChildren(orgSummary);

  const org = state.legacy.organization;
  if (!org || !Array.isArray(org.content)) return;

  const isKo = state.locale === 'ko';
  const units = org.content
    .map((row) => Object.values(row || {})[0])
    .filter(Boolean)
    .slice(0, 7);

  orgSummary.innerHTML = `
    <article class="org-card">
      <h3>${isKo ? '조직도 요약' : 'Organization Snapshot'}</h3>
      <p>${org.title || ''}</p>
      <div class="org-meta">
        <span>${isKo ? '기준일' : 'Updated'}: ${org.updata_date || '-'}</span>
        <span>${isKo ? '정원/현원' : 'Headcount'}: ${org.total || '-'} / ${org.now || '-'}</span>
      </div>
      <ul>${units.map((name) => `<li>${name}</li>`).join('')}</ul>
    </article>
  `;
};

const renderTimelineSummary = () => {
  if (!timelineSummary) return;
  const timeline = state.legacy.timeline;
  const isKo = state.locale === 'ko';

  if (!timeline || !Array.isArray(timeline.content)) {
    timelineSummary.innerHTML = '';
    return;
  }

  const milestones = timeline.content
    .filter((row) => row && row.year && Array.isArray(row.content))
    .slice(-4)
    .map((row) => {
      const latest = row.content[row.content.length - 1] || '';
      return { year: row.year, text: latest };
    })
    .filter((item) => item.text);

  timelineSummary.innerHTML = `
    <article class="timeline-summary-card">
      <h3>${isKo ? '회사 연혁 하이라이트' : 'Company Timeline Highlights'}</h3>
      <p>${isKo ? '레거시 연혁 데이터에서 최근 주요 이력을 요약했습니다.' : 'Recent milestones summarized from legacy timeline data.'}</p>
      <ul>
        ${milestones.map((m) => `<li><strong>${m.year}</strong><span>${m.text}</span></li>`).join('')}
      </ul>
    </article>
  `;
};

const renderCeoMessage = () => {
  if (!ceoMessage) return;
  const ceo = state.legacy.ceo;
  const timeline = state.legacy.timeline;
  const isKo = state.locale === 'ko';

  if (!ceo || !Array.isArray(ceo.content)) {
    ceoMessage.innerHTML = '';
    return;
  }

  const ceoName = (timeline && timeline.init && timeline.init.ceo) ? timeline.init.ceo : (isKo ? '대표이사' : 'CEO');
  const quote = (ceo.content || []).slice(0, 2).join(' ').replace(/\s+/g, ' ').trim();

  ceoMessage.innerHTML = `
    <article class="ceo-card">
      <h3>${isKo ? '대표 인사말 요약' : 'CEO Message Snapshot'}</h3>
      <p>${isKo ? '레거시 회사소개 문구를 현대 페이지에 그대로 연결했습니다.' : 'Legacy company-introduction text is preserved on this page.'}</p>
      <blockquote class="ceo-card__quote">${quote}</blockquote>
      <div class="ceo-card__sign">${ceo.finish || ceoName}</div>
    </article>
  `;
};

const renderRemoteSupport = () => {
  if (!remoteSupport) return;
  const isKo = state.locale === 'ko';

  remoteSupport.innerHTML = `
    <article class="remote-card">
      <div>
        <h3>${isKo ? '원격지원' : 'Remote Support'}</h3>
        <p>${isKo
          ? '장애 발생 시 원격 접속으로 문제를 빠르게 진단/해결해드립니다.'
          : 'When issues occur, we diagnose and resolve quickly via remote access.'}</p>
      </div>
      <a class="remote-card__btn" href="http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe" target="_blank" rel="noreferrer noopener">
        ${isKo ? '원격지원 실행파일 다운로드' : 'Download QuickSupport'}
      </a>
    </article>
  `;
};

const renderSupportLinks = () => {
  if (!supportLinks) return;
  const isKo = state.locale === 'ko';
  const customer = state.legacy.customer;
  const headContact = (((customer && customer.address && customer.address[0]) || {}).content || [])[3] || '';
  const [headEmail = 'customer@metrosoft.co.kr'] = headContact.split('/');

  supportLinks.innerHTML = `
    <a class="support-link-card" href="http://www.metrosoft.co.kr/customer" target="_blank" rel="noreferrer noopener">
      <strong>${isKo ? '고객지원' : 'Customer Support'}</strong>
      <span>${isKo ? '문의 채널 및 운영 안내' : 'Inquiry channels and operating guide'}</span>
    </a>
    <a class="support-link-card" href="http://www.metrosoft.co.kr/notice" target="_blank" rel="noreferrer noopener">
      <strong>${isKo ? '공지사항' : 'Notices'}</strong>
      <span>${isKo ? '업데이트/점검 공지 확인' : 'Check updates and maintenance notices'}</span>
    </a>
    <a class="support-link-card" href="http://www.metrosoft.co.kr/qna" target="_blank" rel="noreferrer noopener">
      <strong>${isKo ? 'Q&A / FAQ' : 'Q&A / FAQ'}</strong>
      <span>${isKo ? '자주 묻는 질문 바로가기' : 'Go to frequently asked questions'}</span>
    </a>
    <a class="support-link-card" href="mailto:${headEmail}?subject=${encodeURIComponent(isKo ? 'Metrosoft 솔루션 데모 요청' : 'Metrosoft Demo Request')}">
      <strong>${isKo ? '데모 신청' : 'Request Demo'}</strong>
      <span>${isKo ? '도입 검토용 제품 데모를 요청합니다.' : 'Ask for a product demo for evaluation.'}</span>
    </a>
    <a class="support-link-card" href="mailto:${headEmail}?subject=${encodeURIComponent(isKo ? '맞춤 제안서 요청' : 'Request Proposal')}">
      <strong>${isKo ? '맞춤 제안서 요청' : 'Request Proposal'}</strong>
      <span>${isKo ? '병원 규모/요구사항 기반 제안서 요청' : 'Get a proposal tailored to your hospital.'}</span>
    </a>
  `;
};

const renderSupportContacts = () => {
  if (!supportContacts) return;
  const customer = state.legacy.customer;
  const isKo = state.locale === 'ko';

  if (!customer || !Array.isArray(customer.address) || customer.address.length < 4) {
    supportContacts.innerHTML = '';
    return;
  }

  const rows = customer.address.slice(1).map((entry) => {
    const content = entry.content || [];
    return {
      team: (content[0] || '').trim(),
      name: (content[1] || '').trim(),
      role: (content[2] || '').trim(),
      contact: (content[3] || '').trim()
    };
  }).filter((row) => row.team || row.name || row.contact);

  const headContact = (((customer.address[0] || {}).content || [])[3] || '').trim();
  const [headEmail = '', headPhone = ''] = headContact.split('/');

  supportContacts.innerHTML = `
    <article class="support-contact-card">
      <h3>${isKo ? '고객지원 담당자' : 'Support Contacts'}</h3>
      <p>${isKo ? '레거시 고객센터 데이터 기반 담당자 안내' : 'Contact list based on legacy customer-center data.'}</p>
      <div class="support-contact-quick">
        <a href="mailto:${headEmail}">
          <strong>${isKo ? '대표 메일' : 'Main Email'}</strong>
          <span>${headEmail || 'customer@metrosoft.co.kr'}</span>
        </a>
        <a href="tel:${(headPhone || '').replace(/[^0-9+]/g, '')}">
          <strong>${isKo ? '대표 전화' : 'Main Phone'}</strong>
          <span>${headPhone || '031-465-9971~3'}</span>
        </a>
      </div>
      <div class="support-contact-grid">
        ${rows.slice(0, 4).map((row) => `
          <div class="support-contact-item">
            <strong>${row.team || '-'}</strong>
            <span>${[row.name, row.role].filter(Boolean).join(' · ')}</span>
            <em>${row.contact || '-'}</em>
          </div>
        `).join('')}
      </div>
    </article>
  `;
};

const renderCompanyMap = () => {
  if (!companyMap) return;
  const isKo = state.locale === 'ko';
  const query = encodeURIComponent('경기도 안양시 동안구 흥안대로 427번길 16 평촌디지털엠파이어 607호 메트로소프트');

  companyMap.innerHTML = `
    <div class="company-map__header">
      <h3>${isKo ? '오시는 길' : 'Directions'}</h3>
      <a href="https://maps.google.com/?q=${query}" target="_blank" rel="noreferrer noopener">
        ${isKo ? '지도 앱에서 열기' : 'Open in Maps'}
      </a>
    </div>
    <iframe
      title="Metrosoft map"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://maps.google.com/maps?q=${query}&z=16&output=embed"></iframe>
  `;
};

const renderHospitalGrid = () => {
  const hospitals = state.legacy.hospitals;
  if (!hospitalGrid) return;
  clearChildren(hospitalGrid);
  if (!hospitals || !Array.isArray(hospitals.content)) return;

  const logos = hospitals.content
    .filter((h) => h && h.img)
    .map((h) => ({
      title: h.title || 'hospital',
      url: h.url || '#',
      src: `assets/Hospital_icon/${(h.img || '').replace(/^\//, '')}`
    }));

  if (!logos.length) return;

  hospitalGrid.style.setProperty('--ticker-duration', `${Math.max(26, logos.length * 4)}s`);

  const rendered = [...logos, ...logos];
  rendered.forEach((h) => {
    const a = document.createElement('a');
    a.className = 'hospital-logo';
    a.href = h.url;
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    a.title = h.title;

    const img = document.createElement('img');
    img.src = h.src;
    img.alt = h.title;

    img.onerror = () => {
      a.remove();
    };

    a.appendChild(img);
    hospitalGrid.appendChild(a);
  });
};

const renderNewsSkeleton = (count = 4) => {
  if (!newsList) return;
  clearChildren(newsList);
  for (let i = 0; i < count; i += 1) {
    const card = document.createElement('article');
    card.className = 'news-card skeleton';
    card.innerHTML = `
      <div class="skeleton-line w-90"></div>
      <div class="skeleton-line w-70"></div>
      <div class="skeleton-line w-40"></div>
    `;
    newsList.appendChild(card);
  }
};

const renderNews = () => {
  if (!newsList) return;

  if (state.newsLoading && !state.metroNews.length) {
    renderNewsSkeleton();
    return;
  }

  clearChildren(newsList);
  if (!state.metroNews.length) {
    const fallback = document.createElement('article');
    fallback.className = 'news-card loading';
    fallback.innerHTML = `<span class="loading-spinner" aria-hidden="true"></span>${state.locale === 'ko' ? '관련 뉴스를 찾지 못했습니다.' : 'No Metrosoft-related news found.'}`;
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

const NEWS_CACHE_KEY = 'metrosoft-news-cache-v1';
const NEWS_CACHE_TTL_MS = 1000 * 60 * 30; // 30분

const readNewsCache = () => {
  try {
    const raw = localStorage.getItem(NEWS_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items) || !parsed.ts) return null;
    return parsed;
  } catch (error) {
    return null;
  }
};

const writeNewsCache = (items = []) => {
  try {
    localStorage.setItem(
      NEWS_CACHE_KEY,
      JSON.stringify({
        ts: Date.now(),
        items
      })
    );
  } catch (error) {
    console.warn('Failed to write Metrosoft news cache:', error);
  }
};

const fetchMetroNews = async () => {
  const cached = readNewsCache();
  if (cached?.items?.length) {
    state.metroNews = cached.items;
    state.newsLoading = false;
    renderNews();
  } else {
    state.newsLoading = true;
    renderNews();
  }

  const cacheFresh = cached && Date.now() - cached.ts < NEWS_CACHE_TTL_MS;
  if (cacheFresh) return;

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

    writeNewsCache(state.metroNews);
    state.newsLoading = false;
  } catch (error) {
    console.error('Failed to fetch Metrosoft news:', error);
    if (!cached?.items?.length) {
      state.metroNews = [];
    }
    state.newsLoading = false;
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

  const cloud = state.legacy.cloud;
  if (cloud && cloud.Title) {
    out.business = out.business || [];
    out.business.push({
      title: cloud.Title.title || '클라우드형 ERP',
      description: firstSentence(cloud.Title.content || ''),
      points: (cloud.features || []).slice(0, 3).map((f) => firstSentence(f.title || ''))
    });
  }

  const voip = state.legacy.voip;
  if (voip && (voip.features || voip.effects)) {
    out.business = out.business || [];
    out.business.push({
      title: 'VOIP 사업',
      description: firstSentence(voip.intro || '인터넷 기반 양방향 통신 서비스'),
      points: (voip.effects || []).slice(0, 3)
    });
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
  const timeline = state.legacy.timeline;
  if (ceo) {
    const init = timeline && timeline.init ? timeline.init : {};
    const company = init.company || '메트로소프트(주)';
    const ceoName = init.ceo || '-';
    const founded = init.birth || '-';
    const homepage = init.homepage || 'www.metrosoft.co.kr';
    const companyAddress = init.address || '경기도 안양시 동안구 흥안대로 427번길 16 평촌디지털엠파이어 607호';
    const mainTel = (init.tel || '').replace(/\s+/g, ' ').trim() || '031-465-9971~3 / 031-465-9974';

    out.introduce = [
      {
        title: ceo.title || 'CEO 인사말',
        description: ceo.subtitle || '메트로소프트에 방문해 주셔서 감사합니다.',
        points: [
          ...((ceo.content || []).slice(0, 3).map((text) => firstSentence(text))),
          firstSentence(ceo.finish || '')
        ].filter(Boolean)
      },
      {
        title: '회사소개',
        description: '레거시 회사 기본정보(JSON) 기준으로 핵심 항목을 정리했습니다.',
        points: [
          `법인명: ${company} / 대표: ${ceoName}`,
          `사업분야: ${init.area || '의료정보시스템 · 헬스케어 · 통신 부가서비스'}`,
          `설립: ${founded} / 홈페이지: ${homepage}`
        ]
      },
      {
        title: '오시는 길',
        description: companyAddress,
        points: [
          companyAddress,
          `대표 연락처: ${mainTel}`,
          '지하철: 금정역 2번 출구 직진 200m → 미니스톱 좌회전 → 교량통과 후 우측 건물',
          '버스: 범계역 6-2번(LS타워 하차), 명학역 1번 출구 65번(LS타워 하차)'
        ]
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

  // 제품/소개/고객은 원본 컴포넌트 데이터를 우선 사용해 중복 카드 최소화
  if (legacyKey === 'product' || legacyKey === 'introduce' || legacyKey === 'customer') {
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
  bindMobileNav();
  bindActiveNav();
  renderMenuStrips(menuConfig.strips || {});

  const metrics = Array.isArray(t.metrics) ? [...t.metrics] : [];
  const founded = parseInt(String((((state.legacy.timeline || {}).init || {}).birth || '')).match(/\d{4}/)?.[0] || '', 10);
  const currentYear = new Date().getFullYear();
  const hospitalsCount = Array.isArray(((state.legacy.hospitals || {}).content)) ? state.legacy.hospitals.content.length : null;
  if (metrics[0] && hospitalsCount) metrics[0].value = `${hospitalsCount}+`;
  if (metrics[3] && Number.isFinite(founded)) {
    const years = Math.max(1, currentYear - founded);
    metrics[3].value = `${years}yr`;
  }
  renderMetrics(metrics);

  if (certifiedTitle) certifiedTitle.textContent = 'Certified Partnership';
  if (certifiedSub) certifiedSub.textContent = state.locale === 'ko'
    ? '기존 프로젝트의 파트너 인증 자산을 기반으로 구성했습니다.'
    : 'Built with legacy partner certification assets from the original project.';
  renderCertified();
  renderCertifiedTimeline();
  renderCompanyFacts();
  renderSpotlight(t.spotlight || {});
  if (productTableTitle) productTableTitle.textContent = state.locale === 'ko' ? 'OCS 기능 카테고리' : 'OCS Feature Categories';
  if (productTableSub) productTableSub.textContent = state.locale === 'ko' ? '필요한 영역만 탭으로 선택해 핵심 기능을 빠르게 확인할 수 있습니다.' : 'Use tabs to focus on the feature area you need.';

  Object.keys(titleTargets).forEach((key) => {
    if (titleTargets[key]) titleTargets[key].textContent = t.titles[key] || key;
    if (subTargets[key]) subTargets[key].textContent = (t.subs && t.subs[key]) || '';
  });

  renderCards(sectionTargets.highlights, t.highlights, 'highlights');
  renderCards(sectionTargets.business, mergeCards(t.business, 'business', legacyCards), 'business');
  renderCards(sectionTargets.product, mergeCards(t.product, 'product', legacyCards), 'product');
  renderProductFocus();
  renderCards(sectionTargets.introduce, mergeCards(t.introduce, 'introduce', legacyCards), 'introduce');
  renderCards(sectionTargets.customer, mergeCards(t.customer, 'customer', legacyCards), 'customer');

  renderOrganizationSummary();
  renderTimelineSummary();
  renderCeoMessage();
  renderRemoteSupport();
  renderSupportLinks();
  renderSupportContacts();
  renderFeatureStack();
  renderProductImageGrid();
  renderProductTree();
  renderCustomerTable();
  renderHospitalGrid();

  bindCarousel(productImages, productPrevBtn, productNextBtn, productDots, 380);

  if (hospitalTitle) hospitalTitle.textContent = state.locale === 'ko' ? '주요 고객사 병원' : 'Major Partner Hospitals';
  if (hospitalSub) hospitalSub.textContent = state.locale === 'ko' ? '대표 병원 로고를 자동 롤링 방식으로 소개합니다.' : 'Featured hospital logos in an automatic rolling ticker.';

  if (newsTitle) newsTitle.textContent = state.locale === 'ko' ? 'Metrosoft News' : 'Metrosoft News';
  if (newsSub) newsSub.textContent = state.locale === 'ko' ? 'Google RSS에서 메트로소프트가 제목에 포함된 기사만 표시합니다.' : 'Showing only Google RSS headlines containing Metrosoft.';
  renderNews();

  if (t.cta) {
    ctaTitle.textContent = t.cta.title || '';
    ctaDescription.textContent = t.cta.description || '';
    ctaButton.textContent = t.cta.button || '';
  }

  const companyInfo = state.locale === 'ko'
    ? {
      title: '회사 정보 · 이용 안내',
      overviewTitle: '기업 기본 정보',
      overview: [
        '상호: 메트로소프트(주)',
        '사업자번호: 105-86-28613',
        '별정통신사업자 등록: 제111068호'
      ],
      contactTitle: '고객지원 / 문의하기',
      contact: [
        '대표전화: 031-465-9971~3 / FAX: 031-465-9974',
        '대표 메일: customer@metrosoft.co.kr',
        '문의 채널: 고객지원 · 원격지원'
      ],
      accessTitle: '본사 주소 · 이용안내',
      access: [
        '본사주소: 경기도 안양시 동안구 흥안대로 427번길 16 평촌디지털엠파이어 607호',
        '지하철: 금정역 2번 출구 직진 200m 후 미니스톱 좌회전',
        '버스: 범계역 6-2번/명학역 65번 LS타워 하차'
      ],
      quickLabel: '빠른 문의'
    }
    : {
      title: 'Company Info · Visitor Guide',
      overviewTitle: 'Corporate Details',
      overview: [
        'Company: Metrosoft Co., Ltd.',
        'Business ID: 105-86-28613',
        'Value-Added Telecom License: No.111068'
      ],
      contactTitle: 'Support / Inquiries',
      contact: [
        'Main: +82-31-465-9971~3 / FAX: +82-31-465-9974',
        'Email: customer@metrosoft.co.kr',
        'Channels: Support · Remote Assistance'
      ],
      accessTitle: 'Head Office · Visitor Guide',
      access: [
        'Address: #607, 16 Heungan-daero 427beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do',
        'Subway: Geumjeong Stn Exit 2, about 200m then left at Mini Stop',
        'Bus: Beomgye 6-2 / Myeonghak 65, get off at LS Tower'
      ],
      quickLabel: 'Quick Inquiry'
    };

  if (companyTitle) companyTitle.textContent = companyInfo.title;
  if (companyOverviewTitle) companyOverviewTitle.textContent = companyInfo.overviewTitle;
  renderSimpleList(companyOverviewList, companyInfo.overview);
  if (companyContactTitle) companyContactTitle.textContent = companyInfo.contactTitle;
  renderSimpleList(companyContactList, companyInfo.contact);
  if (companyAccessTitle) companyAccessTitle.textContent = companyInfo.accessTitle;
  renderSimpleList(companyAccessList, companyInfo.access);
  renderCompanyMap();
  if (quickInquiryText) quickInquiryText.textContent = companyInfo.quickLabel;
  if (quickRemoteText) quickRemoteText.textContent = state.locale === 'ko' ? '원격지원' : 'Remote Support';

  refreshIcons();

  localeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.locale === state.locale);
  });
};

const fetchJson = (path) => fetch(path).then((res) => (res.ok ? res.json() : null)).catch(() => null);

Promise.all([
  fetchJson('data/translations.json'),
  fetchJson('data/legacy/Business/MetroHIS.json'),
  fetchJson('data/legacy/Business/Cloud.json'),
  fetchJson('data/legacy/Business/VOIP.json'),
  fetchJson('data/legacy/Product/EMR.json'),
  fetchJson('data/legacy/Product/iEMR.json'),
  fetchJson('data/legacy/Product/OCS.json'),
  fetchJson('data/legacy/Product/ERP.json'),
  fetchJson('data/legacy/Product/CRM.json'),
  fetchJson('data/legacy/Product/mPOC.json'),
  fetchJson('data/legacy/Introduce/CeoIntroduce.json'),
  fetchJson('data/legacy/Customer/index.json'),
  fetchJson('data/legacy/Business/Hospital.json'),
  fetchJson('data/legacy/Introduce/Timeline.json'),
  fetchJson('data/legacy/Introduce/Organization.json')
]).then(([
  translations,
  metroHis,
  cloud,
  voip,
  emr,
  iemr,
  ocs,
  erp,
  crm,
  mpoc,
  ceo,
  customer,
  hospitals,
  timeline,
  organization
]) => {
  state.translations = translations;
  state.legacy = { metroHis, cloud, voip, emr, iemr, ocs, erp, crm, mpoc, ceo, customer, hospitals, timeline, organization };
  render();
  fetchMetroNews();
}).catch((err) => {
  console.error('Failed to initialize data:', err);
});

localeButtons.forEach((button) => {
  button.addEventListener('click', () => setLocale(button.dataset.locale));
});
