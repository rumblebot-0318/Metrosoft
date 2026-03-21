import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations as rawTranslations } from './translations';

const DEFAULT_LOCALE = 'ko';
const STORAGE_KEY = 'metrosoft-locale';

const LocaleContext = createContext(null);

const getStoredLocale = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const storeLocale = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    // ignore
  }
};

const resolvePath = (obj, path) => {
  if (!path) return obj;
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => getStoredLocale() || DEFAULT_LOCALE);

  useEffect(() => {
    storeLocale(locale);
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: (path, fallback) => {
      const value = resolvePath(rawTranslations[locale], path);
      if (value !== undefined) return value;
      const fallbackValue = resolvePath(rawTranslations[DEFAULT_LOCALE], path);
      if (fallbackValue !== undefined) return fallbackValue;
      return fallback || path;
    }
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslation must be used within LocaleProvider');
  }
  return context;
};
