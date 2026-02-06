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
        imageSrc: '/images/hakkimizda-genel-bakis.png',
        link: '/hakkimizda#genel-bakis',
      },
      {
        title: 'Organizasyon Yapısı',
        description: 'Güvenlik organizasyonumuz ve yönetim kadromuz',
        imageAlt: 'Organizasyon şeması görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hakkimizda-organizasyon.png',
        link: '/hakkimizda#organizasyon',
      },
      {
        title: 'Operasyonel Deneyim',
        description: '7+ ülkede kazanılmış uluslararası güvenlik tecrübesi',
        imageAlt: 'Dünya haritası operasyonel deneyim görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/dunya-haritasi.png',
        link: '/hakkimizda#deneyim',
      },
      {
        title: 'Liderlik Kadrosu',
        description: 'TSK ve Emniyet kökenli deneyimli yönetim ekibimiz',
        imageAlt: 'Liderlik kadrosu görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hakkimizda-liderlik.png',
        link: '/hakkimizda#liderlik',
      },
    ],
  },
  {
    title: 'Hizmetlerimiz',
    path: '/hizmetlerimiz',
    subItems: [
      {
        title: 'Fiziksel Güvenlik',
        description: 'Şirket merkezleri, rezidanslar, büyükelçilikler ve fabrikalar',
        imageAlt: 'Fiziksel güvenlik hizmeti görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-fiziksel-guvenlik.png',
        link: '/hizmetlerimiz#fiziksel',
      },
      {
        title: 'Enerji ve Tesis Güvenliği',
        description: 'Petrol/gaz hattı, hidroelektrik santraller ve kamu tesisleri',
        imageAlt: 'Enerji tesisi güvenlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-enerji-tesis.png',
        link: '/hizmetlerimiz#enerji',
      },
      {
        title: 'Kritik Altyapı Güvenliği',
        description: 'Barajlar, köprüler, karayolları ve bina güvenliği',
        imageAlt: 'Altyapı güvenlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-kritik-altyapi.png',
        link: '/hizmetlerimiz#altyapi',
      },
      {
        title: 'Uzaktan İzleme',
        description: 'CCTV, alarm izleme merkezi ve izinsiz giriş tespit sistemleri',
        imageAlt: 'Uzaktan izleme sistemi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-uzaktan-izleme.png',
        link: '/hizmetlerimiz#izleme',
      },
      {
        title: 'İnsanlı Güvenlik',
        description: 'Yakın koruma ve seyahat yönetimi hizmetleri',
        imageAlt: 'İnsanlı güvenlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-insanli-guvenlik.png',
        link: '/hizmetlerimiz#insanli',
      },
      {
        title: 'Danışmanlık',
        description: 'Risk değerlendirme, eğitim ve güvenlik açığı analizleri',
        imageAlt: 'Güvenlik danışmanlığı görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/hizmet-danismanlik.png',
        link: '/hizmetlerimiz#danismanlik',
      },
    ],
  },
  {
    title: 'Projelerimiz',
    path: '/projelerimiz',
    subItems: [
      {
        title: 'Devam Eden Projeler',
        description: 'Aktif olarak güvenlik hizmeti verdiğimiz projeler',
        imageAlt: 'Devam eden projeler görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/proje-devam-eden.png',
        link: '/projelerimiz#devam-eden',
      },
      {
        title: 'Tamamlanan Projeler',
        description: 'Başarıyla tamamladığımız ulusal ve uluslararası projeler',
        imageAlt: 'Tamamlanan projeler görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/proje-tamamlanan.png',
        link: '/projelerimiz#tamamlanan',
      },
    ],
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
        imageSrc: '/images/raporlama-guvenlik-raporlari.png',
        link: '/raporlama#raporlar',
      },
      {
        title: 'Risk Yönetimi',
        description: 'Kapsamlı risk analizi ve tehdit değerlendirme çerçevesi',
        imageAlt: 'Risk yönetimi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/raporlama-risk-yonetimi.png',
        link: '/raporlama#risk',
      },
      {
        title: 'Vaka Yönetim Süreci',
        description: 'Hızlı müdahale ekibi ve alarm izleme merkezi süreçleri',
        imageAlt: 'Vaka yönetim süreci görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/raporlama-vaka-yonetimi.png',
        link: '/raporlama#vaka',
      },
      {
        title: 'Sürdürülebilirlik',
        description: 'Çevre bilinci ve sürdürülebilir güvenlik uygulamaları',
        imageAlt: 'Sürdürülebilirlik görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/raporlama-surdurulebilirlik.png',
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
        description: '10 uluslararası ISO standardı ile belgelenmiş kalite',
        imageAlt: 'ISO sertifikaları görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/sertifika-iso.png',
        link: '/sertifikalar#iso',
      },
      {
        title: 'ISPS Code Deneyimi',
        description: 'Liman tesisleri güvenliğinde RSO yetkisi ve deneyim',
        imageAlt: 'ISPS Code deneyimi görseli',
        imageWidth: 80,
        imageHeight: 52,
        imageSrc: '/images/sertifika-isps.png',
        link: '/sertifikalar#isps',
      },
    ],
  },
  {
    title: 'İletişim',
    path: '/iletisim',
  },
];
