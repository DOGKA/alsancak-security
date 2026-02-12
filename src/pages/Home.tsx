import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Building2, Camera, Users, FileSearch, ArrowRight, ChevronRight, Cpu, Radar, Lock, Globe, HeartHandshake, BarChart3, Lightbulb } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import StatCounter from '../components/ui/StatCounter';
import Globe3D from '../components/ui/Globe3D';
import s from './Home.module.css';

const reports = [
  { title: 'Güvenlik Raporları', desc: 'Günlük, haftalık ve aylık güvenlik değerlendirme raporları.', imgSrc: '/images/yeni-guvenlik-raporlari.png', link: '/raporlama#raporlar' },
  { title: 'Risk Yönetimi', desc: 'Kapsamlı risk analizi ve tehdit değerlendirme çerçevesi.', imgSrc: '/images/yeni-risk-yonetimi.png', link: '/raporlama#risk' },
  { title: 'Olay Yönetim Süreci', desc: 'Hızlı müdahale ekibi ve alarm izleme merkezi süreçleri.', imgSrc: '/images/yeni-vaka-yonetimi.png', link: '/raporlama#vaka' },
  { title: 'Sürdürülebilirlik', desc: 'Çevre bilinci ve sürdürülebilir güvenlik uygulamaları.', imgSrc: '/images/yeni-surdurulebilirlik.png', link: '/raporlama#surdurulebilirlik' },
];

