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
const heroQuickLinks = $('[data-hero-quick-links]');
const nav = $('[data-nav]');
const headerInner = document.querySelector('.header-inner');
const navToggle = $('[data-nav-toggle]');
const localeButtons = $$('[data-locale]');
const metricsTarget = $('[data-metrics]');
const footerYear = $('[data-footer-year]');
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
const quickDemoText = $('[data-quick-demo-text]');
const quickRemoteText = $('[data-quick-remote-text]');
const headerUtility = $('[data-header-utility]');
const customerQuickMenu = $('[data-customer-quick-menu]');

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
const recruitHub = $('[data-recruit-hub]');
const remoteSupport = $('[data-remote-support]');
const supportLinks = $('[data-support-links]');
const resourceCenter = $('[data-resource-center]');
const quoteProcess = $('[data-quote-process]');
const supportContacts = $('[data-support-contacts]');
const legacySitemap = $('[data-legacy-sitemap]');
const productKpi = $('[data-product-kpi]');
const ocsModules = $('[data-ocs-modules]');
const productLegacyLinks = $('[data-product-legacy-links]');
const companyMap = $('[data-company-map]');
const footerLegacyLinks = $('[data-footer-legacy-links]');
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
      customer: ['고객지원', '견적요청', '연락처', '자료실', '공지사항', '원격지원']
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
      customer: ['Support', 'Quotation', 'Contacts', 'Resources', 'Notice', 'Remote']
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
    const descLimit = key === 'product' ? 92 : 78;
    desc.textContent = compactText(card.description, descLimit);

    const list = document.createElement('ul');
    const rawPoints = card.points || [];
    const maxPoints = key === 'product' ? 3 : 2;
    const limitedPoints = rawPoints.slice(0, maxPoints);
    limitedPoints.forEach((point) => {
      const li = document.createElement('li');
      li.textContent = compactText(point, 56);
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
  const timelineEntries = Array.isArray(timeline.content)
    ? timeline.content.flatMap((row) => (Array.isArray(row && row.content) ? row.content : []))
    : [];
  const certCount = timelineEntries.filter((text) => /인증|cert|inno-biz|벤처|msp/i.test(String(text || ''))).length;
  const partnerHospitals = ((state.legacy.hospitals || {}).content || []).filter((item) => item && item.title).length;

  const facts = [
    { label: isKo ? '회사명' : 'Company', value: init.company || '-' },
    { label: isKo ? '설립' : 'Founded', value: init.birth || '-' },
    { label: isKo ? '대표' : 'CEO', value: init.ceo || '-' },
    { label: isKo ? '사업영역' : 'Business Area', value: init.area || '-' },
    { label: isKo ? '인증/파트너 이력' : 'Certification Milestones', value: certCount ? `${certCount}${isKo ? '건' : ''}` : '-' },
    { label: isKo ? '레퍼런스 병원 로고' : 'Partner Hospital Logos', value: partnerHospitals ? `${partnerHospitals}${isKo ? '개' : ''}` : '-' }
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
      imageLabel: isKo ? 'OCS 진료 화면' : 'OCS clinical screen'
    },
    nurse: {
      label: isKo ? '간호 EMR' : 'Nursing EMR',
      title: isKo ? '간호 프로세스 표준화와 기록 자동화' : 'Standardized nursing operations',
      points: (emr.nurse || []).slice(0, 3),
      image: 'assets/Metro_product/OCS/00.png',
      imageLabel: isKo ? 'OCS 간호 화면' : 'OCS nursing screen'
    },
    security: {
      label: isKo ? '보안/인증' : 'Security',
      title: isKo ? '의료정보 보호를 위한 인증 체계' : 'Protection-focused authentication',
      points: ((emr.security && emr.security[1] && emr.security[1].content) || []).slice(0, 3),
      image: 'assets/Metro_product/OCS/08.JPG',
      imageLabel: isKo ? 'OCS 관리 화면' : 'OCS management screen'
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
    desc.textContent = compactText((group.description || '').replace(/\|/g, ' '), 120);

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
  const entries = org.content
    .map((row) => {
      const key = Object.keys(row || {})[0] || '';
      const value = row ? row[key] : '';
      const level = Number(String(key).replace('_', '')) || 0;
      return { level, name: value };
    })
    .filter((item) => item.name);

  const byLevel = {
    0: entries.filter((e) => e.level === 0),
    1: entries.filter((e) => e.level === 1),
    2: entries.filter((e) => e.level === 2)
  };

  const W = 900;
  const nodeW = 158;
  const nodeH = 42;

  const place = (arr, y) => arr.map((item, i) => ({
    ...item,
    x: ((i + 1) * W) / (arr.length + 1),
    y
  }));

  const level0 = place(byLevel[0], 52);
  const level1 = place(byLevel[1], 142);
  const level2 = place(byLevel[2], 234);

  const esc = (s = '') => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const line = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#c9d7ea" stroke-width="2"/>`;
  const node = (n) => `
    <g>
      <rect x="${n.x - nodeW / 2}" y="${n.y - nodeH / 2}" width="${nodeW}" height="${nodeH}" rx="10" fill="#ffffff" stroke="#d6e3f3"/>
      <text x="${n.x}" y="${n.y}" text-anchor="middle" dominant-baseline="middle" fill="#1f3f6c" font-size="13" font-weight="700">${esc(n.name)}</text>
    </g>
  `;

  let lines = '';
  if (level0[0] && level1.length) {
    lines += level1.map((n) => line(level0[0].x, level0[0].y + nodeH / 2, n.x, n.y - nodeH / 2)).join('');
  }

  if (level1.length && level2.length) {
    lines += level2.map((n, idx) => {
      const parent = level1[Math.floor((idx * level1.length) / level2.length)] || level1[0];
      return line(parent.x, parent.y + nodeH / 2, n.x, n.y - nodeH / 2);
    }).join('');
  } else if (level0[0] && level2.length) {
    lines += level2.map((n) => line(level0[0].x, level0[0].y + nodeH / 2, n.x, n.y - nodeH / 2)).join('');
  }

  const svg = `
    <svg viewBox="0 0 ${W} 300" role="img" aria-label="organization chart" xmlns="http://www.w3.org/2000/svg">
      ${lines}
      ${level0.map(node).join('')}
      ${level1.map(node).join('')}
      ${level2.map(node).join('')}
    </svg>
  `;

  const units = entries.map((e) => e.name).slice(0, 8);

  orgSummary.innerHTML = `
    <article class="org-card">
      <h3>${isKo ? '조직도 요약' : 'Organization Snapshot'}</h3>
      <p>${org.title || ''}</p>
      <div class="org-meta">
        <span>${isKo ? '기준일' : 'Updated'}: ${org.updata_date || '-'}</span>
        <span>${isKo ? '정원/현원' : 'Headcount'}: ${org.total || '-'} / ${org.now || '-'}</span>
      </div>
      <div class="org-diagram">${svg}</div>
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
      <p>${isKo ? '회사 연혁 데이터에서 최근 주요 이력을 요약했습니다.' : 'Recent milestones summarized from company timeline data.'}</p>
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
      <p>${isKo ? '회사소개 핵심 메시지를 현재 페이지에서 바로 확인할 수 있습니다.' : 'Key company introduction messages are presented directly on this page.'}</p>
      <blockquote class="ceo-card__quote">${quote}</blockquote>
      <div class="ceo-card__sign">${ceo.finish || ceoName}</div>
    </article>
  `;
};

const renderRecruitHub = () => {
  if (!recruitHub) return;
  const isKo = state.locale === 'ko';

  const links = isKo
    ? [
      { label: '인재상', href: 'http://www.metrosoft.co.kr/sub06/sub_01.asp' },
      { label: '채용절차', href: 'http://www.metrosoft.co.kr/sub06/sub_02.asp' },
      { label: '채용공고', href: 'http://www.metrosoft.co.kr/sub06/sub_03.asp' }
    ]
    : [
      { label: 'Ideal Candidate', href: 'http://www.metrosoft.co.kr/sub06/sub_01.asp' },
      { label: 'Hiring Process', href: 'http://www.metrosoft.co.kr/sub06/sub_02.asp' },
      { label: 'Job Posting', href: 'http://www.metrosoft.co.kr/sub06/sub_03.asp' }
    ];

  recruitHub.innerHTML = `
    <article class="recruit-card">
      <h3>${isKo ? '채용정보' : 'Recruitment'}</h3>
      <p>${isKo ? '채용 메뉴(인재상/채용절차/채용공고)를 소개 섹션에서 바로 확인할 수 있습니다.' : 'Recruitment menus are surfaced directly in the introduce section.'}</p>
      <div class="recruit-links">
        ${links.map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer noopener">${item.label}</a>`).join('')}
      </div>
    </article>
  `;
};

const renderFooterLegacyLinks = () => {
  if (!footerLegacyLinks) return;
  const isKo = state.locale === 'ko';
  const links = isKo
    ? [
      { label: '개인정보처리방침', href: 'http://www.metrosoft.co.kr/sub08/sub_01.asp' },
      { label: '사이트맵', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp' },
      { label: '직원용 메일', href: 'http://webmail.metrosoft.co.kr' }
    ]
    : [
      { label: 'Privacy Policy', href: 'http://www.metrosoft.co.kr/sub08/sub_01.asp' },
      { label: 'Sitemap', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp' },
      { label: 'Staff Webmail', href: 'http://webmail.metrosoft.co.kr' }
    ];

  footerLegacyLinks.innerHTML = links
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer noopener">${item.label}</a>`)
    .join('<span aria-hidden="true">|</span>');
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

