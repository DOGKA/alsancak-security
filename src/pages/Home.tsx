import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Shield, Zap, Building2, Camera, Users, FileSearch, ArrowRight, ChevronRight, Cpu, Radar, Lock, Globe, HeartHandshake, BarChart3, Lightbulb } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import StatCounter from '../components/ui/StatCounter';
import Globe3D from '../components/ui/Globe3D';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Home.module.css';

const serviceIcons = [Shield, Zap, Building2, Camera, Users, FileSearch];
const visionIcons = [Cpu, Radar, Lock, Globe, BarChart3, HeartHandshake, Lightbulb];

export default function Home() {
  const { language } = useLanguage();
  const page = translations[language].pages.home;
  const common = translations[language].common;
  const services = page.services.map((service, index) => ({ ...service, icon: serviceIcons[index] }));
  const visionItems = page.visionItems.map((item, index) => ({ ...item, icon: visionIcons[index] }));

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/" />
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <video src="/images/hero-video.mp4" autoPlay muted loop playsInline className={s.heroVideo} />
        </div>
        <div className={s.heroContent}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className={s.heroTag}>{page.heroTag}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className={s.heroTitle}>
            <span>{page.heroTitle.main}</span>
            <span className={s.heroTitleAccent}>{page.heroTitle.accent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className={s.heroDesc}>
            {page.heroDesc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className={s.heroButtons}>
            <GradientButton to="/hizmetlerimiz" size="lg" className={s.heroBtnPrimary}>{page.heroPrimary} <ArrowRight size={18} /></GradientButton>
            <GradientButton to="/iletisim" variant="outline" size="lg" className={s.heroBtnOutline}>{common.contact}</GradientButton>
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
                { end: 19, suffix: '+', label: page.stats[0] },
                { end: 7, suffix: '+', label: page.stats[1] },
                { end: 20, suffix: '+', label: page.stats[2] },
                { end: 11, suffix: '+', label: page.stats[3] },
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
          <SectionTitle subtitle={page.servicesSection.subtitle} title={page.servicesSection.title} description={page.servicesSection.description} />
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
                    <span>{common.details}</span>
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
          <SectionTitle subtitle={page.projectsSection.subtitle} title={page.projectsSection.title} description={page.projectsSection.description} />
          <div className={s.projectsGrid}>
            {page.featuredProjects.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.1}>
                <ImageMockup width={400} height={240} alt={`${project.title} ${page.projectsSection.imageSuffix}`} src={project.imgSrc} className={s.projectImage} />
                <span className={s.projectPeriod}>{project.period}</span>
                <h3 className={s.projectTitle}>{project.title}</h3>
                <p className={s.projectDesc}>{project.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className={s.projectsCta}>
            <GradientButton to="/projelerimiz" variant="outline">{page.projectsSection.cta} <ArrowRight size={16} /></GradientButton>
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle={page.reportsSection.subtitle} title={page.reportsSection.title} description={page.reportsSection.description} />
          <div className={s.reportsGrid}>
            {page.reports.map((report, i) => (
              <motion.div key={report.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className={s.serviceCard}>
                <div className={s.serviceImageWrap}>
                  <img src={report.imgSrc} alt={report.title} className={s.serviceImage} />
                </div>
                <div className={s.serviceCardContent}>
                  <h3 className={s.serviceTitle}>{report.title}</h3>
                  <p className={s.serviceDesc}>{report.desc}</p>
                  <Link to={report.link} className={s.serviceLink}>
                    <span>{common.details}</span>
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
          <SectionTitle subtitle={page.visionSection.subtitle} title={page.visionSection.title} description={page.visionSection.description} />
          <div className={s.masonryGrid}>
            {visionItems.map((item, i) => (
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
          <SectionTitle subtitle={page.certsSection.subtitle} title={page.certsSection.title} description={page.certsSection.description} />
        </div>
        <div className={s.certsTrack}>
          <div className={s.certsFadeLeft} />
          <div className={s.certsFadeRight} />
          <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className={s.certsMarquee}>
            {[...page.certificates, ...page.certificates].map((cert, i) => (
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
              <h2 className={s.ctaTitle}>{page.ctaTitle}</h2>
              <p className={s.ctaDesc}>{page.ctaDesc}</p>
              <GradientButton to="/iletisim" size="lg" className={s.ctaButton}>{common.contact} <ArrowRight size={18} /></GradientButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
