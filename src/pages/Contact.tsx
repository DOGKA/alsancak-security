import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Send } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import GradientButton from '../components/ui/GradientButton';
import ImageMockup from '../components/ui/ImageMockup';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import s from './Contact.module.css';

const contactIcons = [MapPin, Mail, Globe];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const { language } = useLanguage();
  const page = translations[language].pages.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = page.contactInfo.map((info, index) => ({ ...info, icon: contactIcons[index] }));

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/iletisim" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.contactGrid}>
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`glass ${s.formCard}`}>
              <h3 className={s.formTitle}>{page.formTitle}</h3>
              <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>{page.labels.name}</label>
                    <input type="text" name="name" placeholder={page.placeholders.name} value={formData.name} onChange={handleChange} className={s.formInput} required />
                  </div>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>{page.labels.email}</label>
                    <input type="email" name="email" placeholder={page.placeholders.email} value={formData.email} onChange={handleChange} className={s.formInput} required />
                  </div>
                </div>
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>{page.labels.phone}</label>
                    <input type="tel" name="phone" placeholder={page.placeholders.phone} value={formData.phone} onChange={handleChange} className={s.formInput} />
                  </div>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>{page.labels.subject}</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className={s.formInput} required>
                      <option value="">{page.placeholders.subject}</option>
                      {page.options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>{page.labels.message}</label>
                  <textarea name="message" placeholder={page.placeholders.message} value={formData.message} onChange={handleChange} rows={5} className={`${s.formInput} ${s.formTextarea}`} required />
                </div>
                <GradientButton onClick={() => {}} size="lg" className={s.formSubmit}>
                  <Send size={16} /> {page.submit}
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
              <ImageMockup width={500} height={300} alt={page.officeAlt} src="/images/office-iletisim.png" className={s.mapImage} />
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
