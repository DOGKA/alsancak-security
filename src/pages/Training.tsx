import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import s from './Training.module.css';

const categories = [
  {
    id: 'mevzuat',
    title: 'Mevzuat ve Hukuk',
    items: [
      '5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun',
      'Özel Güvenlik Yetki ve Sorumlulukları',
      'İnsan Hakları Gönüllülük İlkeleri',
      'KVKK ve Veri Gizliliği',
      'Meslek Etiği ve Profesyonel Davranış',
    ],
  },
  {
    id: 'operasyon',
    title: 'Fiziksel Güvenlik Operasyonları',
    items: [
      'Fiziki Güvenlik Prensipleri',
      'Tesis ve Yerleşke Güvenliği',
      'Kritik Altyapı Güvenliği',
      'Erişim Kontrol Sistemleri',
      'Kartlı Geçiş Sistemleri',
      'CCTV İzleme Teknikleri',
      'Alarm Sistemleri Yönetimi',
      'Devriye Planlama ve Uygulama',
      'Kontrol Noktası (Checkpoint) Yönetimi',
      'Araç ve Kargo Kontrolleri',
      'Ziyaretçi Yönetimi',
      'Anahtar ve Kilit Sistemleri Yönetimi',
    ],
  },
  {
    id: 'analiz',
    title: 'İleri Düzey ve Analiz',
    items: [
      'Perimetre Güvenliği',
      'Aydınlatma ve Fiziksel Caydırıcılık',
      'Risk Analizi ve Tehdit Değerlendirmesi',
      'Güvenlik Denetimleri (Audit)',
      'Olay Raporlama Teknikleri',
      'Delil Koruma Farkındalığı',
    ],
  },
];

let globalIndex = 0;

export default function Training() {
  globalIndex = 0;

  return (
    <>
      <SEO title="Güvenlik Eğitim Programları — 23 Profesyonel Eğitim" description="5188 sayılı kanun, fiziki güvenlik, CCTV izleme, risk analizi, HEAT eğitimi dahil 23 kapsamlı özel güvenlik eğitim programı. Mevzuat, operasyon ve ileri düzey güvenlik eğitimleri." path="/egitim" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Eğitim" title="Eğitim Programları" description="Güvenlik personelimize verilen kapsamlı eğitim programları ile sektörün en yüksek standartlarını sağlıyoruz." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          {categories.map((cat, catIdx) => {
            const startIndex = globalIndex;
            globalIndex += cat.items.length;
            return (
              <div key={cat.id} id={cat.id} className={s.category}>
                <div className={s.categoryRow}>
                  <div className={s.categoryLabel}>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={s.categoryTitle}
                    >
                      {cat.title}
                    </motion.h3>
                    <span className={s.categoryCount}>{cat.items.length} Eğitim</span>
                  </div>
                  <div className={s.categoryItems}>
                    {cat.items.map((item, i) => {
                      const num = startIndex + i + 1;
                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className={s.item}
                        >
                          <span className={s.itemNumber}>{String(num).padStart(2, '0')}</span>
                          <span className={s.itemTitle}>{item}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                {catIdx < categories.length - 1 && <div className={s.divider} />}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
