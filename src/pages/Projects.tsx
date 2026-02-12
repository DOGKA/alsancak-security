import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import s from './Projects.module.css';

type Ref = { title: string; period: string; desc: string; imgSrc: string; status: 'active' | 'completed'; sortYear: number };

const allRefs: Ref[] = [
  // Devam Eden
  { title: 'Singapur Büyükelçiliği', period: "2024 — Günümüze", desc: 'Büyükelçilik güvenlik hizmetleri.', imgSrc: '/images/singapur-buyukelcilik.png', status: 'active', sortYear: 2024 },
  { title: 'Anagold Madencilik A.Ş.', period: "2024 — Günümüze", desc: 'Madencilik operasyonları güvenliği.', imgSrc: '/images/proje-anagold.png', status: 'active', sortYear: 2024 },
  { title: 'ECHO (AB İnsani Yardım)', period: "2024 — Günümüze", desc: 'AB İnsani Yardım güvenlik hizmetleri.', imgSrc: '/images/echo.png', status: 'active', sortYear: 2024 },
  { title: 'Delegation of the European Union to Turkey', period: "2020 — Günümüze", desc: 'AB Türkiye Delegasyonu güvenliği.', imgSrc: '/images/proje-ab-delegasyonu.png', status: 'active', sortYear: 2020 },
  { title: 'Production Solutions', period: "2018 — Günümüze", desc: 'Üretim çözümleri güvenlik hizmetleri.', imgSrc: '/images/proje-production-solution.png', status: 'active', sortYear: 2018 },
  { title: 'Production Solution Viking International (USA)', period: "2013 — Günümüze", desc: 'Uluslararası üretim çözümleri güvenliği.', imgSrc: '/images/proje-viking.png', status: 'active', sortYear: 2013 },
  { title: 'Transatlantic Petroleum LLC', period: "2012 — Günümüze", desc: 'Enerji sektöründe güvenlik ve danışmanlık.', imgSrc: '/images/proje-transatlantic.png', status: 'active', sortYear: 2012 },
  // Tamamlanan
  { title: 'NVT Perenco', period: '2016 — 2025', desc: 'Enerji sektöründe güvenlik ve izleme.', imgSrc: '/images/nvt-perenco.png', status: 'completed', sortYear: 2025 },
  { title: 'WCK (World Central Kitchen)', period: '2023 — 2024', desc: 'Depremden etkilenen 8 ilde güvenlik.', imgSrc: '/images/proje-wck.png', status: 'completed', sortYear: 2024 },
  { title: 'USAID', period: '2015 — 2020', desc: 'Afganistan güvenlik hizmetleri.', imgSrc: '/images/proje-usaid.png', status: 'completed', sortYear: 2020 },
  { title: 'Valeura Energy', period: '2017 — 2020', desc: 'Enerji sektöründe güvenlik.', imgSrc: '/images/valeura-energy.png', status: 'completed', sortYear: 2020 },
  { title: 'GEOS/Tiway Turkey Ltd.', period: '2010 — 2018', desc: 'Petrol boru hattı güvenliği.', imgSrc: '/images/geos-tiway.png', status: 'completed', sortYear: 2018 },
  { title: 'BOTAŞ International', period: '2010 — 2018', desc: 'Uluslararası boru hattı güvenliği.', imgSrc: '/images/botas-international.png', status: 'completed', sortYear: 2018 },
  { title: 'Andritz Hydro — ILISU Barajı ve HES', period: '2013 — 2016', desc: 'Baraj ve HES güvenliği.', imgSrc: '/images/proje-ilisu.png', status: 'completed', sortYear: 2016 },
  { title: 'Yavuz Sultan Selim Köprüsü', period: '2013 — 2016', desc: 'Köprü inşaatı güvenliği.', imgSrc: '/images/proje-yss-koprusu.png', status: 'completed', sortYear: 2016 },
  { title: 'Talon Exploration Drilling', period: '2011 — 2013', desc: 'Sondaj operasyonları güvenliği.', imgSrc: '/images/talon-metals.png', status: 'completed', sortYear: 2013 },
  { title: 'ICA İGTAŞ ASTALDİ', period: '2008 — 2012', desc: 'Altyapı projesi güvenliği.', imgSrc: '/images/ica-igtas-astaldi.png', status: 'completed', sortYear: 2012 },
  { title: 'Thrace Basin Natural Gas', period: '2008 — 2012', desc: 'Doğalgaz sahası güvenliği.', imgSrc: '/images/thrace-basin.png', status: 'completed', sortYear: 2012 },
  { title: 'Amity Oil International', period: '2011 (1 Yıl)', desc: 'Petrol sahası güvenliği.', imgSrc: '/images/amity-oil.png', status: 'completed', sortYear: 2011 },
  { title: 'Savronik Sistem', period: '2009 — 2011', desc: 'Elektronik güvenlik sistemleri.', imgSrc: '/images/savronik-sistem.png', status: 'completed', sortYear: 2011 },
  { title: 'PetroGas', period: '2009 — 2011', desc: 'Petrol ve gaz sahası güvenliği.', imgSrc: '/images/petrogas.png', status: 'completed', sortYear: 2011 },
  { title: 'Gülermak Ağır Sanayi', period: '2008 — 2010', desc: 'Ağır sanayi tesisi güvenliği.', imgSrc: '/images/gulermak-agir.png', status: 'completed', sortYear: 2010 },
  { title: 'Akkoy Enerji A.Ş.', period: '2008 (1 Yıl)', desc: 'Enerji tesisi güvenliği.', imgSrc: '/images/akkoy-enerji.png', status: 'completed', sortYear: 2008 },
  { title: 'Kolin İnşaat', period: '2008 (1 Yıl)', desc: 'İnşaat projesi güvenliği.', imgSrc: '/images/kolin.png', status: 'completed', sortYear: 2008 },
  { title: 'Yapı Merkezi İnş. ve San. A.Ş.', period: '2008 (1 Yıl)', desc: 'İnşaat ve sanayi projesi güvenliği.', imgSrc: '/images/yapi-merkezi-proje.png', status: 'completed', sortYear: 2008 },
  { title: 'BOTAŞ/BIL Bakü-Tiflis-Ceyhan', period: '2003 — 2007', desc: 'BTC boru hattı güvenliği.', imgSrc: '/images/proje-btc.png', status: 'completed', sortYear: 2007 },
];

