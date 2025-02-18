export const mediaLogos = [
  'duna',
  'emol',
  'la-tercera',
  'chocale',
  'biobio',
  'valparaiso',
  '24-horas',
  'el-sur',
  'el-dia',
  'la-clave',
  'df',
  'el-mercurio',
  'adn',
];

export const regions = [
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  'Región Metropolitana de Santiago',
  'Libertador General Bernardo O’Higgins',
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén del General Carlos Ibáñez del Campo',
  'Magallanes y la Antártica Chilena',
];

export const business = [
  'Construcción',
  'Climatización',
  'Minería',
  'Transporte',
  'Telecomunicaciones',
  'Servicios transitorios',
  'Servicios de vigilancia',
  'Aseo industrial',
  'Industria de la salud',
  'Textil',
  'Mantenimiento industrial',
  'Otro',
];

export const memorial = [
  {
    year: '2023',
    url: '/memorias_fichas/2023_memoria.pdf',
  },
  {
    year: '2023 Estado Financiero',
    url: '/memorias_fichas/2023_estado_financiero.pdf',
  },
  {
    year: '2022',
    url: '/memorias_fichas/memoria-2022.pdf',
  },
  {
    year: '2021',
    url: '/memorias_fichas/2021_asdfqwer.pdf',
  },
  {
    year: '2020',
    url: '/memorias_fichas/2020_nMe3h.pdf',
  },
  {
    year: '2019',
    url: '/memorias_fichas/2019_qylwK.pdf',
  },
  {
    year: '2018',
    url: '/memorias_fichas/2018_9RhLS.pdf',
  },
  {
    year: '2017',
    url: '/memorias_fichas/2017_6cnGO.pdf',
  },
  {
    year: '2016',
    url: '/memorias_fichas/2016_drVaK.pdf',
  },
  {
    year: '2015',
    url: '/memorias_fichas/2015_4s4Ft.pdf',
  },
  {
    year: '2014',
    url: '/memorias_fichas/2014_ycsFj.pdf',
  },
  {
    year: '2013',
    url: '/memorias_fichas/2013_bNa0L.pdf',
  },
  {
    year: '2012',
    url: '/memorias_fichas/2012_tjmj2.pdf',
  },
  {
    year: '2011',
    url: '/memorias_fichas/2011_P3I8Y.pdf',
  },
  {
    year: '2010',
    url: '/memorias_fichas/2010_bLG8o.pdf',
  },
  {
    year: '2009',
    url: '/memorias_fichas/2009_Iu7Cq.pdf',
  },
  {
    year: '2008 complemento',
    url: '/memorias_fichas/complementario-2008_z2qcG.pdf',
  },
  {
    year: '2008',
    url: '/memorias_fichas/2019_qylwK.pdf',
  },
  {
    year: '2007',
    url: '/memorias_fichas/2007_422ta.pdf',
  },
];

export const navItems = [
  {
    label: 'Inicio',
    path: '/',
    children: false,
  },
  {
    label: 'CFC',
    path: '/cfc',
    children: false,
  },
  {
    label: 'Factoring',
    path: '/servicios/factoring',
    children: false,
  },
  {
    label: 'Servicios',
    path: '/servicios',
    children: [
      {
        label: 'Factoring',
        path: '/servicios/factoring',
        text: 'Obtén liquidez inmediata cediéndonos tus facturas.',
        subnav: [
          {
            label: 'Factoring web',
            path: '/servicios/factoring-web',
            text: 'Cede todas tus facturas en solo 3 clics.',
          },
        ],
      },
      {
        label: 'Leasing',
        path: '/servicios/leasing',
        text: 'Arrienda un bien de capital con opción a compra.',
      },
      {
        label: 'Leaseback',
        path: '/servicios/leaseback',
        text: 'Usa tu bien inmueble para obtener liquidez.',
      },
    ],
  },
  {
    label: 'Prensa',
    path: '/prensa',
    children: false,
  },
  {
    label: 'Contacto',
    path: '/contacto',
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: false,
  cssEase: 'cubic-bezier(.8,0,0.5,1)',
  lazyLoad: 'progressive',
  appendDots: (dots) => (
    <div className="cfc-dots-container">
      <ul className="cfc-dots-list"> {dots} </ul>
    </div>
  ),
  customPaging: () => <span className="cfc-dots-list-item" />,
};

export const environments = {
  production: 'production',
  development: 'development',
};
