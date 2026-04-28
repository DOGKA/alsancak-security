import { motion } from 'framer-motion';
import { Shield, Target, Award, Scale } from 'lucide-react';
import SEO from '../components/SEO';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './About.module.css';

const valueIcons = [Shield, Target, Award, Scale];
const areaFlags = ['🇹🇷', '🇦🇫', '🇮🇶', '🇱🇾', '🇸🇴', '🇺🇬', '🇸🇾', '⚓'];


export default function About() {
  const { language } = useLanguage();
  const page = translations[language].pages.about;
  const coreValues = page.coreValues.map((value, index) => ({ ...value, icon: valueIcons[index] }));
  const operationalAreas = page.operationalAreas.map((country, index) => ({ country, flag: areaFlags[index] }));

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/hakkimizda" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section id="genel-bakis" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.overviewGrid}>
            <ImageMockup width={500} height={300} alt={page.overviewAlt} src="/images/sirket-binasi.png" className={s.overviewImage} />
            <div className={s.overviewText}>
              <h3 className={s.overviewTitle}>{page.overviewTitle}</h3>
              {page.overviewParagraphs.map((paragraph) => (
                <p key={paragraph} className={s.overviewParagraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.valuesHeader.subtitle} title={page.valuesHeader.title} />
          <div className={s.valuesGrid}>
            {coreValues.map((val, i) => (
              <GlassCard key={val.title} delay={i * 0.08}>
                <div className={s.valueHeader}>
                  <val.icon size={26} className={s.valueIcon} />
                  <h4 className={s.valueTitle}>{val.title}</h4>
                </div>
                <p className={s.valueDesc}>{val.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="organizasyon" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.orgHeader.subtitle} title={page.orgHeader.title} description={page.orgHeader.description} />
          <div className={s.orgWrapper}>
            {/* Top —  */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={s.orgTopCard}>
              <h4 className={s.orgTopTitle}>{page.orgTop.title}</h4>
              <span className={s.orgTopSub}>{page.orgTop.subtitle}</span>
            </motion.div>

            <div className={s.orgLine} />

            {/* Mid — Genel Koordinatör */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className={s.orgMidCard}>
              <h4 className={s.orgMidTitle}>{page.orgMid.title}</h4>
              <span className={s.orgMidSub}>{page.orgMid.subtitle}</span>
            </motion.div>

            <div className={s.orgLine} />

            {/* Directors */}
            <div className={s.orgDirectorsRow}>
              {page.orgDirectors.map((dir, i) => (
                <motion.div key={dir.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className={s.orgDirCard}>
                  <h4 className={s.orgDirTitle}>{dir.title}</h4>
                  <span className={s.orgDirSub}>{dir.subtitle}</span>
                </motion.div>
              ))}
            </div>

            <div className={s.orgLine} />

            {/* Departments */}
            <div className={s.orgDeptGrid}>
              {page.orgDepartments.map((dept, i) => (
                <motion.div key={dept} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className={s.orgDeptCard}>
                  <span className={s.orgDeptText}>{dept}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="deneyim" className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.expHeader.subtitle} title={page.expHeader.title} description={page.expHeader.description} />
          <div className={s.expGrid}>
            <ImageMockup width={500} height={300} alt={page.expAlt} src="/images/dunya-haritasi.png" className={s.expImage} />
            <div className={s.countryTags}>
              {operationalAreas.map((area, i) => (
                <motion.div key={area.country} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={`glass ${s.countryTag}`}>
                  <span className={s.countryFlag}>{area.flag}</span>
                  <span className={s.countryName}>{area.country}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
