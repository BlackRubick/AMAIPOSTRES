const products = [
  {
    id: 'p1',
    name: 'Caja de 2 Roles Clásicos',
    description: 'Roles de canela con glaseado de queso crema.',
    images: ['/caja2roles.jpeg'],
    image: '/caja2roles.jpeg',
    category: 'roles-clasicos',
    basePrice: 70,
    flavors: ['Queso crema'],
    flavorPriceDelta: {},
    badge: 'Clásico'
  },
  {
    id: 'p2',
    name: 'Mini Tartas de 8 Cm',
    description: 'Pequeñas tartas de manzana perfectas para cualquier ocasión.',
    images: ['/minitarta.jpeg'],
    image: '/minitarta.jpeg',
    category: 'tartas',
    basePrice: 30,
    flavors: ['Manzana'],
    flavorPriceDelta: {},
    badge: 'Mínimo 10 piezas'
  },
  {
    id: 'p3',
    name: 'Caja de 4 Roles Clásicos',
    description: 'Roles de canela con glaseado de queso crema.',
    images: ['/caja4roles.jpeg'],
    image: '/caja4roles.jpeg',
    category: 'roles-clasicos',
    basePrice: 140,
    flavors: ['Queso crema'],
    flavorPriceDelta: {}
  },

  {
    id: 'p5',
    name: 'Caja de 6 Roles Clásicos',
    description: 'Roles de canela con glaseado de queso crema.',
    images: ['/caja6roles.jpeg'],
    image: '/caja6roles.jpeg',
    category: 'roles-clasicos',
    basePrice: 180,
    flavors: ['Queso crema'],
    flavorPriceDelta: {}
  },
  {
    id: 'p6',
    name: 'Tarta de Manzana de 22 Cm',
    description: 'Tarta clásica de manzana con masa crujiente y relleno jugoso.',
    images: ['/tartamanzana1.jpeg','/tartamanzana2.jpeg'],
    image: '/tartamanzana1.jpeg',
    category: 'tartas',
    basePrice: 150,
    flavors: ['Manzana'],
    flavorPriceDelta: {}
  },
    {
    id: 'p18',
    name: 'Tarta de Manzana de 26 Cm',
    description: 'Tarta clásica de manzana con masa crujiente y relleno jugoso.',
    images: ['/tartamanzana1.jpeg','/tartamanzana2.jpeg'],
    image: '/tartamanzana1.jpeg',
    category: 'tartas',
    basePrice: 210,
    flavors: ['Manzana'],
    flavorPriceDelta: {}
  },
      {
    id: 'p19',
    name: 'Tarta de Manzana de 28 Cm',
    description: 'Tarta clásica de manzana con masa crujiente y relleno jugoso.',
    images: ['/tartamanzana1.jpeg','/tartamanzana2.jpeg'],
    image: '/tartamanzana1.jpeg',
    category: 'tartas',
    basePrice: 280,
    flavors: ['Manzana'],
    flavorPriceDelta: {}
  },
  {
    id: 'p7',
    name: 'Caja de 4 Brownies Sencillos (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella.',
    image: '/cajabrownies4.jpeg',
    category: 'brownies-sencillos',
    basePrice: 90,
    flavors: ['Chocolate'],
    flavorPriceDelta: {}
  },
  {
    id: 'p8',
    name: 'Caja de 6 Brownies Sencillos (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella.',
    image: '/caja6brownies.jpeg',
    category: 'brownies-sencillos',
    basePrice: 130,
    flavors: ['Chocolate'],
    flavorPriceDelta: {}
  },
  {
    id: 'p9',
    name: 'Caja de 10 Brownies Sencillos (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella.',
    image: '/caja10browies.jpeg',
    category: 'brownies-sencillos',
    basePrice: 210,
    flavors: ['Chocolate'],
    flavorPriceDelta: {}
  },
  {
    id: 'p21',
    name: 'Caja de 4 Brownies Sencillos (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella.',
    image: '/cajabrownies4.jpeg',
    category: 'brownies-sencillos',
    basePrice: 110,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {}
  },
  {
    id: 'p22',
    name: 'Caja de 6 Brownies Sencillos (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella.',
    image: '/caja6brownies.jpeg',
    category: 'brownies-sencillos',
    basePrice: 160,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {}
  },
  {
    id: 'p23',
    name: 'Caja de 10 Brownies Sencillos (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella.',
    image: '/caja10browies.jpeg',
    category: 'brownies-sencillos',
    basePrice: 260,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {}
  },
  {
    id: 'p24',
    name: 'Caja de 4 Brownies Gourmet (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/charolabroeniesdecorados.jpeg',
    category: 'brownies-gourmet',
    basePrice: 120,
    flavors: ['Chocolate'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p25',
    name: 'Caja de 6 Brownies Gourmet (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/gour6pz.jpeg',
    category: 'brownies-gourmet',
    basePrice: 170,
    flavors: ['Chocolate'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p26',
    name: 'Caja de 10 Brownies Gourmet (Chocolate)',
    description: 'Brownies de chocolate con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/gourmet10.jpeg',
    category: 'brownies-gourmet',
    basePrice: 280,
    flavors: ['Chocolate'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p27',
    name: 'Caja de 4 Brownies Gourmet (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/charolabroeniesdecorados.jpeg',
    category: 'brownies-gourmet',
    basePrice: 140,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p28',
    name: 'Caja de 6 Brownies Gourmet (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/gour6pz.jpeg',
    category: 'brownies-gourmet',
    basePrice: 200,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p29',
    name: 'Caja de 10 Brownies Gourmet (Chocolate Blanco)',
    description: 'Brownies de chocolate blanco con glaseado de nutella o cajeta y toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    image: '/gourmet10.jpeg',
    category: 'brownies-gourmet',
    basePrice: 320,
    flavors: ['Chocolate blanco'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },
  {
    id: 'p10',
    name: 'Pay de Queso',
    description: 'Clásico pay de queso cremoso con base crujiente.',
    image: '/payqueso2.jpeg',
    category: 'pays',
    basePrice: 220,
    flavors: ['Natural'],
    flavorPriceDelta: {}
  },
  {
    id: 'p11',
    name: 'Pay de Queso con Fresas y Crema Chantilly',
    description: 'Pay de queso decorado con fresas frescas y crema chantilly.',
    image: '/payquesofresa.jpeg',
    category: 'pays',
    basePrice: 280,
    flavors: ['Fresas y Chantilly'],
    flavorPriceDelta: {},
    badge: 'Popular'
  },
  {
    id: 'p12',
    name: 'Pay de Queso Tipo Tortuga',
    description: 'Pay de queso con caramelo, nueces y chocolate, estilo tortuga.',
    image: '/paytortuga1.jpeg',
    category: 'pays',
    basePrice: 300,
    flavors: ['Tortuga'],
    flavorPriceDelta: {}
  },
  {
    id: 'p13',
    name: 'Flan',
    description: 'Flan casero suave y cremoso con caramelo.',
    image: '/flanwe.jpeg',
    category: 'otros',
    basePrice: 220,
    flavors: ['Tradicional'],
    flavorPriceDelta: {}
  },


  {
    id: 'p30',
    name: 'Rosca de Reyes Envinada (Chica 24 cm)',
    description: 'Rosca de Reyes envinada. 4 muñequitos. Aparta con el 50% del pago.',
    image: '/rosca.jpeg',
    category: 'roscas',
    basePrice: 200,
    flavors: ['Envinada'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },
  {
    id: 'p31',
    name: 'Rosca de Reyes Envinada (Mediana 26 cm)',
    description: 'Rosca de Reyes envinada. 6 muñequitos.  Aparta con el 50% del pago.',
    image: '/roscaM.jpeg',
    category: 'roscas',
    basePrice: 260,
    flavors: ['Envinada'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },
  {
    id: 'p32',
    name: 'Rosca de Reyes Envinada (Grande 28 cm)',
    description: 'Rosca de Reyes envinada. 8 muñequitos.  Aparta con el 50% del pago.',
    image: '/roscaG.jpeg',
    category: 'roscas',
    basePrice: 350,
    flavors: ['Envinada'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },
  {
    id: 'p33',
    name: 'Rosca de Reyes Tres Leches (Chica 24 cm)',
    description: 'Rosca de Reyes de tres leches. 4 muñequitos. Aparta con el 50% del pago.',
    image: '/rosca.jpeg',
    category: 'roscas',
    basePrice: 250,
    flavors: ['Tres leches'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },
  {
    id: 'p34',
    name: 'Rosca de Reyes Tres Leches (Mediana 26 cm)',
    description: 'Rosca de Reyes de tres leches. 6 muñequitos. Aparta con el 50% del pago.',
    image: '/roscaM.jpeg',
    category: 'roscas',
    basePrice: 300,
    flavors: ['Tres leches'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },
  {
    id: 'p35',
    name: 'Rosca de Reyes Tres Leches (Grande 28 cm)',
    description: 'Rosca de Reyes de tres leches. 8 muñequitos.  Aparta con el 50% del pago.',
    image: '/roscaG.jpeg',
    category: 'roscas',
    basePrice: 380,
    flavors: ['Tres leches'],
    flavorPriceDelta: {},
    badge: 'Bajo pedido'
  },


  ,{
    id: 'p16',
    name: 'Caja de 2 Roles Gourmet',
    description: 'Roles de canela con glaseado de queso crema y segundo glaseado de nutella o cajeta, con toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    images: ['/rolesgourmet22.jpeg'],
    image: '/rolesgourmet22.jpeg',
    category: 'roles-gourmet',
    glazeOptions: ['Mazapán','Ferreros','Carlos V','Chocolate bon o bon','Oreo','Fresas','Duraznos','Kiwi'],
    basePrice: 100,
    flavors: ['Gourmet'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  },

  {
    id: 'p17',
    name: 'Caja de 4 Roles Gourmet',
    description: 'Roles de canela con glaseado de queso crema y segundo glaseado de nutella o cajeta, con toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    images: ['/rolesgourmet4.jpeg'],
    image: '/rolesgourmet4.jpeg',
    category: 'roles-gourmet',
    glazeOptions: ['Mazapán','Ferreros','Carlos V','Chocolate bon o bon','Oreo','Fresas','Duraznos','Kiwi'],
    basePrice: 180,
    flavors: ['Gourmet'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  }
  ,  {
    id: 'p20',
    name: 'Caja de 6 Roles Gourmet',
    description: 'Roles de canela con glaseado de queso crema y segundo glaseado de nutella o cajeta, con toppings de: Mazapán, Ferreros, Carlos V, Chocolate bon o bon, Oreo, Fresas, Duraznos, Kiwi.',
    images: ['/rolesgourmet6.jpeg'],
    image: '/rolesgourmet6.jpeg',
    category: 'roles-gourmet',
    glazeOptions: ['Mazapán','Ferreros','Carlos V','Chocolate bon o bon','Oreo','Fresas','Duraznos','Kiwi'],
    basePrice: 260,
    flavors: ['Gourmet'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  }
]

export default products