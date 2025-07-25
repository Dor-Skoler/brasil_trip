export const travelData = {
  tabs: [
    { id: 'timeline', name: 'לוח זמנים', icon: 'fas fa-calendar-alt' },
    { id: 'map', name: 'מפה', icon: 'fas fa-map-marked-alt' },
    { id: 'flights', name: 'טיסות', icon: 'fas fa-plane' },
    { id: 'hotels', name: 'מלונות', icon: 'fas fa-hotel' },
    { id: 'transport', name: 'העברות', icon: 'fas fa-bus' },
    { id: 'activities', name: 'פעילויות', icon: 'fas fa-hiking' },
    { id: 'weather', name: 'מזג אוויר', icon: 'fas fa-cloud-sun' },
    { id: 'budget', name: 'תקציב', icon: 'fas fa-calculator' },
    { id: 'backup', name: 'תוכנית גיבוי', icon: 'fas fa-shield-alt' }
  ],

  timelineItems: [
    {
      id: 1,
      dates: '3-8 אוקטובר',
      location: 'ריו דה ז\'ניירו',
      description: 'הגעה, הסתגלות, אתרים עיקריים, חוף קופקבנה ואיפנמה'
    },
    {
      id: 2,
      dates: '9-12 אוקטובר',
      location: 'סאו פאולו/איטו',
      description: 'פסטיבל טומורולנד ברזיל'
    },
    {
      id: 3,
      dates: '13-16 אוקטובר',
      location: 'מורו דה סאו פאולו',
      description: 'חופים טרופיים, אומגה, שיט שקיעה'
    },
    {
      id: 4,
      dates: '17-21 אוקטובר',
      location: 'איטאקרה',
      description: 'יער אטלנטי, מפלים, גלישה, שוקולד'
    },
    {
      id: 5,
      dates: '22-28 אוקטובר',
      location: 'ג\'ריקואקוארה',
      description: 'דיונות, לגונות, גלישת רוח, שקיעות מדהימות'
    },
    {
      id: 6,
      dates: '29-31 אוקטובר',
      location: 'חזרה דרך ריו',
      description: 'יום גיבוי וטיסה לישראל'
    }
  ],

  locations: [
    {
      id: 'rio',
      name: 'ריו דה ז\'ניירו',
      lat: -22.9068,
      lng: -43.1729,
      dates: '3-8 אוקטובר',
      activities: 'פסל ישו, הר הסוכר, חופי קופקבנה ואיפנמה, סנטה תרזה',
      accommodation: 'Windsor California Copacabana, Arena Copacabana Hotel',
      links: [
        { name: 'מידע תיירותי רשמי', url: 'https://www.visit.rio' },
        { name: 'כרטיסים לאטרקציות', url: 'https://www.tremdocorcovado.rio' }
      ]
    },
    {
      id: 'sao-paulo',
      name: 'סאו פאולו/איטו',
      lat: -23.4253,
      lng: -47.3986,
      dates: '9-12 אוקטובר',
      activities: 'פסטיבל טומורולנד, מתחם גולף, עיר איטו ההיסטורית',
      accommodation: 'Novotel Itu Terras São José Golf & Resort, Gandini Hotel',
      links: [
        { name: 'טומורולנד ברזיל', url: 'https://www.tomorrowland.com/brasil' },
        { name: 'אתר עיר איטו', url: 'https://www.itu.sp.gov.br' }
      ]
    },
    {
      id: 'morro',
      name: 'מורו דה סאו פאולו',
      lat: -13.4294,
      lng: -38.9176,
      dates: '13-16 אוקטובר',
      activities: 'ארבעה חופים, אומגת טירולזה, שייט שקיעה, שנורקל',
      accommodation: 'Pousada Bahia Tambor, Villa dos Corais',
      links: [
        { name: 'מידע על האי', url: 'https://www.morrodesaopaulo.com.br' },
        { name: 'מעבורות למורו', url: 'https://www.catamaranmorro.com.br' }
      ]
    },
    {
      id: 'itacare',
      name: 'איטאקרה',
      lat: -14.2755,
      lng: -38.9967,
      dates: '17-21 אוקטובר',
      activities: 'טרק ארבעת החופים, מפלי טיג\'ויפי, גלישה, סיור שוקולד',
      accommodation: 'Aldeia do Mar Hotel, Terra Boa Hotel Boutique',
      links: [
        { name: 'מידע תיירותי איטאקרה', url: 'https://www.itacare.com.br' },
        { name: 'פעילויות ואקו-טיולים', url: 'https://www.itacareecoturismo.com.br' }
      ]
    },
    {
      id: 'jericoacoara',
      name: 'ג\'ריקואקוארה',
      lat: -2.7928,
      lng: -40.5186,
      dates: '22-28 אוקטובר',
      activities: 'דיונות ולגונות, גלישת רוח וקייט, שקיעות מדהימות, צפייה בכוכבים',
      accommodation: 'Hotel Villa Terra Viva, Villa Beija Flor, Pousada Chez Toi',
      links: [
        { name: 'מידע רשמי על ג\'רי', url: 'https://www.jericoacoara.com' },
        { name: 'סיורי באגי ופעילויות', url: 'https://www.jericoacoaratours.com' },
        { name: 'בית ספר לקייטסרפינג', url: 'https://www.jericoacoarakite.com' }
      ]
    }
  ],

  flights: {
    international: {
      route: 'תל אביב ↔ ריו דה ז\'ניירו (הלוך וחזור)',
      price: '£680-700 לאדם (כ-₪3,300)',
      duration: '17-20 שעות (עם עצירת ביניים)',
      notes: 'אין כיום טיסות ישירות',
      links: [
        { name: 'חיפוש טיסות בסקיי סקנר', url: 'https://www.skyscanner.com' }
      ]
    },
    domestic: [
      {
        date: '13 אוקטובר',
        route: 'סאו פאולו (GRU) → סלבדור (SSA)',
        price: '~$90 (כ-₪330)',
        duration: '2:20 שעות',
        airlines: 'GOL, LATAM, Azul',
        links: [
          { name: 'GOL Airlines', url: 'https://www.voegol.com.br' },
          { name: 'LATAM', url: 'https://www.latam.com' }
        ]
      },
      {
        date: '22 אוקטובר',
        route: 'איליאוס (IOS) → פורטלזה (FOR)',
        price: '~£114 (כ-$145)',
        duration: '4-5 שעות (עם קונקשן דרך סלבדור)',
        airlines: 'GOL, LATAM'
      },
      {
        date: '29 אוקטובר',
        route: 'פורטלזה (FOR) → ריו (GIG)',
        price: '~$111',
        duration: '3:20 שעות (טיסה ישירה)',
        airlines: 'GOL, LATAM'
      }
    ]
  },

  hotels: {
    rio: [
      {
        name: 'Windsor California Copacabana',
        rating: '8.9★',
        description: 'מול הים בקופקבנה, בריכת גג, נוף פנורמי',
        price: '~₪600 ללילה',
        link: 'https://www.booking.com/hotel/br/windsor-california.html'
      },
      {
        name: 'Arena Copacabana Hotel',
        rating: '8.5★',
        description: 'על טיילת קופקבנה, בריכת גג עם נוף לים',
        price: '~₪500 ללילה',
        link: 'https://www.booking.com/hotel/br/arena-copacabana.html'
      },
      {
        name: 'Sol Ipanema Hotel',
        rating: '8.5★',
        description: 'מול חוף איפנמה, בריכת גג ונוף לים',
        price: '~₪550 ללילה',
        link: 'https://www.booking.com/hotel/br/sol-ipanema.html'
      }
    ],
    saoPaulo: [
      {
        name: 'Novotel Itu Terras São José Golf & Resort',
        rating: '8.8★',
        description: 'מלון כפרי במתחם גולף, בריכות וספא',
        price: '~₪800 ללילה',
        link: 'https://www.booking.com/hotel/br/novotel-itu-terras-sao-jose-golf-resort.html'
      },
      {
        name: 'Gandini Hotel',
        rating: '8.3★',
        description: '1 ק"מ ממרכז איטו, בריכה וג\'קוזי',
        price: '~₪300 ללילה'
      }
    ]
  },

  budgetBreakdown: [
    {
      item: 'טיסות בינלאומיות',
      perPerson: 3300,
      perCouple: 6600,
      notes: 'הלוך וחזור עם עצירת ביניים'
    },
    {
      item: 'טיסות פנימיות',
      perPerson: 1200,
      perCouple: 2400,
      notes: '3 טיסות פנימיות'
    },
    {
      item: 'לינה (25 לילות)',
      perPerson: 6250,
      perCouple: 12500,
      notes: 'ממוצע ₪500 ללילה לזוג'
    },
    {
      item: 'תחבורה יבשתית/ימית',
      perPerson: 1200,
      perCouple: 2400,
      notes: 'כל ההעברות בין יעדים'
    },
    {
      item: 'אוכל ובילויים',
      perPerson: 3640,
      perCouple: 7280,
      notes: '$40 לאדם ליום (26 ימים)'
    },
    {
      item: 'פעילויות וסיורים',
      perPerson: 2600,
      perCouple: 5200,
      notes: '₪100 לאדם ליום בממוצע'
    }
  ]
} 