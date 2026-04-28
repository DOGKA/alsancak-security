import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type Language } from './languageCore';

const STORAGE_KEY = 'alsancak-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'tr';
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'tr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
