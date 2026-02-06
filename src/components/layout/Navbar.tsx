import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../../data/menuData';
import MegaMenu from './MegaMenu';
import s from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileAccordion(null);
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
            <img src="/images/alsancaklogo.png" alt="Alsancak Grup Güvenlik" className={s.logoImg} />
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
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={s.mobileToggle}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