type Filter = 'all' | 'active' | 'completed';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? allRefs : allRefs.filter(r => r.status === filter);

  return (
    <>
      <section className={s.pageHeader}>
        <div className={s.container}>
          <SectionTitle subtitle="Referanslarımız" title="Referanslar" description="Ulusal ve uluslararası ölçekte güvenlik hizmeti verdiğimiz ve tamamladığımız projeler." />
        </div>
      </section>

      <section className={`${s.section} section-alt section-divider`}>
        <div className={s.container}>
          <div className={s.filterCards}>
            {[
              { key: 'all' as Filter, label: 'Tümü', count: allRefs.length, img: '/images/tumu-logo.png' },
              { key: 'active' as Filter, label: 'Devam Eden', count: allRefs.filter(r => r.status === 'active').length, img: '/images/proje-devam-eden.png' },
              { key: 'completed' as Filter, label: 'Tamamlanan', count: allRefs.filter(r => r.status === 'completed').length, img: '/images/proje-tamamlanan.png' },
            ].map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} className={`${s.filterCard} ${filter === f.key ? s.filterCardActive : ''}`}>
                <div className={s.filterImgWrap}>
                  {f.img ? <img src={f.img} alt={f.label} className={s.filterImg} /> : <span className={s.filterImgPlaceholder}>{f.count}</span>}
                </div>
                <span className={s.filterLabel}>{f.label}</span>
                <span className={s.filterCount}>{f.count} Referans</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}
              className={s.refGrid}>
              {filtered.map((ref, i) => (
                <motion.div key={ref.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                  className={s.refCard}>
                  <div className={s.refImageWrap}>
                    <img src={ref.imgSrc} alt={ref.title} className={s.refImage} />
                    <span className={`${s.refBadge} ${ref.status === 'active' ? s.badgeActive : s.badgeCompleted}`}>
                      {ref.status === 'active' ? 'Devam Ediyor' : 'Tamamlandı'}
                    </span>
                  </div>
                  <div className={s.refContent}>
                    <h3 className={s.refTitle}>{ref.title}</h3>
                    <span className={s.refPeriod}>{ref.period}</span>
                    <p className={s.refDesc}>{ref.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
