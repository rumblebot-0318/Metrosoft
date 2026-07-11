import ceoData from './src/database/Introduce/CeoIntroduce.json';
import timelineData from './src/database/Introduce/Timeline.json';
import organizationData from './src/database/Introduce/Organization.json';
import cloudData from './src/database/Business/Cloud.json';
import hospitalData from './src/database/Business/Hospital.json';
import metrohisData from './src/database/Business/MetroHIS.json';
import voipData from './src/database/Business/VOIP.json';
import crmData from './src/database/Product/CRM.json';
import emrData from './src/database/Product/EMR.json';
import erpData from './src/database/Product/ERP.json';
import ocsData from './src/database/Product/OCS.json';
import iemrData from './src/database/Product/iEMR.json';
import mpocData from './src/database/Product/mPOC.json';
import customerData from './src/database/Customer/index.json';

import { 
  healthcareData,
  smsData,
  alarmData,
  tbizData
} from './data.js';

// i18n Translation State
let currentLang = localStorage.getItem('lang') || 'ko';
let activeTranslations = {};

// Helper to access nested objects via string keys, e.g. "nav.introduce"
function getNestedTranslation(obj, path) {
  if (!obj) return '';
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || '';
}

// Helper to load content database dynamically (supports localization override)
function getDbData(key, fallbackData) {
  if (activeTranslations.db && activeTranslations.db[key]) {
    return activeTranslations.db[key];
  }
  return fallbackData;
}

// Fetch translation JSON and apply to static elements
async function loadTranslations(lang) {
  try {
    const res = await fetch(`/locales/${lang}.json`);
    activeTranslations = await res.json();
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update active class on selector buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`lang-btn-${lang}`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
    
    // Translate static UI elements in index.html
    translateStaticUI();
  } catch (err) {
    console.error('Failed to load translations for lang:', lang, err);
  }
}

// Translate HTML elements marked with data-i18n
function translateStaticUI() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getNestedTranslation(activeTranslations, key);
    if (text) {
      el.innerHTML = text;
    }
  });
}

// Setup click listeners for language toggler buttons
function setupLangListeners() {
  const btnKo = document.getElementById('lang-btn-ko');
  const btnEn = document.getElementById('lang-btn-en');
  
  if (btnKo) {
    btnKo.addEventListener('click', async () => {
      if (currentLang !== 'ko') {
        await loadTranslations('ko');
        router();
      }
    });
  }
  
  if (btnEn) {
    btnEn.addEventListener('click', async () => {
      if (currentLang !== 'en') {
        await loadTranslations('en');
        router();
      }
    });
  }
}

// DOM elements
const appRoot = document.getElementById('app-root');
const mainNav = document.getElementById('main-nav');
const mobileToggle = document.getElementById('mobile-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Keep track of active interval to clear it on page change
let activeIntervalId = null;

// Router configuration
const routes = {
  '/': renderHome,
  '/introduce': renderIntroduce,
  '/business': renderBusiness,
  '/product': renderProduct,
  '/customer': renderCustomer
};

// Application Init
document.addEventListener('DOMContentLoaded', async () => {
  // Load initial translation
  await loadTranslations(currentLang);
  // Setup listeners
  setupLangListeners();
  
  // Listen to hash changes for routing
  window.addEventListener('hashchange', router);
  // Initial routing check
  router();
  
  // Header scroll class toggle
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.modern-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      scrollToTopBtn.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to Top action
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile navigation drawer toggle
  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-open');
    const icon = mobileToggle.querySelector('i');
    if (mainNav.classList.contains('mobile-open')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });
});

// Hash Router
function router() {
  // Clear any running interval (e.g. from the home slider)
  if (activeIntervalId) {
    clearInterval(activeIntervalId);
    activeIntervalId = null;
  }

  // Close mobile drawer on route change
  mainNav.classList.remove('mobile-open');
  const toggleIcon = mobileToggle.querySelector('i');
  if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';

  let path = window.location.hash.slice(1) || '/';
  
  // Parse route and potential anchor: #/introduce#연혁
  const hashParts = path.split('#');
  const baseRoute = hashParts[0].split('?')[0];
  const anchor = hashParts[1];
  
  const renderFn = routes[baseRoute] || renderHome;
  
  // Update header links active states
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${baseRoute}` || (baseRoute === '/' && href === '#/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render view
  appRoot.innerHTML = '';
  appRoot.appendChild(renderFn());

  // Scroll to anchor if specified, otherwise scroll to top
  if (anchor) {
    setTimeout(() => {
      const decodedAnchor = decodeURIComponent(anchor);
      const element = document.getElementById(decodedAnchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150); // Small timeout to ensure DOM is fully rendered
  } else {
    window.scrollTo(0, 0);
  }
}

/* HELPER COMPONENTS */

// PointDiv equivalent: renders a title with a bottom border mark
function createPointDiv(title, id) {
  const container = document.createElement('div');
  container.className = 'point-div-wrapper';
  // Use the title as the ID so anchor scroll functions correctly
  container.innerHTML = `
    <h2 class="point-div-title" id="${id || title}">${title}</h2>
    <div class="point-div-bar"></div>
  `;
  return container;
}

// TitleList: Renders centered horizontal anchors for vertical scroll
function createTitleList(lists) {
  const container = document.createElement('div');
  container.className = 'title-list-wrapper';
  let linksHtml = '';
  
  const hashParts = window.location.hash.slice(1).split('#');
  const baseRoute = hashParts[0] || '/';
  const baseHash = baseRoute === '/' ? '#/' : `#${baseRoute}`;
  lists.forEach(item => {
    linksHtml += `<a class="title-list-item" href="${baseHash}#${item}">${item}</a>`;
  });
  
  container.innerHTML = `<div class="title-list-container">${linksHtml}</div>`;
  return container;
}

// RoundTitle (green subheadings inside components)
function createRoundTitle(title) {
  const div = document.createElement('div');
  div.className = 'round-title-container';
  div.innerHTML = `<h3><i class="fa-regular fa-square-caret-right"></i> ${title}</h3>`;
  return div;
}

/* VIEWS GENERATORS */

