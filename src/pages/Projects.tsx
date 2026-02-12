import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Projects.module.css';

const ongoingProjects = [
  { title: 'Transatlantic Petroleum LLC', period: "2012'den Günümüze", desc: 'Enerji sektöründe sürekli güvenlik ve danışmanlık hizmetleri.', imgAlt: 'Transatlantic Petroleum proje görseli', imgSrc: '/images/proje-transatlantic.png' },
  { title: 'Production Solution Viking International (USA)', period: "2013'ten Günümüze", desc: 'Uluslararası üretim çözümleri şirketi için güvenlik hizmetleri.', imgAlt: 'Viking International proje görseli', imgSrc: '/images/proje-viking.png' },
  { title: 'Production Solutions', period: "2018'den Bugüne", desc: 'Üretim çözümleri kapsamında güvenlik hizmetleri.', imgAlt: 'Production Solution proje görseli', imgSrc: '/images/proje-production-solution.png' },
  { title: 'Delegation of the European Union to Turkey', period: "2020'den Günümüze", desc: 'Avrupa Birliği Türkiye Delegasyonu için kapsamlı güvenlik hizmetleri.', imgAlt: 'AB Delegasyonu proje görseli', imgSrc: '/images/proje-ab-delegasyonu.png' },
  { title: 'Singapur Büyükelçiliği', period: "2024'ten Günümüze", desc: 'Singapur Büyükelçiliği için güvenlik hizmetleri.', imgAlt: 'Singapur Büyükelçiliği proje görseli', imgSrc: '/images/singapur-buyukelcilik.png' },
  { title: 'Anagold Madencilik A.Ş.', period: "2024'ten Günümüze", desc: 'Madencilik operasyonları için entegre güvenlik çözümleri.', imgAlt: 'Anagold Madencilik proje görseli', imgSrc: '/images/proje-anagold.png' },
  { title: 'ECHO (AB İnsani Yardım)', period: "2024'ten Günümüze", desc: 'Avrupa Birliği İnsani Yardım Organizasyonu için güvenlik hizmetleri.', imgAlt: 'ECHO proje görseli', imgSrc: '/images/echo.png' },
];

