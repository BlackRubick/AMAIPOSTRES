const products = [
  {
    id: 'p1',
    name: '6 Roles de Canela con 2 Glaseados',
    description: 'Deliciosos roles de canela recién horneados con dos glaseados a elegir.',
    images: ['/6roles2.jpeg'],
    image: '/6roles2.jpeg',
    category: 'roles',
    glazeOptions: ['Chocolate','Nutella','Crema de maní','Mermelada (Fresa)','Mermelada (Piña)','Mermelada (Frutos rojos)','Mermelada (Durazno)','Mermelada (Mango)','Lechera','Cajeta','Dulce de Leche'],
    basePrice: 215,
    flavors: ['Original'],
    flavorPriceDelta: {},
    badge: 'Popular'
  },
  {
    id: 'p2',
    name: 'Mini Tarta de Manzana',
    description: 'Pequeñas tartas de manzana perfectas para cualquier ocasión.',
    images: ['/minitarta.jpeg'],
    image: '/minitarta.jpeg',
    category: 'tartas',
    basePrice: 20,
    flavors: ['Manzana'],
    flavorPriceDelta: {},
    badge: 'Mínimo 10 piezas'
  },
  {
    id: 'p3',
    name: 'Mini Roles (24 piezas)',
    description: 'Una charola completa con 24 mini roles suaves y deliciosos.',
    images: ['/miniroles24.jpeg'],
    image: '/miniroles24.jpeg',
    category: 'roles',
    basePrice: 415,
    flavors: ['Original'],
    flavorPriceDelta: {}
  },
  {
    id: 'p4',
    name: 'Tarta de Fresas',
    description: 'Tarta fresca con fresas naturales y crema deliciosa.',
    images: ['/tartafresas.jpeg'],
    image: '/tartafresas.jpeg',
    category: 'tartas',
    basePrice: 145,
    flavors: ['Fresa'],
    flavorPriceDelta: {},
    badge: 'Recomendado'
  },
  {
    id: 'p5',
    name: 'Caja de 6 Roles con Glaseado de Queso Crema',
    description: 'Roles con glaseado de queso crema. Otros glaseados disponibles con costo extra.',
    images: ['/caja6rolescrema1.jpeg','/caja6rolescrema2.jpeg','/caja6rolescrema3.jpeg'],
    image: '/caja6rolescrema1.jpeg',
    category: 'roles',
    glazeOptions: ['Queso crema','Chocolate','Nutella','Crema de maní','Mermelada (Fresa)','Mermelada (Piña)','Mermelada (Frutos rojos)','Mermelada (Durazno)','Mermelada (Mango)','Lechera','Cajeta','Dulce de Leche'],
    basePrice: 180,
    flavors: ['Queso Crema', 'Otros (costo extra)'],
    flavorPriceDelta: {}
  },
  {
    id: 'p6',
    name: 'Tarta de Manzana',
    description: 'Tarta clásica de manzana con masa crujiente y relleno jugoso.',
    images: ['/tartamanzana1.jpeg','/tartamanzana2.jpeg'],
    image: '/tartamanzana1.jpeg',
    category: 'tartas',
    basePrice: 110,
    flavors: ['Manzana'],
    flavorPriceDelta: {}
  },
  {
    id: 'p7',
    name: 'Caja de 6 Brownies con Cajeta',
    description: 'Brownies húmedos y chocolatosos cubiertos con cajeta.',
    image: '/cajabrownies6cajeta.jpeg',
    category: 'brownies',
    basePrice: 170,
    flavors: ['Cajeta'],
    flavorPriceDelta: {}
  },
  {
    id: 'p8',
    name: 'Charola de Brownies Decorados',
    description: 'Charola de brownies decorados, perfecta para compartir.',
    image: '/charolabroeniesdecorados.jpeg',
    category: 'brownies',
    basePrice: 250,
    flavors: ['Personalizable con costo extra'],
    flavorPriceDelta: {},
    badge: 'Nuevo'
  },
  {
    id: 'p9',
    name: 'Brownie Tipo Pastel con Glaseado',
    description: 'Brownie grande estilo pastel con delicioso glaseado encima.',
    image: '/browniepastel.jpeg',
    category: 'brownies',
    basePrice: 270,
    flavors: ['Con Glaseado'],
    flavorPriceDelta: {}
  },
  {
    id: 'p10',
    name: 'Pay de Queso',
    description: 'Clásico pay de queso cremoso con base crujiente.',
    image: '/payqueso1.jpeg',
    category: 'pays',
    basePrice: 170,
    flavors: ['Natural'],
    flavorPriceDelta: {}
  },
  {
    id: 'p11',
    name: 'Pay de Queso con Fresas y Crema Chantilly',
    description: 'Pay de queso decorado con fresas frescas y crema chantilly.',
    image: '/payquesofresa.jpeg',
    category: 'pays',
    basePrice: 230,
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
    basePrice: 270,
    flavors: ['Tortuga'],
    flavorPriceDelta: {}
  },
  {
    id: 'p13',
    name: 'Flan',
    description: 'Flan casero suave y cremoso con caramelo.',
    image: '/flan.jpeg',
    category: 'otros',
    basePrice: 220,
    flavors: ['Tradicional'],
    flavorPriceDelta: {}
  },
  {
    id: 'p14',
    name: 'Tarta de Berries',
    description: 'Tarta fresca con mezcla de berries y crema.',
    image: '/tartaberries.jpeg',
    category: 'tartas',
    basePrice: 165,
    flavors: ['Berries'],
    flavorPriceDelta: {},
    badge: 'Recomendado'
  },
  {
    id: 'p15',
    name: 'Carlota de Limón',
    description: 'Postre refrescante de limón con galletas María.',
    image: '/carlotalimon.jpeg',
    category: 'otros',
    basePrice: 170,
    flavors: ['Limón'],
    flavorPriceDelta: {}
  }

  ,{
    id: 'p16',
    name: 'Caja Roles 6 piezas (con glaseados y toppings)',
    description: 'Caja de 6 roles de canela. Incluye hasta 2 glaseados y toppings a elección (lista abajo).',
    images: ['/rolesnew1.jpeg'],
    image: '/rolesnew1.jpeg',
    category: 'roles',
    glazeOptions: ['Chocolate','Nutella','Crema de maní','Mermelada (Fresa)','Mermelada (Piña)','Mermelada (Frutos rojos)','Mermelada (Durazno)','Mermelada (Mango)','Lechera','Cajeta','Dulce de Leche'],
    glazeOptions: ['Nuez','Fresas','Arándanos','Duraznos','Uvas','M&M','Snickers','Kisses','Chispas de chocolate','Galletas Oreo','Ferrero','KitKat','Almendras','Mazapán'],
    basePrice: 350,
    flavors: ['Original'],
    flavorPriceDelta: {},
    badge: 'Nuevo'
  },

  {
    id: 'p17',
    name: 'Roles Gourmet (6 piezas)',
    description: 'Caja gourmet de 6 roles con rellenos y sabores especiales. Incluye hasta 2 glaseados y toppings; opción de relleno gourmet disponible.',
    images: ['/rolesnew2.jpeg','/rolesnew1.jpeg'],
    image: '/rolesnew2.jpeg',
    category: 'roles',
    glazeOptions: ['Chocolate','Nutella','Crema de maní','Mermelada (Fresa)','Mermelada (Piña)','Mermelada (Frutos rojos)','Mermelada (Durazno)','Mermelada (Mango)','Lechera','Cajeta','Dulce de Leche'],
    glazeOptions: ['Nuez','Fresas','Arándanos','Duraznos','Uvas','M&M','Snickers','Kisses','Chispas de chocolate','Galletas Oreo','Ferrero','KitKat','Almendras','Mazapán'],
    basePrice: 400,
    flavors: ['Gourmet'],
    flavorPriceDelta: {},
    badge: 'Gourmet'
  }
]

export default products