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

export const services = [
  {
    id: '111',
    name: 'Factoring',
    title: '¿Tus clientes te pagan a 30,60, 90 días o más?',
    subtitle: 'Obtén liquidez inmediata cediéndonos tus facturas.',
    legal: '*Pre aprobación sujeta a revisión de antecedentes comerciales',
    shortDescription: 'Obtén liquidez inmediata cediéndonos tus facturas a crédito. Concéntrate en tu negocio. Nosotros nos encargamos de cobrar las facturas pendientes a las empresas.',
    bgType: 'circle',
    imageUrl: '/linea-credito.png',
    slug: 'factoring',
    order: 'first',
    seo: {
      metaTitle: 'Factoring',
      metaDescription: 'Permite transformar en dinero un bien productivo de la empresa, normalmente bienes raí­ces.',
      shareImage: {
        url: '/factoring_bg.jpg',
      },
    },
    description: {
      title: '<h2 class="text-dark-blue fw-bolder">¿Tienes activos y necesitas liquidez?</h2>',
      content: '<p>Te ofrecemos una solución de <span className="fw-bolder">Leaseback.</span> Un mecanismo de financiamiento que permite a las empresas obtener liquidez a través de la venta de sus activos mediante un contrato de arrendamiento.</p>',
      imageUrl: '/pow.png',
    },
    howItWorks: {
      title: '<h3 class="text-dark-blue fw-bolder">¿Cómo funciona?</h3>',
      content: '<p>El Leaseback es una operación en donde el propietario de un bien inmueble vende éste a una entidad financiera y a su vez, suscribe un contrato de arrendamiento. De esta forma, obtiene liquidez producto de la venta, pero no pierde el uso del inmueble. Al momento de finalizar el contrato y ejercer la opción de compra, el activo vuelve a ser parte de su propiedad.</p>',
      imageUrl: '/linea-credito.png',
    },
    testimonial: [],
    process: [
      {
        id: 1,
        title: 'Envío de antecedentes',
        content: 'Envía los antecedentes de la propiedad, tus antecedentes financieros y tu requerimiento de financiamiento.',
      },
      {
        id: 2,
        title: 'Acuerdo de contrato',
        content: 'Luego de evaluar, te planteamos una propuesta sobre el valor de compra y condiciones del contrato de arrendamiento en cuanto a plazo y valor de rentas de arrendamiento.',
      },
      {
        id: 3,
        title: 'Obtención de dinero ',
        content: 'Hacemos una tasación, estudio de títulos y realizamos el proceso de transferencia en el conservador de bienes raíces, una vez finalizado obtienes el dinero.',
      },
    ],
    requirements: {
      content: [
        '<p><b>Facturas válidas:</b> La empresa debe contar con facturas que estén pendientes de pago y que sean válidas, es decir, que cumplan con los requisitos legales y fiscales correspondientes.',
        '<p><b>Clientes solventes:</b> Nosotros evaluamos el riesgo crediticio de los clientes de la empresa que aparecen en las facturas para determinar si son solventes o no.',
        '<p><b>Contrato de factoring:</b> Firmamos un contrato de factoring que establezca los términos y condiciones de la transacción, así como las comisiones que se aplicarán.',
      ],
      imageUrl: '',
    },
    whyToUse: {
      content: [
        'Proporciona una inyección de efectivo inmediata sin la necesidad de esperar a que los clientes paguen las facturas.',
        'Ayuda a mejorar el flujo de caja y la gestión de la tesorería tu empresa.',
        'Reduce el riesgo de impago y mejora la calidad de la cartera de clientes de tu empresa.',
      ],
      imageUrl: '',
    },
  },
  {
    id: '333',
    name: 'leasing',
    title: 'Tú negocio un vehículo?',
    subtitle: '¡Un empresario es más que un propietario!',
    shortDescription: 'El Leasing es un sistema de financiamiento que está pensado para personas naturales con giro y empresas, que busca resolver el financiamiento para la adquisición de activos fijos.',
    bgType: '',
    imageUrl: '/leasing.png',
    slug: 'leasing',
    order: 'last',
    seo: {
      metaTitle: 'Leasing',
      metaDescription: 'El Leasing es un sistema de financiamiento que está pensado para personas naturales con giro y empresas, que busca resolver el financiamiento para la adquisición de activos fijos.',
      shareImage: {
        url: '/leasing_bg.jpg',
      },
    },
    description: {
      title: '<h2 class="text-dark-blue fw-bolder">¿Necesitas un vehículo nuevo o maquinaria?</h2>',
      content: '<p>El Leasing es un sistema de financiamiento que está pensado para personas naturales con giro y empresas, que busca resolver el financiamiento para la adquisición de activos fijos.</p>',
      imageUrl: '/leasing-first.png',
    },
    howItWorks: {
      title: '<h3 class="text-dark-blue fw-bolder">¿Cómo funciona?</h3>',
      content: '<p>Esta herramienta de financiamiento te permite, mediante un contrato, establece el arriendo de un bien de capital por un determinado período de tiempo y una vez finalizado el contrato, el bien es devuelto a su propietario.</p>',
      imageUrl: '/factoring-image.png',
    },
    testimonial: [],
    process: [
      {
        id: 1,
        title: 'Cotización del activo',
        content: 'Cotiza el activo que necesites adquirir con el proveedor de tu preferencia.',
      },
      {
        id: 2,
        title: 'Evaluación y propuesta',
        content: 'Envíanos la cotización del activo y tu información financiera para evaluar la operación y te enviaremos la propuesta.',
      },
      {
        id: 3,
        title: 'Firma del contrato',
        content: 'Formalizamos la operación mediante la firma del contrato de Leasing, para coordinar con el proveedor del activo, la compra y entrega del bien financiado.',
      },
    ],
    requirements: {
      content: [
        'Debes contar con tus antecedentes financieros (Carpeta tributaria, balance, etc.), los antecedentes de la propiedad (documentación legal) y la descripción del destino de los fondos.',
      ],
      imageUrl: '/prensa-bg.png',
    },
    whyToUse: {
      content: [
        '<p><b>Preservación del capital de trabajo:</b> Al optar por el leasing, la empresa puede adquirir un activo sin tener que pagar el precio total de compra de manera inmediata, lo que le permite preservar su capital de trabajo para otras necesidades o contingencias.</p>',
        '<p><b>Flexibilidad:</b> El leasing puede ofrecer opciones flexibles de financiamiento, como la posibilidad de hacer pagos personalizados y ajustables a los ingresos de la empresa, o incluso la posibilidad de actualizar el equipo arrendado con la última tecnología al final del contrato.        ',
        '<p><b>Beneficios fiscales:</b> En algunos casos, los pagos de arrendamiento pueden ser deducibles de impuestos como un gasto operativo, lo que puede tener un impacto positivo en la rentabilidad de la empresa.',
      ],
      imageUrl: '/ejecutivos.png',
    },
  },
  {
    id: '4444',
    name: 'leaseback',
    title: '¿Tienes activos y necesitas liquidez?',
    subtitle: 'Impúlsate hacia tu futuro hoy mismo',
    shortDescription: 'Te ofrecemos una solución de Leaseback. Un mecanismo de financiamiento que permite a las empresas obtener liquidez a través de la venta de sus activos mediante un contrato de arrendamiento.',
    bgType: '',
    imageUrl: '/leaseback.png',
    slug: 'leaseback',
    order: 'first',
    seo: {
      metaTitle: 'Leaseback',
      metaDescription: 'Permite transformar en dinero un bien productivo de la empresa, normalmente bienes raí­ces.',
      shareImage: {
        url: '/leaseback_bg.jpg',
      },
    },
    description: {
      title: '<h2 class="text-dark-blue fw-bolder">¿Tienes activos y necesitas liquidez?</h2>',
      content: '<p>Te ofrecemos una solución de <span className="fw-bolder">Leaseback.</span> Un mecanismo de financiamiento que permite a las empresas obtener liquidez a través de la venta de sus activos mediante un contrato de arrendamiento.</p>',
      imageUrl: '/leaseback-first.png',
    },
    howItWorks: {
      title: '<h3 class="text-dark-blue fw-bolder">¿Cómo funciona?</h3>',
      content: '<p>El Leaseback es una operación en donde el propietario de un bien inmueble vende éste a una entidad financiera y a su vez, suscribe un contrato de arrendamiento. De esta forma, obtiene liquidez producto de la venta, pero no pierde el uso del inmueble. Al momento de finalizar el contrato y ejercer la opción de compra, el activo vuelve a ser parte de su propiedad.</p>',
      imageUrl: '/leaseback-last.png',
    },
    testimonial: [],
    process: [
      {
        id: 1,
        title: 'Envío de antecedentes',
        content: 'Envía los antecedentes de la propiedad, tus antecedentes financieros y tu requerimiento de financiamiento.',
      },
      {
        id: 2,
        title: 'Acuerdo de contrato',
        content: 'Luego de evaluar, te planteamos una propuesta sobre el valor de compra y condiciones del contrato de arrendamiento en cuanto a plazo y valor de rentas de arrendamiento.',
      },
      {
        id: 3,
        title: 'Obtención de dinero ',
        content: 'Hacemos una tasación, estudio de títulos y realizamos el proceso de transferencia en el conservador de bienes raíces, una vez finalizado obtienes el dinero.',
      },
    ],
    requirements: {
      content: [
        'Debes contar con tus antecedentes financieros (Carpeta tributaria, balance, etc.), los antecedentes de la propiedad (documentación legal) y la descripción del destino de los fondos.',
      ],
      imageUrl: '/prensa-bg.png',
    },
    whyToUse: {
      content: [
        'Es una excelente alternativa para pymes que cuentan con mucho activo fijo (inmuebles, vehículos) y poco capital disponible.',
        'Te permite reestructurar pasivos en el largo plazo ordenando los pagos en relación a los ingresos.',
        'Puedes financiar nuevos proyectos o para otorgar liquidez a la empresa.',
      ],
      imageUrl: '/leasing-last.png',
    },
  },
  {
    id: '222',
    name: 'factoring-web',
    title: '¿Tienes activos y necesitas liquidez?',
    subtitle: 'Deja de coleccionar facturas por cobrar',
    shortDescription: 'En nuestra plataforma digital podrás cargar de manera masiva tus facturas, con cotización en línea clara y transparente.',
    bgType: '',
    imageUrl: '/business-guy.png',
    slug: 'factoring-web',
    order: 'last',
    seo: {
      metaTitle: 'Factoring web',
      metaDescription: 'Permite transformar en dinero un bien productivo de la empresa, normalmente bienes raí­ces.',
      shareImage: {
        url: '/leaseback_bg.jpg',
      },
    },
    description: {
      title: '<h2 class="text-dark-blue fw-bolder">¿Tienes activos y necesitas liquidez?</h2>',
      content: '<p>Te ofrecemos una solución de <span className="fw-bolder">Leaseback.</span> Un mecanismo de financiamiento que permite a las empresas obtener liquidez a través de la venta de sus activos mediante un contrato de arrendamiento.</p>',
      imageUrl: '/pow.png',
    },
    howItWorks: {
      title: '<h3 class="text-dark-blue fw-bolder">¿Cómo funciona?</h3>',
      content: '<p>El Leaseback es una operación en donde el propietario de un bien inmueble vende éste a una entidad financiera y a su vez, suscribe un contrato de arrendamiento. De esta forma, obtiene liquidez producto de la venta, pero no pierde el uso del inmueble. Al momento de finalizar el contrato y ejercer la opción de compra, el activo vuelve a ser parte de su propiedad.</p>',
      imageUrl: '/linea-credito.png',
    },
    testimonial: [],
    process: [
      {
        id: 1,
        title: 'Envío de antecedentes',
        content: 'Envía los antecedentes de la propiedad, tus antecedentes financieros y tu requerimiento de financiamiento.',
      },
      {
        id: 2,
        title: 'Acuerdo de contrato',
        content: 'Luego de evaluar, te planteamos una propuesta sobre el valor de compra y condiciones del contrato de arrendamiento en cuanto a plazo y valor de rentas de arrendamiento.',
      },
      {
        id: 3,
        title: 'Obtención de dinero ',
        content: 'Hacemos una tasación, estudio de títulos y realizamos el proceso de transferencia en el conservador de bienes raíces, una vez finalizado obtienes el dinero.',
      },
    ],
    requirements: {
      content: 'Debes contar con tus antecedentes financieros (Carpeta tributaria, balance, etc.), los antecedentes de la propiedad (documentación legal) y la descripción del destino de los fondos.',
      imageUrl: '',
    },
    whyToUse: {
      content: '<ul><li>•Es una excelente alternativa para pymes que cuentan con mucho activo fijo (inmuebles, vehículos) y poco capital disponible.</li><li>•Te permite reestructurar pasivos en el largo plazo ordenando los pagos en relación a los ingresos.</li><li>•Puedes financiar nuevos proyectos o para otorgar liquidez a la empresa.</li></ul>',
      imageUrl: '',
    },
  },
];

