import { motion } from 'framer-motion';
import { Shield, Target, Award, Scale } from 'lucide-react';
import SEO from '../components/SEO';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './About.module.css';

const orgTop = { title: 'Yönetim Kurulu', subtitle: 'Stratejik Yönetim' };
const orgMid = { title: 'Genel Koordinatör', subtitle: 'Operasyonel Liderlik' };
const orgDirectors = [
  { title: 'Güvenlik Direktörü', subtitle: 'Saha Operasyonları' },
  { title: 'Operasyon Müdürü', subtitle: 'Proje Yönetimi' },
];
const orgDepartments = [
  'Risk Analiz ve Eğitim Departmanı',
  'Teknik Koordinatörlük',
  'İdari Koordinatörlük',
  'Finans ve İK Departmanı',
  'Alarm Merkezi',
  'İSG Uzmanları',
];

const operationalAreas = [
  { country: 'Türkiye', flag: '🇹🇷' }, { country: 'Afganistan', flag: '🇦🇫' },
  { country: 'Irak', flag: '🇮🇶' }, { country: 'Libya', flag: '🇱🇾' },
  { country: 'Somali', flag: '🇸🇴' }, { country: 'Uganda', flag: '🇺🇬' },
  { country: 'Suriye', flag: '🇸🇾' }, { country: 'Aden Körfezi', flag: '⚓' },
];

const coreValues = [
  { icon: Shield, title: 'Güvenilirlik', desc: 'Güçlü finansal temel ve müşteri güvenliğine adanmışlık.' },
  { icon: Target, title: 'Profesyonellik', desc: 'TSK ve Emniyet kökenli deneyimli kadro.' },
  { icon: Award, title: 'Uzmanlık', desc: 'Askeri, hukuki ve akademik çeşitliliğe sahip ekip.' },
  { icon: Scale, title: 'Uyumluluk', desc: 'Uluslararası standartlara tam uygunluk.' },
];


export default function About() {
  return (
    <>
      <SEO title="Hakkımızda — Ankara Güvenlik Firması" description="Alsancak Grup Güvenlik, 2007'den bu yana 7+ ülkede güvenlik hizmeti veren, TSK ve Emniyet kökenli kadrosuyla Ankara merkezli profesyonel özel güvenlik şirketidir." path="/hakkimizda" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Hakkımızda" title="Şirkete Genel Bakış" description="Alsancak Güvenlik, yurtiçi ve dışında profesyonel güvenlik hizmetlerinin öncüsüdür." />
        </div>
      </section>

      <section id="genel-bakis" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.overviewGrid}>
            <ImageMockup width={500} height={300} alt="Alsancak Grup Güvenlik şirket binası / ekip fotoğrafı" src="/images/sirket-binasi.png" className={s.overviewImage} />
            <div className={s.overviewText}>
              <h3 className={s.overviewTitle}>2007'den Bugüne Hizmetinizdeyiz</h3>
              <p className={s.overviewParagraph}>Alsancak Güvenlik, yurtiçi ve dışında enerji, inşaat ve madencilik sektörlerine özel olarak odaklanarak hem önde gelen uluslararası hem de yerel kuruluşlara benzersiz destek sunan profesyonel güvenlik hizmetlerinin öncüsüdür.</p>
              <p className={s.overviewParagraph}>Lider kadromuz, Türk Silahlı Kuvvetleri ve Emniyet Genel Müdürlüğü'nde önemli görevlerde bulunmuş, zengin deneyim ve uzmanlığa sahip kişilerden oluşmaktadır.</p>
              <p className={s.overviewParagraph}>Bu çeşitlilik, risk analizi ve tehdit değerlendirmelerine kapsamlı bir yaklaşım getirilmesini sağlamaktadır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Değerlerimiz" title="Temel Değerler" />
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
          <SectionTitle subtitle="Organizasyon" title="Güvenlik Organizasyonu" description="Alsancak Grup'un güvenlik organizasyon yapısı." />
          <div className={s.orgWrapper}>
            {/* Top —  */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={s.orgTopCard}>
              <h4 className={s.orgTopTitle}>{orgTop.title}</h4>
              <span className={s.orgTopSub}>{orgTop.subtitle}</span>
            </motion.div>

            <div className={s.orgLine} />

            {/* Mid — Genel Koordinatör */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className={s.orgMidCard}>
              <h4 className={s.orgMidTitle}>{orgMid.title}</h4>
              <span className={s.orgMidSub}>{orgMid.subtitle}</span>
            </motion.div>

            <div className={s.orgLine} />

            {/* Directors */}
            <div className={s.orgDirectorsRow}>
              {orgDirectors.map((dir, i) => (
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
              {orgDepartments.map((dept, i) => (
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
          <SectionTitle subtitle="Küresel Varlık" title="Operasyonel Deneyim" description="Dünya'nın farklı bölgelerinde operasyonel deneyime sahibiz." />
          <div className={s.expGrid}>
            <ImageMockup width={500} height={300} alt="Dünya haritası — Operasyonel bölgeler işaretli" src="/images/dunya-haritasi.png" className={s.expImage} />
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
