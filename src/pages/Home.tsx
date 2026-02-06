import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Building2, Camera, Users, FileSearch, ArrowRight, ChevronRight, Cpu, Radar, Lock } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionTitle from '../components/ui/SectionTitle';
import VideoMockup from '../components/ui/VideoMockup';
import ImageMockup from '../components/ui/ImageMockup';
import StatCounter from '../components/ui/StatCounter';
import s from './Home.module.css';

const reports = [
  { title: 'Güvenlik Raporları', desc: 'Günlük, haftalık ve aylık güvenlik değerlendirme raporları.', imgSrc: '/images/yeni-guvenlik-raporlari.png', link: '/raporlama#raporlar' },
  { title: 'Risk Yönetimi', desc: 'Kapsamlı risk analizi ve tehdit değerlendirme çerçevesi.', imgSrc: '/images/yeni-risk-yonetimi.png', link: '/raporlama#risk' },
  { title: 'Vaka Yönetim Süreci', desc: 'Hızlı müdahale ekibi ve alarm izleme merkezi süreçleri.', imgSrc: '/images/yeni-vaka-yonetimi.png', link: '/raporlama#vaka' },
  { title: 'Sürdürülebilirlik', desc: 'Çevre bilinci ve sürdürülebilir güvenlik uygulamaları.', imgSrc: '/images/yeni-surdurulebilirlik.png', link: '/raporlama#surdurulebilirlik' },
];

const services = [
  { icon: Shield, title: 'Fiziksel Güvenlik', desc: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar için kapsamlı güvenlik.', imgSrc: '/images/yeni-fiziksel.png', link: '/hizmetlerimiz#fiziksel' },
  { icon: Zap, title: 'Enerji ve Tesis Güvenliği', desc: 'Petrol/gaz hatları, hidroelektrik santraller ve kamu tesisleri güvenliği.', imgSrc: '/images/yeni-enerji-tesis.png', link: '/hizmetlerimiz#enerji' },
  { icon: Building2, title: 'Kritik Altyapı Güvenliği', desc: 'Barajlar, köprüler, karayolları ve bina projelerinde güvenlik hizmetleri.', imgSrc: '/images/yeni-kritik-altyapi.png', link: '/hizmetlerimiz#altyapi' },
  { icon: Camera, title: 'Uzaktan İzleme', desc: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri.', imgSrc: '/images/yeni-uzaktan-izleme.png', link: '/hizmetlerimiz#izleme' },
  { icon: Users, title: 'İnsanlı Güvenlik', desc: 'Yakın koruma ve seyahat yönetimi hizmetleri.', imgSrc: '/images/yeni-insanli.png', link: '/hizmetlerimiz#insanli' },
  { icon: FileSearch, title: 'Danışmanlık', desc: 'Risk değerlendirme, HEAT eğitimi ve güvenlik açığı analizleri.', imgSrc: '/images/yeni-danismanlik.png', link: '/hizmetlerimiz#danismanlik' },
];

const featuredProjects = [
  { title: 'Avrupa Birliği Türkiye Delegasyonu', period: "2013'ten Günümüze", desc: 'AB Türkiye Delegasyonu için kapsamlı güvenlik hizmetleri.', imgSrc: '/images/proje-ab-delegasyonu.png' },
  { title: 'Transatlantic Petroleum LLC', period: "2018'den Bugüne", desc: 'Enerji sektöründe sürekli güvenlik ve danışmanlık hizmetleri.', imgSrc: '/images/proje-transatlantic.png' },
  { title: 'Anagold Madencilik A.Ş.', period: "2016'dan Günümüze", desc: 'Madencilik operasyonları için entegre güvenlik çözümleri.', imgSrc: '/images/proje-anagold.png' },
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
  { code: 'ISO 44001:2017', title: 'İş Ortağı İlişkileri' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <VideoMockup width={1920} height={1080} alt="Hero arka plan videosu" src="/images/hero-video.mp4" className={s.heroBgVideo} />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className={s.heroTag}>Kritik Sahalarda Kesintisiz Güvenlik</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className={s.heroTitle}>
            <span>ALSANCAK</span><br />
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

      {/* STATS */}
      <section className={s.stats}>
        <div className={s.container}>
          <div className={s.statsCard}>
            <div className={s.statsGlow} />
            <div className={s.statsInner}>
              <div className={s.statsGrid}>
                {[
                  { end: 19, suffix: '+', label: 'Yıllık Tecrübe', accent: 'linear-gradient(135deg, #1d1d1f, #444)' },
                  { end: 7, suffix: '+', label: 'Ülkede Operasyon', accent: 'linear-gradient(135deg, #c0392b, #e74c3c)' },
                  { end: 20, suffix: '+', label: 'Başarılı Proje', accent: 'linear-gradient(135deg, #1d1d1f, #444)' },
                  { end: 10, suffix: '+', label: 'ISO Sertifikası', accent: 'linear-gradient(135deg, #c0392b, #e74c3c)' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={s.statItem}
                  >
                    <div className={s.statAccent} style={{ background: stat.accent }} />
                    <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                  </motion.div>
                ))}
              </div>
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

      {/* INNOVATION */}
      <section className={`${s.section} section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Yenilikçi Projeler" title="Geleceğin Güvenlik Teknolojileri" />
          <div className={s.innovGrid}>
            {[
              { icon: Cpu, title: 'Entegre Akıllı Güvenlik Çözümleri', desc: 'Alsancak Güvenlik, entegre akıllı güvenlik çözümleri geliştirmek için en son teknolojilere yatırım yapıyor. Bu, gerçek zamanlı tehdit algılama ve müdahale yeteneklerini geliştirmek için yapay zeka, IoT cihazları ve gelişmiş analitiğin dahil edilmesini içerir.' },
              { icon: Radar, title: 'Drone ile Gözetleme ve İzleme', desc: 'Gözetim kabiliyetlerimizi artırmayı hedefleyen Alsancak, geniş alanların daha iyi izlenmesi için insansız hava araçlarının kullanımını araştırıyor. Bu girişim, potansiyel güvenlik tehditlerine karşı hızlı ve çok yönlü bir yanıt sağlayacaktır.' },
              { icon: Lock, title: 'Veri Güvenliği İçin Blok Zinciri', desc: 'Veri güvenliğinin öneminin farkında olan Alsancak, hassas bilgileri güvence altına almak için blok zinciri teknolojisinin uygulanmasını araştırıyor. Bu girişim, giderek dijitalleşen bir ortamda verilerin bütünlüğünü ve gizliliğini sağlamaktadır.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={s.innovCard}>
                <div className={s.innovIconWrap}>
                  <item.icon size={24} />
                </div>
                <h3 className={s.innovTitle}>{item.title}</h3>
                <p className={s.innovDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className={`${s.certsSection} section-alt section-divider`}>
        <div className={s.certsContent}>
          <SectionTitle subtitle="Kalite" title="Sertifikalarımız" description="Uluslararası standartlara uygun 10 ISO sertifikası ile hizmet kalitemizi belgeliyoruz." />
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
            <div className={s.ctaBg} />
            <div className={s.ctaRadial} />
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
