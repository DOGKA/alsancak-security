import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Shield, Zap, Building2, Camera, Users, AlertTriangle, BarChart3, BookOpen, Fuel, Briefcase } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import s from './Services.module.css';

const mainServices = [
  { id: 'fiziksel', icon: Shield, title: 'Fiziki Güvenlik', desc: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar için kapsamlı fiziki güvenlik hizmetleri sunuyoruz.', items: ['Şirket Merkezleri', 'Rezidanslar', 'Büyükelçilikler', 'Fabrikalar'], imgSrc: '/images/yeni-fiziksel.png' },
  { id: 'enerji', icon: Zap, title: 'Enerji ve Tesis Güvenliği', desc: 'Petrol/gaz hattı güvenliği dahil olmak üzere devlet/kamu tesisleri, petrol üretimi, maden sahaları ve hidroelektrik santraller için güvenlik.', items: ['Devlet/Kamu Tesisleri', 'Petrol Üretimi', 'Maden Sahaları', 'Hidroelektrik Santraller', 'Petrol/Gaz Hattı Güvenliği'], imgSrc: '/images/yeni-enerji-tesis.png' },
  { id: 'petrol', icon: Fuel, title: 'Petrol/Gaz Hattı Güvenliği', desc: 'Petrol ve doğalgaz hatlarının fiziki güvenliği, izlenmesi ve korunması hizmetleri.', items: ['Boru Hattı Koruma', 'Saha Güvenliği', 'Acil Müdahale', '7/24 İzleme'], imgSrc: '/images/yeni-petrol-gaz.png' },
  { id: 'altyapi', icon: Building2, title: 'Kritik Altyapı ve İnşaat Güvenliği', desc: 'Barajlar, köprüler, karayolları ve bina projelerinde kritik altyapı güvenliği hizmetleri.', items: ['Barajlar', 'Köprüler', 'Karayolları', 'Binalar'], imgSrc: '/images/yeni-kritik-altyapi.png' },
  { id: 'izleme', icon: Camera, title: 'İzleme ve Kontrol', desc: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri ile 7/24 izleme ve kontrol hizmetleri.', items: ['CCTV Sistemleri', 'Alarm İzleme Merkezi', 'İzinsiz Giriş Tespit Sistemleri'], imgSrc: '/images/yeni-uzaktan-izleme.png' },
  { id: 'insanli', icon: Users, title: 'Profesyonel Koruma', desc: 'Yakın koruma ve seyahat yönetimi hizmetleri ile profesyonel güvenlik çözümleri.', items: ['Yakın Koruma', 'Seyahat Yönetimi'], imgSrc: '/images/yeni-insanli.png' },
  { id: 'danismanlik-hizmet', icon: Briefcase, title: 'Güvenlik Danışmanlığı', desc: 'Risk değerlendirme, güvenlik mimarisi tasarımı ve kapsamlı güvenlik danışmanlığı hizmetleri.', items: ['Risk Değerlendirme', 'Güvenlik Mimarisi', 'Tehdit Analizi'], imgSrc: '/images/yeni-danismanlik.png' },
  { id: 'egitim', icon: BookOpen, title: 'Özel Eğitim Programları', desc: 'Düşmanca ortam eğitiminden yakın koruma eğitimine kadar kapsamlı güvenlik eğitim programları.', items: ['HEAT Eğitimi', 'Defansif Sürüş', 'Yakın Koruma Eğitimi', 'Mayın ve Patlayıcı Madde Temizliği'], imgSrc: '/images/yeni-ozel-egitim.png' },
];

const consultingServices = [
  { icon: BarChart3, title: 'Kişiselleştirilmiş Raporlar', items: ['Anlık Raporlar', 'Günlük Raporlar', 'Haftalık Raporlar', 'Aylık Raporlar', 'Nokta/Kaza Raporları'] },
  { icon: BookOpen, title: 'Özel Eğitim', items: ['Düşmanca Ortam Eğitimi (HEAT)', 'Mayın ve Patlayıcı Madde Temizliği', 'Defansif Sürüş Teknikleri', 'Yakın Koruma Eğitimi', 'Gözetleme ve Karşı Gözetleme Eğitimi'] },
  { icon: AlertTriangle, title: 'Risk Değerlendirme', items: ['Güvenlik Açığı Değerlendirmeleri', 'Hareket Tarzları', 'Hassasiyet Analizi', 'Güvenlik Riskleri / Tehdit Analizi', 'Risk Azaltma'] },
  { icon: AlertTriangle, title: 'Acil Durum Yönetimi', items: ['Tahliye Planı', 'Acil Müdahale Planı'] },
];

export default function Services() {
  return (
    <>
      <SEO title="Güvenlik Hizmetleri — Fiziki Güvenlik, İzleme, Profesyonel Koruma" description="Fiziki güvenlik, enerji ve tesis güvenliği, izleme ve kontrol, profesyonel koruma, güvenlik danışmanlığı ve eğitim hizmetleri. Ankara, İstanbul ve Türkiye genelinde özel güvenlik çözümleri." path="/hizmetlerimiz" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Hizmetlerimiz" title="Uluslararası Güvenlik Hizmetleri" description="Fiziki güvenlik ve izleme teknolojisinin bir karışımı ile uygun maliyetli, özel, entegre güvenlik çözümleri sunuyoruz." />
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
          <SectionTitle subtitle="Danışmanlık" title="Danışmanlık Hizmetleri" description="Risk değerlendirme, özel eğitim ve güvenlik açığı analizleri ile kapsamlı danışmanlık sunuyoruz." />
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
