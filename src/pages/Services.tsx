import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Shield, Zap, Building2, Camera, Users, AlertTriangle, BarChart3, BookOpen, Fuel, Briefcase } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Services.module.css';

const mainServiceIcons = [Shield, Zap, Fuel, Building2, Camera, Users, Briefcase, BookOpen];
const consultingIcons = [BarChart3, BookOpen, AlertTriangle, AlertTriangle];

export default function Services() {
  const { language } = useLanguage();
  const page = translations[language].pages.services;
  const mainServices = page.mainServices.map((service, index) => ({ ...service, icon: mainServiceIcons[index] }));
  const consultingServices = page.consultingServices.map((service, index) => ({ ...service, icon: consultingIcons[index] }));

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/hizmetlerimiz" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.servicesGrid}>
            {mainServices.map((service, i) => (
              <motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className={s.serviceCard}>
                <div className={s.serviceImageWrap}>
                  <img src={service.imgSrc} alt={service.title} className={s.serviceImage} />
                </div>
                <div className={s.serviceContent}>
                  <div className={s.serviceHeader}>
                    <div className={s.serviceIconBox}>
                      <service.icon size={18} />
                    </div>
                    <h3 className={s.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={s.serviceDesc}>{service.desc}</p>
                  <ul className={s.serviceList}>
                    {service.items.map((item) => (
                      <li key={item} className={s.serviceListItem}>
                        <div className={s.serviceListDot} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="danismanlik" className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.consultingHeader.subtitle} title={page.consultingHeader.title} description={page.consultingHeader.description} />
          <div className={s.consultingGrid}>
            {consultingServices.map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.08}>
                <div className={s.consultingItem}>
                  <div className={s.consultingIconBox}>
                    <service.icon size={20} />
                  </div>
                  <div>
                    <h4 className={s.consultingTitle}>{service.title}</h4>
                    <ul className={s.consultingList}>
                      {service.items.map((item) => (
                        <li key={item} className={s.consultingListItem}>
                          <div className={s.consultingListDot} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
