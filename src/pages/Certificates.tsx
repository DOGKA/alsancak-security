import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Anchor, Calendar } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Certificates.module.css';

const isoCerts = [
  { code: 'ISO 45001:2018', title: 'İş Sağlığı ve Güvenliği Yönetim Sistemi', titleEn: 'Occupational Health and Safety Management System' },
  { code: 'ISO 18788:2015', title: 'Özel Güvenlik Operasyonları Yönetim Sistemi', titleEn: 'Private Security Operations Management System' },
  { code: 'ISO 27001:2013', title: 'Bilgi Güvenliği Yönetim Sistemi', titleEn: 'Information Security Management System' },
  { code: 'ISO 14001:2015', title: 'Çevre Yönetim Sistemi', titleEn: 'Environmental Management System' },
  { code: 'ISO 10002:2018', title: 'Kalite Yönetimi - Müşteri Memnuniyeti', titleEn: 'Quality Management Customer Satisfaction' },
  { code: 'ISO 44001:2017', title: 'Ortak İş İlişkileri Yönetim Sistemi', titleEn: 'Collaborative Business Relationship Management Systems' },
  { code: 'ISO 41001:2018', title: 'Tesis Yönetim Sistemi', titleEn: 'Facility Management System' },
  { code: 'ISO 37001:2016', title: 'Rüşvetle Mücadele Yönetim Sistemi', titleEn: 'Anti-Bribery Management System' },
  { code: 'ISO 31000:2018', title: 'Risk Yönetim Sistemi', titleEn: 'Risk Management System' },
  { code: 'ISO 22301:2019', title: 'İş Sürekliliği Yönetim Sistemi', titleEn: 'Business Continuity Management System' },
  { code: 'ISO 9001:2015', title: 'Kalite Yönetim Sistemi', titleEn: 'Quality Management System' },
];

const ispsProjects = [
  { name: 'TTK (Türkiye Taşkömürü Kurumu)', facility: 'Zonguldak Liman Tesisi', period: '2015-2016' },
  { name: 'Fethiye Belediyesi', facility: 'Liman Tesisi', period: '25.02.2015 - 06.08.2015' },
  { name: 'PETKİM Petro Kimya Holding A.Ş.', facility: 'Aliağa Liman Tesisi', period: '2014-2017' },
  { name: 'TDİ (Türkiye Denizcilik İşletmeleri) A.Ş.', facility: 'Sarayburnu Liman Tesisi', period: '2014-2015' },
  { name: 'TMO (Toprak Mahsülleri Ofisi) Genel Müdürlüğü', facility: 'Tekirdağ Liman Tesisi', period: '2014-2017' },
];

export default function Certificates() {
  return (
    <>
      <SEO title="ISO Sertifikaları ve Kalite Standartları — 11 Uluslararası Sertifika" description="ISO 18788, ISO 45001, ISO 27001, ISO 9001 dahil 11 uluslararası ISO sertifikası ile belgelenmiş güvenlik kalitesi. ISPS Code deneyimi." path="/sertifikalar" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Kalite" title="Sertifikalar ve Kalite Standartları" description="Kapsamlı sertifika yelpazemiz, en yüksek endüstri standartlarına bağlılığımızın kanıtıdır." />
        </div>
      </section>

      <section id="iso" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="ISO" title="ISO Sertifikaları" description="11 uluslararası ISO standardı ile belgelenmiş kalite ve güvenlik yönetimi." />
          <div className={s.isoGrid}>
            {isoCerts.map((cert, i) => (
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
          <SectionTitle subtitle="Denizcilik" title="ISPS Code 2014-2017" description="RSO (Recognized Security Organisation) olarak liman tesisleri güvenliğinde deneyim." />
          <div className={s.ispsGrid}>
            <ImageMockup width={500} height={300} alt="ISPS Code liman güvenliği görseli" src="/images/isps-code-2014-2017.png" className={s.ispsImage} />
            <div className={s.ispsList}>
              {ispsProjects.map((project, i) => (
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
