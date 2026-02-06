import { motion } from 'framer-motion';
import { Shield, Target, Award, Scale } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './About.module.css';

const orgChart = [
  { title: 'Danışma Kurulu', level: 0 },
  { title: 'Genel Koordinatör', level: 1 },
  { title: 'Güvenlik Direktörü', level: 2 },
  { title: 'Operasyon Müdürü', level: 2 },
  { title: 'Risk Analiz ve Eğitim Departmanı', level: 3 },
  { title: 'Teknik Koordinatörlük', level: 3 },
  { title: 'İdari Koordinatörlük', level: 3 },
  { title: 'Finans ve İK Departmanı', level: 3 },
  { title: 'Alarm Merkezi', level: 3 },
  { title: 'İSG Uzmanları', level: 3 },
];

const operationalAreas = [
  { country: 'Türkiye', flag: '🇹🇷' }, { country: 'Afganistan', flag: '🇦🇫' },
  { country: 'Irak', flag: '🇮🇶' }, { country: 'Libya', flag: '🇱🇾' },
  { country: 'Somali', flag: '🇸🇴' }, { country: 'Uganda', flag: '🇺🇬' },
  { country: 'Aden Körfezi', flag: '⚓' },
];

const coreValues = [
  { icon: Shield, title: 'Güvenilirlik', desc: 'Güçlü finansal temel ve müşteri güvenliğine adanmışlık.' },
  { icon: Target, title: 'Profesyonellik', desc: 'TSK ve Emniyet kökenli deneyimli kadro.' },
  { icon: Award, title: 'Uzmanlık', desc: 'Askeri, hukuki ve akademik çeşitliliğe sahip ekip.' },
  { icon: Scale, title: 'Uyumluluk', desc: 'Uluslararası standartlara tam uygunluk.' },
];

const dotClass = (level: number) => {
  if (level === 0) return `${s.orgDot} ${s.orgDotL0}`;
  if (level === 1) return `${s.orgDot} ${s.orgDotL1}`;
  if (level === 2) return `${s.orgDot} ${s.orgDotL2}`;
  return `${s.orgDot} ${s.orgDotL3}`;
};

export default function About() {
  return (
    <>
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Hakkımızda" title="Şirkete Genel Bakış" description="Alsancak Group, Türkiye'de ve ötesinde profesyonel güvenlik hizmetlerinin öncüsüdür." />
        </div>
      </section>

      <section id="genel-bakis" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.overviewGrid}>
            <ImageMockup width={500} height={300} alt="Alsancak Grup Güvenlik şirket binası / ekip fotoğrafı" src="/images/sirket-binasi.png" className={s.overviewImage} />
            <div className={s.overviewText}>
              <h3 className={s.overviewTitle}>2007'den Bu Yana Güvenliğinizde</h3>
              <p className={s.overviewParagraph}>Alsancak Group, Türkiye'de ve ötesinde enerji, inşaat ve madencilik sektörlerine özel olarak odaklanarak hem önde gelen uluslararası hem de yerel kuruluşlara benzersiz destek sunan profesyonel güvenlik hizmetlerinin öncüsüdür.</p>
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
                <val.icon size={26} className={s.valueIcon} />
                <h4 className={s.valueTitle}>{val.title}</h4>
                <p className={s.valueDesc}>{val.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="organizasyon" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Organizasyon" title="Güvenlik Organizasyonu" description="Alsancak Grup'un güvenlik organizasyon yapısı." />
          <div className={`glass ${s.orgCard}`}>
            <div className={s.orgList}>
              {orgChart.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={s.orgItem} style={{ paddingLeft: `${item.level * 32}px` }}>
                  <div className={dotClass(item.level)} />
                  <div className={`glass ${s.orgLabel}`}>
                    <span className={`${s.orgLabelText} ${item.level <= 1 ? s.orgLabelHighlight : s.orgLabelNormal}`}>{item.title}</span>
                  </div>
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

      <section id="liderlik" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Ekibimiz" title="Liderlik Kadrosu" description="Yöneticilerimiz Türk Silahlı Kuvvetleri ve Emniyet Genel Müdürlüğü bünyesinde önemli görevlerde bulunmuştur." />
          <div className={s.leaderGrid}>
            {[1, 2, 3, 4].map((_, i) => (
              <GlassCard key={i} delay={i * 0.08}>
                <ImageMockup width={280} height={320} alt={`Yönetici ${i + 1} profil fotoğrafı (280x320)`} className={s.leaderImage} />
                <div className={s.leaderNamePlaceholder} />
                <div className={s.leaderRolePlaceholder} />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