// 1. HOME VIEW
function renderHome() {
  const view = document.createElement('div');
  view.className = 'fade-in';
  
  // Image Slider setup
  const slides = [
    '/Images/slide_img/Challenge.jpg',
    '/Images/slide_img/Creative.jpg',
    '/Images/slide_img/Credible.jpg'
  ];
  
  // Render structure
  view.innerHTML = `
    <!-- Image Slider Carousel -->
    <div class="home-slider-container">
      <img id="slider-img" src="${slides[0]}" alt="Metrosoft Slider Image">
    </div>

    <!-- Product Grid Section -->
    <div class="container home-section-padding">
      <div class="product-list-title-container">
        <h2>${getNestedTranslation(activeTranslations, 'home.product_section_title') || 'Metrosoft의 제품을 활용하세요'}</h2>
        <div class="product-list-title-underline"></div>
      </div>
      <div class="home-products-row">
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-emr">
            <i class="fa-solid fa-file-medical"></i>
          </div>
          <a class="teal-btn" href="#/product#EMR">EMR</a>
        </div>
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-iemr">
            <i class="fa-solid fa-file-image"></i>
          </div>
          <a class="teal-btn" href="#/product#iEMR">iEMR</a>
        </div>
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-ocs">
            <i class="fa-solid fa-stethoscope"></i>
          </div>
          <a class="teal-btn" href="#/product#OCS">OCS</a>
        </div>
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-tbiz">
            <i class="fa-solid fa-tablet-screen-button"></i>
          </div>
          <a class="teal-btn" href="#/product#T-BIZ 모바일 EMR">T-BIZ</a>
        </div>
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-erp">
            <i class="fa-solid fa-chart-pie"></i>
          </div>
          <a class="teal-btn" href="#/product#ERP">ERP</a>
        </div>
        <div class="home-product-card-item">
          <div class="home-product-icon-wrapper icon-crm">
            <i class="fa-solid fa-users-gear"></i>
          </div>
          <a class="teal-btn" href="#/product#CRM">CRM</a>
        </div>
      </div>
    </div>

    <!-- Certified Partnership Section -->
    <div class="container home-section-padding">
      <div class="point-div-wrapper">
        <h2 class="point-div-title">${getNestedTranslation(activeTranslations, 'home.certified_title') || 'Certified Partnership'}</h2>
        <div class="point-div-bar"></div>
      </div>
      <div class="certified-logos-row">
        <div class="cert-logo-box"><img src="/Images/Certified/01.png" alt="MS Gold Partner"></div>
        <div class="cert-logo-box"><img src="/Images/Certified/02.png" alt="HP Partner"></div>
        <div class="cert-logo-box"><img src="/Images/Certified/03.png" alt="OCS Certified"></div>
      </div>
    </div>

    <!-- Hotline Customer Support Table Section -->
    <div class="container home-section-padding" style="margin-bottom: 50px;">
      <div class="point-div-wrapper">
        <h2 class="point-div-title">${getNestedTranslation(activeTranslations, 'introduce.summary_contact') || '전화번호'}</h2>
        <div class="point-div-bar"></div>
      </div>
      <div class="hotline-table-wrapper">
        <table class="ui-hotline-table">
          <thead>
            <tr>
              <th colspan="2">${getNestedTranslation(activeTranslations, 'home.hotline_title') || '이용안내'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_weekday') || '평일'}</td>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_weekday_time') || '09:00 ~ 18:00'}</td>
            </tr>
            <tr>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_weekend') || '주말'}</td>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_weekend_time') || '09:00 ~ 12:00'}</td>
            </tr>
            <tr>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_tel') || '대표전화'}</td>
              <td>${getNestedTranslation(activeTranslations, 'home.hotline_tel_num') || '031-465-9971'}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2">
                <a href="#/customer" class="teal-btn-compact"><i class="fa-solid fa-headset"></i> ${getNestedTranslation(activeTranslations, 'home.hotline_btn') || '문의하기'}</a>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;

  // Start image slider transition timer
  let currentSlide = 0;
  const sliderImg = view.querySelector('#slider-img');
  activeIntervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    if (sliderImg) {
      sliderImg.style.opacity = 0;
      setTimeout(() => {
        sliderImg.src = slides[currentSlide];
        sliderImg.style.opacity = 1;
      }, 300);
    }
  }, 5000);

  return view;
}

// 2. INTRODUCE VIEW (Vertical list layout matching React)
function renderIntroduce() {
  const view = document.createElement('div');
  view.className = 'container fade-in';
  
  const lists = getNestedTranslation(activeTranslations, 'introduce.anchors') || ["인사말", "조직도", "회사소개", "연혁", "오시는 길"];
  view.appendChild(createTitleList(lists));

  const activeCeoData = getDbData('ceoData', ceoData);
  const activeTimelineData = getDbData('timelineData', timelineData);

  // Section 1: 인사말
  const ceoSection = document.createElement('section');
  ceoSection.className = 'introduce-section-padding';
  ceoSection.appendChild(createPointDiv(activeCeoData.title, '인사말'));
  
  // Render CEO content list paragraphs
  let paragraphsHtml = '';
  activeCeoData.content.forEach(p => {
    paragraphsHtml += `<p>${p}</p>`;
  });
  
  ceoSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="ceo-introduce-grid">
        <div class="ceo-image-wrapper">
          <img src="/Images/ceo.jpeg" alt="CEO" onerror="this.src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=60'">
        </div>
        <div class="ceo-content">
          <h3>${activeCeoData.subtitle}</h3>
          ${paragraphsHtml}
          <div class="ceo-signature">
            <span>${activeCeoData.finish}</span>
            <img src="/Images/sign.png" alt="Signature" onerror="this.style.display='none'">
          </div>
        </div>
      </div>
    </div>
  `;
  view.appendChild(ceoSection);

  // Section 2: 조직도
  const orgSection = document.createElement('section');
  orgSection.className = 'introduce-section-padding';
  orgSection.appendChild(createPointDiv(getNestedTranslation(activeTranslations, 'introduce.org_title') || '조직도'));
  orgSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="org-chart-wrapper">
        <img src="/Images/organization.png" alt="Organization Chart" onerror="this.src='https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&fit=crop&q=60'">
      </div>
    </div>
  `;
  view.appendChild(orgSection);

  // Section 3: 회사소개 & Section 4: 연혁 (Renders together as Timeliner did)
  const timelineSection = document.createElement('section');
  timelineSection.className = 'introduce-section-padding';
  timelineSection.appendChild(createPointDiv(getNestedTranslation(activeTranslations, 'nav.introduce') || '회사소개'));
  
  // Render corporate summaries
  timelineSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px; margin-bottom: 50px;">
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px; background: var(--bg-secondary); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
          <h4 style="color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-building"></i> ${getNestedTranslation(activeTranslations, 'introduce.summary_title') || '기업 요약'}</h4>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'introduce.summary_company') || '회사명'}:</strong> ${activeTimelineData.init.company}</p>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'introduce.summary_ceo') || '대표이사'}:</strong> ${activeTimelineData.init.ceo}</p>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'introduce.summary_area') || '사업분야'}:</strong> ${activeTimelineData.init.area}</p>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'introduce.summary_birth') || '설립일'}:</strong> ${activeTimelineData.init.birth}</p>
        </div>
        <div style="flex: 1; min-width: 280px; background: var(--bg-secondary); padding: 25px; border-radius: 12px; border: 1px solid var(--glass-border);">
          <h4 style="color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-phone"></i> ${getNestedTranslation(activeTranslations, 'introduce.summary_contact') || '연락처'}</h4>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'customer.remote_info_title') || '주소'}:</strong> ${activeTimelineData.init.address}</p>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'home.hotline_tel') || '대표전화'}:</strong> ${activeTimelineData.init.tel}</p>
          <p style="margin-bottom: 8px;"><strong>${getNestedTranslation(activeTranslations, 'introduce.summary_homepage') || '홈페이지'}:</strong> <a href="http://${activeTimelineData.init.homepage.split(',')[0].trim()}" target="_blank" style="color: var(--secondary)">${activeTimelineData.init.homepage}</a></p>
        </div>
      </div>
    </div>
  `;

  // Render Timeline contents
  const timelinePoint = createPointDiv(getNestedTranslation(activeTranslations, 'introduce.timeline_title') || '연혁');
  timelineSection.appendChild(timelinePoint);

  let timelineItemsHtml = '';
  [...activeTimelineData.content].reverse().forEach(item => {
    let detailsHtml = '';
    item.content.forEach(detail => {
      detailsHtml += `<li>${detail}</li>`;
    });
    
    timelineItemsHtml += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>${item.year}</h3>
        <div class="timeline-content-card">
          <ul class="timeline-detail-list">
            ${detailsHtml}
          </ul>
        </div>
      </div>
    `;
  });
  
  timelineSection.innerHTML += `
    <div style="margin-top: 40px;" class="history-timeline">
      ${timelineItemsHtml}
    </div>
  `;
  view.appendChild(timelineSection);

  // Section 5: 오시는 길
  const mapSection = document.createElement('section');
  mapSection.className = 'introduce-section-padding';
  mapSection.appendChild(createPointDiv(getNestedTranslation(activeTranslations, 'introduce.map_title') || '오시는 길'));
  mapSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div style="width: 100%; height: 450px; border-radius: 16px; overflow: hidden; margin-bottom: 40px; border: 1px solid var(--glass-border);">
        <iframe 
          title="Metrosoft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.452684279093!2d126.9459625!3d37.3710764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f0000000001%3A0x8f8c0e29b13c2f0d!2z7JWI7JaRSUTrsLjwpoA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <ul class="map-address-list">
        <li><i class="fa-solid fa-location-dot"></i> <span><strong>${getNestedTranslation(activeTranslations, 'customer.remote_info_title') || '주소'}:</strong> ${activeTimelineData.init.address}</span></li>
        <li><i class="fa-solid fa-phone"></i> <span><strong>${getNestedTranslation(activeTranslations, 'home.hotline_tel') || '대표전화'}:</strong> ${activeTimelineData.init.tel}</span></li>
        <li><i class="fa-solid fa-bus"></i> <span><strong>${getNestedTranslation(activeTranslations, 'introduce.map_bus') || '버스 이용'}:</strong> ${getNestedTranslation(activeTranslations, 'introduce.map_bus_desc') || '4호선 범계역 6-2번 마을버스 LS타워 하차, 1호선 명학역 하차 후 65번 버스 LS타워 하차'}</span></li>
        <li><i class="fa-solid fa-train"></i> <span><strong>${getNestedTranslation(activeTranslations, 'introduce.map_train') || '지하철 이용'}:</strong> ${getNestedTranslation(activeTranslations, 'introduce.map_train_desc') || '금정역 2번 출구에서 LS타워 방면 직진 200m'}</span></li>
      </ul>
    </div>
  `;
  view.appendChild(mapSection);

  return view;
}

// 3. BUSINESS VIEW (Vertical list layout matching React)
function renderBusiness() {
  const view = document.createElement('div');
  view.className = 'container fade-in';
  
  const lists = getNestedTranslation(activeTranslations, 'business.anchors') || ["의료정보사업", "Metro-cERP", "헬스케어 서비스", "VOIP 사업", "MetroSMS", "알림톡", "주요 고객사"];
  view.appendChild(createTitleList(lists));

  const activeMetrohisData = getDbData('metrohisData', metrohisData);

  // 1. 의료정보사업 (MetroHIS)
  const hisSection = document.createElement('section');
  hisSection.className = 'introduce-section-padding';
  hisSection.appendChild(createPointDiv(lists[0], '의료정보사업'));
  
  const compositionData = currentLang === 'en' ? [
    {
      title: "Reception & Billing",
      color: "#64b764",
      items: [
        "Fast and transparent billing management",
        "Avoid claims omission / reduce reduction rates",
        "Integrated management of outstanding accounts",
        "On-screen review of insurance claims",
        "EDI claims integration"
      ]
    },
    {
      title: "Outpatient & Ward Care",
      color: "#649dc2",
      items: [
        "Full Text-based Electronic Medical Records",
        "Multi-functional easy prescription ordering",
        "Prescription-driven nursing care automation",
        "Automated medical supplies consumption logging",
        "Integrated inquiry of lab results & trends"
      ]
    },
    {
      title: "Medical Treatment Support",
      color: "#feb40e",
      items: [
        "Prescription-based test booking management",
        "Interface with testing devices (avoids errors/transmission delay)",
        "Quality Control (QC) of clinical pathology tests",
        "Supplies management and billing via OCS"
      ]
    },
    {
      title: "Business Operations",
      color: "#9fc543",
      items: [
        "Administrative management system supporting productivity",
        "EIS cost analysis integrated with OCS",
        "Logistics supporting multiple inventory locations"
      ]
    }
  ] : [
    {
      title: "원무",
      color: "#64b764",
      items: [
        "신속하고 투명한 수납관리",
        "재원심사로 누락방지/삭감율 격감",
        "수납 및 청구 미수의 통합관리",
        "보험청구의 화면 심사",
        "EDI 청구"
      ]
    },
    {
      title: "진료",
      color: "#649dc2",
      items: [
        "Full Text 기반의 전자의무 기록관리",
        "다 기능의 간편한 처방관리 기능",
        "처방에 근거한 간호관리 자동화",
        "진료재료 청구 자동화",
        "검사결과 및 누적결과 조회 통합"
      ]
    },
    {
      title: "진료지원",
      color: "#feb40e",
      items: [
        "처방에 의한 검사 예약 관리",
        "검사장비와의 Interface <br>(결과관리의 오류 / 전송지연방지)",
        "임상병리검사의 QC관리",
        "OCS에 의한 재료관리 및 청구"
      ]
    },
    {
      title: "경영관리",
      color: "#9fc543",
      items: [
        "생산성 향상을 지원하는 행정관리 시스템",
        "OCS와 연계된 EIS 원가분석",
        "다중 재고 Location을 지원하는 물류체계"
      ]
    }
  ];

  let compCardsHtml = '';
  compositionData.forEach(card => {
    let cardItemsHtml = '';
    card.items.forEach(item => {
      cardItemsHtml += `<li><i class="fa-solid fa-chevron-right" style="color: ${card.color};"></i> <span>${item}</span></li>`;
    });
    compCardsHtml += `
      <div class="his-compo-card">
        <div class="his-compo-title-bar" style="border-bottom: 2px solid ${card.color}">
          <span style="color: ${card.color}">${card.title}</span>
        </div>
        <ul class="his-compo-list">
          ${cardItemsHtml}
        </ul>
      </div>
    `;
  });

  let hisFeaturesHtml = '';
  activeMetrohisData.features.forEach(feat => {
    hisFeaturesHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></li>`;
  });
  let hisEffectsHtml = '';
  activeMetrohisData.effects.forEach(eff => {
    hisEffectsHtml += `<li><i class="fa-solid fa-circle-chevron-right"></i> <span>${eff}</span></li>`;
  });
  
  hisSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Intro Layout Grid (Text on Left, Flowchart on Right) -->
      <div class="his-intro-card">
        <div class="his-intro-text-pane">
          <h3>${getNestedTranslation(activeTranslations, 'business.his_title') || '의료정보사업부문'}</h3>
          <p>${getNestedTranslation(activeTranslations, 'business.his_intro') || '메트로소프트는 중/소 병원을 중심으로 MetroHIS(메트로 병원정보시스템)을 공급하고 있습니다.'}</p>
        </div>
        <div class="his-flowchart-wrapper" title="의료정보사업 사업내용">
          <img src="/Images/businessContent.png" alt="사업 내용 구성도">
        </div>
      </div>

      <!-- 의료정보사업의 구성 -->
      <div style="margin-bottom: 50px;">
        <h4 style="font-size: 1.25rem; color: var(--primary); margin-bottom: 25px;"><i class="fa-solid fa-diamond" style="font-size: 0.8rem; margin-right: 8px;"></i> ${getNestedTranslation(activeTranslations, 'business.his_compo_title') || '의료정보사업의 구성'}</h4>
        <div class="his-grid-4col">
          ${compCardsHtml}
        </div>
      </div>

      <!-- 특징 & 도입효과 -->
      <div class="business-cards-grid">
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-laptop-medical"></i> ${getNestedTranslation(activeTranslations, 'business.his_features_title') || '특징'}</h3>
          <ul class="his-compo-list" style="margin-top: 20px;">
            ${hisFeaturesHtml}
          </ul>
        </div>
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-chart-line"></i> ${getNestedTranslation(activeTranslations, 'business.his_effects_title') || '도입효과'}</h3>
          <ul class="his-compo-list" style="margin-top: 20px;">
            ${hisEffectsHtml}
          </ul>
        </div>
      </div>
    </div>
  `;
  view.appendChild(hisSection);

  const activeCloudData = getDbData('cloudData', cloudData);
  const activeHealthcareData = getDbData('healthcareData', healthcareData);

  // 2. Metro-cERP (Cloud)
  const erpSection = document.createElement('section');
  erpSection.className = 'introduce-section-padding';
  erpSection.appendChild(createPointDiv(lists[1], 'Metro-cERP'));
  
  let cloudFeaturesHtml = '';
  activeCloudData.features.forEach(feat => {
    cloudFeaturesHtml += `
      <div class="home-feature-card" style="text-align: left; display: flex; gap: 20px; align-items: start; padding: 25px;">
        <div class="feature-icon-wrapper" style="margin: 0; flex-shrink: 0;"><i class="fa-solid fa-circle-dot"></i></div>
        <div>
          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">${feat.title}</h4>
          <p style="font-size: 0.9rem; line-height: 1.5;">${feat.contents}</p>
        </div>
      </div>
    `;
  });
  let cloudEffectsHtml = '';
  activeCloudData.effects.forEach(eff => {
    let itemsHtml = '';
    eff.contents.forEach(item => {
      itemsHtml += `<li style="font-size: 0.9rem; margin-bottom: 8px; color: var(--text-muted);"><i class="fa-solid fa-check" style="color: var(--secondary); margin-right: 8px;"></i> ${item}</li>`;
    });
    cloudEffectsHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px;">
        <h4 style="color: var(--secondary); margin-bottom: 15px;"><i class="fa-solid fa-tag"></i> ${eff.title}</h4>
        <ul style="list-style: none;">
          ${itemsHtml}
        </ul>
      </div>
    `;
  });

  erpSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 10px;">${activeCloudData.Title.title}</h3>
        <p style="font-size: 1.1rem; max-width: 800px; margin: 0 auto;">${activeCloudData.Title.content}</p>
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'business.cloud_title') || 'cERP 핵심 가치'}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 50px;">
        ${cloudFeaturesHtml}
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'business.cloud_module_title') || '모듈별 세부 효과'}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
        ${cloudEffectsHtml}
      </div>
    </div>
  `;
  view.appendChild(erpSection);

  // 3. 헬스케어 서비스 (HealthCare)
  const healthSection = document.createElement('section');
  healthSection.className = 'introduce-section-padding';
  healthSection.appendChild(createPointDiv(lists[2], '헬스케어 서비스'));
  
  // Model categories
  let modelCardsHtml = '';
  activeHealthcareData.Model.content.forEach(el => {
    let itemsHtml = '';
    el.content.forEach(e => {
      if (e.content) {
        let innerHtml = '';
        e.content.forEach(inner => {
          innerHtml += `<li style="list-style: circle; margin-left: 20px; font-size: 0.85rem;">${inner}</li>`;
        });
        itemsHtml += `<li style="font-size: 0.95rem; margin-bottom: 8px;"><strong>${e.title}</strong><ul style="margin-top:5px;">${innerHtml}</ul></li>`;
      } else {
        itemsHtml += `<li style="font-size: 0.95rem; margin-bottom: 8px;">${e.title}</li>`;
      }
    });
    
    modelCardsHtml += `
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.25rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-square-poll-vertical"></i> ${el.title}</h4>
        <ul class="business-bullets" style="list-style: none;">
          ${itemsHtml}
        </ul>
      </div>
    `;
  });

  // Healing zone table cards
  let healingGridHtml = '';
  activeHealthcareData.table.forEach(el => {
    healingGridHtml += `
      <div class="healing-card-item">
        <div class="healing-card-img-wrapper">
          <img src="/Images/HealthCare${el.img}" alt="${el.title}">
        </div>
        <div class="healing-card-caption">
          <p>${el.title.replace('|', '<br>')}</p>
        </div>
      </div>
    `;
  });

  // Core Program
  let coreItemsHtml = '';
  activeHealthcareData.core.content.forEach(el => {
    coreItemsHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;">${el.title}</h5>
        <div style="width: 100%; max-width: 280px; margin: 0 auto; border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border);">
          <img src="/Images/HealthCare${el.img}" alt="${el.title}" style="width: 100%; height: auto; display: block;">
        </div>
      </div>
    `;
  });

  // Mental doctor
  let mentalDrHtml = '';
  activeHealthcareData.metal.content.forEach(img => {
    mentalDrHtml += `
      <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 320px;">
        <img src="/Images/HealthCare${img}" alt="Mental Doctor" style="width: 100%; height: auto; display: block;">
      </div>
    `;
  });

  healthSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Title intro -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 1.6rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-heart-pulse"></i> ${getNestedTranslation(activeTranslations, 'business.healthcare_intro_title') || '헬스케어 서비스 소개'}</h3>
        <p style="font-size: 1.05rem; line-height: 1.7;">${activeHealthcareData.Title.description.replace('|', '<br>')}</p>
      </div>

      <!-- Business Model -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-folder-open"></i> ${activeHealthcareData.Model.title}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          ${modelCardsHtml}
        </div>
      </div>

      <!-- Healing Zone composition -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-gem"></i> ${activeHealthcareData.composition.title}</h3>
        <ul class="business-bullets" style="margin-bottom: 30px;">
          ${activeHealthcareData.composition.content.map(item => `<li><i class="fa-solid fa-circle-chevron-right"></i> ${item}</li>`).join('')}
        </ul>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
          ${healingGridHtml}
        </div>
      </div>

      <!-- Core Program -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-dumbbell"></i> ${activeHealthcareData.core.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${activeHealthcareData.core.description}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${coreItemsHtml}
        </div>
      </div>

      <!-- Mental Doctor -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-brain"></i> ${activeHealthcareData.metal.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${activeHealthcareData.metal.description}</p>
        <div style="display: flex; gap: 40px; justify-content: center; flex-wrap: wrap;">
          ${mentalDrHtml}
        </div>
      </div>
    </div>
  `;
  view.appendChild(healthSection);

  const activeVoipData = getDbData('voipData', voipData);
  const activeSmsData = getDbData('smsData', smsData);
  const activeAlarmData = getDbData('alarmData', alarmData);

  // 4. VOIP 사업
  const voipSection = document.createElement('section');
  voipSection.className = 'introduce-section-padding';
  voipSection.appendChild(createPointDiv(lists[3], 'VOIP 사업'));
  
  let voipFeaturesHtml = '';
  activeVoipData.features.forEach(feat => {
    let subHtml = '';
    feat.contents.forEach(item => {
      subHtml += `<li><i class="fa-solid fa-arrow-right" style="color: var(--secondary)"></i> ${item.title}</li>`;
    });
    voipFeaturesHtml += `
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.2rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-circle-phone"></i> ${feat.title}</h4>
        <ul class="business-bullets">
          ${subHtml}
        </ul>
      </div>
    `;
  });
  
  let voipEffectsHtml = '';
  activeVoipData.effects.forEach(eff => {
    voipEffectsHtml += `<li><i class="fa-solid fa-chevron-right" style="color: var(--secondary)"></i> ${eff}</li>`;
  });

  voipSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <p class="business-intro-text">${activeVoipData.intro || '메트로소프트 VoIP 서비스는 병원의 통신망을 혁신하고 비용을 절감하는 솔루션입니다.'}</p>
      <h4 style="font-size: 1.3rem; margin-bottom: 25px; color: var(--text-main); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-shield-halved"></i> ${getNestedTranslation(activeTranslations, 'business.voip_security_title') || '안정성 및 가치'}</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 50px;">
        ${voipFeaturesHtml}
      </div>
      <div class="business-detail-card">
        <h3><i class="fa-solid fa-circle-info"></i> ${getNestedTranslation(activeTranslations, 'business.voip_effect_title') || 'VoIP 도입 효과'}</h3>
        <ul class="business-bullets">
          ${voipEffectsHtml}
        </ul>
      </div>
    </div>
  `;
  view.appendChild(voipSection);

  // 5. MetroSMS
  const smsSection = document.createElement('section');
  smsSection.className = 'introduce-section-padding';
  smsSection.appendChild(createPointDiv(lists[4], 'MetroSMS'));
  
  let smsFeaturesHtml = '';
  activeSmsData.features.forEach(feat => {
    let subHtml = '';
    feat.contents.forEach(item => {
      subHtml += `<li><i class="fa-solid fa-check"></i> ${item}</li>`;
    });
    smsFeaturesHtml += `
      <div class="business-detail-card" style="padding: 25px;">
        <h4 style="font-size: 1.15rem; color: var(--primary); margin-bottom: 10px;">${feat.title}</h4>
        <ul class="business-bullets">
          ${subHtml}
        </ul>
      </div>
    `;
  });

  let smsProgressHtml = '';
  activeSmsData.progress.forEach(step => {
    smsProgressHtml += `
      <div style="background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 8px;">${step.title}</h5>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">${step.contents}</p>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 260px; margin: 0 auto;">
          <img src="/Images/MetroSMS${step.img}" alt="${step.title}" style="width:100%; display:block;">
        </div>
      </div>
    `;
  });

  let hpsContentsHtml = '';
  activeSmsData.HPS.contents.forEach(el => {
    hpsContentsHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--primary); font-size: 1.05rem; margin-bottom: 15px;">${el.title}</h5>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
          <img src="/Images/MetroSMS${el.img}" alt="${el.title}" style="width:100%; display:block;">
        </div>
      </div>
    `;
  });

  smsSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Feature chips -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-circle-question"></i> ${getNestedTranslation(activeTranslations, 'business.sms_feature_title') || '서비스 특징'}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          ${smsFeaturesHtml}
        </div>
      </div>

      <!-- Functional flows -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-laptop"></i> ${getNestedTranslation(activeTranslations, 'business.sms_flow_title') || '문자발송 프로그램 기능'}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${smsProgressHtml}
        </div>
      </div>

      <!-- HPS -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 10px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-mobile-screen"></i> ${activeSmsData.HPS.title}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6;">${activeSmsData.HPS.description.replace('|', '<br>')}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${hpsContentsHtml}
        </div>
      </div>
    </div>
  `;
  view.appendChild(smsSection);

  // 6. 알림톡
  const alarmSection = document.createElement('section');
  alarmSection.className = 'introduce-section-padding';
  alarmSection.appendChild(createPointDiv(lists[5], '알림톡'));
  
  let alarmFeaturesHtml = '';
  activeAlarmData.features.contents.forEach(feat => {
    let subHtml = '';
    feat.contents.forEach(item => {
      subHtml += `<li><i class="fa-solid fa-check"></i> ${item}</li>`;
    });
    alarmFeaturesHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px;">
        <h5 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 12px;"><i class="fa-solid fa-tag"></i> ${feat.title}</h5>
        <ul class="business-bullets">
          ${subHtml}
        </ul>
      </div>
    `;
  });

  alarmSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Intro -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 15px;"><i class="fa-solid fa-message"></i> ${getNestedTranslation(activeTranslations, 'business.alarm_intro_title') || '카카오 알림톡 서비스'}</h3>
        <ul class="business-bullets">
          ${activeAlarmData.intro.contents.map(item => `<li><i class="fa-solid fa-circle-chevron-right"></i> ${item}</li>`).join('')}
        </ul>
      </div>

      <!-- System config -->
      <div style="display: flex; gap: 40px; align-items: center; margin-bottom: 50px; flex-wrap: wrap;">
        <div style="flex: 1.2; min-width: 280px;">
          <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-gear"></i> ${getNestedTranslation(activeTranslations, 'business.alarm_sys_title') || '시스템 구성'}</h3>
          <ul class="business-bullets">
            ${activeAlarmData.comp.contents.map(item => `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`).join('')}
          </ul>
        </div>
        <div style="flex: 0.8; min-width: 250px; display: flex; justify-content: center;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 280px;">
            <img src="/Images/Alarm${activeAlarmData.comp.img}" alt="System Diagram" style="width:100%; display:block;">
          </div>
        </div>
      </div>

      <!-- Features -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'business.alarm_feature_title') || '주요 장점'}</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
          ${alarmFeaturesHtml}
        </div>
        <div style="display: flex; justify-content: center;">
          <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 280px;">
            <img src="/Images/Alarm${activeAlarmData.features.img}" alt="Alimtalk Feature Card" style="width:100%; display:block;">
          </div>
        </div>
      </div>
    </div>
  `;
  view.appendChild(alarmSection);

  // 7. 주요 고객사
  const clientSection = document.createElement('section');
  clientSection.className = 'introduce-section-padding';
  clientSection.appendChild(createPointDiv(lists[6], '주요 고객사'));
  
  let clientsHtml = '';
  hospitalData.content.forEach(client => {
    clientsHtml += `
      <div class="modern-client-card" onclick="window.open('${client.url}', '_blank')" title="${client.title}">
        <img src="/Images/Hospital_icon${client.img}" alt="${client.title}" onerror="this.outerHTML='<strong class=&quot;fallback-text&quot;>${client.title}</strong>'">
      </div>
    `;
  });

  clientSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="modern-clients-grid">
        ${clientsHtml}
      </div>
    </div>
  `;
  view.appendChild(clientSection);

  return view;
}

// 4. PRODUCT VIEW (Vertical list layout matching React)
function renderProduct() {
  const view = document.createElement('div');
  view.className = 'container fade-in';
  
  const lists = getNestedTranslation(activeTranslations, 'product.anchors') || ["EMR", "iEMR", "OCS", "T-BIZ 모바일 EMR", "ERP", "CRM"];
  view.appendChild(createTitleList(lists));

  const activeEmrData = getDbData('emrData', emrData);
  const activeIemrData = getDbData('iemrData', iemrData);
  const activeOcsData = getDbData('ocsData', ocsData);

  // 1. EMR
  const emrSection = document.createElement('section');
  emrSection.className = 'introduce-section-padding';
  emrSection.appendChild(createPointDiv('EMR'));
  
  let emrTreatmentHtml = '';
  activeEmrData.treatment.forEach(item => {
    emrTreatmentHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`;
  });
  let emrNurseHtml = '';
  activeEmrData.nurse.forEach(item => {
    emrNurseHtml += `<li><i class="fa-solid fa-clipboard-check"></i> <span>${item}</span></li>`;
  });
  let emrSecurityHtml = '';
  activeEmrData.security[1].content.forEach(item => {
    emrSecurityHtml += `<li><i class="fa-solid fa-lock"></i> <span>${item}</span></li>`;
  });

  emrSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${activeEmrData.intro.title}</h3>
          <div class="product-subtitle">${activeEmrData.intro.subtitle}</div>
          <div class="product-description-box">${activeEmrData.intro.content.replace(/\//g, '<br>')}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-folder-open"></i>
            <h4>${getNestedTranslation(activeTranslations, 'product.emr_badge_title') || '전자의무기록'}</h4>
            <p>Electronic Medical Record</p>
          </div>
        </div>
      </div>
      
      <div class="business-cards-grid" style="margin-bottom: 50px;">
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-user-doctor"></i> ${getNestedTranslation(activeTranslations, 'product.emr_treatment_title') || '의사 진료부문'}</h3>
          <ul class="product-checklist full-width">
            ${emrTreatmentHtml}
          </ul>
        </div>
        <div class="business-detail-card">
          <h3><i class="fa-solid fa-user-nurse"></i> ${getNestedTranslation(activeTranslations, 'product.emr_nurse_title') || '간호 관리부문'}</h3>
          <ul class="product-checklist full-width">
            ${emrNurseHtml}
          </ul>
        </div>
      </div>

      <div style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.2); padding: 30px; border-radius: 16px;">
        <h3 style="color: var(--accent); font-size: 1.4rem; margin-bottom: 15px;"><i class="fa-solid fa-shield-halved"></i> ${getNestedTranslation(activeTranslations, 'product.emr_security_title') || 'EMR 보안 체계'}</h3>
        <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.7;">${activeEmrData.security[0].title.replace(/\//g, '<br>')}</p>
        <ul class="product-checklist" style="list-style: none;">
          ${emrSecurityHtml}
        </ul>
      </div>
    </div>
  `;
  view.appendChild(emrSection);

  // 2. iEMR
  const iemrSection = document.createElement('section');
  iemrSection.className = 'introduce-section-padding';
  iemrSection.appendChild(createPointDiv('iEMR'));
  
  let iemrFeatsHtml = '';
  activeIemrData.features.forEach(feat => {
    iemrFeatsHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></li>`;
  });

  iemrSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout">
        <div class="product-info-panel">
          <h3>${activeIemrData.Title.title}</h3>
          <div class="product-subtitle">${activeIemrData.Title.subtitle}</div>
          <div class="product-description-box">${activeIemrData.Title.content.replace(/\//g, '<br>')}</div>
          <div class="product-features-checklist">
            <h4><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'product.iemr_features_title') || '주요 핵심 기능'}</h4>
            <ul class="product-checklist full-width">
              ${iemrFeatsHtml}
            </ul>
          </div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-file-image"></i>
            <h4>${getNestedTranslation(activeTranslations, 'product.iemr_badge_title') || '영상의무기록'}</h4>
            <p>Image EMR System</p>
          </div>
        </div>
      </div>
    </div>
  `;
  view.appendChild(iemrSection);

  // 3. OCS
  const ocsSection = document.createElement('section');
  ocsSection.className = 'introduce-section-padding';
  ocsSection.appendChild(createPointDiv('OCS'));
  
  let ocsCompoHtml = '';
  activeOcsData.composition.forEach(group => {
    let itemsHtml = '';
    group.forEach(item => {
      itemsHtml += `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`;
    });
    ocsCompoHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 20px; border-radius: 12px;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
          ${itemsHtml}
        </ul>
      </div>
    `;
  });

  let ocsDetailHtml = '';
  activeOcsData.Lists.forEach(category => {
    let subDeptsHtml = '';
    category.contents.forEach(dept => {
      let itemsHtml = '';
      if (dept.contents) {
        dept.contents.forEach(item => {
          let innerItemsHtml = '';
          if (item.contents) {
            innerItemsHtml += `<ul style="list-style: none; padding-left: 20px; margin-top: 5px;">`;
            item.contents.forEach(inner => {
              innerItemsHtml += `<li style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">- ${inner.title}</li>`;
            });
            innerItemsHtml += `</ul>`;
          }
          itemsHtml += `<li style="font-size: 0.95rem; margin-bottom: 8px;"><strong>${item.title}</strong>${innerItemsHtml}</li>`;
        });
      }
      
      subDeptsHtml += `
        <div style="background: var(--bg-primary); border: 1px solid var(--glass-border); padding: 20px; border-radius: 12px; flex: 1; min-width: 250px;">
          <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;"><i class="fa-solid fa-angles-right"></i> ${dept.title}</h5>
          <ul style="list-style: none;">
            ${itemsHtml}
          </ul>
        </div>
      `;
    });

    ocsDetailHtml += `
      <div style="margin-bottom: 40px;">
        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px;">${category.title}</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">${category.description.replace(/\|/g, '<br>')}</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${subDeptsHtml}
        </div>
      </div>
    `;
  });

  ocsSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${activeOcsData.title.title}</h3>
          <div class="product-subtitle">${activeOcsData.title.subtitle}</div>
          <div class="product-description-box">${activeOcsData.title.content.replace(/\//g, '<br>')}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-notes-medical"></i>
            <h4>처방전달 시스템</h4>
            <p>Order Communication System</p>
          </div>
        </div>
      </div>
      <h4 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main);"><i class="fa-solid fa-sitemap"></i> 시스템 구성도 및 연동 범위</h4>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 60px;">
        ${ocsCompoHtml}
      </div>
      <h4 style="font-size: 1.4rem; margin-bottom: 30px; color: var(--text-main); text-align: center;"><i class="fa-solid fa-list-check"></i> 세부 모듈 및 상세 스펙</h4>
      <div>
        ${ocsDetailHtml}
      </div>
    </div>
  `;
  view.appendChild(ocsSection);

  const activeTbizData = getDbData('tbizData', tbizData);
  const activeErpData = getDbData('erpData', erpData);
  const activeCrmData = getDbData('crmData', crmData);

  // 4. T-BIZ 모바일 EMR
  const tbizSection = document.createElement('section');
  tbizSection.className = 'introduce-section-padding';
  tbizSection.appendChild(createPointDiv('T-BIZ 모바일 EMR'));
  
  let tbizFeatsHtml = '';
  activeTbizData.features.forEach(feat => {
    tbizFeatsHtml += `<li><i class="fa-solid fa-circle-check"></i> ${feat}</li>`;
  });

  let tbizFuncsHtml = '';
  activeTbizData.functions.content.forEach(el => {
    tbizFuncsHtml += `
      <tr>
        <td style="font-weight:700; color:var(--text-main);">${el.content[0]}</td>
        <td>${el.content[1]}</td>
      </tr>
    `;
  });

  let tbizExamplesHtml = '';
  activeTbizData.examples.forEach(ex => {
    tbizExamplesHtml += `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--secondary); font-size: 1.1rem; margin-bottom: 15px;">${ex.title}</h5>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto; background: #000;">
          <img src="/Images/T_Biz${ex.img}" alt="${ex.title}" style="width:100%; display:block;">
        </div>
      </div>
    `;
  });

  let tbizEffectsHtml = '';
  activeTbizData.Effects.forEach(eff => {
    let descHtml = '';
    if (eff.description) {
      descHtml = `<p style="font-size: 0.95rem; margin-bottom: 15px; color: var(--text-muted);">${eff.description.replace(/\|/g, '<br>')}</p>`;
    }
    tbizEffectsHtml += `
      <div style="background: var(--bg-secondary); border: 1px solid var(--glass-border); padding: 25px; border-radius: 12px; text-align: center; flex: 1; min-width: 250px;">
        <h5 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 10px;">${eff.title}</h5>
        ${descHtml}
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
          <img src="/Images/T_Biz${eff.img}" alt="${eff.title}" style="width:100%; display:block;">
        </div>
      </div>
    `;
  });

  tbizSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <!-- Title Showcase -->
      <div style="display: flex; gap: 40px; align-items: start; margin-bottom: 50px; flex-wrap: wrap;">
        <div style="flex: 0.8; min-width: 220px; display: flex; justify-content: center;">
          <img src="/Images/TBiz.png" alt="T-BIZ Tablet" style="max-width: 240px; border-radius: 12px; border: 1px solid var(--glass-border); box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
        </div>
        <div style="flex: 1.2; min-width: 280px;">
          <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 5px;">${activeTbizData.TBIZ.title}</h3>
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px; font-family:'Outfit',sans-serif;">${activeTbizData.TBIZ.subtitle}</p>
          <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted); border-top: 1px solid var(--glass-border); padding-top: 20px;">
            ${activeTbizData.TBIZ.content.split('/').map(p => `<p style="margin-bottom:10px;">${p}</p>`).join('')}
          </div>
        </div>
      </div>

      <!-- Features -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'business.his_features_title') || '특징'}</h3>
        <ul class="product-checklist" style="list-style: none;">
          ${tbizFeatsHtml}
        </ul>
      </div>

      <!-- Functions Table -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-table-list"></i> ${getNestedTranslation(activeTranslations, 'product.tbiz_functions_title') || '주요 기능'}</h3>
        <table class="support-directory-table">
          <thead>
            <tr>
              <th>${activeTbizData.functions.title[0]}</th>
              <th>${activeTbizData.functions.title[1]}</th>
            </tr>
          </thead>
          <tbody>
            ${tbizFuncsHtml}
          </tbody>
        </table>
      </div>

      <!-- Examples Screenshots -->
      <div style="margin-bottom: 50px;">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-images"></i> ${getNestedTranslation(activeTranslations, 'product.tbiz_examples_title') || '실행 화면 예시'}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${tbizExamplesHtml}
        </div>
      </div>

      <!-- Security and Device -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 50px;">
        <div class="business-detail-card" style="padding: 25px; text-align: center;">
          <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 15px;"><i class="fa-solid fa-shield-halved"></i> ${activeTbizData.security.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height:1.6;">${activeTbizData.security.description}</p>
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
            <img src="/Images/T_Biz${activeTbizData.security.img}" alt="Security Diagram" style="width:100%;">
          </div>
        </div>
        <div class="business-detail-card" style="padding: 25px; text-align: center;">
          <h4 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 15px;"><i class="fa-solid fa-tablet-screen-button"></i> ${activeTbizData.Device.title}</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height:1.6;">${activeTbizData.Device.description.replace(/\|/g, '<br>')}</p>
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--glass-border); max-width: 240px; margin: 0 auto;">
            <img src="/Images/T_Biz${activeTbizData.Device.img}" alt="Devices" style="width:100%;">
          </div>
        </div>
      </div>

      <!-- Effects -->
      <div>
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 20px; border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;"><i class="fa-solid fa-chart-pie"></i> ${getNestedTranslation(activeTranslations, 'product.tbiz_effects_title') || '기대 효과 및 가치'}</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          ${tbizEffectsHtml}
        </div>
      </div>
    </div>
  `;
  tbizSection.appendChild(createPointDiv('T-BIZ 모바일 EMR')); // placeholder to maintain structural balance if needed, or simply append it
  view.appendChild(tbizSection);

  // 5. ERP
  const erpSection = document.createElement('section');
  erpSection.className = 'introduce-section-padding';
  erpSection.appendChild(createPointDiv('ERP'));
  
  let erpMgtHtml = '';
  activeErpData.management.forEach(item => {
    erpMgtHtml += `<li><i class="fa-solid fa-user-gear"></i> <span>${item}</span></li>`;
  });
  let erpAccHtml = '';
  activeErpData.accounting.forEach(item => {
    erpAccHtml += `<li><i class="fa-solid fa-file-invoice-dollar"></i> <span>${item}</span></li>`;
  });
  let erpStockHtml = '';
  activeErpData.stock.forEach(item => {
    erpStockHtml += `<li><i class="fa-solid fa-boxes-stacked"></i> <span>${item}</span></li>`;
  });

  erpSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout" style="margin-bottom: 50px;">
        <div class="product-info-panel">
          <h3>${activeErpData.MetroERP.title}</h3>
          <div class="product-subtitle">${activeErpData.MetroERP.subtitle}</div>
          <div class="product-description-box">${activeErpData.MetroERP.content.replace(/\//g, '<br>')}</div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-sitemap"></i>
            <h4>${getNestedTranslation(activeTranslations, 'product.erp_badge_title') || '통합자원관리'}</h4>
            <p>Enterprise Resource Planning</p>
          </div>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-users"></i> ${getNestedTranslation(activeTranslations, 'product.erp_hr_title') || '인사 / 급여'}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${erpMgtHtml}
          </ul>
        </div>
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-scale-balanced"></i> ${getNestedTranslation(activeTranslations, 'product.erp_accounting_title') || '회계 / 재무'}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${erpAccHtml}
          </ul>
        </div>
        <div class="business-detail-card" style="padding: 25px;">
          <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 20px;"><i class="fa-solid fa-warehouse"></i> ${getNestedTranslation(activeTranslations, 'product.erp_logistics_title') || '물류 / 자산'}</h4>
          <ul class="product-checklist full-width" style="font-size: 0.95rem;">
            ${erpStockHtml}
          </ul>
        </div>
      </div>
    </div>
  `;
  view.appendChild(erpSection);

  // 6. CRM
  const crmSection = document.createElement('section');
  crmSection.className = 'introduce-section-padding';
  crmSection.appendChild(createPointDiv('CRM'));
  
  let crmFeatsHtml = '';
  activeCrmData.features.forEach(feat => {
    crmFeatsHtml += `<li><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></li>`;
  });

  crmSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <div class="product-showcase-layout">
        <div class="product-info-panel">
          <h3>${activeCrmData.Title.title}</h3>
          <div class="product-subtitle">${activeCrmData.Title.subtitle}</div>
          <div class="product-description-box">${activeCrmData.Title.content.replace(/\//g, '<br>')}</div>
          <div class="product-features-checklist">
            <h4><i class="fa-solid fa-star"></i> ${getNestedTranslation(activeTranslations, 'product.crm_features_title') || '환자 밀착 관리 효과'}</h4>
            <ul class="product-checklist full-width">
              ${crmFeatsHtml}
            </ul>
          </div>
        </div>
        <div class="product-graphic-panel">
          <div class="product-badge-graphic">
            <i class="fa-solid fa-users-viewfinder"></i>
            <h4>${getNestedTranslation(activeTranslations, 'product.crm_badge_title') || '고객관계관리'}</h4>
            <p>Hospital CRM System</p>
          </div>
        </div>
      </div>
    </div>
  `;
  view.appendChild(crmSection);

  return view;
}

// 5. CUSTOMER VIEW (Vertical list layout matching React)
function renderCustomer() {
  const view = document.createElement('div');
  view.className = 'container fade-in';
  
  const lists = getNestedTranslation(activeTranslations, 'customer.anchors') || ["고객지원", "원격지원"];
  view.appendChild(createTitleList(lists));

  const activeCustomerData = getDbData('customerData', customerData);

  // Section 1: 고객지원
  const supportSection = document.createElement('section');
  supportSection.className = 'introduce-section-padding';
  supportSection.appendChild(createPointDiv(lists[0], '고객지원'));
  
  let rowsHtml = '';
  activeCustomerData.address.forEach(row => {
    const dept = row.content[0] || '';
    const name = row.content[1] || '';
    const pos = row.content[2] || '';
    const contactStr = row.content[3] || '';
    const [email, phone] = contactStr.split('/');
    
    let contactInfoHtml = '';
    if (email) contactInfoHtml += `<a href="mailto:${email}"><i class="fa-solid fa-envelope"></i> ${email}</a>`;
    if (phone) contactInfoHtml += `<a href="tel:${phone}"><i class="fa-solid fa-phone"></i> ${phone}</a>`;

    rowsHtml += `
      <tr>
        <td class="support-dept">${dept}</td>
        <td>${name}</td>
        <td>${pos}</td>
        <td>
          <div class="support-contact">
            ${contactInfoHtml}
          </div>
        </td>
      </tr>
    `;
  });

  supportSection.innerHTML += `
    <div class="glass-card" style="margin-top: 40px;">
      <h3 style="font-size: 1.5rem; margin-bottom: 10px; color: var(--primary);"><i class="fa-solid fa-address-book"></i> ${getNestedTranslation(activeTranslations, 'customer.support_title') || '부서별 담당 임직원 연락망'}</h3>
      <p style="margin-bottom: 30px;">${getNestedTranslation(activeTranslations, 'customer.support_desc') || '병원 솔루션 구축 문의 및 유지 보수 관련하여 신속하게 답변해 드리겠습니다.'}</p>
      <table class="support-directory-table">
        <thead>
          <tr>
            <th>${getNestedTranslation(activeTranslations, 'customer.support_th_dept') || '부서'}</th>
            <th>${getNestedTranslation(activeTranslations, 'customer.support_th_name') || '성명'}</th>
            <th>${getNestedTranslation(activeTranslations, 'customer.support_th_pos') || '직위'}</th>
            <th>${getNestedTranslation(activeTranslations, 'customer.support_th_contact') || '연락처 / 이메일'}</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
  view.appendChild(supportSection);

  // Section 2: 원격지원
  const remoteSection = document.createElement('section');
  remoteSection.className = 'introduce-section-padding';
  remoteSection.appendChild(createPointDiv(lists[1], '원격지원'));
  remoteSection.innerHTML += `
    <div class="remote-grid" style="margin-top: 40px; margin-bottom: 60px;">
      <div class="remote-card-box">
        <div class="remote-icon-badge">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <h3 data-i18n="customer.remote_card_title">원격 지원 서비스</h3>
        <p data-i18n="customer.remote_card_desc" style="font-size: 0.98rem; line-height: 1.6; color: var(--text-muted); min-height: 75px;">원활한 장애 처리를 위해 엔지니어가 실시간으로 원격 지원을 연결합니다. 원격지원 요청 시 아래 전용 뷰어 프로그램을 다운로드하고 실행해 주시기 바랍니다.</p>
        <a href="http://www.metrosoft.co.kr/remotesupport/metrosoft.exe" class="btn-download" target="_blank" data-i18n="customer.remote_btn_download">
          <i class="fa-solid fa-download"></i> 원격지원 뷰어 다운로드
        </a>
      </div>
      <div class="remote-card-box">
        <div class="remote-icon-badge blue-dot">
          <i class="fa-solid fa-headset" style="color: var(--secondary);"></i>
        </div>
        <h3 data-i18n="customer.remote_info_title">고객센터 기술 안내</h3>
        <p data-i18n="customer.remote_info_desc" style="font-size: 0.98rem; line-height: 1.6; color: var(--text-muted); min-height: 75px;">전화 및 팩스 문의는 업무시간 내에 가능하며, 휴일에는 온라인 기술 요청 접수가 처리됩니다.</p>
        <p style="text-align: left; font-size: 0.95rem; border-top: 1px solid var(--glass-border); padding-top: 20px; color: var(--text-muted); width: 100%;">
          <strong><span data-i18n="customer.remote_tech_tel">기술문의</span>:</strong> 031-465-9971<br>
          <strong><span data-i18n="customer.remote_tech_fax">FAX</span>:</strong> 031-465-9974<br>
          <strong><span data-i18n="customer.remote_tech_email">이메일</span>:</strong> customer@metrosoft.co.kr
        </p>
      </div>
    </div>
  `;
  view.appendChild(remoteSection);

  return view;
}
