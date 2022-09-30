export default {
  global: {
    componenteFormativo: 'Presupuesto del servicio guiado',
    descripcionCurso:
      'El mercado en que se desenvuelve el guía de turismo es cambiante y fluctúa entre factores que deben conocer para establecerse.  La guianza como servicio requiere de administración y conocimientos contables para el manejo de recursos propios y de terceros.  Los manejos de tarifas y los criterios para fijarlas, necesitan del análisis oportuno y definición de fórmulas matemáticas para lograr ganancia.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización del mercado turístico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La guianza como un servicio ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración de recursos del contratante',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Administración y gestión de recursos propios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tarifa del servicio guiado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Criterios de planeación estratégica en el guionaje',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (2019). Salarios. Banco de la República. ',
      link: 'https://www.banrep.gov.co/es/estadisticas/salarios',
    },
    {
      referencia:
        'Cabo Nadal, M. (2004). Entorno Laboral de los Principales Tipos de Guías Turísticos: Guía Local y Guía Correo-Acompañante Asistencia y Guía de Grupos, Paraninfo, pp. 97-103.',
    },
    {
      referencia:
        'Choy Zevallos, E. E. (2012). El dilema de los costos en las empresas de servicios. Quipukamayoc, 20(37), 7+. ',
      link:
        'https://link.gale.com/apps/doc/A355247850/IFME?u=sena&sid=bookmark-IFME&xid=8846efce',
    },
    {
      referencia:
        'González Molina, P. (2016). Diseño de productos y servicios turísticos locales UF0083. Editorial Tutor Formación',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44216?page=102.',
    },
    {
      referencia:
        'Luna González, A. C. (2015). Proceso administrativo. Grupo Editorial Patria',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?page=84',
    },
    {
      referencia:
        'Milio Balanzá, I. (2004). Introducción: Definición de Servicios Turísticos. Diseño y comercialización de productos turísticos locales y regionales Paraninfo. pp. 135-136. ',
      link:
        'https://link.gale.com/apps/doc/CX2187100063/GVRL?u=sena&sid=bookmark-GVRL&xid=31374419',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia. (2021). Aseguramiento al sistema general de salud. Minsalud.gov.co.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Regimensubsidiado/Paginas/aseguramiento-al-sistema-general-salud.aspx ',
    },
    {
      referencia:
        'Ramírez P., C., López Pacheco, E., & Chaves N., J. (1988). Cómo fijar el precio al producto. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://hdl.handle.net/11404/4055',
    },
    {
      referencia:
        'Rodríguez Vera, R. (2012). Costos aplicados en hotelería, alimentos y bebidas (4a. ed.). Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69173',
    },
    {
      referencia:
        'Romero Ternero, M. J. (2018). Productos, servicios y destinos turísticos. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/125733?page=28.',
    },
    {
      referencia:
        'Sena. (2008). Recursos para la guianza turística. Material de estudio del Programa tecnólogo en Guianza turística.',
    },
  ],
  glosario: [
    {
      termino: 'Agencia de viajes y turismo',
      significado:
        'Son las empresas comerciales, debidamente    constituidas    por    personas naturales o jurídicas que se dediquen profesionalmente a vender planes turísticos.',
    },
    {
      termino: 'Contratante',
      significado:
        'Quien contrata el servicio guiado puede ser una agencia de viajes, una empresa, una persona natural o un turista.',
    },
    {
      termino: 'Convenio',
      significado:
        'Es la celebración de un pacto entre dos o más personas o instituciones. ',
    },
    {
      termino: 'Erogación ',
      significado: 'Gasto o salida de dinero en una empresa.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Se refiere a la forma por la cual una organización, en este caso del guía, pretende aplicar una determinada estrategia para alcanzar los objetivos propuestos.',
    },
    {
      termino: 'Política de servicio',
      significado:
        'Enmarca el pensamiento de organización, en este caso el guía, y da   los lineamientos generales para dar cumplimiento a las normas y estándares de calidad.',
    },
    {
      termino: 'Recursos físicos, financieros y humanos',
      significado:
        'Es la clasificación que corresponde a los recursos que administra el guía durante el servicio.  Los físicos comprenden materiales y equipos, los  financieros hacen referencia a dinero o títulos valor necesario para pago de los servicios conexos y por último los humanos se relaciona con el equipo de trabajo y lo equipo de apoyo que requiera el guía.',
    },
    {
      termino: 'Renfe',
      significado:
        'Es una empresa de servicios de transportes ferroviarios de viajeros y mercancías, dependiente del Ministerio Transportes, Movilidad y Agenda Urbana de España.',
    },
    {
      termino: 'Salario Mínimo legal Vigente S.M.L. V',
      significado:
        'El salario es la retribución fija u ordinaria que el personal percibe como pago por los servicios prestados durante el periodo, antes de deducir los descuentos por retención en la fuente, seguro social, sindicato, fondo de empleados y similares. En Colombia existe un salario mínimo que se utiliza como referencia salarial.  Al final de cada año se instala una Mesa de Concertación Laboral tripartita para acordar el salario mínimo mensual que tendrá vigencia el año inmediatamente siguiente. En esta mesa participan representantes del gobierno nacional, las centrales de trabajadores y dirigentes gremiales, quienes proponen una cifra teniendo en cuenta la meta de inflación del siguiente año, el incremento del Producto Interno Bruto (PIB) y el Índice de Precios al Consumidor (IPC). En caso de no lograr un consenso entre las partes, el Gobierno nacional fijará el salario mínimo mediante decreto (Banco de la República de Colombia, 2019).',
    },
    {
      termino: 'Sistema General de Seguridad Social',
      significado:
        'Lo integra el Estado, a través del Ministerio de Salud y Protección Social, quien actúa como organismo de coordinación, dirección y control; las Entidades Promotoras de Salud (EPS); y las instituciones prestadoras de salud (IPS), También hacen parte de este sistema las Entidades Territoriales y la Superintendencia Nacional de Salud, como entes de control y vigilancia.',
    },
    {
      termino: 'Transfer',
      significado:
        'Es un servicio que consiste en transportar una persona o grupo de personas entre dos puntos geográficos, generalmente entre el aeropuerto y un alojamiento o viceversa. En este caso el guía brinda información sobre los diversos aspectos relacionados a su viaje, de forma básica, precisa, breve y específica.',
    },
  ],
  complementario: [
    {
      tema: 'Conceptualización del mercado turístico',
      referencia:
        'Resolución número 135 de 2016. [Consejo Profesional De Guias De Turismo]. Por la cual se dicta el código de ética de la profesión del guionaje o guianza turística y se deroga la resolución número 221 del 8 de abril de 1999. 26 de diciembre de 2016.',
      tipo: 'Documentos normativos',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30040295',
    },
    {
      tema: 'Administración de recursos propios',
      referencia:
        'Banco de la República de Colombia. (2021). Taller del Ahorro. Banco de la República.',
      tipo: 'Documentos ',
      link: 'https://www.banrep.gov.co/es/taller-del-ahorro',
    },
    {
      tema: 'Administración de recursos propios',
      referencia:
        'Banco Mundial de la mujer. (2008). Manual de educación financiera. Fundación Laboral WWB en España. ',
      tipo: 'Documento',
      link:
        'https://www.gref.org/nuevo/documentacion/manual_educacion_financiera.pdf',
    },
    {
      tema: 'Administración de recursos propios',
      referencia:
        'Organización Internacional del trabajo. (2019). Manual del alumno educación financiera. Ministerio de Salud y desarrollo social de Argentina. ',
      tipo: 'Documento',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---ed_emp/documents/instructionalmaterial/wcms_734537.pdf',
    },
    {
      tema: 'Tarifas del servicio guiado',
      referencia:
        'Rodríguez Vera, R. (2012). Costos aplicados en hotelería, alimentos y bebidas (4a. ed.). Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69173',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Samira Pineda Cuevas',
        cargo: 'nstructora de Bilingüism',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimento –  Distrito Capital',
      },
      {
        nombre: 'Claudia Patricia Porras Otálora',
        cargo: 'Instructor Técnico',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Distrito Capital',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional ',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
