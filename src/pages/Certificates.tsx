import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Anchor, Calendar } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Certificates.module.css';

export default function Certificates() {
  const { language } = useLanguage();
  const page = translations[language].pages.certificates;

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/sertifikalar" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section id="iso" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.isoHeader.subtitle} title={page.isoHeader.title} description={page.isoHeader.description} />
          <div className={s.isoGrid}>
            {page.isoCerts.map((cert, i) => (
              <motion.div key={cert.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                className={s.isoCard}>
                <div className={s.isoHeader}>
                  <div className={s.isoNumber}>{String(i + 1).padStart(2, '0')}</div>
                  <span className={s.isoCode}>{cert.code}</span>
                </div>
                <h4 className={s.isoTitle}>{cert.title}</h4>
                <p className={s.isoTitleEn}>{cert.titleEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="isps" className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.ispsHeader.subtitle} title={page.ispsHeader.title} description={page.ispsHeader.description} />
          <div className={s.ispsGrid}>
            <ImageMockup width={500} height={300} alt={page.ispsAlt} src="/images/isps-code-2014-2017.png" className={s.ispsImage} />
            <div className={s.ispsList}>
              {page.ispsProjects.map((project, i) => (
                <motion.div key={project.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`glass ${s.ispsItem}`}>
                  <div className={s.ispsItemInner}>
                    <div className={s.ispsIconBox}>
                      <Anchor size={16} />
                    </div>
                    <div>
                      <h4 className={s.ispsName}>{project.name}</h4>
                      <p className={s.ispsFacility}>{project.facility}</p>
                      <div className={s.ispsPeriod}>
                        <Calendar size={10} />{project.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
