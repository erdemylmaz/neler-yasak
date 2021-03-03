const groups = document.querySelectorAll('optgroup');
const output = document.querySelector('.output');

class App {
  citys = [
    // Marmara
    {
      name: 'Edirne',
      area: 'Marmara',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Kirklareli',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Tekirdag',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Istanbul',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Kocaeli',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Yalova',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Sakarya',
      area: 'Marmara',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Bilecik',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Bursa',
      area: 'Marmara',
      riskLevel: 'Orta',
    },
    {
      name: 'Balikesir',
      area: 'Marmara',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Canakkale',
      area: 'Marmara',
      riskLevel: 'Yuksek',
    },
    // Ege
    {
      name: 'Izmir',
      area: 'Ege',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Manisa',
      area: 'Ege',
      riskLevel: 'Orta',
    },
    {
      name: 'Aydin',
      area: 'Ege',
      riskLevel: 'Orta',
    },
    {
      name: 'Denizli',
      area: 'Ege',
      riskLevel: 'Orta',
    },
    {
      name: 'Kutahya',
      area: 'Ege',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Afyon',
      area: 'Ege',
      riskLevel: 'Orta',
    },
    {
      name: 'Usak',
      area: 'Ege',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Mugla',
      area: 'Ege',
      riskLevel: 'Yuksek',
    },
    // Akdeniz
    {
      name: 'Adana',
      area: 'Akdeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Antalya',
      area: 'Akdeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Burdur',
      area: 'Akdeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Hatay',
      area: 'Akdeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Isparta',
      area: 'Akdeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Mersin',
      area: 'Akdeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Osmaniye',
      area: 'Akdeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Kahramanmaras',
      area: 'Akdeniz',
      riskLevel: 'Orta',
    },
    // Karadeniz
    {
      name: 'Karabuk',
      area: 'Karadeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Amasya',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Artvin',
      area: 'Karadeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Bartin',
      area: 'Karadeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Bayburt',
      area: 'Karadeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Bolu',
      area: 'Karadeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Duzce',
      area: 'Karadeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Gumushane',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Samsun',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Trabzon',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Sinop',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Zonguldak',
      area: 'Karadeniz',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Tokat',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Rize',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Ordu',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Corum',
      area: 'Karadeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Kastamonu',
      area: 'Karadeniz',
      riskLevel: 'Orta',
    },
    {
      name: 'Giresun',
      area: 'Karadeniz',
      riskLevel: 'Cok Yuksek',
    },
    // Ic Anadolu
    {
      name: 'Ankara',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Konya',
      area: 'Ic Anadolu',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Kayseri',
      area: 'Ic Anadolu',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Eskisehir',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Sivas',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Kirikkale',
      area: 'Ic Anadolu',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Aksaray',
      area: 'Ic Anadolu',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Karaman',
      area: 'Ic Anadolu',
      riskLevel: 'Yuksek',
    },

    {
      name: 'Kirsehir',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Nigde',
      area: 'Ic Anadolu',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Nevsehir',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Yozgat',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Cankiri',
      area: 'Ic Anadolu',
      riskLevel: 'Orta',
    },
    // Dogu Anadolu
    {
      name: 'Agri',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Ardahan',
      area: 'Dogu Anadolu',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Bitlis',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Bingol',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Elazig',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Erzincan',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Erzurum',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Hakkari',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Igdir',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Kars',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Malatya',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Mus',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Tunceli',
      area: 'Dogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Van',
      area: 'Dogu Anadolu',
      riskLevel: 'Dusuk',
    },
    //Guneydogu Anaolu
    {
      name: 'Gaziantep',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Orta',
    },
    {
      name: 'Diyarbakir',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Sanliurfa',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Batman',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Adiyaman',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Cok Yuksek',
    },
    {
      name: 'Siirt',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Mardin',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
    {
      name: 'Kilis',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Yuksek',
    },
    {
      name: 'Sirnak',
      area: 'Guneydogu Anadolu',
      riskLevel: 'Dusuk',
    },
  ];
}

const app = new App();

list = (risk) => {
  if(risk == 'Dusuk') {
    return `burasi ${risk} riskli`;
  } else if(risk == 'Orta') {
    return `burasi ${risk} riskli`;
  } else if(risk == 'Yuksek') {
    return `burasi ${risk} riskli`;
  } else if(risk == 'Cok Yuksek') {
    return `burasi ${risk} riskli`;
  }
}

app.citys.map((city) => {
  for(let x = 0; x < groups.length; x++) {
    if(groups[x].label == city.area) {
      let option = document.createElement('option');
      option.innerHTML = `${city.name}`;

      groups[x].appendChild(option);

      options = document.querySelectorAll('option');

      show = (e) => {
        let $clicked = e.target.textContent;

        if($clicked == city.name) {
          output.innerHTML = `${list(city.riskLevel)}`;
        }
      }

      options.forEach((option) => {
        option.addEventListener('click', show)
      })

    }
  }
});