const completedProjects = [
  { title: 'NVT Perenco', period: '2016 - 2025', desc: 'Enerji sektöründe güvenlik ve izleme hizmetleri.', imgAlt: 'NVT Perenco proje görseli', imgSrc: '/images/nvt-perenco.png' },
  { title: 'USAID', period: '2015 - 2020', desc: "Kabil, Kandahar, Ghazni ve Herat bölgelerinde güvenlik hizmetleri.", imgAlt: 'USAID projesi görseli', imgSrc: '/images/proje-usaid.png' },
  { title: 'WCK (World Central Kitchen)', period: '2023 - 2024', desc: "Depremden etkilenen 8 ilde güvenlik hizmetleri.", imgAlt: 'WCK projesi görseli', imgSrc: '/images/proje-wck.png' },
  { title: 'Andritz Hydro Ltd. - ILISU Barajı ve HES', period: '2013 - 2016', desc: 'ILISU Barajı ve HES Projesi için güvenlik ve danışmanlık.', imgAlt: 'ILISU Barajı proje görseli', imgSrc: '/images/proje-ilisu.png' },
  { title: 'Yavuz Sultan Selim Köprüsü', period: '2013 - 2016', desc: 'Köprü inşaatı süresince güvenlik hizmetleri.', imgAlt: 'YSS Köprüsü proje görseli', imgSrc: '/images/proje-yss-koprusu.png' },
  { title: 'BOTAŞ/BIL Bakü-Tiflis-Ceyhan Boru Hattı', period: '2003 - 2007', desc: 'BTC boru hattı güvenliği.', imgAlt: 'BTC boru hattı proje görseli', imgSrc: '/images/proje-btc.png' },
  { title: 'GEOS/Tiway Turkey Ltd.', period: '2010 - 2018', desc: 'Petrol boru hattı güvenliği.', imgAlt: 'GEOS Tiway proje görseli', imgSrc: '/images/geos-tiway.png' },
  { title: 'Valeura Energy', period: '2017 - 2020', desc: 'Enerji sektöründe güvenlik hizmetleri.', imgAlt: 'Valeura Energy proje görseli', imgSrc: '/images/valeura-energy.png' },
  { title: 'Talon Exploration Drilling', period: '2011 - 2013', desc: 'Sondaj operasyonları güvenliği.', imgAlt: 'Talon Exploration proje görseli', imgSrc: '/images/talon-metals.png' },
  { title: 'BOTAŞ International', period: '2010 - 2018', desc: 'Uluslararası boru hattı güvenliği.', imgAlt: 'BOTAŞ International proje görseli', imgSrc: '/images/botas-international.png' },
  { title: 'Akkoy Enerji A.Ş.', period: '2008 (1 Yıl)', desc: 'Enerji tesisi güvenliği.', imgAlt: 'Akkoy Enerji proje görseli', imgSrc: '/images/akkoy-enerji.png' },
  { title: 'Amity Oil International', period: '2011 (1 Yıl)', desc: 'Petrol sahası güvenlik hizmetleri.', imgAlt: 'Amity Oil proje görseli', imgSrc: '/images/amity-oil.png' },
  { title: 'Kolin İnşaat Turizm San. ve Tic. A.Ş.', period: '2008 (1 Yıl)', desc: 'İnşaat projesi güvenliği.', imgAlt: 'Kolin İnşaat proje görseli', imgSrc: '/images/kolin.png' },
  { title: 'Yapı Merkezi İnş. ve San. A.Ş.', period: '2008 (1 Yıl)', desc: 'İnşaat ve sanayi projesi güvenliği.', imgAlt: 'Yapı Merkezi proje görseli', imgSrc: '/images/yapi-merkezi-proje.png' },
  { title: 'Gülermak Ağır Sanayi', period: '2008 - 2010', desc: 'Ağır sanayi tesisi güvenliği.', imgAlt: 'Gülermak proje görseli', imgSrc: '/images/gulermak-agir.png' },
  { title: 'ICA İGTAŞ ASTALDİ', period: '2008 - 2012', desc: 'Altyapı projesi güvenliği.', imgAlt: 'ICA İGTAŞ ASTALDİ proje görseli', imgSrc: '/images/ica-igtas-astaldi.png' },
  { title: 'Savronik Sistem', period: '2009 - 2011', desc: 'Elektronik güvenlik sistemleri.', imgAlt: 'Savronik Sistem proje görseli', imgSrc: '/images/savronik-sistem.png' },
  { title: 'Thrace Basin Natural Gas', period: '2008 - 2012', desc: 'Doğalgaz sahası güvenliği.', imgAlt: 'Thrace Basin proje görseli', imgSrc: '/images/thrace-basin.png' },
  { title: 'PetroGas', period: '2009 - 2011', desc: 'Petrol ve gaz sahası güvenliği.', imgAlt: 'PetroGas proje görseli', imgSrc: '/images/petrogas.png' },
];

export default function Projects() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');

  useEffect(() => {
    if (location.hash === '#tamamlanan') {
      setActiveTab('completed');
    } else {
      setActiveTab('ongoing');
    }
  }, [location.hash]);

  return (
    <>
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Projelerimiz" title="Güvenlik Projeleri" description="Ulusal ve uluslararası ölçekte başarıyla yürüttüğümüz ve tamamladığımız güvenlik projeleri." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.tabsWrapper}>
            <div className={`glass ${s.tabsContainer}`}>
              <button onClick={() => setActiveTab('ongoing')} className={`${s.tab} ${activeTab === 'ongoing' ? s.tabActive : ''}`}>Devam Eden Projeler</button>
              <button onClick={() => setActiveTab('completed')} className={`${s.tab} ${activeTab === 'completed' ? s.tabActive : ''}`}>Tamamlanan Projeler</button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              className={s.projectsGrid}>
              {(activeTab === 'ongoing' ? ongoingProjects : completedProjects).map((project, i) => (
                <GlassCard key={project.title} delay={i * 0.08}>
                  <ImageMockup width={400} height={240} alt={project.imgAlt} src={project.imgSrc} className={s.projectImage} />
                  <div className={s.projectMeta}>
                    <Calendar size={12} />{project.period}
                  </div>
                  <h3 className={s.projectTitle}>{project.title}</h3>
                  <p className={s.projectDesc}>{project.desc}</p>
                </GlassCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
