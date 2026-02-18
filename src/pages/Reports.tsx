import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FileText, AlertTriangle, ArrowRight, Shield, Bell, Users, Leaf } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Reports.module.css';

const reportClients = [
  { name: 'TURKSTREAM B.V.', project: 'TÜRKAKIM Projesi', desc: 'Güvenlik ve Risk Değerlendirme kapsamında Güvenlik Mimarisi tasarımı.', logo: '/images/logo-turkstream.png' },
  { name: 'Norveç Büyükelçiliği & STATKRAFT', project: 'Çetin Barajı', desc: 'Güvenlik ve risk değerlendirme raporları.', logo: '/images/logo-norvec-statkraft.png' },
  { name: 'YAPI MERKEZİ', project: 'Etiyopya Hızlı Tren Projesi', desc: 'Uluslararası proje güvenlik raporlaması.', logo: '/images/logo-yapi-merkezi.png' },
  { name: 'ABB', project: 'TANAP Projesi', desc: 'Enerji altyapısı güvenlik değerlendirmesi.', logo: '/images/logo-abb.png' },
];

const riskFramework = [
  { title: '5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun', desc: 'Ulusal mevzuata tam uyumluluk.' },
  { title: 'ICoC', desc: 'Özel Güvenlik Sağlayıcıları için Uluslararası Davranış Kuralları.' },
  { title: 'SOP\'ler', desc: 'Prosedür Standartları ile operasyonel mükemmellik.' },
  { title: 'ISO 18788:2015', desc: 'Özel Güvenlik Operasyonları Yönetim Sistemi.' },
  { title: 'BM İnsan Hakları İlkeleri', desc: 'BM İş Dünyası ve İnsan Hakları Temel İlkeleri.' },
  { title: 'Gönüllü İlkeler', desc: 'Güvenlik ve İnsan Haklarına İlişkin Gönüllü İlkeler.' },
];

const incidentProcess = [
  { step: 'OLAY', icon: AlertTriangle }, { step: 'FLAŞ RAPOR', icon: FileText },
  { step: 'KORUMA PERSONELİ', icon: Shield }, { step: 'İLİŞKİ YÖNETİCİSİ', icon: Users },
  { step: 'ALARM MERKEZİ', icon: Bell }, { step: 'Q.R.T (Hızlı Müdahale Ekibi)', icon: Shield },
  { step: 'BÜYÜKELÇİLİK/ENSTİTÜ BİLGİLENDİRME', icon: FileText },
];

const sustainabilityPoints = [
  { title: 'Toplumsal Katılım', desc: 'Çevresel girişimleri ve sürdürülebilir uygulamaları teşvik etmek için yerel topluluklarla aktif etkileşim.' },
  { title: 'Çevre Standartlarına Uyum', desc: 'Faaliyetlerimizin sürdürülebilirliği teşvik eden yönetmelik ve yönergelerle uyumlu olmasını sağlıyoruz.' },
  { title: 'Sürekli İyileştirme', desc: 'Sürdürülebilirlik girişimlerimizi düzenli olarak gözden geçiriyor, yenilikçi yollar arıyoruz.' },
];

export default function Reports() {
  return (
    <>
      <SEO title="Risk Yönetimi ve Güvenlik Raporlama" description="Güvenlik mimarisi tasarımı, risk değerlendirme, olay yönetim süreci ve sürdürülebilirlik raporları. Uluslararası standartlarda güvenlik raporlama hizmetleri." path="/raporlama" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Raporlama" title="Raporlama ve Risk Yönetimi" description="Güvenlik mimarisi tasarımından risk değerlendirmesine kapsamlı raporlama hizmetleri." />
        </div>
      </section>

      <section id="raporlar" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Raporlar" title="Güvenlik Raporları" description="Günlük, haftalık ve aylık risk değerlendirme raporları kapsamında Güvenlik Mimarisi tasarlıyoruz." />
          <div className={s.reportGrid}>
            {reportClients.map((client, i) => (
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
          <SectionTitle subtitle="Risk Yönetimi" title="Risk Yönetimi ve Uyum Çerçevesi" description="Alsancak Güvenlik, uluslararası standartlara ve Türk mevzuatına uygun olarak faaliyet gösterir." />
          <div className={s.frameworkGrid}>
            {riskFramework.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className={s.frameworkCard}>
                <div className={s.frameworkNumber}>{String(i + 1).padStart(2, '0')}</div>
                <h5 className={s.frameworkTitle}>{item.title}</h5>
                <p className={s.frameworkDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section id="vaka" className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <SectionTitle subtitle="Olay Yönetimi" title="Olay Yönetim Süreci" description="Q.R.T: Hızlı Müdahale Ekibimiz ve Alarm İzleme Merkezimiz, prosedürel gerekliliklerden tam not alan ilk şirkettir." />
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
          <SectionTitle subtitle="Çevre" title="Sürdürülebilirlik ve Çevresel Farkındalık" description="Sürdürülebilirlik ve çevre bilincini temel değerlerimize entegre ediyoruz." />
          <div className={s.sustainGrid}>
            <ImageMockup width={500} height={300} alt="Sürdürülebilirlik ve çevre bilinci görseli" src="/images/surdurulebilirlik.png" className={s.sustainImage} />
            <div className={s.sustainPoints}>
              {sustainabilityPoints.map((point, i) => (
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
