const state = {
  locale: localStorage.getItem('lunit-locale') || 'ko',
  translations: null
};

const heroTitle = document.querySelector('[data-hero-title]');
const heroDescription = document.querySelector('[data-hero-description]');
const heroCta = document.querySelector('[data-hero-cta]');
const highlightWrapper = document.querySelector('[data-highlights]');
const sectionsWrapper = document.querySelector('[data-sections]');
const localeButtons = document.querySelectorAll('[data-locale]');

const loadTranslations = async () => {
  const res = await fetch('data/translations.json');
  state.translations = await res.json();
  render();
};

const updateLocale = (locale) => {
  state.locale = locale;
  localStorage.setItem('lunit-locale', locale);
  render();
};

const clearChildren = (parent) => {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
};

const renderHighlights = (highlights) => {
  clearChildren(highlightWrapper);
  highlights.forEach((highlight) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${highlight.title}</h3>
      <p>${highlight.description}</p>
      <ul>${highlight.points.map((point) => `<li>${point}</li>`).join('')}</ul>
    `;
    highlightWrapper.appendChild(card);
  });
};

const renderSections = (sections) => {
  clearChildren(sectionsWrapper);
  sections.forEach((section) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${section.title}</h3>
      <p>${section.description}</p>
      <ul>${section.points.map((point) => `<li>${point}</li>`).join('')}</ul>
    `;
    sectionsWrapper.appendChild(card);
  });
};

const render = () => {
  if (!state.translations) return;
  const data = state.translations[state.locale] || state.translations.ko;
  heroTitle.textContent = data.hero.title;
  heroDescription.textContent = data.hero.description;
  heroCta.textContent = data.hero.cta;
  renderHighlights(data.homeHighlights);
  renderSections(data.sections);
  localeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.locale === state.locale);
  });
};

localeButtons.forEach((button) => {
  button.addEventListener('click', () => updateLocale(button.dataset.locale));
});

loadTranslations();
