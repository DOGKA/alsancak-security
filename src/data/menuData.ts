import type { Language } from '../i18n/languageCore';
import { translations } from '../i18n/translations';

export interface SubMenuItem {
  title: string;
  description: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc?: string;
  link: string;
}

export interface MenuItem {
  title: string;
  path: string;
  subItems?: SubMenuItem[];
}

export function getMenuData(language: Language): MenuItem[] {
  return translations[language].menu.map((item) => ({
    ...item,
    subItems: 'subItems' in item ? item.subItems.map((subItem) => ({ ...subItem })) : undefined,
  }));
}