export const fullServices = [
  {
    review: '“Conseguí colocar un producto en una importante empresa del retail, el producto fue un éxito y me hicieron un pedido más grande, para poder cumplir necesitaba capital de trabajo, como era mi factura N°1 no fue fácil hasta que llegue a las oficinas de CFC...”',
    Detalle: '<p>Haciendo un análisis de costos de producción en mi empresa me di cuenta que haciendo una inversión en maquinaria podía hacer más eficiente mi gestión, obtener un importante ahorro en costos e incluso aumentar mis ventas, eran máquinas muy específicas y de bajo mercado secundario así que no será fácil conseguir el financiamiento por la prensa me enteré del Leaseback, me acerqué a las oficinas de CFC Capital para averiguar en detalle en que consistía, el ejecutivo que atendía me explicó todo referente al Leaseback, yo tenía una propiedad comercial así que presenté mis antecedentes, me evaluaron y la operación se aprobó, hoy pago una cuota mensual que se paga casi en su totalidad con el ahorro en costos que tuve, mis ventas han aumentado un 20% así que además me queda un restito para otros gastos, fue realmente una muy buena inversión.</p><p><b>CASO REAL EMPRESA PRODUCTIVA DEL SECTOR INDUSTRIAL</b></p>',
    Banner: {
      url: 'https://cfc-capital.s3.amazonaws.com/factoring_landing_eb42c1c83b.jpg',
    },
    Seo: {
      metaTitle: 'Factoring',
      metaDescription: 'Permite a las empresas obtener liquidez inmediata, así logran ordenar su flujo de caja.',
      shareImage: {
        url: 'https://cfc-capital.s3.amazonaws.com/factoring_bg_1c7bd71d69.jpg',
      },
    },
    Slide: {
      item_image: {
        url: 'https://cfc-capital.s3.amazonaws.com/factoring_bg_00510b5758.svg',
      },
      titlulo: '¿Tus clientes te pagan a 30,60, 90 días o más? <br> <small class="text-dark-grey fs-2">¡Tenemos la solución!</small>',
      subtitulo: null,
      icono: {
        url: 'https://cfc-capital.s3.amazonaws.com/factoring_purple_75a10496c4.png',
      },
    },
    Proceso: [
      {
        descripcion: 'Envíanos tus facturas e información tributaria y te enviaremos una propuesta.',
      },
      {
        descripcion: 'Si estás de acuerdo con la simulación, nuestros ejecutivos solicitarán el resto de tu información para obtener un VB° del crédito.',
      },
      {
        descripcion: 'Finalmente, te visitaremos para resolver las últimas dudas, firmamos el contrato, te ayudamos con la cesión electrónica y recibes el dinero.',
      },
    ],
    Faq: [
      {
        pregunta: '¿Cuáles son los requisitos?',
        respuesta: 'Te apoyamos desde la factura N° 1. ¿Tienes dicom? No te preocupes. Envíanos tu carpeta tributaria y factura emitida, nosotros nos encargamos del resto.',
      },
      {
        pregunta: '¿Cuáles son los tiempos de respuestas?',
        respuesta: 'En CFC Capital puedes abrir una línea, realizar tu primera operación en sólo horas y sin papeleos.',
      },
    ],
    Que: {
      Titulo: '¿Qué es el factoring?',
      Contenido: 'El Factoring es una herramienta de financiamiento que permite a las empresas obtener liquidez inmediata mediante el anticipo de sus facturas a crédito para que puedan ordenar su flujo de caja.',
    },
    Como: {
      Titulo: '¿Cómo funciona?',
      Contenido: 'Si cuentas con facturas sin pagar, falta para que venza el plazo y necesitas liquidez inmediata, lo primero que debes hacer es cedernos tus facturas y nosotros te anticipamos ese dinero. Además, nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio.',
    },
    Para: {
      Titulo: '¿Por qué es la opción ideal para mí?',
      Contenido: 'En lugar de esperar 30,60 o 90 días para obtener tu pago, puedes recibir anticipadamente el valor de tus facturas, recuperando el capital invertido para realizar nuevas inversiones. Sirve como apoyo para la gestión de la empresa, resuelve el problema del flujo de caja y presta el servicios de cobranza y recaudación.\n\nEl factoring es una herramienta muy útil para todo tipo de emprendimientos y pymes, ya que financiamos desde la primera factura y a empresas que tienen algún grado de problema en Dicom. Entre las principales industrias que utilizan esta herramienta están la Construcción, Minería, Telecomunicaciones, Servicios del sector privado, público y emprendimientos emergentes.',
    },
  },
  {
    review: '“Haciendo un análisis de costos de producción en mi empresa me di cuenta que haciendo una inversión en maquinaria podía hacer más eficiente mi gestión, obtener un importante ahorro en costos e incluso aumentar mis ventas, eran máquinas muy ...”',
    Detalle: '<p>Me adjudiqué un contrato por Mercado Público para trabajar en una importante obra en el sur del país transportando áridos, dentro de las bases se establecía que el contrato debí­a ejecutarlo con un camión nuevo, yo ya había estado cotizando camiones y tenía listo uno para comprar, por un amigo que me recomendó llegue a CFC Capital para ver la posibilidad de financiamiento v­ía leasing, me atendió un ejecutivo el cual inmediatamente me pidió mis antecedentes y me asesoró en cuanto al plazo en que debía tomar el leasing para no tener problemas con el pago de la cuota mensual dado los flujos del contrato, la cuota tiene incluido todos los gastos e incluso el seguro así­ que otra preocupación menos, en dos semanas tení­a mi camión nuevo y estaba listo para empezar con el trabajo.</p><p>Hoy pago sin problemas mi cuota, obtengo el beneficio tributario y el camión está trabajando perfecto, incluso estoy postulando a otro contrato para comprar otro camión, todo bien.</p><p><b>CASO REAL EMPRESA DEL SECTOR TRANSPORTE QUE OPERA A TRAVÉS DE LA PLATAFORMA MERCADO PÚBLICO</b></p>',
    Banner: {
      url: 'https://cfc-capital.s3.amazonaws.com/leasing_landing_08a4973e38.jpg',
    },
    Seo: {
      metaTitle: 'Leasing',
      metaDescription: 'Resolver el financiamiento para la adquisición de activos fijos.',
      shareImage: {
        url: 'https://cfc-capital.s3.amazonaws.com/leasing_bg_5442bd948d.jpg',
      },
    },
    Slide: {
      item_image: null,
      titlulo: '¿Necesitas un vehículo nuevo o maquinaria?  <br> <small class="text-dark-grey fs-2">El Leasing es para ti</small>',
      subtitulo: null,
      icono: null,
    },
    Proceso: [
      {
        descripcion: 'Cotiza el activo que necesites adquirir con el proveedor de tu preferencia.',
      },
      {
        descripcion: 'Envíanos la cotización del activo y tu información financiera para evaluar la operación y te enviaremos la propuesta.',
      },
      {
        descripcion: 'Formalizamos la operación mediante la firma del contrato de Leasing, para coordinar con el proveedor del activo, la compra y entrega del bien financiado.',
      },
    ],
    Faq: [
      {
        pregunta: '¿Cuáles son los requisitos?',
        respuesta: 'Debes contar con tus antecedentes financieros (Carpeta tributaria, balance, etc) y la cotización del activo que buscas adquirir.',
      },
      {
        pregunta: '¿Cuáles son los tiempos de respuestas?',
        respuesta: 'Ingrese sus datos a través de cualquiera de nuestros canales digitales y un ejecutivo se pondrá en contacto a la brevedad.',
      },
      {
        pregunta: '¿Por qué es la opción ideal para mí?',
        respuesta: 'El Leasing es una excelente alternativa para emprendimientos y pymes que requieren financiamiento para adquirir activos fijos como maquinarias, camiones o camionetas. Además, es una herramienta de financiamiento de largo plazo que permite ordenar los pagos de acuerdo a los ingresos.',
      },
    ],
    Que: {
      Titulo: '¿Qué es el Leasing?',
      Contenido: 'El Leasing es un sistema de financiamiento que está pensado para personas naturales con giro y empresas, que busca resolver el financiamiento para la adquisición de activos fijos.',
    },
    Como: {
      Titulo: '¿Cómo funciona el Leasing?',
      Contenido: 'Esta herramienta de financiamiento te permite, mediante un contrato, establecer el arriendo de un bien de capital por un determinado período de tiempo y una vez finalizado el contrato, el bien es devuelto a su propietario.',
    },
    Para: null,
  },
  {
    review: '“Me adjudique un contrato por Mercado Público para trabajar en una importante obra en el sur del país transportando áridos, dentro de las bases se establecía que el contrato debí­a ejecutarlo con un camión nuevo, yo ya había estado cotizando ...”',
    Detalle: '<p>Conseguí colocar un producto en una importante empresa del retail, el producto fue un éxito y me hicieron un pedido más grande, para poder cumplir necesitaba capital de trabajo, como era mi factura N°1 no fue fácil hasta que llegue a las oficinas de CFC Capital, increíblemente no les asustó que fuera mi primera factura, el ejecutivo fue muy amable y en 48 horas tení­a los fondos para poder cumplir con la segunda orden de compra.</p><p>Hoy después de dos años operando con CFC no tengo problemas y mis flujos están mucho más ordenados, CFC se transformó en un partner financiero y gracias a su apoyo hoy tengo una empresa sólida y con un gran futuro.</p><p><b>CASO REAL EMPRESA PRODUCTIVA DEL SECTOR RETAIL</b></p>',
    Banner: {
      url: 'https://cfc-capital.s3.amazonaws.com/leasback_landing_e5cb0f9d00.jpg',
    },
    Seo: {
      metaTitle: 'Leaseback',
      metaDescription: 'Permite transformar en dinero un bien productivo de la empresa, normalmente bienes raí­ces.',
      shareImage: {
        url: 'https://cfc-capital.s3.amazonaws.com/leaseback_bg_e3dc599e05.jpg',
      },
    },
    Slide: {
      item_image: {
        url: 'https://cfc-capital.s3.amazonaws.com/leaseback_bg_c5b050e2e4.svg',
      },
      titlulo: '¿Tienes activos y necesitas liquidez? <br> <small class="text-dark-grey fs-2">El Leaseback podría ser tu solución</small>',
      subtitulo: null,
      icono: {
        url: 'https://cfc-capital.s3.amazonaws.com/leaseback_purple_22a85ccdf0.png',
      },
    },
    Proceso: [
      {
        descripcion: 'Envía los antecedentes de la propiedad, tus antecedentes financieros y tu requerimiento de financiamiento.',
      },
      {
        descripcion: 'Luego de evaluar, te planteamos una propuesta sobre el valor de compra y condiciones del contrato de arrendamiento en cuanto a plazo y valor de las rentas de arrendamiento.',
      },
      {
        descripcion: 'Hacemos una tasación, estudio de títulos y realizamos el proceso de transferencia en el conservador de bienes raíces, una vez finalizado obtienes el dinero.',
      },
    ],
    Faq: [
      {
        pregunta: '¿Cuáles son los requisitos?',
        respuesta: 'Debes contar con tus antecedentes financieros (Carpeta tributaria, balance, etc), los antecedentes de la propiedad (documentación legal) y la descripción del destino de los fondos.',
      },
      {
        pregunta: '¿Cuáles son los tiempos de respuestas?',
        respuesta: 'Ingrese sus datos a través de cualquiera de nuestros canales digitales y un ejecutivo se pondrá en contacto a la brevedad.',
      },
      {
        pregunta: '¿Por qué es la opción ideal para mí?',
        respuesta: 'Es una excelente alternativa para pymes que cuentan con mucho activo fijo (inmuebles, vehículos) y poco capital disponible. También se utiliza para reestructurar pasivos en el largo plazo ordenando los pagos en relación a los ingresos, financiar nuevos proyectos o para otorgar liquidez a la empresa.',
      },
    ],
    Que: {
      Titulo: '¿Qué es el Leaseback?',
      Contenido: 'El Leaseback es un mecanismo de financiamiento que permite a las empresas obtener liquidez a través de la venta de sus activos mediante un contrato de arrendamiento.',
    },
    Como: {
      Titulo: '¿Cómo funciona ?',
      Contenido: 'El Leaseback es una operación en donde el propietario de un bien inmueble vende éste a una entidad financiera y a su vez, suscribe un contrato de arrendamiento. De esta forma, obtiene liquidez producto de la venta, pero no pierde el uso del inmueble. Al momento de finalizar el contrato y ejercer la opción de compra, el activo vuelve a ser parte de su propiedad.',
    },
    Para: null,
  },
];

