import React from 'react';
import { useTranslation } from '../../i18n';
import './localeSwitcher.scss';

const LocaleSwitcher = () => {
  const { locale, setLocale, t } = useTranslation();
  return (
    <div className="locale-switcher">
      <button
        type="button"
        className={locale === 'ko' ? 'is-active' : ''}
        onClick={() => setLocale('ko')}
      >
        {t('labels.localeKo')}
      </button>
      <span className="locale-switcher__divider" />
      <button
        type="button"
        className={locale === 'en' ? 'is-active' : ''}
        onClick={() => setLocale('en')}
      >
        {t('labels.localeEn')}
      </button>
    </div>
  );
};

export default LocaleSwitcher;
