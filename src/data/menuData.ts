export interface SubMenuItem {
  title: string;
  description: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc?: string;
  link: string;
}

export interface MenuItem {
  title: string;
  path: string;
  subItems?: SubMenuItem[];
}

export const menuData: MenuItem[] = [
  {
    title: 'Anasayfa',
    path: '/',
  },
  {
    title: 'Hakkımızda',
    path: '/hakkimizda',
    subItems: [
      {
        title: 'Şirket Genel Bakış',
        description: 'Alsancak Group hakkında detaylı bilgi ve kuruluş hikayemiz',
        imageAlt: 'Şirket genel bakış görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/sirket-genel-bakis.png',
        link: '/hakkimizda#genel-bakis',
      },
      {
        title: 'Organizasyon Yapısı',
        description: 'Güvenlik organizasyonumuz ve yönetim kadromuz',
        imageAlt: 'Organizasyon şeması görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/organizasyon-yapisi.png',
        link: '/hakkimizda#organizasyon',
      },
      {
        title: 'Operasyonel Deneyim',
        description: '7+ ülkede kazanılmış uluslararası güvenlik tecrübesi',
        imageAlt: 'Dünya haritası operasyonel deneyim görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/operasyonel-deneyim.png',
        link: '/hakkimizda#deneyim',
      },
      {
        title: 'Basında Biz',
        description: 'Alsancak Güvenlik basında ve medyada',
        imageAlt: 'Basında biz görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/liderlik-kadrosu.png',
        link: '/hakkimizda#liderlik',
      },
    ],
  },
  {
    title: 'Hizmetlerimiz',
    path: '/hizmetlerimiz',
    subItems: [
      {
        title: 'Fiziki Güvenlik',
        description: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar',
        imageAlt: 'Fiziki güvenlik hizmeti görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-fiziksel.png',
        link: '/hizmetlerimiz#fiziksel',
      },
      {
        title: 'Enerji ve Tesis Güvenliği',
        description: 'Petrol/gaz hattı, hidroelektrik santraller ve kamu tesisleri',
        imageAlt: 'Enerji tesisi güvenlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-enerji-tesis.png',
        link: '/hizmetlerimiz#enerji',
      },
      {
        title: 'Kritik Altyapı Güvenliği',
        description: 'Barajlar, köprüler, karayolları ve bina güvenliği',
        imageAlt: 'Altyapı güvenlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-kritik-altyapi.png',
        link: '/hizmetlerimiz#altyapi',
      },
      {
        title: 'İzleme ve Kontrol',
        description: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri',
        imageAlt: 'İzleme ve kontrol sistemi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-uzaktan-izleme.png',
        link: '/hizmetlerimiz#izleme',
      },
      {
        title: 'Profesyonel Koruma',
        description: 'Yakın koruma ve seyahat yönetimi hizmetleri',
        imageAlt: 'Profesyonel koruma görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-insanli.png',
        link: '/hizmetlerimiz#insanli',
      },
      {
        title: 'Danışmanlık',
        description: 'Risk değerlendirme, eğitim ve güvenlik açığı analizleri',
        imageAlt: 'Güvenlik danışmanlığı görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-danismanlik.png',
        link: '/hizmetlerimiz#danismanlik',
      },
    ],
  },
  {
    title: 'Referanslar',
    path: '/projelerimiz',
  },
  {
    title: 'Raporlama',
    path: '/raporlama',
    subItems: [
      {
        title: 'Güvenlik Raporları',
        description: 'Günlük, haftalık ve aylık güvenlik değerlendirme raporları',
        imageAlt: 'Güvenlik raporları görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-guvenlik-raporlari.png',
        link: '/raporlama#raporlar',
      },
      {
        title: 'Risk Yönetimi',
        description: 'Kapsamlı risk analizi ve tehdit değerlendirme çerçevesi',
        imageAlt: 'Risk yönetimi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-risk-yonetimi.png',
        link: '/raporlama#risk',
      },
      {
        title: 'Olay Yönetim Süreci',
        description: 'Hızlı müdahale ekibi ve alarm izleme merkezi süreçleri',
        imageAlt: 'Olay yönetim süreci görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-vaka-yonetimi.png',
        link: '/raporlama#vaka',
      },
      {
        title: 'Sürdürülebilirlik',
        description: 'Çevre bilinci ve sürdürülebilir güvenlik uygulamaları',
        imageAlt: 'Sürdürülebilirlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-surdurulebilirlik.png',
        link: '/raporlama#surdurulebilirlik',
      },
    ],
  },
  {
    title: 'Sertifikalar',
    path: '/sertifikalar',
    subItems: [
      {
        title: 'ISO Sertifikaları',
        description: '11 uluslararası ISO standardı ile belgelenmiş kalite',
        imageAlt: 'ISO sertifikaları görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-iso.png',
        link: '/sertifikalar#iso',
      },
      {
        title: 'ISPS Code Deneyimi',
        description: 'Liman tesisleri güvenliğinde RSO yetkisi ve deneyim',
        imageAlt: 'ISPS Code deneyimi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/yeni-isps.png',
        link: '/sertifikalar#isps',
      },
    ],
  },
  {
    title: 'Eğitim',
    path: '/egitim',
  },
  {
    title: 'İletişim',
    path: '/iletisim',
  },
];
