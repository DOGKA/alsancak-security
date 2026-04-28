import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FileText, AlertTriangle, ArrowRight, Shield, Bell, Users, Leaf } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Reports.module.css';

const incidentIcons = [AlertTriangle, FileText, Shield, Users, Bell, Shield, FileText];

export default function Reports() {
  const { language } = useLanguage();
  const page = translations[language].pages.reports;
  const incidentProcess = page.incidentProcess.map((step, index) => ({ step, icon: incidentIcons[index] }));

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/raporlama" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section id="raporlar" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.reportsHeader.subtitle} title={page.reportsHeader.title} description={page.reportsHeader.description} />
          <div className={s.reportGrid}>
            {page.reportClients.map((client, i) => (
              <motion.div key={client.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className={s.reportCard}>
                <img src={client.logo} alt={client.name} className={s.reportLogo} />
                <div className={s.reportText}>
                  <span className={s.reportProject}>{client.project}</span>
                  <p className={s.reportDesc}>{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="risk" className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.riskHeader.subtitle} title={page.riskHeader.title} description={page.riskHeader.description} />
          <div className={s.frameworkGrid}>
            {page.riskFramework.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className={s.frameworkCard}>
                <div className={s.frameworkHeader}>
                  <div className={s.frameworkNumber}>{String(i + 1).padStart(2, '0')}</div>
                  <h5 className={s.frameworkTitle}>{item.title}</h5>
                </div>
                <p className={s.frameworkDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section id="vaka" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.incidentHeader.subtitle} title={page.incidentHeader.title} description={page.incidentHeader.description} />
          <div className={s.processList}>
            {incidentProcess.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={s.processStep}>
                <div className={s.processNumber}>{i + 1}</div>
                <div className={`glass ${s.processLabel}`}>
                  <step.icon size={16} />
                  <span>{step.step}</span>
                </div>
                {i < incidentProcess.length - 1 && <ArrowRight size={14} className={s.processArrow} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="surdurulebilirlik" className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.sustainHeader.subtitle} title={page.sustainHeader.title} description={page.sustainHeader.description} />
          <div className={s.sustainGrid}>
            <ImageMockup width={500} height={300} alt={page.sustainAlt} src="/images/surdurulebilirlik.png" className={s.sustainImage} />
            <div className={s.sustainPoints}>
              {page.sustainabilityPoints.map((point, i) => (
                <motion.div key={point.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={s.sustainPoint}>
                  <div className={s.sustainIconBox}>
                    <Leaf size={18} />
                  </div>
                  <div>
                    <h4 className={s.sustainTitle}>{point.title}</h4>
                    <p className={s.sustainDesc}>{point.desc}</p>
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
