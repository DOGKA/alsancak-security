import { createContext } from 'react';

export type Language = 'tr' | 'en';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
