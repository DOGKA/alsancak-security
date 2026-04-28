import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';
import s from './GrievancePolicy.module.css';

const documentSections = {
  tr: [
    {
      title: '1. Amaç ve Felsefi Çerçeve:',
      paragraphs: [
        'Alsancak Şikayet Politikasının amacı; şikayetlerin adil ve hesap verebilir bir şekilde iletilebildiği, incelendiği ve çözümlendiği güçlü, şeffaf ve erişilebilir bir mekanizma oluşturmaktır. Alsancak Grup olarak, güvenlik operasyonlarının, özellikle karmaşık ve yüksek riskli ortamlarda, yalnızca operasyonel sorumluluklar değil, aynı zamanda derin insani etkiler taşıdığının farkındayız. İlgi Alanı ve Sorumluluk Alanı içinde atılan her adım, bireylerin ve toplulukların onurunu, güvenliğini ve haklarını etkileyebilir.',
        'Bu nedenle etik davranış, yalnızca yasal veya düzenleyici bir yükümlülük olarak değil, operasyonlarımızın tüm yönlerini destekleyen temel bir kurumsal değer olarak kabul edilir. Endişelerin korku duyulmadan dile getirilebildiği, her bildirimin ciddiyet ve saygıyla ele alındığı, hesap verebilirliğin hem ilke hem de uygulama olduğu bir kültürü teşvik etmeyi taahhüt ediyoruz.',
        'Bu politika; dürüstlük, profesyonellik ve insan haklarına saygı konularında en yüksek standartlara bağlılığımızı yansıtır. Şirket Davranış Kurallarından, geçerli uluslararası insancıl hukuktan veya kabul görmüş insan hakları ilkelerinden herhangi bir sapma hızlı, tarafsız ve şeffaf biçimde ele alınacaktır.',
        'Uyumun ötesinde bu çerçeve, hem kuruluşumuz içinde hem de hizmet verdiğimiz topluluklar ve iş ortakları nezdinde güveni güçlendirmek için tasarlanmıştır. Alsancak Grup, tüm şikayetlerin hassasiyet, adalet ve özenle ele alınmasını sağlayarak yalnızca uygunsuz davranışları önlemeyi değil, faaliyet gösterdiği her ortamda etik temellerini ve operasyonel meşruiyetini sürekli güçlendirmeyi amaçlar.',
      ],
    },
    {
      title: '2. Uygulama Kapsamı:',
      paragraphs: [
        'Alsancak Şikayet Politikası, çalışanlar, alt yükleniciler ve danışmanlar dahil olmak üzere rolleri, görevleri veya konumları ne olursa olsun Alsancak Grup yetkisi altında faaliyet gösteren tüm bireyler için kapsamlı şekilde ve istisnasız olarak geçerlidir. Kuruluşun her üyesi, bu çerçevede belirtilen ilkeleri koruma ve hesap verebilirlik, dürüstlük ve saygı kültürüne katkıda bulunma konusunda ortak sorumluluğa sahiptir.',
        'Operasyonlarımızın iç yapılarla sınırlı olmadığını kabul ederek bu politika, faaliyetlerimizden doğrudan veya dolaylı olarak etkilenebilecek tüm dış paydaşları da kapsar. Buna müşteriler, iş ortakları, tedarikçiler ve özellikle operasyon alanlarımızdaki yerel topluluklar dahildir. Alsancak Grup, varlığının ve eylemlerinin özellikle hassas ve yüksek riskli ortamlarda somut sosyal ve insani etkiler yaratabileceğini kabul eder.',
        'Bu doğrultuda bu çerçeve, kuruluş içinde veya dışında bulunan herhangi bir birey ya da grubun güvenli, saygılı ve erişilebilir bir şekilde endişelerini dile getirme, şikayette bulunma ve telafi arama hakkına ve imkanına sahip olmasını sağlar. Şirket, kapsamı bu şekilde genişleterek kapsayıcılık, şeffaflık ve insan onurunun korunmasına olan bağlılığını tüm operasyonel bağlamlarda güçlendirir.',
      ],
    },
    {
      title: '3. Şikayet Mekanizmasının Temel İlkeleri:',
      paragraphs: [
        'Bazı şeyleri örttüğünüzde, kısa süreli veya hızlı bir başarı elde etmiş gibi hissedebilirsiniz. Ancak örtülen şeyler kısa süre sonra kötü sonuçlar doğurmaya başlar ve sizi ve şirketinizi zor durumda bırakır. Kısacası gerçek er ya da geç ortaya çıkar. Bu nedenle Alsancak, dürüstlüğü en iyi politika olarak benimsemiştir.',
        'Operasyonel bütünlüğü korumak ve uluslararası en iyi uygulamalarla tam uyumu sağlamak için Alsancak Grup şikayet mekanizması; adaleti, hesap verebilirliği ve güveni birlikte koruyan temel ilkeler üzerine kurulmuştur. Bu ilkeler yalnızca prosedürleri düzenlemek için değil, aynı zamanda bireylerin tereddüt etmeden endişelerini dile getirebildiği, kendilerini güvende, saygı görmüş ve yetkilendirilmiş hissettikleri bir şirket kültürü oluşturmak için tasarlanmıştır. Bu çerçevenin merkezinde, sesini yükseltenleri koruma, sürece dahil olan tüm tarafların gizliliğini ve onurunu muhafaza etme ve her iddianın nesnel ve önyargısız şekilde değerlendirilmesini sağlama taahhüdü yer alır.',
        'Mekanizma, çıkar çatışmalarından bağımsız, zamanında ve tarafsız soruşturmaları önceliklendirirken, rolü, geçmişi veya konumu ne olursa olsun tüm paydaşlar için erişilebilir kalır. Alsancak Grup, bu ilkeleri şikayet sürecinin her aşamasına dahil ederek hem güvenilir hem de insani bir sistem oluşturmayı; etik davranışı güçlendiren, kurumsal şeffaflığı artıran ve tüm operasyonel ortamlarda bireylerin temel haklarını koruyan bir yapı kurmayı amaçlar.',
        'Misilleme Yapmama: Alsancak Grup, etik çerçevesinin temel taşı olarak katı ve açık bir misilleme yapmama politikası uygular. Şirket, tanık veya ihbarcı olarak endişelerini bildiren kişilerin çoğu zaman zorlu koşullarda öne çıktığını ve bu kişilerin konuşma istekliliğinin dürüstlük ve hesap verebilirliğin korunması için gerekli olduğunu kabul eder. Bu doğrultuda, iyi niyetle şüpheli uygunsuz davranışı, etik dışı davranışı veya geçerli yasa ve standart ihlallerini bildiren herkes her türlü misillemeye karşı tam olarak korunur.',
        'Bu koruma; işten çıkarma, görev düşürme, taciz, ayrımcılık, yıldırma veya herhangi bir mesleki ya da kişisel dezavantaj dahil olmak üzere doğrudan veya dolaylı tüm olumsuz eylemleri kapsar. Şirket, bireylerin endişelerini dile getirirken olumsuz sonuçlardan korkmadan kendilerini güvende, saygı görmüş ve desteklenmiş hissettikleri bir ortam oluşturmayı taahhüt eder. Her türlü misilleme eylemi, Şirket politikasının ciddi ihlali olarak değerlendirilecek ve derhal disiplin işlemine tabi tutulacaktır.',
        'Alsancak Grup bu ilkeyi koruyarak yalnızca bireyleri korumakla kalmaz, aynı zamanda operasyonlarının tüm seviyelerinde güven, şeffaflık ve etik sorumluluk kültürünü de güçlendirir.',
        'Gizlilik ve Mahremiyet: Alsancak Grup, şikayet sürecine dahil olan tüm bireylerin gizliliğini ve mahremiyetini korumaya kesin olarak bağlıdır. Şirket, hassas bilgilerin korunmasının yalnızca soruşturmaların bütünlüğü için değil, aynı zamanda endişelerini dile getiren kişilerin onurunu, güvenliğini ve güvenini korumak için de gerekli olduğunu kabul eder. Bu doğrultuda, şikayetlerle ilgili tüm bilgiler, bildirimde bulunanların, tanıkların ve soruşturma konusu kişilerin kimlikleri dahil olmak üzere en yüksek gizlilik düzeyiyle ele alınır.',
        'İdari ve soruşturma ekibinin her üyesi, gizli bilgilere yalnızca bilmesi gereken kişiler tarafından erişilmesini ve bu bilgilerin yetkisiz açıklamaya karşı korunmasını sağlama konusunda doğrudan sorumluluk taşır. Tüm kayıtların geçerli yasal ve mesleki standartlara uygun şekilde güvenli olarak saklanması, işlenmesi ve yönetilmesi için önlemler uygulanır.',
        'Şirket, özellikle hassas operasyonel ortamlarda gizlilik ihlallerinden doğabilecek olası risklerin de farkındadır. Bu nedenle, bilgilerin yetkisiz açıklanması veya kötüye kullanılması Şirket politikasının ciddi ihlali olarak değerlendirilecek ve disiplin veya yasal işlemle sonuçlanabilecektir. Alsancak Grup bu yaklaşım sayesinde, bireylerin mahremiyetlerinin sürecin her aşamasında korunacağını bilerek güvenle endişelerini dile getirebildikleri güvenli ve saygılı bir ortam oluşturmayı amaçlar.',
        'Tarafsızlık: Davranışlara ilişkin soruşturmalar, doğrudan çıkar çatışması bulunmayan personel tarafından hızlı ve tarafsız şekilde yürütülecektir. Erişilebilirlik: Şikayet prosedürleri, ICoCA yönergelerine uygun olarak adil, etkili ve erişilebilir olacak şekilde tasarlanmıştır.',
      ],
    },
    {
      title: '4. Bildirilebilir Şikayetlerin Sınıflandırılması:',
      paragraphs: [
        'Personel ve paydaşlar, aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere şüpheli veya gerçekleşmiş ihlalleri bildirmeye teşvik edilir:',
        'Güç Kullanımının Kötüye Kullanılması: Kesinlikle gerekli, orantılı veya Güç Kullanım Kurallarıyla (RUF) uyumlu olmayan herhangi bir ateşli silah veya güç kullanımı.',
        'İnsan Hakları İhlalleri: İşkence, zalimane veya insanlık dışı muamele ya da kişilerin kesin zorunluluk olmaksızın yakalanmasını içeren eylemler.',
        'Cinsel Sömürü ve İstismar (SEA): BM’nin Altı Temel İlkesi uyarınca ele alınması gereken her türlü cinsel taciz, zorlama veya şiddet.',
        'Mali Usulsüzlük: Rüşvet, komisyon isteme veya kabul etme ya da yetkisiz ticari ilişkiler yürütme.',
        'Güvenlik İhmali: Çalışma arkadaşlarının veya sivillerin sağlık ve güvenliğini tehdit eden uygunsuz davranışlar.',
      ],
    },
    {
      title: '5. Şikayetlerin Giderilmesine İlişkin Prosedürel İş Akışı',
      paragraphs: [
        'Aşama I: Başvuru ve Raporlama',
        'Şikayetler resmi iç raporlama kanalları aracılığıyla iletilebilir. Olay raporlaması temel bir gerekliliktir ve zaman, yer, dahil olan kişilerin kimlikleri ve olayların ayrıntılı akışını içermelidir.',
        'Aşama II: Soruşturma ve İş Birliği:',
        'Bir şikayet alındığında Alsancak Grup resmi bir inceleme başlatacaktır. Şirket, Uluslararası Davranış Kuralları Birliği (ICoCA) ve yetkili dış kurumlar dahil olmak üzere meşru izleme kuruluşlarıyla tam iş birliği yapmayı taahhüt eder.',
        'Aşama III: Telafi ve Disiplin İşlemi:',
        'Bir soruşturma etik veya hukuki bir ihlali doğrularsa, ihlaller derhal disiplin işlemiyle sonuçlanacaktır; bu işlem iş akdinin feshedilmesini de içerebilir. Ciddi cezai fiiller yetkili yasal makamlara ve devlet adli sicil kayıt kurumlarına bildirilecektir. Şirket, geçerli yargı yetkisi kapsamında yasal sonuçlar arama hakkını saklı tutar.',
      ],
    },
    {
      title: '6. Şeffaflık ve Kayıt Tutma:',
      paragraphs: [
        'Uzun vadeli hesap verebilirliği sağlamak için eğitim, davranış ve şikayet sonuçlarına ilişkin ayrıntılı kayıtlar tutulur. Mevcut ve eski personele ait istihdam ve olay kayıtları en az yedi yıl süreyle saklanır. Kayıtlar, gözetim ve denetim amacıyla yetkili makamlar tarafından erişilebilir olabilir.',
      ],
    },
    {
      title: '7. Yönetişim ve Sürekli İyileştirme:',
      paragraphs: [
        'Alsancak Grup, en güncel uluslararası standartlara ve en iyi uygulamalara sürekli uyumu sağlamak amacıyla bu politikayı değiştirme hakkını saklı tutar. Bu belge, tüm uluslararası operasyon alanlarında BM Küresel İlkeler Sözleşmesi ve ICoCA değerlerine bağlayıcı bir taahhüt niteliği taşır.',
      ],
    },
  ],
  en: [
  {
    title: '1. Purpose and Philosophical Framework:',
    paragraphs: [
      'The purpose of Alsancak’s Grievance Policy is to establish a robust, transparent, and accessible mechanism through which grievances can be raised, examined, and resolved in a fair and accountable manner. At Alsancak Group, we recognize that security operations—particularly in complex and high-risk environments—carry not only operational responsibilities but also profound human implications. Every action taken in both Area of Interest and Area of Responsibility has the potential to affect the dignity, safety, and rights of individuals and communities.',
      'Therefore, ethical conduct is not regarded merely as a regulatory obligation but as a core organizational value that underpins all aspects of our operations. We are committed to fostering a culture in which concerns can be voiced without fear, where every report is treated with seriousness and respect, and where accountability is both a principle and a practice.',
      'This policy reflects our firm commitment to upholding the highest standards of integrity, professionalism, and respect for human rights. Any deviation from the Company’s Code of Conduct, applicable international humanitarian law, or recognized human rights principles will be addressed promptly, impartially, and transparently.',
      'Beyond compliance, this framework is designed to reinforce trust—both within our organization and among the communities and partners we serve. By ensuring that all grievances are handled with sensitivity, fairness, and diligence, Alsancak Group seeks not only to prevent misconduct but also to continuously strengthen its ethical foundations and operational legitimacy in every environment in which it operates.',
    ],
  },
  {
    title: '2. Scope of Application:',
    paragraphs: [
      'Alsancak’s Grievance Policy applies comprehensively and with no exception to all individuals operating under the authority of Alsancak Group, including employees, subcontractors, and consultants, regardless of their role, function, or location. Every member of the organization shares a collective responsibility to uphold the principles set forth in this framework and to contribute to a culture of accountability, integrity, and respect.',
      'Recognizing that our operations extend beyond internal structures, this policy also encompasses all external stakeholders who may be directly or indirectly affected by our activities. This includes clients, partners, suppliers, and, critically, local communities within our areas of operation. Alsancak Group acknowledges that its presence and actions can have tangible social and human impacts, particularly in sensitive and high-risk environments.',
      'Accordingly, this framework ensures that any individual or group—whether within or outside the organization—has the right and the means to raise concerns, report grievances, and seek redress in a safe, respectful, and accessible manner. By extending the scope in this way, the Company reinforces its commitment to inclusivity, transparency, and the protection of human dignity across all operational contexts.',
    ],
  },
  {
    title: '3. Core Principles of the Grievance Mechanism:',
    paragraphs: [
      "When you cover up certain things, you might feel like you've achieved success momentarily or quickly. However, things that are covered up soon start to smell bad, putting you and your company in a difficult position. In short, the truth has a way of coming out sooner or later. Therefore, Alsancak has adopted honesty as the best policy.",
      'To maintain operational integrity and ensure full alignment with international best practices, Alsancak Group’s grievance mechanism is built upon a set of core principles that collectively safeguard fairness, accountability, and trust. These principles are designed not only to regulate procedures, but also to shape a company culture in which individuals feel safe, respected, and empowered to raise concerns without hesitation. At the heart of this framework lies a commitment to protecting those who speak up, preserving the confidentiality and dignity of all parties involved, and ensuring that every allegation is assessed objectively and without bias.',
      'The mechanism prioritizes timely and impartial investigations, free from conflicts of interest, while remaining accessible to all stakeholders regardless of their role, background, or location. By embedding these principles into every stage of the grievance process, Alsancak Group seeks to create a system that is both credible and humane—one that reinforces ethical conduct, strengthens institutional transparency, and upholds the fundamental rights of individuals in all operational environments.',
      'Non-Retaliation: Alsancak Group enforces a strict and unequivocal non-retaliation policy as a cornerstone of its ethical framework. The Company recognizes that individuals who come forward to report concerns—whether as witnesses or whistleblowers—often do so under challenging circumstances, and their willingness to speak up is essential to maintaining integrity and accountability. Accordingly, any person who, in good faith, reports suspected misconduct, unethical behavior, or violations of applicable laws and standards is fully protected from all forms of retaliation.',
      'This protection extends to any direct or indirect adverse action, including dismissal, demotion, harassment, discrimination, intimidation, or any other form of professional or personal disadvantage. The Company is committed to fostering an environment in which individuals feel safe, respected, and supported when raising concerns, without fear of negative consequences. Any act of retaliation will be treated as a serious violation of Company policy and will be subject to immediate disciplinary action.',
      'By upholding this principle, Alsancak Group not only protects individuals but also reinforces a culture of trust, transparency, and ethical responsibility across all levels of its operations.',
      'Confidentiality and Privacy: Alsancak Group is firmly committed to safeguarding the confidentiality and privacy of all individuals involved in the grievance process. The Company recognizes that the protection of sensitive information is essential not only for the integrity of investigations, but also for preserving the dignity, security, and trust of those who come forward with concerns. Accordingly, all information related to grievances—including the identity of reporters, witnesses, and subjects of investigation—is handled with the highest level of discretion.',
      'Every member of the administrative and investigative team bears a direct responsibility to ensure that confidential information is accessed strictly on a need-to-know basis and is protected against unauthorized disclosure. Measures are implemented to securely store, process, and manage all records in accordance with applicable legal and professional standards.',
      'The Company is equally mindful of the potential risks that may arise from breaches of confidentiality, particularly in sensitive operational environments. Therefore, any unauthorized disclosure or misuse of information will be treated as a serious violation of Company policy and may result in disciplinary or legal action. Through this approach, Alsancak Group seeks to create a safe and respectful environment in which individuals can raise concerns with confidence, knowing that their privacy will be protected at every stage of the process.',
      'Impartiality: Investigations into conduct will be conducted swiftly and impartially by personnel with no direct conflict of interest. Accessibility: Grievance procedures are designed to be fair, effective, and accessible in accordance with ICoCA guidelines.',
    ],
  },
  {
    title: '4. Categorization of Reportable Grievances:',
    paragraphs: [
      'Personnel and stakeholders are encouraged to report any suspected or actual violations, including but not limited to:',
      'Abuse of Force: Any use of firearms or force that is not strictly necessary, proportionate, or compliant with the Rules for the Use of Force (RUF).',
      'Human Rights Violations: Acts involving torture, cruel or inhuman treatment, or the apprehension of persons without strict necessity.',
      'Sexual Exploitation and Abuse (SEA): Any form of sexual harassment, coercion, or violence, which must be handled according to the UN’s Six Core Principles.',
      'Financial Misconduct: Soliciting or accepting bribes, kick-backs, or engaging in unauthorized business dealings.',
      'Safety Negligence: Misconduct that threatens the health and safety of co-workers or civilians.',
    ],
  },
  {
    title: '5. Procedural Workflow for Grievance Redressal',
    paragraphs: [
      'Phase I: Submission and Reporting',
      'Grievances may be submitted through formal internal reporting channels. Incident reporting is a fundamental requirement and must include the time, location, identities involved, and a detailed sequence of events.',
      'Phase II: Investigation and Cooperation:',
      'Upon receipt of a grievance, Alsancak Group will initiate a formal inquiry. The Company is committed to full cooperation with legitimate monitoring entities, including the International Code of Conduct Association (ICoCA) and authorized external agencies.',
      'Phase III: Remediation and Disciplinary Action:',
      'If an investigation confirms an ethical or legal breach, Violations will result in immediate disciplinary action, which may include termination of employment. Serious criminal acts will be referred to competent legal authorities and government criminal record registries. The Company reserves the right to seek legal consequences under the applicable jurisdiction.',
    ],
  },
  {
    title: '6. Transparency and Record Keeping:',
    paragraphs: [
      'To ensure long-term accountability, Detailed records of training, conduct, and grievance outcomes are maintained. Employment and incident records for current and former personnel are held for no less than seven years. Records may be accessed by competent authorities for oversight and auditing purposes.',
    ],
  },
  {
    title: '7. Governance and Continuous Improvement:',
    paragraphs: [
      'Alsancak Group reserves the right to amend this policy to ensure continuous compliance with the most recent international standards and best practices. This document serves as a binding commitment to the values of the UN Global Compact and ICoCA in all international operational theaters.',
    ],
  },
  ],
} as const;