const services = [
  { icon: Shield, title: 'Fiziki Güvenlik', desc: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar için kapsamlı güvenlik.', imgSrc: '/images/yeni-fiziksel.png', link: '/hizmetlerimiz#fiziksel' },
  { icon: Zap, title: 'Enerji ve Tesis Güvenliği', desc: 'Petrol/gaz hatları, hidroelektrik santraller, maden sahaları ve kamu tesisleri güvenliği.', imgSrc: '/images/yeni-enerji-tesis.png', link: '/hizmetlerimiz#enerji' },
  { icon: Building2, title: 'Kritik Altyapı Güvenliği', desc: 'Barajlar, köprüler, karayolları ve bina projelerinde güvenlik hizmetleri.', imgSrc: '/images/yeni-kritik-altyapi.png', link: '/hizmetlerimiz#altyapi' },
  { icon: Camera, title: 'İzleme ve Kontrol', desc: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri.', imgSrc: '/images/yeni-uzaktan-izleme.png', link: '/hizmetlerimiz#izleme' },
  { icon: Users, title: 'Profesyonel Koruma', desc: 'Yakın koruma ve seyahat yönetimi hizmetleri.', imgSrc: '/images/yeni-insanli.png', link: '/hizmetlerimiz#insanli' },
  { icon: FileSearch, title: 'Danışmanlık', desc: 'Risk değerlendirme, HEAT eğitimi ve güvenlik açığı analizleri.', imgSrc: '/images/yeni-danismanlik.png', link: '/hizmetlerimiz#danismanlik' },
];

const featuredProjects = [
  { title: 'Delegation of the European Union to Turkey', period: "2013'ten Günümüze", desc: 'AB Türkiye Delegasyonu için kapsamlı güvenlik hizmetleri.', imgSrc: '/images/proje-ab-delegasyonu.png' },
  { title: 'Transatlantic Petroleum LLC', period: "2018'den Bugüne", desc: 'Enerji sektöründe sürekli güvenlik ve danışmanlık hizmetleri.', imgSrc: '/images/proje-transatlantic.png' },
  { title: 'Anagold Madencilik A.Ş.', period: "2023'ten Günümüze", desc: 'Madencilik operasyonları için entegre güvenlik çözümleri.', imgSrc: '/images/proje-anagold.png' },
  { title: 'USAID', period: "2015 - 2020", desc: 'Kabil, Kandahar, Ghazni ve Herat bölgelerinde güvenlik hizmetleri.', imgSrc: '/images/proje-usaid.png' },
  { title: 'WCK (World Central Kitchen)', period: "2023 - 2024", desc: 'Depremden etkilenen 8 ilde güvenlik hizmetleri.', imgSrc: '/images/proje-wck.png' },
  { title: 'Andritz Hydro Ltd. - ILISU Barajı', period: "2013 - 2016", desc: 'ILISU Barajı ve HES Projesi için güvenlik ve danışmanlık.', imgSrc: '/images/proje-ilisu.png' },
];

const certificates = [
  { code: 'ISO 45001:2018', title: 'İş Sağlığı ve Güvenliği' },
  { code: 'ISO 18788:2015', title: 'Özel Güvenlik Operasyonları' },
  { code: 'ISO 27001:2013', title: 'Bilgi Güvenliği' },
  { code: 'ISO 14001:2015', title: 'Çevre Yönetimi' },
  { code: 'ISO 10002:2018', title: 'Müşteri Memnuniyeti' },
  { code: 'ISO 31000:2018', title: 'Risk Yönetimi' },
  { code: 'ISO 37001:2016', title: 'Rüşvetle Mücadele' },
  { code: 'ISO 22301:2019', title: 'İş Sürekliliği' },
  { code: 'ISO 41001:2018', title: 'Tesis Yönetimi' },
  { code: 'ISO 44001:2017', title: 'Ortak İş İlişkileri' },
  { code: 'ISO 9001:2015', title: 'Kalite Yönetimi' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <video src="/images/hero-video.mp4" autoPlay muted loop playsInline className={s.heroVideo} />
        </div>
        <div className={s.heroContent}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className={s.heroTag}>Kesintisiz Güvenlik</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className={s.heroTitle}>
            <span>ALSANCAK </span>
            <span className={s.heroTitleAccent}>GÜVENLİK</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className={s.heroDesc}>
            Enerji hatları, tesisler ve maden sahalarında 7/24 operasyon.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className={s.heroButtons}>
            <GradientButton to="/hizmetlerimiz" size="lg" className={s.heroBtnPrimary}>Hizmetlerimiz <ArrowRight size={18} /></GradientButton>
            <GradientButton to="/iletisim" variant="outline" size="lg" className={s.heroBtnOutline}>İletişime Geçin</GradientButton>
          </motion.div>
        </div>
      </section>

      {/* STATS + GLOBE */}
      <section className={s.stats}>
        <div className={s.container}>
          <div className={s.statsLayout}>
            <div className={s.globeWrap}>
              <Globe3D />
            </div>
            <div className={s.statsRight}>
              {[
                { end: 19, suffix: '+', label: 'Yıllık Tecrübe' },
                { end: 7, suffix: '+', label: 'Ülkede Operasyon' },
                { end: 20, suffix: '+', label: 'Başarılı Proje' },
                { end: 11, suffix: '+', label: 'ISO Sertifikası' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={s.statItem}
                >
                  <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Hizmetlerimiz" title="Kapsamlı Güvenlik Çözümleri" description="Fiziksel güvenlik ve uzaktan izleme teknolojisinin bir karışımı ile özel, entegre güvenlik çözümleri sunuyoruz." />
          <div className={s.servicesGrid}>
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className={s.serviceCard}>
                <div className={s.serviceImageWrap}>
                  <img src={service.imgSrc} alt={service.title} className={s.serviceImage} />
                </div>
                <div className={s.serviceCardContent}>
                  <h3 className={s.serviceTitle}>{service.title}</h3>
                  <p className={s.serviceDesc}>{service.desc}</p>
                  <Link to={service.link} className={s.serviceLink}>
                    <span>Detaylı Bilgi</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Projelerimiz" title="Öne Çıkan Projeler" description="Ulusal ve uluslararası ölçekte başarıyla yürüttüğümüz güvenlik projeleri." />
          <div className={s.projectsGrid}>
            {featuredProjects.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.1}>
                <ImageMockup width={400} height={240} alt={`${project.title} proje görseli`} src={project.imgSrc} className={s.projectImage} />
                <span className={s.projectPeriod}>{project.period}</span>
                <h3 className={s.projectTitle}>{project.title}</h3>
                <p className={s.projectDesc}>{project.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className={s.projectsCta}>
            <GradientButton to="/projelerimiz" variant="outline">Tüm Projeleri Görüntüle <ArrowRight size={16} /></GradientButton>
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Raporlama" title="Raporlama ve Risk Yönetimi" description="Güvenlik mimarisi tasarımından risk değerlendirmesine kapsamlı raporlama hizmetleri." />
          <div className={s.reportsGrid}>
            {reports.map((report, i) => (
              <motion.div key={report.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className={s.serviceCard}>
                <div className={s.serviceImageWrap}>
                  <img src={report.imgSrc} alt={report.title} className={s.serviceImage} />
                </div>
                <div className={s.serviceCardContent}>
                  <h3 className={s.serviceTitle}>{report.title}</h3>
                  <p className={s.serviceDesc}>{report.desc}</p>
                  <Link to={report.link} className={s.serviceLink}>
                    <span>Detaylı Bilgi</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION & VISION */}
      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Gelecek Vizyonu" title="Yenilik ve Gelecek Stratejileri" description="Teknolojik gelişmeler, sürdürülebilir uygulamalar ve insan merkezli değerlerle güvenlik sektöründe yeni standartlar belirliyoruz." />
          <div className={s.masonryGrid}>
            {[
              { icon: Cpu, title: 'Entegre Akıllı Güvenlik Çözümleri', desc: 'Yapay zeka, IoT cihazları ve gelişmiş analitik ile gerçek zamanlı tehdit algılama ve müdahale yeteneklerini geliştiriyoruz. Entegre sistemler sayesinde güvenlik operasyonlarını tek merkezden yönetiyoruz.', size: 'lg' },
              { icon: Radar, title: 'Drone ile Gözetleme', desc: 'İnsansız hava araçları ile geniş alanların etkin izlenmesi, potansiyel tehditlere karşı hızlı ve çok yönlü müdahale kapasitesi sunuyoruz.', size: 'sm' },
              { icon: Lock, title: 'Blok Zinciri Veri Güvenliği', desc: 'Blok zinciri teknolojisi ile hassas bilgileri güvence altına alarak dijital ortamda verilerin bütünlüğünü ve gizliliğini garanti ediyoruz.', size: 'sm' },
              { icon: Globe, title: 'Küresel Genişleme', desc: 'Kilit bölgelerde kapsamlı güvenlik hizmetleri sunarak küresel ayak izimizi genişletiyor, uluslararası kuruluşlar için güvenilir bir ortak olarak konumlanıyoruz.', size: 'md' },
              { icon: BarChart3, title: 'Önleyici Güvenlik Analizleri', desc: 'Veri analitiği ve tahmine dayalı modelleme ile güvenlik risklerini önceden öngörüyor, kaynak tahsisini optimize ederek proaktif tehdit yönetimi sağlıyoruz.', size: 'md' },
              { icon: HeartHandshake, title: 'Çalışan Gelişimi ve Refahı', desc: 'Motivasyonu yüksek ve yetenekli ekibimize sürekli eğitim, kariyer geliştirme fırsatları sunuyor ve çalışan refahını önceliklendiriyoruz.', size: 'sm' },
              { icon: Lightbulb, title: 'Bütünsel Güvenlik Yaklaşımı', desc: 'Sürdürülebilir uygulamalar, küresel erişim ve insan merkezli değerleri kapsayan bütünsel bir güvenlik vizyonu ile sektörde yeni standartlar belirliyoruz.', size: 'sm' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`${s.masonryCard} ${s[`masonry_${item.size}`]}`}
              >
                <div className={s.masonryHeader}>
                  <item.icon className={s.masonryIcon} />
                  <h3 className={s.masonryTitle}>{item.title}</h3>
                </div>
                <p className={s.masonryDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className={`${s.certsSection} section-alt section-divider`}>
        <div className={s.certsContent}>
          <SectionTitle subtitle="Kalite" title="Sertifikalarımız" description="Uluslararası standartlara uygun 11 ISO sertifikası ile hizmet kalitemizi belgeliyoruz." />
        </div>
        <div className={s.certsTrack}>
          <div className={s.certsFadeLeft} />
          <div className={s.certsFadeRight} />
          <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className={s.certsMarquee}>
            {[...certificates, ...certificates].map((cert, i) => (
              <div key={`${cert.code}-${i}`} className={`glass ${s.certBadge}`}>
                <span className={s.certCode}>{cert.code}</span>
                <span className={s.certTitle}>{cert.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <div className={s.ctaWrapper}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>Güvenliğiniz İçin Yanınızdayız</h2>
              <p className={s.ctaDesc}>Profesyonel güvenlik çözümlerimiz hakkında bilgi almak ve ihtiyaçlarınıza özel teklif için bizimle iletişime geçin.</p>
              <GradientButton to="/iletisim" size="lg" className={s.ctaButton}>İletişime Geçin <ArrowRight size={18} /></GradientButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
