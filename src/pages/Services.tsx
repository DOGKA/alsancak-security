import { motion } from 'framer-motion';
import { Shield, Zap, Building2, Camera, Users, AlertTriangle, BarChart3, BookOpen } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Services.module.css';

const mainServices = [
  { id: 'fiziksel', icon: Shield, title: 'Fiziksel Güvenlik', desc: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar için kapsamlı fiziksel güvenlik hizmetleri sunuyoruz.', items: ['Şirket Merkezleri', 'Rezidanslar', 'Büyükelçilikler', 'Fabrikalar'], imgAlt: 'Fiziksel güvenlik hizmeti görseli', imgSrc: '/images/hizmet-fiziksel.png' },
  { id: 'enerji', icon: Zap, title: 'Enerji ve Tesis Güvenliği', desc: 'Petrol/gaz hattı güvenliği dahil olmak üzere devlet/kamu tesisleri, petrol üretimi ve hidroelektrik santraller için güvenlik.', items: ['Devlet/Kamu Tesisleri', 'Petrol Üretimi', 'Hidroelektrik Santraller', 'Petrol/Gaz Hattı Güvenliği'], imgAlt: 'Enerji tesisi güvenliği görseli', imgSrc: '/images/hizmet-enerji.png' },
  { id: 'altyapi', icon: Building2, title: 'Kritik Altyapı ve İnşaat Güvenliği', desc: 'Barajlar, köprüler, karayolları ve bina projelerinde kritik altyapı güvenliği hizmetleri.', items: ['Barajlar', 'Köprüler', 'Karayolları', 'Binalar'], imgAlt: 'Altyapı güvenliği görseli', imgSrc: '/images/hizmet-altyapi.png' },
  { id: 'izleme', icon: Camera, title: 'Uzaktan İzleme', desc: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri ile 7/24 uzaktan izleme hizmetleri.', items: ['CCTV Sistemleri', 'Alarm İzleme Merkezi', 'İzinsiz Giriş Tespit Sistemleri'], imgAlt: 'Uzaktan izleme CCTV görseli', imgSrc: '/images/hizmet-izleme.png' },
  { id: 'insanli', icon: Users, title: 'İnsanlı Güvenlik', desc: 'Yakın koruma ve seyahat yönetimi hizmetleri ile kişisel güvenlik çözümleri.', items: ['Yakın Koruma', 'Seyahat Yönetimi'], imgAlt: 'İnsanlı güvenlik görseli', imgSrc: '/images/hizmet-insanli.png' },
  { id: 'uretim', icon: Building2, title: 'Üretim ve Endüstri Güvenliği', desc: 'Ticari tesisler, ulaşım ve iletişim altyapıları için üretim ve endüstri güvenliği.', items: ['Ticari Tesisler', 'Ulaşım', 'İletişim'], imgAlt: 'Endüstri güvenliği görseli', imgSrc: '/images/hizmet-uretim.png' },
];

const consultingServices = [
  { icon: BarChart3, title: 'Kişiselleştirilmiş Raporlar', items: ['Günlük Raporlar', 'Haftalık Raporlar', 'Aylık Raporlar', 'Nokta/Kaza Raporları'] },
  { icon: BookOpen, title: 'Özel Eğitim', items: ['Düşmanca Ortam Eğitimi (HEAT)', 'Defansif Sürüş Teknikleri', 'Yakın Koruma Eğitimi', 'Maden Temizleme Eğitimi', 'Gözetim ve Karşı Gözetim'] },
  { icon: AlertTriangle, title: 'Risk Değerlendirme', items: ['Güvenlik Açığı Değerlendirmeleri', 'Olay Yanıtları', 'Uyum Tüzükleri', 'Güvenlik Riskleri / Tehdit Analizi', 'Risk Azaltma'] },
  { icon: AlertTriangle, title: 'Acil Durum Yönetimi', items: ['Kantitatif Karar Verme', 'Acil Müdahale Planlaması'] },
];

export default function Services() {
  return (
    <>
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Hizmetlerimiz" title="Uluslararası Güvenlik Hizmetleri" description="Fiziksel güvenlik ve uzaktan izleme teknolojisinin bir karışımı ile uygun maliyetli, özel, entegre güvenlik çözümleri sunuyoruz." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.servicesList}>
            {mainServices.map((service, i) => (
              <motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className={s.serviceItem}>
                <div className={i % 2 === 1 ? s.serviceImageColReversed : s.serviceImageCol}>
                  <ImageMockup width={500} height={300} alt={service.imgAlt} src={service.imgSrc} className={s.serviceImage} />
                </div>
                <div className={`${s.serviceTextCol} ${i % 2 === 1 ? s.serviceTextColReversed : ''}`}>
                  <div className={s.serviceIconBox}>
                    <service.icon size={22} />
                  </div>
                  <h3 className={s.serviceTitle}>{service.title}</h3>
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