const pageContent = {
  tr: {
    seo: {
      title: 'Şikayet ve Gizlilik Politikaları',
      description: 'Alsancak Grup Şikayet ve Çözüm Politikası ile GDPR ve KVKK uyumlu Gizlilik Politikası.',
    },
    header: {
      subtitle: 'Politikalarımız',
      title: 'Alsancak Grup Şikayet ve Çözüm Politikası',
      description: 'PDF belgesindeki içeriğin Türkçe karşılığı.',
    },
    documentTitle: 'Alsancak Grup Şikayet ve Çözüm Politikası',
    downloadText: 'Orijinal belgeyi buradan indirebilirsiniz',
  },
  en: {
    seo: {
      title: 'Grievance and Privacy Policies',
      description: 'Alsancak Group Grievance and Remedy Policy and GDPR/KVKK compliant Privacy Policy.',
    },
    header: {
      subtitle: 'Our Policies',
      title: 'Alsancak Group’s Grievance and Remedy Policy',
      description: 'Web page aligned with the original PDF document.',
    },
    documentTitle: 'Alsancak Group’s Grievance and Remedy Policy',
    downloadText: 'You can download the original document here',
  },
} as const;

export default function GrievancePolicy() {
  const { language } = useLanguage();
  const page = pageContent[language];
  const sections = documentSections[language];

  return (
    <>
      <SEO title={page.seo.title} description={page.seo.description} path="/sikayet-politikasi" />
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle={page.header.subtitle} title={page.header.title} description={page.header.description} />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={s.documentCard}>
            <h3 className={s.documentTitle}>{page.documentTitle}</h3>
            {sections.map((section) => (
              <section key={section.title} className={s.policySection}>
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <div className={s.signature}>
              <p>Ruşen Bozkurt</p>
              <p>General Manager and Board Member</p>
            </div>
            <a className={s.downloadLink} href="/docs/Alsancak-Grievance-Policy.pdf" download>
              <Download size={18} />
              <span>{page.downloadText}</span>
            </a>
          </motion.article>
        </div>
      </section>
    </>
  );
}