export const testimonialSliderData = [
  {
    id: '001',
    item_image: {
      url: '/matiasGomez.png',
    },
    title: 'Matias Gómez',
    subtitle: 'Emprendedor',
    description: '“Increíblemente no les asustó que fuera mi primera factura, el ejecutivo fue muy amable y en 48 horas tení­a los fondos para poder cumplir con la segunda orden de compra”.',
  },
  {
    id: '002',
    item_image: {
      url: '/camilaFuentes.png',
    },
    title: 'Camila Fuentes',
    subtitle: 'Fundadora',
    description: '“Hoy después de dos años operando con CFC no tengo problemas y mis flujos están mucho más ordenados, CFC se transformó en un partner financiero”.',
  },
];
export const newsSliderData = [
  {
    id: '0001',
    item_image: {
      url: '/icon-news.png',
    },
    tag: 'FACTORING | PYME',
    title: 'Los 5 mitos más comunes sobre el Factoring',
    origin: '14-01-2022 | El Mercurio',
    url: '/prensa',
    description: 'Francisco Goycoolea, gerente comercial de CFC Capital, aclara los 5 mitos más comunes que se tienen sobre esta popular opción de financiamiento.',
  },
];

export const sliderBreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export const fakeNewsData = [
  {
    id: '00001',
    content: {
      html: '<div><p>Nuestro&nbsp;<strong>Gerente General de CFC Capital, Enrique Tenorio,</strong> estuvo en el programa Mercado Futuro de Radio Futuro, donde pudo explicar el rol relevante de las instituciones financieras no bancarias en el financiamiento de las pymes del país, considerando que hacen faltan correcciones y apoyo a los diferentes proyectos que tienen como fin apoyar a las pequeñas y medianas empresas durante estos tiempos de necesidad.</p><p>Escucha la entrevista <a title="https://portal.nexnews.cl/showN?valor=n03uk" href="https://portal.nexnews.cl/showN?valor=n03uk">AQUÍ</a></p></div>',
    },
    title: 'Enrique Tenorio',
    slug: 'enrique-tenorio-gerente-general-CFC-capital-en-radio-futuro',
    video: false,
    coverImage: {
      url: '/banner-factoring.jpg',
    },
    article: {
      content: {
        html: '<div><p>Nuestro&nbsp;<strong>Gerente General de CFC Capital, Enrique Tenorio,</strong> estuvo en el programa Mercado Futuro de Radio Futuro, donde pudo explicar el rol relevante de las instituciones financieras no bancarias en el financiamiento de las pymes del país, considerando que hacen faltan correcciones y apoyo a los diferentes proyectos que tienen como fin apoyar a las pequeñas y medianas empresas durante estos tiempos de necesidad.</p><p>Escucha la entrevista <a title="https://portal.nexnews.cl/showN?valor=n03uk" href="https://portal.nexnews.cl/showN?valor=n03uk">AQUÍ</a></p></div>',
      },
      title: 'Enrique Tenorio',
      slug: 'enrique-tenorio-gerente-general-CFC-capital-en-radio-futuro',
      video: false,
      coverImage: {
        url: '/banner-factoring.jpg',
      },
    },
  },
];

