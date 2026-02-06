import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Send } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import GradientButton from '../components/ui/GradientButton';
import ImageMockup from '../components/ui/ImageMockup';
import s from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Merkez Ofis', lines: ['Cezayir Cd. 6/7', '06550 Ankara, Türkiye'] },
    { icon: Mail, title: 'E-Posta', lines: ['info@alsancakguvenlik.com'] },
    { icon: Globe, title: 'Web', lines: ['alsancakgrup.com.tr', 'alsancakguvenlik.com'] },
  ];

  return (
    <>
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="İletişim" title="Bize Ulaşın" description="Profesyonel güvenlik çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.contactGrid}>
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`glass ${s.formCard}`}>
              <h3 className={s.formTitle}>İletişim Formu</h3>
              <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>Ad Soyad</label>
                    <input type="text" name="name" placeholder="Adınız Soyadınız" value={formData.name} onChange={handleChange} className={s.formInput} required />
                  </div>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>E-Posta</label>
                    <input type="email" name="email" placeholder="email@ornek.com" value={formData.email} onChange={handleChange} className={s.formInput} required />
                  </div>
                </div>
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>Telefon</label>
                    <input type="tel" name="phone" placeholder="+90 (5XX) XXX XX XX" value={formData.phone} onChange={handleChange} className={s.formInput} />
                  </div>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>Konu</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className={s.formInput} required>
                      <option value="">Konu Seçin</option>
                      <option value="guvenlik">Güvenlik Hizmeti</option>
                      <option value="danismanlik">Danışmanlık</option>
                      <option value="teklif">Teklif Talebi</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Mesaj</label>
                  <textarea name="message" placeholder="Mesajınızı yazın..." value={formData.message} onChange={handleChange} rows={5} className={`${s.formInput} ${s.formTextarea}`} required />
                </div>
                <GradientButton onClick={() => {}} size="lg" className={s.formSubmit}>
                  <Send size={16} /> Gönder
                </GradientButton>
              </form>
            </motion.div>

            {/* Info */}
            <div className={s.infoSection}>
              {contactInfo.map((info, i) => (
                <GlassCard key={info.title} delay={i * 0.08} hover={false}>
                  <div className={s.infoItem}>
                    <div className={s.infoIconBox}>
                      <info.icon size={16} />
                    </div>
                    <div>
                      <h4 className={s.infoTitle}>{info.title}</h4>
                      {info.lines.map((line) => <p key={line} className={s.infoLine}>{line}</p>)}
                    </div>
                  </div>
                </GlassCard>
              ))}
              <ImageMockup width={500} height={300} alt="Alsancak Grup Güvenlik Ofis" src="/images/office-iletisim.png" className={s.mapImage} />
              <div className={`glass ${s.coordsBox}`}>
                <p className={s.coordsText}>39° 56′ 0.1140″ N — 32° 51′ 35.0676″ E</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