const renderHeroQuickLinks = () => {
  if (!heroQuickLinks) return;
  const isKo = state.locale === 'ko';
  const links = isKo
    ? [
      { label: '제품 상세', href: '#product-detail' },
      { label: '견적요청', href: '#customer' },
      { label: '원격지원', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true }
    ]
    : [
      { label: 'Product Detail', href: '#product-detail' },
      { label: 'Request Quote', href: '#customer' },
      { label: 'Remote Support', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true }
    ];

  heroQuickLinks.innerHTML = links.map((item) => `
    <a href="${item.href}" class="hero-quick-link" ${item.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>${item.label}</a>
  `).join('');
};

const renderHeaderUtility = () => {
  if (!headerUtility) return;
  const isKo = state.locale === 'ko';

  const links = isKo
    ? [
      { label: '홈', href: '#home' },
      { label: '원격지원', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true },
      { label: '고객지원', href: '#customer' },
      { label: '견적요청', href: '#quote-process' },
      { label: '연락처', href: '#support-contacts' },
      { label: '채용정보', href: '#recruit-hub' },
      { label: '오시는 길', href: '#company-info' },
      { label: '사이트맵', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp', external: true },
      { label: '직원용', href: 'http://webmail.metrosoft.co.kr', external: true },
      { label: '교육사항', href: 'http://metrosoft.edupure.net', external: true }
    ]
    : [
      { label: 'Home', href: '#home' },
      { label: 'Remote Support', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true },
      { label: 'Customer Support', href: '#customer' },
      { label: 'Quotation', href: '#quote-process' },
      { label: 'Contacts', href: '#support-contacts' },
      { label: 'Recruitment', href: '#recruit-hub' },
      { label: 'Directions', href: '#company-info' },
      { label: 'Sitemap', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp', external: true },
      { label: 'Staff', href: 'http://webmail.metrosoft.co.kr', external: true },
      { label: 'Training', href: 'http://metrosoft.edupure.net', external: true }
    ];

  headerUtility.innerHTML = links.map((item) => (
    `<a href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>${item.label}</a>`
  )).join('<span aria-hidden="true">|</span>');
};

const renderSupportLinks = () => {
  if (!supportLinks) return;
  const isKo = state.locale === 'ko';
  const customer = state.legacy.customer;
  const headContact = (((customer && customer.address && customer.address[0]) || {}).content || [])[3] || '';
  const [headEmail = 'customer@metrosoft.co.kr'] = headContact.split('/');

  const legacyShortcuts = isKo
    ? [
      { title: '수리 및 A/S 요청', desc: '문제 접수 후 담당 엔지니어가 확인합니다.', href: `mailto:${headEmail}?subject=${encodeURIComponent('수리 및 A/S 요청')}` },
      { title: '견적요청', desc: '병원 규모/요구사항 기반 맞춤 견적을 요청합니다.', href: `mailto:${headEmail}?subject=${encodeURIComponent('메트로소프트 견적요청')}` },
      { title: '연락처 / 문의', desc: '고객센터 담당자 연락처와 문의 채널을 확인합니다.', href: '#customer' },
      { title: '원격지원', desc: 'QuickSupport 실행파일 다운로드 후 즉시 지원받기', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true },
      { title: '사이트맵', desc: '기존 사이트 구조를 확인합니다.', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp', external: true }
    ]
    : [
      { title: 'Repair & A/S Request', desc: 'Submit issues for engineer follow-up.', href: `mailto:${headEmail}?subject=${encodeURIComponent('Repair and A/S Request')}` },
      { title: 'Request Quotation', desc: 'Ask for tailored pricing by hospital requirements.', href: `mailto:${headEmail}?subject=${encodeURIComponent('Metrosoft Quotation Request')}` },
      { title: 'Contact Center', desc: 'See support contacts and inquiry channels.', href: '#customer' },
      { title: 'Remote Support', desc: 'Download QuickSupport and receive immediate help.', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true },
      { title: 'Sitemap', desc: 'Review website structure.', href: 'http://www.metrosoft.co.kr/sub05/sub_01.asp', external: true }
    ];

  supportLinks.innerHTML = legacyShortcuts.map((item) => `
    <a class="support-link-card" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>
      <strong>${item.title}</strong>
      <span>${item.desc}</span>
    </a>
  `).join('');
};

const renderCustomerQuickMenu = () => {
  if (!customerQuickMenu) return;
  const isKo = state.locale === 'ko';

  const menus = isKo
    ? [
      { title: '수리 및 A/S 요청', href: 'mailto:customer@metrosoft.co.kr?subject=' + encodeURIComponent('수리 및 A/S 요청') },
      { title: '견적요청', href: '#quote-process' },
      { title: '연락처 / 문의', href: '#support-contacts' },
      { title: '자료실', href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp', external: true },
      { title: '공지사항', href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp', external: true },
      { title: '원격지원', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true }
    ]
    : [
      { title: 'Repair / A/S', href: 'mailto:customer@metrosoft.co.kr?subject=' + encodeURIComponent('Repair and A/S Request') },
      { title: 'Request Quotation', href: '#quote-process' },
      { title: 'Contact / Inquiry', href: '#support-contacts' },
      { title: 'Resources', href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp', external: true },
      { title: 'Notice', href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp', external: true },
      { title: 'Remote Support', href: 'http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe', external: true }
    ];

  customerQuickMenu.innerHTML = menus.map((item) => `
    <a class="customer-quick-item" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer noopener"' : ''}>${item.title}</a>
  `).join('');
};

const renderResourceCenter = () => {
  if (!resourceCenter) return;
  const isKo = state.locale === 'ko';

  const items = isKo
    ? [
      {
        title: '견적요청',
        desc: '병상 규모/운영 형태에 맞는 EMR·OCS·ERP 구성을 상담합니다.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_02.asp'
      },
      {
        title: '자료실',
        desc: '제품 소개서, 원격지원 안내 등 고객지원 문서를 확인합니다.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp'
      },
      {
        title: '공지사항',
        desc: '업데이트/점검 공지와 신규 안내를 빠르게 확인할 수 있습니다.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp'
      }
    ]
    : [
      {
        title: 'Quotation Request',
        desc: 'Consult the right EMR/OCS/ERP package for your hospital size and workflow.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_02.asp'
      },
      {
        title: 'Resource Center',
        desc: 'Review product brochures and remote-support guidance documents.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp'
      },
      {
        title: 'Notices',
        desc: 'Check recent updates, maintenance schedules, and announcements.',
        href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp'
      }
    ];

  resourceCenter.innerHTML = `
    <article class="resource-center-card">
      <h3>${isKo ? '고객지원 리소스 센터' : 'Customer Resource Center'}</h3>
      <p>${isKo ? '고객센터 핵심 메뉴(견적요청/자료실/공지사항)를 현재 화면에서 바로 접근할 수 있게 구성했습니다.' : 'Core customer-center menus (quotation/resources/notices) are surfaced for quick access.'}</p>
      <div class="resource-center-grid">
        ${items.map((item) => `
          <a href="${item.href}" target="_blank" rel="noreferrer noopener">
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
          </a>
        `).join('')}
      </div>
    </article>
  `;
};

const renderQuoteProcess = () => {
  if (!quoteProcess) return;
  const isKo = state.locale === 'ko';

  const steps = isKo
    ? [
      { title: '1) 상담 접수', desc: '대표 메일 또는 담당자 연락처로 병상/진료과/운영 이슈를 전달합니다.' },
      { title: '2) 요구사항 분석', desc: 'EMR·OCS·ERP 범위를 기준으로 병원 현장에 맞는 구성안을 제안합니다.' },
      { title: '3) 견적/도입 일정 안내', desc: '모듈 범위, 구축 일정, 지원 방식(원격/현장)을 포함한 제안서를 전달합니다.' }
    ]
    : [
      { title: '1) Inquiry Submission', desc: 'Share bed size, departments, and key operational issues via email or direct contact.' },
      { title: '2) Requirement Review', desc: 'We propose the right EMR/OCS/ERP scope for your clinical workflow.' },
      { title: '3) Proposal & Timeline', desc: 'Receive module scope, implementation timeline, and support model (remote/on-site).' }
    ];

  quoteProcess.innerHTML = `
    <article class="quote-process-card">
      <h3>${isKo ? '견적요청 진행 절차' : 'Quotation Request Flow'}</h3>
      <p>${isKo ? '견적요청 절차를 현재 화면에서 바로 이해할 수 있도록 단계형으로 정리했습니다.' : 'The quotation-request flow is condensed into a simple step sequence for faster decision-making.'}</p>
      <ol>
        ${steps.map((step) => `<li><strong>${step.title}</strong><span>${step.desc}</span></li>`).join('')}
      </ol>
      <a href="mailto:customer@metrosoft.co.kr?subject=${encodeURIComponent('메트로소프트 견적요청')}">${isKo ? '견적요청 메일 보내기' : 'Send quotation request email'}</a>
    </article>
  `;
};

const renderProductLegacyLinks = () => {
  if (!productLegacyLinks) return;
  const isKo = state.locale === 'ko';

  const emr = state.legacy.emr || {};
  const iemr = state.legacy.iemr || {};
  const ocs = state.legacy.ocs || {};
  const erp = state.legacy.erp || {};
  const crm = state.legacy.crm || {};
  const mpoc = state.legacy.mpoc || {};

  const cards = [
    {
      title: 'EMR',
      summary: firstSentence(emr?.intro?.content || ''),
      points: (emr.treatment || []).slice(0, 2)
    },
    {
      title: 'iEMR',
      summary: firstSentence(iemr?.Title?.content || ''),
      points: (iemr.features || []).slice(0, 2)
    },
    {
      title: 'OCS',
      summary: firstSentence(ocs?.title?.content || ''),
      points: ((ocs.composition && ocs.composition[0]) || []).slice(0, 2)
    },
    {
      title: isKo ? 'T-BIZ 모바일 EMR' : 'T-BIZ Mobile EMR',
      summary: firstSentence(mpoc?.Title?.content || ''),
      points: (mpoc.features || []).slice(0, 2)
    },
    {
      title: 'ERP',
      summary: firstSentence(erp?.MetroERP?.content || ''),
      points: (erp.management || []).slice(0, 2)
    },
    {
      title: 'CRM',
      summary: firstSentence(crm?.Title?.content || ''),
      points: (crm.features || []).slice(0, 2)
    },
    {
      title: 'mPOC',
      summary: firstSentence(mpoc?.Title?.content || ''),
      points: (mpoc.features || []).slice(0, 2)
    }
  ];

  productLegacyLinks.innerHTML = `
    <article class="product-legacy-links-card">
      <h3>${isKo ? '제품 상세 허브' : 'Product Detail Hub'}</h3>
      <p>${isKo ? '외부 페이지 이동 없이 제품 핵심 내용을 현재 화면에서 바로 확인할 수 있도록 정리했습니다.' : 'Product highlights are summarized directly on this page so users don’t need to jump to external pages.'}</p>
      <div class="product-legacy-links-grid">
        ${cards.map((item) => `
          <article class="product-legacy-item">
            <h4>${item.title}</h4>
            <p>${compactText(item.summary || (isKo ? '제품 상세 데이터 기반 요약입니다.' : 'Product-detail based summary.'), 88)}</p>
            <ul>${(item.points || []).slice(0, 1).map((point) => `<li>${compactText(point, 58)}</li>`).join('')}</ul>
            <a href="#product-detail">${isKo ? '상세 구성 보기' : 'View detailed modules'}</a>
          </article>
        `).join('')}
      </div>
    </article>
  `;
};

const renderLegacySitemap = () => {
  if (!legacySitemap) return;
  const isKo = state.locale === 'ko';

  const groups = isKo
    ? [
      {
        title: '회사소개',
        links: [
          { label: '인사말', href: 'http://www.metrosoft.co.kr/sub01/sub_01.asp' },
          { label: '회사연혁', href: 'http://www.metrosoft.co.kr/sub01/sub_02.asp' },
          { label: '조직도', href: 'http://www.metrosoft.co.kr/sub01/sub_03.asp' },
          { label: '오시는 길', href: 'http://www.metrosoft.co.kr/sub01/sub_04.asp' }
        ]
      },
      {
        title: '사업영역',
        links: [
          { label: '의료정보사업', href: 'http://www.metrosoft.co.kr/sub02/sub_01.asp' },
          { label: 'Metro-cERP', href: 'http://www.metrosoft.co.kr/sub02/sub_02.asp' },
          { label: '헬스케어 서비스', href: 'http://www.metrosoft.co.kr/sub02/sub_03.asp' },
          { label: 'VOIP 사업', href: 'http://www.metrosoft.co.kr/sub02/sub_04.asp' }
        ]
      },
      {
        title: '제품소개',
        links: [
          { label: 'EMR', href: 'http://www.metrosoft.co.kr/sub03/sub_01.asp' },
          { label: 'iEMR', href: 'http://www.metrosoft.co.kr/sub03/sub_02.asp' },
          { label: 'OCS', href: 'http://www.metrosoft.co.kr/sub03/sub_03.asp' },
          { label: 'T-BIZ 모바일 EMR', href: 'http://www.metrosoft.co.kr/sub03/sub_04.asp' },
          { label: 'ERP', href: 'http://www.metrosoft.co.kr/sub03/sub_05.asp' },
          { label: 'CRM', href: 'http://www.metrosoft.co.kr/sub03/sub_06.asp' },
          { label: 'mPOC', href: 'http://www.metrosoft.co.kr/sub03/sub_07.asp' }
        ]
      },
      {
        title: '고객센터',
        links: [
          { label: '고객지원', href: 'http://www.metrosoft.co.kr/sub04/sub_01.asp' },
          { label: '견적요청', href: 'http://www.metrosoft.co.kr/sub04/sub_02.asp' },
          { label: '연락처', href: 'http://www.metrosoft.co.kr/sub04/sub_03.asp' },
          { label: '자료실', href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp' },
          { label: '공지사항', href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp' }
        ]
      },
      {
        title: '채용정보',
        links: [
          { label: '인재상', href: 'http://www.metrosoft.co.kr/sub06/sub_01.asp' },
          { label: '채용절차', href: 'http://www.metrosoft.co.kr/sub06/sub_02.asp' },
          { label: '채용공고', href: 'http://www.metrosoft.co.kr/sub06/sub_03.asp' }
        ]
      }
    ]
    : [
      {
        title: 'Company',
        links: [
          { label: 'Greeting', href: 'http://www.metrosoft.co.kr/sub01/sub_01.asp' },
          { label: 'History', href: 'http://www.metrosoft.co.kr/sub01/sub_02.asp' },
          { label: 'Organization', href: 'http://www.metrosoft.co.kr/sub01/sub_03.asp' },
          { label: 'Directions', href: 'http://www.metrosoft.co.kr/sub01/sub_04.asp' }
        ]
      },
      {
        title: 'Business Area',
        links: [
          { label: 'Healthcare IT', href: 'http://www.metrosoft.co.kr/sub02/sub_01.asp' },
          { label: 'Metro-cERP', href: 'http://www.metrosoft.co.kr/sub02/sub_02.asp' },
          { label: 'Healthcare Service', href: 'http://www.metrosoft.co.kr/sub02/sub_03.asp' },
          { label: 'VOIP', href: 'http://www.metrosoft.co.kr/sub02/sub_04.asp' }
        ]
      },
      {
        title: 'Products',
        links: [
          { label: 'EMR', href: 'http://www.metrosoft.co.kr/sub03/sub_01.asp' },
          { label: 'iEMR', href: 'http://www.metrosoft.co.kr/sub03/sub_02.asp' },
          { label: 'OCS', href: 'http://www.metrosoft.co.kr/sub03/sub_03.asp' },
          { label: 'T-BIZ Mobile EMR', href: 'http://www.metrosoft.co.kr/sub03/sub_04.asp' },
          { label: 'ERP', href: 'http://www.metrosoft.co.kr/sub03/sub_05.asp' },
          { label: 'CRM', href: 'http://www.metrosoft.co.kr/sub03/sub_06.asp' },
          { label: 'mPOC', href: 'http://www.metrosoft.co.kr/sub03/sub_07.asp' }
        ]
      },
      {
        title: 'Customer Center',
        links: [
          { label: 'Support', href: 'http://www.metrosoft.co.kr/sub04/sub_01.asp' },
          { label: 'Quotation', href: 'http://www.metrosoft.co.kr/sub04/sub_02.asp' },
          { label: 'Contacts', href: 'http://www.metrosoft.co.kr/sub04/sub_03.asp' },
          { label: 'Resource', href: 'http://www.metrosoft.co.kr/sub04/sub_04.asp' },
          { label: 'Notice', href: 'http://www.metrosoft.co.kr/sub04/sub_05.asp' }
        ]
      },
      {
        title: 'Recruitment',
        links: [
          { label: 'Ideal Candidate', href: 'http://www.metrosoft.co.kr/sub06/sub_01.asp' },
          { label: 'Hiring Process', href: 'http://www.metrosoft.co.kr/sub06/sub_02.asp' },
          { label: 'Job Posting', href: 'http://www.metrosoft.co.kr/sub06/sub_03.asp' }
        ]
      }
    ];

  legacySitemap.innerHTML = `
    <article class="legacy-sitemap-card">
      <h3>${isKo ? '사이트맵 (전체 메뉴 바로가기)' : 'Sitemap (All Menu Shortcuts)'}</h3>
      <p>${isKo ? '기존 metrosoft.co.kr의 메뉴 구조를 유지한 바로가기입니다.' : 'Quick links preserving the menu structure of metrosoft.co.kr.'}</p>
      <div class="legacy-sitemap-grid">
        ${groups.map((group) => `
          <section>
            <strong>${group.title}</strong>
            <div class="legacy-sitemap-links">
              ${group.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer noopener">${link.label}</a>`).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    </article>
  `;
};

const renderProductKpi = () => {
  if (!productKpi) return;
  const isKo = state.locale === 'ko';

  const items = isKo
    ? [
      { label: '진료/원무 처리 리드타임', value: '단축', desc: 'EMR·OCS 연동으로 접수~수납 흐름 간소화' },
      { label: '청구/정산 정확도', value: '향상', desc: '원무/보험심사 데이터 일관성 강화' },
      { label: '장애 대응 시간', value: '최소화', desc: '원격지원 + 담당자 연락망 즉시 연결' }
    ]
    : [
      { label: 'Clinical/Admin Lead Time', value: 'Reduced', desc: 'EMR-OCS integration streamlines registration-to-billing.' },
      { label: 'Claim/Billing Accuracy', value: 'Improved', desc: 'Consistency across admin and insurance workflows.' },
      { label: 'Incident Response Time', value: 'Minimized', desc: 'Remote support and contact channels are directly connected.' }
    ];

  productKpi.innerHTML = `
    <article class="product-kpi-card">
      <h3>${isKo ? '도입 기대효과' : 'Expected Outcomes'}</h3>
      <div class="product-kpi-grid">
        ${items.map((item) => `
          <div class="product-kpi-item">
            <strong>${item.label}</strong>
            <em>${item.value}</em>
            <span>${item.desc}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `;
};

const renderOCSModules = () => {
  if (!ocsModules) return;
  const ocs = state.legacy.ocs;
  const isKo = state.locale === 'ko';

  if (!ocs || !Array.isArray(ocs.Lists) || !ocs.Lists.length) {
    ocsModules.innerHTML = '';
    return;
  }

  const cards = ocs.Lists.slice(0, 3).map((group) => {
    const topItems = Array.isArray(group.contents)
      ? group.contents.flatMap((item) => Array.isArray(item.contents) ? item.contents : []).slice(0, 4)
      : [];
    return {
      title: group.title || '-',
      description: firstSentence(group.description || ''),
      points: topItems.map((item) => item.title || '').filter(Boolean)
    };
  });

  ocsModules.innerHTML = `
    <article class="ocs-modules-card">
      <h3>${isKo ? 'OCS 세부 업무영역' : 'OCS Functional Domains'}</h3>
      <p>${isKo
        ? 'OCS 상세 데이터(원무/보험·진료·진료지원)에서 실무 기능을 발췌해 제품 신뢰도를 보강했습니다.'
        : 'Practical module details are extracted from OCS data (admin/insurance, clinical, support).'}
      </p>
      <div class="ocs-modules-grid">
        ${cards.map((card) => `
          <section class="ocs-module-item">
            <strong>${card.title}</strong>
            <span>${card.description || (isKo ? '상세 설명 기반 요약' : 'Summary based on detailed specs')}</span>
            <ul>${card.points.map((point) => `<li>${point}</li>`).join('')}</ul>
          </section>
        `).join('')}
      </div>
    </article>
  `;
};

const renderSupportContacts = () => {
  if (!supportContacts) return;
  const customer = state.legacy.customer;
  const isKo = state.locale === 'ko';

  if (!customer || !Array.isArray(customer.address) || customer.address.length < 2) {
    supportContacts.innerHTML = '';
    return;
  }

  const parseContact = (raw = '') => {
    const chunks = String(raw).split('/').map((item) => item.trim()).filter(Boolean);
    const email = chunks.find((item) => item.includes('@')) || '';
    const phone = chunks.find((item) => /\d{2,}/.test(item)) || '';
    return { email, phone, raw: String(raw || '').trim() };
  };

  const rows = customer.address.slice(1).map((entry) => {
    const content = entry.content || [];
    const parsed = parseContact(content[3] || '');
    return {
      team: (content[0] || '').trim(),
      name: (content[1] || '').trim(),
      role: (content[2] || '').trim(),
      contactRaw: (content[3] || '').trim(),
      email: parsed.email,
      phone: parsed.phone
    };
  }).filter((row) => row.team || row.name || row.contactRaw);

  const headContact = parseContact((((customer.address[0] || {}).content || [])[3] || '').trim());

  supportContacts.innerHTML = `
    <article class="support-contact-card">
      <h3>${isKo ? '고객지원 담당자' : 'Support Contacts'}</h3>
      <p>${isKo ? '고객센터 데이터를 기반으로 부서별 연락처를 그대로 보강했습니다.' : 'Department contacts are expanded from customer-center data.'}</p>
      <div class="support-contact-quick">
        <a href="mailto:${headContact.email || 'customer@metrosoft.co.kr'}">
          <strong>${isKo ? '대표 메일' : 'Main Email'}</strong>
          <span>${headContact.email || 'customer@metrosoft.co.kr'}</span>
        </a>
        <a href="tel:${(headContact.phone || '031-465-9971').replace(/[^0-9+]/g, '')}">
          <strong>${isKo ? '대표 전화' : 'Main Phone'}</strong>
          <span>${headContact.phone || '031-465-9971~3'}</span>
        </a>
      </div>
      <div class="support-contact-hours">
        <span>${isKo ? '이용안내: 평일 대표전화/고객문의, 주말 원격지원 접수' : 'Guide: weekdays via main line/inquiry, weekends via remote support'}</span>
      </div>
      <div class="support-contact-grid">
        ${rows.map((row) => `
          <div class="support-contact-item">
            <strong>${row.team || '-'}</strong>
            <span>${[row.name, row.role].filter(Boolean).join(' · ') || '-'}</span>
            <em>${row.contactRaw || '-'}</em>
            <div class="support-contact-actions">
              ${row.email ? `<a href="mailto:${row.email}">${isKo ? '메일' : 'Email'}</a>` : ''}
              ${row.phone ? `<a href="tel:${row.phone.replace(/[^0-9+]/g, '')}">${isKo ? '전화' : 'Call'}</a>` : ''}
            </div>
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
    img.loading = 'lazy';
    img.decoding = 'async';

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

const compactText = (text = '', max = 80) => {
  const cleaned = String(text).replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
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
        title: 'MetroHIS 핵심 기능',
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

  out.business = out.business || [];
  out.business.push({
    title: '통신 부가서비스 (MetroSMS · 알림톡)',
    description: '고객 커뮤니케이션 영역(MetroSMS/HPS/알림톡)의 핵심 기능을 반영했습니다.',
    points: [
      '카카오 알림톡 발송 실패 시 SMS/LMS 자동 전환',
      'HPS 기반 문자 발송으로 비용 절감 및 대량 발송 지원',
      '고객관리 시스템 API 연동 및 실시간 메시지 통계 확인'
    ]
  });

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
        description: '회사 기본정보 기준으로 핵심 항목을 정리했습니다.',
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
        title: '고객 문의 안내',
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
  heroCta.onclick = () => {
    window.location.href = 'mailto:customer@metrosoft.co.kr?subject=' + encodeURIComponent(state.locale === 'ko' ? '메트로소프트 무료 데모 신청' : 'Metrosoft Demo Request');
  };
  renderHeroQuickLinks();
  renderHeaderUtility();

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
    ? '파트너 인증 및 협력 이력을 기반으로 구성했습니다.'
    : 'Built on verified partner certifications and collaboration history.';
  renderCertified();
  renderCertifiedTimeline();
  renderCompanyFacts();
  renderSpotlight(t.spotlight || {});
  if (productTableTitle) productTableTitle.textContent = state.locale === 'ko' ? '병원 업무 생산성 극대화를 위한 OCS 통합 모듈' : 'Integrated OCS Modules for Hospital Productivity';
  if (productTableSub) productTableSub.textContent = state.locale === 'ko' ? '원무 효율화, 스마트 진료 지원, 수납/청구 정확도 향상까지 핵심 기능을 업무 가치 중심으로 확인할 수 있습니다.' : 'Explore key modules by business value: administration efficiency, smart care support, and billing accuracy.';

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
  renderRecruitHub();
  renderRemoteSupport();
  renderSupportLinks();
  renderResourceCenter();
  renderQuoteProcess();
  renderCustomerQuickMenu();
  renderLegacySitemap();
  renderSupportContacts();
  renderFeatureStack();
  renderProductKpi();
  renderOCSModules();
  renderProductLegacyLinks();
  renderProductImageGrid();
  renderProductTree();
  renderCustomerTable();
  renderHospitalGrid();

  bindCarousel(productImages, productPrevBtn, productNextBtn, productDots, 380);

  if (hospitalTitle) hospitalTitle.textContent = state.locale === 'ko' ? '주요 고객사 병원' : 'Major Partner Hospitals';
  if (hospitalSub) hospitalSub.textContent = state.locale === 'ko' ? '전국 120여 개 주요 의료기관이 선택한 검증된 솔루션 파트너십입니다.' : 'A trusted solution partnership chosen by 120+ leading healthcare institutions in Korea.';

  if (newsTitle) newsTitle.textContent = state.locale === 'ko' ? 'Metrosoft News' : 'Metrosoft News';
  if (newsSub) newsSub.textContent = state.locale === 'ko' ? 'Google RSS에서 메트로소프트가 제목에 포함된 기사만 표시합니다.' : 'Showing only Google RSS headlines containing Metrosoft.';
  renderNews();

  if (t.cta) {
    ctaTitle.textContent = t.cta.title || '';
    ctaDescription.textContent = t.cta.description || '';
    ctaButton.textContent = t.cta.button || '';
  }

  const timelineInit = ((state.legacy || {}).timeline || {}).init || {};
  const legacyHomepage = (timelineInit.homepage || 'www.metrosoft.co.kr').replace(/\s+/g, ' ').trim();

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
        `홈페이지: ${legacyHomepage}`,
        '이용안내: 평일(대표전화/고객문의), 주말(원격지원 접수)',
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
        `Homepage: ${legacyHomepage}`,
        'Guide: Weekday(main inquiry), Weekend(remote support intake)',
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
  renderFooterLegacyLinks();
  if (quickInquiryText) quickInquiryText.textContent = companyInfo.quickLabel;
  if (quickDemoText) quickDemoText.textContent = state.locale === 'ko' ? '도입 문의' : 'Request Demo';
  if (quickRemoteText) quickRemoteText.textContent = state.locale === 'ko' ? '원격지원' : 'Remote Support';
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());

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
