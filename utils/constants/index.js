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

export const products = [
  {
    id: 1,
    title: 'Minefact',
    width: 226,
    height: 176,
    subtitle: 'El Factoring para la Minería',
    description: 'Factoring de la minería',
    details:
      'Producto especializado con conocimiento profundo de la industria para proveedores del sector minero.',
    video: 'CFC-video-nvos-productos_nznil6',
    services: [
      {
        title: 'Acceso y experiencia minera',
        icon: 'pick',
        description:
          'Tenemos acceso directo a todas las plataformas de confirmación de los pagadores mineros más grandes y entendemos los plazos específicos del sector.',
      },
      {
        title: 'Aprobación ágil y rápida',
        icon: 'clockwhite',
        description:
          'Seguridad y experiencia en análisis de contratos de proyectos mineros, lo que nos permite un cierre rápido de negocios.',
      },
      {
        title: 'Presencia en Zona Norte',
        icon: 'pin',
        description:
          'Contamos con agencia en la Zona Norte del país, con un especialista dedicado exclusivamente a negocios mineros.',
      },
      {
        title: 'Alternativa de financiamiento',
        icon: 'docs',
        description: `Financiamos hasta el 20% de la orden de compra en caso de grandes pagadores del sector minero.

* Sujeto a evaluación y aprobación comercial`,
      },
    ],
  },
  {
    id: 2,
    title: 'Emprendefact',
    subtitle: 'El Factoring de los Emprendedores',
    description: 'Factoring desde la factura uno',
    details:
      'Financiamiento diseñado para emprendedores y nuevas empresas que están dando sus primeros pasos.',
    width: 310,
    height: 188,
    services: [
      {
        title: 'Financiamos tu factura N°1',
        icon: 'docs',
        description:
          'No pedimos información histórica. Basamos nuestro análisis en tu deudor y otorgamos liquidez inmediata.',
      },
      {
        title: 'Asesoría legal y tributaria',
        icon: 'justice',
        description:
          'Te acompañamos en todo lo necesario en el ámbito legal y tributario para que puedas operar sin problemas desde el día uno.',
      },
      {
        title: 'Tú emprendes, nosotros te respaldamos',
        icon: 'handshake',
        description:
          'Ofrecemos asesoría y acompañamiento estratégico especializado para tu negocio.',
      },
    ],
  },
  {
    id: 3,
    title: 'Publifact',
    width: 228,
    height: 176,
    subtitle: 'Factoring para Mercado Público',
    description: 'Factoring a empresas del Estado',
    details:
      'Solución diseñada para empresas que operan en el Mercado Público.',
    services: [
      {
        title: 'Especialistas en Mercado Público',
        icon: 'star',
        description:
          'Financiamos facturas de largo plazo de empresas públicas. Tenemos acceso al ranking de los mejores pagadores del sector.',
      },
      {
        title: 'Asesoría integral',
        icon: 'chat',
        description:
          'Te guiamos en el cumplimiento de todos los requisitos necesarios para operar exitosamente en este mercado.',
      },
      {
        title: 'Tasa Garantizada',
        icon: 'guard',
        description:
          'Producto único el cual te permite mantener la tasa de negocio en caso de mora, hasta por 15, 30 ó 45 días.',
      },
      {
        title: 'Herramientas digitales',
        icon: 'digital',
        description:
          'Aprobación ágil con procesos simplificados. Enrolamiento 100% online. Portal de seguimiento en tiempo real. Reportes financieros periódicos para proyectar flujos de caja.',
      },
    ],
  },
];

export const attributes = [
  {
    id: 1,
    title: 'Agilidad',
    icon: 'clock',
    width: 77,
    height: 61,
    description:
      'Aprobación con procesos simplificados y enrolamiento 100% online para comenzar rápidamente.',
  },
  {
    id: 2,
    title: 'Transparencia',
    icon: 'pan',
    description:
      'Acceso a portal con seguimiento directo del estado del cobro de tus facturas sin sorpresas. Claridad en la devolución de tus excedentes.',
  },
  {
    id: 3,
    title: 'Información',
    icon: 'chart',
    width: 71,
    height: 68,
    description:
      'Te ayudamos con información de clientes, como pagan, antecedentes comerciales y comportamiento, así vendes mas seguro y minimizas el riesgo. (*)',
  },
];
