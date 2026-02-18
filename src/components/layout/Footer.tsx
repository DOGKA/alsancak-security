import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, ArrowUpRight, ChevronDown } from 'lucide-react';
import s from './Footer.module.css';

type LinkItem = { title: string; path: string };

function FooterAccordion({ title, links }: { title: string; links: LinkItem[] }) {
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
  const quickLinks: LinkItem[] = [
    { title: 'Anasayfa', path: '/' }, { title: 'Hakkımızda', path: '/hakkimizda' },
    { title: 'Hizmetlerimiz', path: '/hizmetlerimiz' }, { title: 'Referanslar', path: '/projelerimiz' },
  ];
  const serviceLinks: LinkItem[] = [
    { title: 'Fiziksel Güvenlik', path: '/hizmetlerimiz#fiziksel' }, { title: 'Enerji Güvenliği', path: '/hizmetlerimiz#enerji' },
    { title: 'Uzaktan İzleme', path: '/hizmetlerimiz#izleme' }, { title: 'Danışmanlık', path: '/hizmetlerimiz#danismanlik' },
  ];
  const otherLinks: LinkItem[] = [
    { title: 'Raporlama', path: '/raporlama' }, { title: 'Sertifikalar', path: '/sertifikalar' }, { title: 'Eğitim', path: '/egitim' }, { title: 'İletişim', path: '/iletisim' },
  ];

  const columns = [
    { title: 'Hızlı Erişim', links: quickLinks },
    { title: 'Hizmetlerimiz', links: serviceLinks },
    { title: 'Diğer', links: otherLinks },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.brandSection}>
            <Link to="/" className={s.brandLink}>
              <img src="/images/alsancaklogo.png" alt="Alsancak Grup Güvenlik" className={s.brandLogoImg} />
              <div>
                <span className={s.brandName}>ALSANCAK</span>
                <span className={s.brandSub}>Grup Güvenlik</span>
              </div>
            </Link>
            <p className={s.brandDesc}>2007'den bu yana enerji, inşaat ve madencilik sektörlerine profesyonel güvenlik hizmetleri sunan güvenilir ortağınız.</p>
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
          <p className={s.copyright}>&copy; {currentYear} Alsancak Grup Güvenlik. Tüm hakları saklıdır.</p>
          <p className={s.coords}>39° 56′ 0.1140″ N — 32° 51′ 35.0676″ E</p>
        </div>
      </div>
    </footer>
  );
}
