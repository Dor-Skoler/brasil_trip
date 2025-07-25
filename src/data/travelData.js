export const travelData = {
  tabs: [
    { id: 'timeline', name: 'לוח זמנים', icon: 'fas fa-calendar-alt' },
    { id: 'map', name: 'מפה', icon: 'fas fa-map-marked-alt' },
    { id: 'flights', name: 'טיסות', icon: 'fas fa-plane' },
    { id: 'hotels', name: 'מלונות', icon: 'fas fa-hotel' },
    { id: 'transport', name: 'העברות', icon: 'fas fa-bus' },
    { id: 'weather', name: 'מזג אוויר', icon: 'fas fa-cloud-sun' },
    { id: 'budget', name: 'תקציב', icon: 'fas fa-calculator' },
    { id: 'backup', name: 'תוכנית גיבוי', icon: 'fas fa-shield-alt' }
  ],

  timelineItems: [
    {
      id: 1,
      dates: '3-8 אוקטובר',
      location: 'ריו דה ז\'ניירו',
      description: 'הגעה, הסתגלות, אתרים עיקריים, חוף קופקבנה ואיפנמה',
      icon: 'fas fa-mountain',
      color: '#e74c3c',
      activities: [
        {
          name: 'עלייה לפסל ישו המושיע (Cristo Redentor)',
          description: 'רכבל או רכבת לפסל הידוע בעולם',
          duration: '3-4 שעות',
          price: '~R$70 (₪135)',
          urls: [
            { name: 'הזמנת כרטיסים', url: 'https://www.tremdocorcovado.rio' },
            { name: 'מידע רשמי', url: 'https://www.cristoredentoroficial.com.br' }
          ]
        },
        {
          name: 'טיול להר הסוכר (Pão de Açúcar)',
          description: 'רכבל עם נוף מדהים על ריו',
          duration: '2-3 שעות',
          price: '~R$120 (₪230)',
          urls: [
            { name: 'אתר רשמי', url: 'https://www.bondinho.com.br' },
            { name: 'הזמנה מקוונת', url: 'https://www.sugarloaf.com.br' }
          ]
        },
        {
          name: 'חופי קופקבנה ואיפנמה',
          description: 'שיזוף, שחייה, ואוכל רחוב',
          duration: 'יום שלם',
          price: 'חינם',
          urls: [
            { name: 'מדריך חופי ריו', url: 'https://www.visit.rio/que_fazer/praias' },
            { name: 'פעילויות בחוף', url: 'https://www.riodejaneiro.com/beaches' }
          ]
        },
        {
          name: 'שכונת סנטה תרזה',
          description: 'אמנות רחוב וקפה ברזילאי אותנטי',
          duration: '4-5 שעות',
          price: '~R$50 (₪95)',
          urls: [
            { name: 'מדריך השכונה', url: 'https://www.santateresa-rio.com' },
            { name: 'סיורים מודרכים', url: 'https://www.viator.com/tours/Rio-de-Janeiro' }
          ]
        },
        {
          name: 'מדרגות סלרון (Escadaria Selarón)',
          description: 'מדרגות צבעוניות מפורסמות',
          duration: '1-2 שעות',
          price: 'חינם',
          urls: [
            { name: 'מידע על האמן', url: 'https://www.escadariaselaron.com' }
          ]
        },
        {
          name: 'אצטדיון מרקנה',
          description: 'סיור במקדש הכדורגל הברזילאי',
          duration: '2-3 שעות',
          price: '~R$60 (₪115)',
          urls: [
            { name: 'הזמנת סיורים', url: 'https://www.maracana.com.br' },
            { name: 'כרטיסים למשחקים', url: 'https://www.ingressos.com' }
          ]
        }
      ]
    },
    {
      id: 2,
      dates: '9-12 אוקטובר',
      location: 'סאו פאולו/איטו',
      description: 'פסטיבל טומורולנד ברזיל',
      icon: 'fas fa-music',
      color: '#9b59b6',
      activities: [
        {
          name: 'פסטיבל טומורולנד ברזיל',
          description: '3 ימים של מוזיקה אלקטרונית עולמית',
          duration: '3 ימים',
          price: '$200-400 (₪750-1500)',
          urls: [
            { name: 'אתר רשמי', url: 'https://www.tomorrowland.com/brasil' },
            { name: 'כרטיסים', url: 'https://www.tomorrowland.com/brasil/tickets' }
          ]
        },
        {
          name: 'מתחם הגולף',
          description: 'פעילויות ספורט ונופי טבע',
          duration: 'יום שלם',
          price: '~R$200 (₪380)',
          urls: [
            { name: 'מתחם הגולף', url: 'https://www.terrassaojose.com.br' }
          ]
        },
        {
          name: 'עיר איטו ההיסטורית',
          description: 'ארכיטקטורה קולוניאלית וטיול רגלי',
          duration: '4-6 שעות',
          price: '~R$30 (₪60)',
          urls: [
            { name: 'מידע תיירותי איטו', url: 'https://www.itu.sp.gov.br/turismo' },
            { name: 'מוזיאון הרפובליקה', url: 'https://www.museurepublica.museus.gov.br' }
          ]
        }
      ]
    },
    {
      id: 3,
      dates: '13-16 אוקטובר',
      location: 'מורו דה סאו פאולו',
      description: 'חופים טרופיים, אומגה, שיט שקיעה',
      icon: 'fas fa-umbrella-beach',
      color: '#3498db',
      activities: [
        {
          name: '4 החופים המפורסמים',
          description: 'כל חוף עם אופי שונה ופעילויות מגוונות',
          duration: 'יום שלם',
          price: 'חינם',
          urls: [
            { name: 'מדריך החופים', url: 'https://www.morrodesaopaulo.com.br/praias' }
          ]
        },
        {
          name: 'אומגת טירולזה מעל הים',
          description: 'אדרנלין עם נוף מדהים',
          duration: '2-3 שעות',
          price: '~R$80 (₪150)',
          urls: [
            { name: 'הזמנת פעילות', url: 'https://www.morrodesaopaulo.com.br/tirolesa' }
          ]
        },
        {
          name: 'שייט שקיעה עם קפיריניה',
          description: 'רומנטי ומרגיע עם משקאות',
          duration: '3-4 שעות',
          price: '~R$120 (₪230)',
          urls: [
            { name: 'הזמנת שייט', url: 'https://www.catamaranmorro.com.br' }
          ]
        },
        {
          name: 'שנורקל בשוניות האלמוגים',
          description: 'חיי ים עשירים ומים צלולים',
          duration: '3-4 שעות',
          price: '~R$60 (₪115)',
          urls: [
            { name: 'סיורי שנורקל', url: 'https://www.morrodesaopaulo.com.br/mergulho' }
          ]
        }
      ]
    },
    {
      id: 4,
      dates: '17-21 אוקטובר',
      location: 'איטאקרה',
      description: 'יער אטלנטי, מפלים, גלישה, שוקולד',
      icon: 'fas fa-tree',
      color: '#27ae60',
      activities: [
        {
          name: 'טרק 4 החופים',
          description: 'הליכה בין חופים דרך יער גשם אטלנטי',
          duration: '6-8 שעות',
          price: '~R$80 (₪150)',
          urls: [
            { name: 'מדריכי טיולים', url: 'https://www.itacareecoturismo.com.br' }
          ]
        },
        {
          name: 'מפלי טיג\'ויפי',
          description: 'בריכות טבעיות וקפיצות למים',
          duration: '4-5 שעות',
          price: '~R$50 (₪95)',
          urls: [
            { name: 'מידע על המפלים', url: 'https://www.itacare.com.br/cachoeiras' }
          ]
        },
        {
          name: 'שיעורי גלישה',
          description: 'גלים מושלמים למתחילים',
          duration: '2-3 שעות',
          price: '~R$100 (₪190)',
          urls: [
            { name: 'בית ספר לגלישה', url: 'https://www.itacaresurfschool.com' }
          ]
        },
        {
          name: 'סיור מטעי שוקולד',
          description: 'מהזרע ועד הטבלה - חוויה מתוקה',
          duration: '3-4 שעות',
          price: '~R$70 (₪135)',
          urls: [
            { name: 'מטעי שוקולד', url: 'https://www.fazendachocolate.com.br' }
          ]
        },
        {
          name: 'טיול קיאקים בנהרות',
          description: 'דרך מנגרובים וחיות בר',
          duration: '4-5 שעות',
          price: '~R$90 (₪170)',
          urls: [
            { name: 'השכרת קיאקים', url: 'https://www.itacarekayak.com' }
          ]
        }
      ]
    },
    {
      id: 5,
      dates: '22-28 אוקטובר',
      location: 'ג\'ריקואקוארה',
      description: 'דיונות, לגונות, גלישת רוח, שקיעות מדהימות',
      icon: 'fas fa-wind',
      color: '#f39c12',
      activities: [
        {
          name: 'דיונת השקיעה',
          description: 'מקום הטוב ביותר לשקיעות בעולם',
          duration: '2-3 שעות',
          price: 'חינם',
          urls: [
            { name: 'מדריך לדיונות', url: 'https://www.jericoacoara.com/dunas' }
          ]
        },
        {
          name: 'לגונת פרדיסו',
          description: 'מים טורקיז וערסלים במים',
          duration: 'יום שלם',
          price: '~R$100 (₪190)',
          urls: [
            { name: 'סיורים ללגונות', url: 'https://www.jericoacoaratours.com' }
          ]
        },
        {
          name: 'גלישת רוח וקייטסרפינג',
          description: 'רוחות קבועות ומושלמות',
          duration: '3-4 שעות',
          price: '~R$150 (₪285)',
          urls: [
            { name: 'בית ספר לקייט', url: 'https://www.jericoacoarakite.com' },
            { name: 'גלישת רוח', url: 'https://www.windsurfjeri.com' }
          ]
        },
        {
          name: 'טיול באגי לדיונת טטאז\'ובה',
          description: 'הרפתקה במדבר החולי',
          duration: '6-8 שעות',
          price: '~R$200 (₪380)',
          urls: [
            { name: 'סיורי באגי', url: 'https://www.jericoacoarabuggy.com' }
          ]
        },
        {
          name: 'לגונת אזול',
          description: 'מים כחולים קריסטליים',
          duration: '4-5 שעות',
          price: '~R$80 (₪150)',
          urls: [
            { name: 'מידע על הלגונה', url: 'https://www.jericoacoara.com/lagoa-azul' }
          ]
        },
        {
          name: 'רכיבה על סוסים בחוף',
          description: 'בזמן שקיעה - חוויה רומנטית',
          duration: '2-3 שעות',
          price: '~R$120 (₪230)',
          urls: [
            { name: 'רכיבה על סוסים', url: 'https://www.jericoacoarahorses.com' }
          ]
        },
        {
          name: 'צפייה בכוכבים',
          description: 'שמיים צלולים ללא זיהום אור',
          duration: '2-3 שעות',
          price: '~R$40 (₪75)',
          urls: [
            { name: 'סיורי כוכבים', url: 'https://www.jericoacoarastars.com' }
          ]
        }
      ]
    },
    {
      id: 6,
      dates: '29-31 אוקטובר',
      location: 'חזרה דרך ריו',
      description: 'יום גיבוי וטיסה לישראל',
      icon: 'fas fa-plane-departure',
      color: '#95a5a6',
      activities: [
        {
          name: 'קניות לזכרונות',
          description: 'שוק היפי באיפנמה ורחוב סאו קלמנטה',
          duration: '3-4 שעות',
          price: '~R$200 (₪380)',
          urls: [
            { name: 'שוק איפנמה', url: 'https://www.feiradeipanema.com' }
          ]
        },
        {
          name: 'ביקור אחרון בחוף',
          description: 'רגיעה לפני הטיסה',
          duration: '2-3 שעות',
          price: 'חינם',
          urls: []
        }
      ]
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