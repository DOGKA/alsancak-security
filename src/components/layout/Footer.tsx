import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n/useLanguage';
import { translations } from '../../i18n/translations';
import s from './Footer.module.css';

type LinkItem = { title: string; path: string };

function FooterAccordion({ title, links }: { title: string; links: ReadonlyArray<LinkItem> }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.accordionSection}>
      <button className={`${s.columnTitle} ${s.accordionToggle}`} onClick={() => setOpen(v => !v)}>
        <span>{title}</span>
        <ChevronDown size={14} className={`${s.accordionChevron} ${open ? s.accordionChevronOpen : ''}`} />
      </button>
      <ul className={`${s.linkList} ${open ? s.linkListOpen : ''}`}>
        {links.map((link) => (
          <li key={link.title}><Link to={link.path} className={s.link}><ArrowUpRight size={12} className={s.linkArrow} />{link.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  const columns = [
    { title: t.footer.quickTitle, links: t.footer.quickLinks },
    { title: t.footer.servicesTitle, links: t.footer.serviceLinks },
    { title: t.footer.otherTitle, links: t.footer.otherLinks },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.brandSection}>
            <Link to="/" className={s.brandLink}>
              <img src="/images/alsancaklogo.png" alt={t.brand.alt} className={s.brandLogoImg} />
              <div>
                <span className={s.brandName}>{t.brand.name}</span>
                <span className={s.brandSub}>{t.brand.sub}</span>
              </div>
            </Link>
            <p className={s.brandDesc}>{t.footer.brandDesc}</p>
            <div className={s.contactInfo}>
              <div className={s.contactItem}><MapPin size={14} className={s.contactItemIcon} /><span>Yıldızevler Mah. Cezayir Cd. 6/7, 06550 Ankara</span></div>
              <div className={s.contactItem}><Mail size={14} className={s.contactItemIcon} /><span>info@alsancakguvenlik.com</span></div>
              <div className={s.contactItem}><Globe size={14} className={s.contactItemIcon} /><span>alsancakgrup.com.tr</span></div>
            </div>
          </div>
          {columns.map((col) => (
            <FooterAccordion key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
        <div className={s.bottomBar}>
          <p className={s.copyright}>&copy; {currentYear} {t.brand.titleSuffix}. {t.footer.copyright}</p>
          <p className={s.coords}>39° 56′ 0.1140″ N — 32° 51′ 35.0676″ E</p>
        </div>
      </div>
    </footer>
  );
}
