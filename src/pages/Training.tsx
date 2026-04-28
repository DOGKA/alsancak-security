import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Training.module.css';

export default function Training() {
  const { language } = useLanguage();
  const page = translations[language].pages.training;
  const common = translations[language].common;

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/egitim" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          {page.categories.map((cat, catIdx) => {
            const startIndex = page.categories
              .slice(0, catIdx)
              .reduce((total, category) => total + category.items.length, 0);
            return (
              <div key={cat.id} id={cat.id} className={s.category}>
                <div className={s.categoryRow}>
                  <div className={s.categoryLabel}>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={s.categoryTitle}
                    >
                      {cat.title}
                    </motion.h3>
                    <span className={s.categoryCount}>{cat.items.length} {common.trainingCount}</span>
                  </div>
                  <div className={s.categoryItems}>
                    {cat.items.map((item, i) => {
                      const num = startIndex + i + 1;
                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className={s.item}
                        >
                          <span className={s.itemNumber}>{String(num).padStart(2, '0')}</span>
                          <span className={s.itemTitle}>{item}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                {catIdx < page.categories.length - 1 && <div className={s.divider} />}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
