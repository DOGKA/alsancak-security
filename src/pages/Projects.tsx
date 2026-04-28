import { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Projects.module.css';

type Ref = { title: string; period: string; desc: string; imgSrc: string; status: 'active' | 'completed'; sortYear: number };

type Filter = 'all' | 'active' | 'completed';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const { language } = useLanguage();
  const page = translations[language].pages.projects;

  const allRefs: ReadonlyArray<Ref> = page.refs;
  const filtered = filter === 'all' ? allRefs : allRefs.filter(r => r.status === filter);

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/projelerimiz" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.filterCards}>
            {[
              { key: 'all' as Filter, label: page.filters.all, count: allRefs.length, img: '/images/tumu-logo.png' },
              { key: 'active' as Filter, label: page.filters.active, count: allRefs.filter(r => r.status === 'active').length, img: '/images/proje-devam-eden.png' },
              { key: 'completed' as Filter, label: page.filters.completed, count: allRefs.filter(r => r.status === 'completed').length, img: '/images/proje-tamamlanan.png' },
            ].map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} className={`${s.filterCard} ${filter === f.key ? s.filterCardActive : ''}`}>
                <div className={s.filterImgWrap}>
                  {f.img ? <img src={f.img} alt={f.label} className={s.filterImg} /> : <span className={s.filterImgPlaceholder}>{f.count}</span>}
                </div>
                <span className={s.filterLabel}>{f.label}</span>
                <span className={s.filterCount}>{f.count} {translations[language].common.references}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}
              className={s.refGrid}>
              {filtered.map((ref, i) => (
                <motion.div key={ref.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                  className={s.refCard}>
                  <div className={s.refImageWrap}>
                    <img src={ref.imgSrc} alt={ref.title} className={s.refImage} />
                    <span className={`${s.refBadge} ${ref.status === 'active' ? s.badgeActive : s.badgeCompleted}`}>
                      {ref.status === 'active' ? page.filters.activeBadge : page.filters.completedBadge}
                    </span>
                  </div>
                  <div className={s.refContent}>
                    <h3 className={s.refTitle}>{ref.title}</h3>
                    <span className={s.refPeriod}>{ref.period}</span>
                    <p className={s.refDesc}>{ref.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
