import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getMenuData } from '../../data/menuData';
import type { Language } from '../../i18n/languageCore';
import { useLanguage } from '../../i18n/useLanguage';
import { translations } from '../../i18n/translations';
import MegaMenu from './MegaMenu';
import s from './Navbar.module.css';

const languageOptions: { code: Language; flag: string }[] = [
  { code: 'tr', flag: '🇹🇷' },
  { code: 'en', flag: '🇬🇧' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const menuData = getMenuData(language);
  const currentMobileLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0];
  const nextLanguage: Language = language === 'tr' ? 'en' : 'tr';

  useEffect(() => {
    const closeMenus = window.setTimeout(() => {
      setActiveMenu(null);
      setMobileOpen(false);
      setMobileAccordion(null);
    }, 0);

    return () => window.clearTimeout(closeMenus);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${s.nav} ${isScrolled ? s.navScrolled : s.navTransparent} ${!isScrolled && location.pathname === '/' ? s.navHero : ''}`}
    >
      <div className={s.container}>
        <div className={s.inner}>
          <Link to="/" className={s.logo}>
            <img src="/images/alsancaklogo.png" alt={t.brand.alt} className={s.logoImg} />
          </Link>

          <div className={s.desktopMenu}>
            {menuData.map((item, idx) => {
              const isRightAligned = idx >= menuData.length - 3;
              return (
                <div key={item.title} className={s.menuItemWrapper}>
                  {item.subItems ? (
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                      className={`${s.menuButton} ${
                        activeMenu === item.title ? s.menuButtonActive
                        : location.pathname === item.path ? s.menuButtonCurrent
                        : ''
                      }`}
                    >
                      {item.title}
                      <ChevronDown size={13} className={`${s.chevron} ${activeMenu === item.title ? s.chevronOpen : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${s.menuLink} ${location.pathname === item.path ? s.menuLinkCurrent : ''}`}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.subItems && (
                    <MegaMenu items={item.subItems} isOpen={activeMenu === item.title} onClose={() => setActiveMenu(null)} align={isRightAligned ? 'right' : 'center'} />
                  )}
                </div>
              );
            })}
            <div className={s.desktopLanguageSelector} aria-label="Language selection">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`${s.languageButton} ${language === option.code ? s.languageButtonActive : ''}`}
                  aria-pressed={language === option.code}
                >
                  <span className={s.flagIcon}>{option.flag}</span>
                  <span>{t.languageNames[option.code]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={s.mobileActions}>
            <div className={s.mobileLanguageSelector} aria-label="Language selection">
              <button
                type="button"
                onClick={() => setLanguage(nextLanguage)}
                className={s.mobileLanguageButton}
                aria-label={t.languageNames[language]}
                aria-pressed="true"
              >
                {currentMobileLanguage.flag}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={s.mobileToggle}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={s.mobileMenu}
          >
            <div className={s.mobileMenuInner}>
              {menuData.map((item) => (
                <div key={item.title}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setMobileAccordion(mobileAccordion === item.title ? null : item.title)}
                        className={s.mobileMenuButton}
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={16} className={`${s.chevron} ${mobileAccordion === item.title ? s.chevronOpen : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileAccordion === item.title && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className={s.mobileSubMenu}>
                            {item.subItems.map((sub) => (
                              <Link key={sub.title} to={sub.link} onClick={() => setMobileOpen(false)}
                                className={s.mobileSubLink}>
                                {sub.imageSrc && (
                                  <img src={sub.imageSrc} alt={sub.imageAlt} className={s.mobileSubImg} />
                                )}
                                <div>
                                  <span className={s.mobileSubTitle}>{sub.title}</span>
                                  <span className={s.mobileSubDesc}>{sub.description}</span>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setMobileOpen(false)}
                      className={s.mobileMenuLink}>
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