export const memorial = [
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

export const gerencia = [
  {
    name: 'Enrique Tenorio Fuentes',
    cargo: 'Gerente General',
    email: 'etenorio@cfccapital.cl',
    linkedin: 'https://www.linkedin.com/in/enrique-tenorio-0b439646/',
    img: '/enrique.png',
    desc: 'Contamos con un subgerente de riesgo, un subgerente de operaciones y con equipo capacitado de primer nivel, lo cual permite que tengamos una posición financiera sólida y robusta en el mercado.',
  },
  {
    name: 'Francisco Javier Goycoolea Brucher',
    cargo: 'Gerente Comercial',
    email: 'fgoycoolea@cfccapital.cl',
    linkedin: 'https://www.linkedin.com/in/francisco-javier-goycoolea-brucher-871707142/',
    img: '/francisco.png',
    desc: 'En el año 2017 se incorpora como gerente comercial el señor Francisco Javier Goycoolea Brucher ingeniero con MBA en Dirección de empresas de la escuela de negocios española IEDE, después de trabajar 25 años en el Bci dando un nuevo ímpetu a toda la parte comercial de la empresa.',
  },
];

export const team = [
  {
    name: 'Laura Ferrada Martínez',
    cargo: 'Ejecutiva Comercial',
    email: 'lferrada@cfccapital.cl',
  },
  {
    name: 'Mario Finschi Herrera',
    cargo: 'Ejecutivo Comercial',
    email: 'mfinschi@cfccapital.cl',
  },
  {
    name: 'Ema Jara Colipi',
    cargo: 'Ejecutiva Comercial',
    email: 'ejara@cfccapital.cl',
  },
  {
    name: 'Evelin Santander Gallardo',
    cargo: 'Ejecutiva Comercial',
    email: 'esantander@cfccapital.cl',
  },
];

export const directory = [
  {
    name: 'Sergio Silva Alcalde',
    cargo: 'Presidente',
    linkedin: 'https://www.linkedin.com/in/sergio-silva-alcalde-22263b29/',
  },
  {
    name: 'Alejandro Alarcón Pérez',
    cargo: 'Vicepresidente',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  {
    name: 'Felipe Ríos Yrarrazaval',
    cargo: 'Director',
    linkedin: 'https://www.linkedin.com/in/luis-felipe-rios-yrarr%C3%A1zaval-a1189318/',
  },
  {
    name: 'Alejandro Toth Nebel',
    cargo: 'Director',
    linkedin: 'https://www.linkedin.com/in/alejandro-toth-nebel-55562855/',
  },
  {
    name: 'Jorge Narbona Lemus',
    cargo: 'Director',
    linkedin: 'https://www.linkedin.com/in/jorge-narbona-8929b21a/',
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
        label: 'Factoring web',
        path: '/servicios/CFC-PasoaPaso.pdf',
      },
      {
        label: 'Leasing',
        path: '/servicios/leasing',
      }, {
        label: 'Leaseback',
        path: '/servicios/leaseback',
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
    children: false,
  },
];
