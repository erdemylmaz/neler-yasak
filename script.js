class App {
  citys = [
    // Marmara
    {
      name: 'Edirne',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Kirklareli',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Tekirdag',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Istanbul',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Kocaeli',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Yalova',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Sakarya',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Bilecik',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Bursa',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Balikesir',
      area: 'Marmara',
      riskLevel: '',
    },
    {
      name: 'Canakkale',
      area: 'Marmara',
      riskLevel: '',
    },
    // Ege
    {
      name: 'Izmir',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Manisa',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Aydin',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Denizli',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Kutahya',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Afyonkarahisar',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Usak',
      area: 'Ege',
      riskLevel: '',
    },
    {
      name: 'Mugla',
      area: 'Ege',
      riskLevel: '',
    },
    // Akdeniz
    {
      name: 'Adana',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Antalya',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Burdur',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Hatay',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Isparta',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Mersin',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Osmaniye',
      area: 'Akdeniz',
      riskLevel: '',
    },
    {
      name: 'Kahraman Maras',
      area: 'Akdeniz',
      riskLevel: '',
    },
    // Karadeniz
    {
      name: 'Karabuk',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Amasya',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Artvin',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Bartin',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Bayburt',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Bolu',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Duzce',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Gumushane',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Samsun',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Trabzon',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Sinop',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Zonguldak',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Tokat',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Rize',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Ordu',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Corum',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Kastamonu',
      area: 'Karadeniz',
      riskLevel: '',
    },
    {
      name: 'Giresun',
      area: 'Karadeniz',
      riskLevel: '',
    },
    // Ic Anadolu
    {
      name: 'Ankara',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Konya',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Kayseri',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Eskisehir',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Sivas',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Kirikkale',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Aksaray',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Karaman',
      area: 'Ic Anadolu',
      riskLevel: '',
    },

    {
      name: 'Kirsehir',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Nigde',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Nevsehir',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Yozgat',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    {
      name: 'Cankiri',
      area: 'Ic Anadolu',
      riskLevel: '',
    },
    // Dogu Anadolu
    {
      name: 'Agri',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Ardahan',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Bitlis',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Bingol',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Elazig',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Erzincan',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Erzurum',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Hakkari',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Igdir',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Kars',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Malatya',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Mus',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Tunceli',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Van',
      area: 'Dogu Anadolu',
      riskLevel: '',
    },
    //Guneydogu Anaolu
    {
      name: 'Gaziantep',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Diyarbakir',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Sanliurfa',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Batman',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Adiyaman',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Siirt',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Mardin',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Kilis',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
    {
      name: 'Sirnak',
      area: 'Guneydogu Anadolu',
      riskLevel: '',
    },
  ];
}

const app = new App();

console.log('Hello World!');
