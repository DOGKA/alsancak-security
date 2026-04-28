import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import s from './GrievancePolicy.module.css';

const privacySections = [
  {
    title: '1. Veri Sorumlusu ve Kapsam',
    paragraphs: [
      'Kişisel veriler, veri sorumlusu sıfatıyla Alsancak Grup tarafından işlenir. Bu politika; web sitesi ziyaretçileri, müşteriler, tedarikçiler, iş ortakları, çalışan adayları, çalışanlar, alt yükleniciler, danışmanlar, şikayet bildiriminde bulunan kişiler, tanıklar ve faaliyetlerimizden etkilenen diğer paydaşlar için geçerlidir.',
    ],
  },
  {
    title: '2. İşlenen Kişisel Veri Kategorileri',
    paragraphs: [
      'Kimlik, iletişim, mesleki deneyim, müşteri ve işlem bilgileri, talep ve şikayet kayıtları, hukuki işlem bilgileri, işlem güvenliği verileri, web sitesi kullanım verileri ve gerekli hallerde olay bildirimleri kapsamında sınırlı hassas veriler işlenebilir. Hassas veriler yalnızca açık rıza, kanuni zorunluluk veya ilgili mevzuatta öngörülen diğer hukuki şartlar mevcut olduğunda ve ek güvenlik tedbirleri uygulanarak işlenir.',
    ],
  },
  {
    title: '3. İşleme Amaçları ve Hukuki Sebepler',
    paragraphs: [
      'Kişisel veriler; hizmetlerin sunulması, iletişim taleplerinin yanıtlanması, şikayetlerin alınması ve incelenmesi, sözleşmelerin kurulması ve ifası, yasal yükümlülüklerin yerine getirilmesi, güvenlik ve denetim süreçlerinin yürütülmesi, iş sürekliliğinin sağlanması, hak taleplerinin korunması ve meşru menfaatlerin yürütülmesi amaçlarıyla işlenir.',
      'İşleme faaliyetleri KVKK madde 5 ve 6 ile GDPR madde 6 ve 9 kapsamında; açık rıza, sözleşmenin kurulması veya ifası, hukuki yükümlülük, bir hakkın tesisi, kullanılması veya korunması, temel hak ve özgürlüklere zarar vermemek kaydıyla meşru menfaat ve kanunlarda açıkça öngörülme hukuki sebeplerine dayanabilir.',
    ],
  },
  {
    title: '4. Çerezler ve Web Sitesi Verileri',
    paragraphs: [
      'Web sitesi, zorunlu teknik çerezler ve hizmetin güvenli şekilde çalışması için gerekli işlem güvenliği verilerini kullanabilir. Analitik, pazarlama veya tercih çerezleri kullanılması halinde, uygulanabilir mevzuatın gerektirdiği durumlarda kullanıcıdan önceden açık rıza alınır ve çerez tercihleri değiştirilebilir şekilde sunulur.',
    ],
  },
  {
    title: '5. Kişisel Verilerin Paylaşılması ve Aktarımı',
    paragraphs: [
      'Kişisel veriler; kanunen yetkili kamu kurumları, denetim ve belgelendirme kuruluşları, hukuki danışmanlar, teknik hizmet sağlayıcılar, iş ortakları ve sözleşmesel hizmet sağlayıcılarla yalnızca gerekli olduğu ölçüde ve gizlilik, güvenlik ve veri koruma yükümlülükleri gözetilerek paylaşılabilir.',
      'Yurt dışına veri aktarımı gerektiğinde KVKK, GDPR ve ilgili mevzuat uyarınca yeterli koruma, standart sözleşme hükümleri, taahhütname, açık rıza veya uygulanabilir diğer aktarım mekanizmaları değerlendirilir.',
    ],
  },
  {
    title: '6. Saklama Süreleri',
    paragraphs: [
      'Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı, denetim, sözleşme ve kayıt saklama süreleri dikkate alınarak saklanır. Saklama amacı sona erdiğinde veriler güvenli şekilde silinir, yok edilir veya anonim hale getirilir.',
    ],
  },
  {
    title: '7. İlgili Kişi Hakları',
    paragraphs: [
      'İlgili kişiler KVKK madde 11 ve GDPR madde 15-22 kapsamında; kişisel verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme veya yok etme isteme, işleme faaliyetini kısıtlama, itiraz etme, veri taşınabilirliği talep etme, rızayı geri çekme ve hukuka aykırı işleme nedeniyle zarara uğramaları halinde tazminat talep etme haklarına sahiptir.',
      'Hak talepleri info@alsancakguvenlik.com adresi üzerinden veya Şirketin resmi iletişim kanalları aracılığıyla iletilebilir. Başvurular, uygulanabilir mevzuatta öngörülen süreler içinde sonuçlandırılır.',
    ],
  },
  {
    title: '8. Güvenlik Tedbirleri ve Güncellemeler',
    paragraphs: [
      'Alsancak Grup; kişisel verilerin gizliliğini, bütünlüğünü ve erişilebilirliğini korumak için erişim yetkilendirmesi, kayıt yönetimi, gizlilik yükümlülükleri, teknik güvenlik kontrolleri, eğitim, denetim ve olay müdahale tedbirleri uygular.',
      'Bu politika, mevzuat değişiklikleri, operasyonel ihtiyaçlar veya veri işleme süreçlerindeki değişiklikler doğrultusunda güncellenebilir. Güncel metin web sitesinde yayımlandığı tarihte yürürlüğe girer.',
    ],
  },
] as const;

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Gizlilik Politikası" description="Alsancak Grup Gizlilik Politikası. Yürürlük tarihi: 26 Nisan 2026." path="/gizlilik-politikasi" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Politikalarımız" title="Gizlilik Politikası" description="KVKK ve GDPR ilkelerine uygun kişisel veri işleme politikası." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={s.documentCard}>
            <h3 className={s.documentTitle}>Gizlilik Politikası</h3>
            <p className={s.effectiveDate}>Yürürlük tarihi: 26 Nisan 2026</p>
            <p className={s.privacyIntro}>
              Bu Gizlilik Politikası, Alsancak Grup tarafından yürütülen web sitesi, iletişim, başvuru, şikayet ve iş süreçleri kapsamında kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), ilgili ikincil mevzuat ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ilkelerine uygun olarak nasıl işlendiğini açıklar.
            </p>
            {privacySections.map((section) => (
              <section key={section.title} className={s.policySection}>
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </motion.article>
        </div>
      </section>
    </>
  );
}
