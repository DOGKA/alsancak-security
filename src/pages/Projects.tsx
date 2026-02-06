import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Projects.module.css';

const ongoingProjects = [
  { title: 'Transatlantic Petroleum LLC', period: "2018'den Bugüne", desc: 'Enerji sektöründe sürekli güvenlik ve danışmanlık hizmetleri.', imgAlt: 'Transatlantic Petroleum proje görseli', imgSrc: '/images/proje-transatlantic.png' },
  { title: 'Production Solution Viking International (USA)', period: "2012'den Günümüze", desc: 'Uluslararası üretim çözümleri şirketi için güvenlik hizmetleri.', imgAlt: 'Viking International proje görseli', imgSrc: '/images/proje-viking.png' },
  { title: 'Production Solution', period: "2018'den Bugüne", desc: 'Üretim çözümleri kapsamında güvenlik hizmetleri.', imgAlt: 'Production Solution proje görseli', imgSrc: '/images/proje-production-solution.png' },
  { title: 'Delegation of the European Union to Turkey', period: "2013'ten Günümüze", desc: 'Avrupa Birliği Türkiye Delegasyonu için kapsamlı güvenlik hizmetleri.', imgAlt: 'AB Delegasyonu proje görseli', imgSrc: '/images/proje-ab-delegasyonu.png' },
  { title: 'NVT Turkse Perenco', period: "2020'den Günümüze", desc: 'Enerji sektöründe güvenlik ve izleme hizmetleri.', imgAlt: 'NVT Turkse Perenco proje görseli', imgSrc: '/images/proje-nvt-perenco.png' },
  { title: 'Anagold Madencilik A.Ş.', period: "2016'dan Günümüze", desc: 'Madencilik operasyonları için entegre güvenlik çözümleri.', imgAlt: 'Anagold Madencilik proje görseli', imgSrc: '/images/proje-anagold.png' },
];

const completedProjects = [
  { title: 'USAID', period: '2015 - 2020', location: 'Kabil, Kandahar, Ghazni, Herat (Afganistan)', desc: "USAID'e Kabil, Kandahar, Ghazni ve Herat bölgelerinde güvenlik hizmetleri sunulmuştur.", imgAlt: 'USAID projesi görseli', imgSrc: '/images/proje-usaid.png' },
  { title: 'WCK (World Central Kitchen)', period: '2023 - 2024', location: 'Depremden etkilenen 8 il (Türkiye)', desc: "Dünya çapında STK olan WCK'ya depremden etkilenen 8 ilde güvenlik hizmetleri.", imgAlt: 'WCK projesi görseli', imgSrc: '/images/proje-wck.png' },
  { title: 'Andritz Hydro Ltd. - ILISU Barajı ve HES', period: '2013 - 2016', location: 'Türkiye', desc: 'ILISU Barajı ve Hidroelektrik Santrali Projesi için güvenlik ve danışmanlık hizmetleri.', imgAlt: 'ILISU Barajı proje görseli', imgSrc: '/images/proje-ilisu.png' },
  { title: 'Yavuz Sultan Selim Köprüsü', period: '2013 - 2016', location: 'İstanbul, Türkiye', desc: 'Yavuz Sultan Selim Köprüsü inşaatı süresince güvenlik hizmetleri.', imgAlt: 'Yavuz Sultan Selim Köprüsü proje görseli', imgSrc: '/images/proje-yss-koprusu.png' },
  { title: 'BOTAŞ/BIL Bakü-Tiflis-Ceyhan Boru Hattı', period: '2003 - 2007', location: 'Türkiye', desc: 'BTC boru hattı güvenliği.', imgAlt: 'BTC boru hattı proje görseli', imgSrc: '/images/proje-btc.png' },
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
                  {'location' in project && <p className={s.projectLocation}>{(project as { location: string }).location}</p>}
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
