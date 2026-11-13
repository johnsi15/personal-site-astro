export type SeoTool = {
  id: string
  name: string
  category: string
  access: 'Gratis' | 'Freemium' | 'Prueba / pago' | 'Self-hosted'
  url: string
  use: string
  limit: string
  verified?: boolean
}

export const seoTools: SeoTool[] = [
  { id: 'gsc', name: 'Google Search Console', category: 'Medición', access: 'Gratis', url: 'https://search.google.com/search-console/about', use: 'Saber qué indexa Google, por qué consultas apareces y qué páginas reciben clics.', limit: 'Requiere verificar tu propiedad. Los datos no son en tiempo real.' },
  { id: 'bing', name: 'Bing Webmaster Tools', category: 'Técnico', access: 'Gratis', url: 'https://www.bing.com/webmasters/about', use: 'Inspeccionar tu presencia en Bing y enviar sitemaps. Complementa Search Console.', limit: 'Requiere verificar el sitio. No representa todos los buscadores ni todas las respuestas de IA.' },
  { id: 'psi', name: 'PageSpeed Insights', category: 'Rendimiento', access: 'Gratis', url: 'https://pagespeed.web.dev/', use: 'Diagnosticar Core Web Vitals y encontrar oportunidades de rendimiento en móvil y escritorio.', limit: 'Separa laboratorio de datos reales de CrUX. Un sitio nuevo puede no tener datos de campo.' },
  { id: 'lighthouse', name: 'Chrome DevTools · Lighthouse', category: 'Rendimiento', access: 'Gratis', url: 'https://developer.chrome.com/docs/lighthouse/overview?hl=es', use: 'Auditar una página y revisar accesibilidad, SEO básico y rendimiento desde tu navegador.', limit: 'Es una prueba de laboratorio, no una auditoría SEO completa ni una garantía de posicionamiento.' },
  { id: 'frog', name: 'Screaming Frog', category: 'Técnico', access: 'Freemium', url: 'https://www.screamingfrog.co.uk/seo-spider/', use: 'Rastrear URLs y localizar errores 404, redirecciones, títulos, canonicals y páginas bloqueadas.', limit: 'Hasta 500 URLs por rastreo gratis. Renderizado JavaScript, guardar rastreos y funciones avanzadas requieren licencia.', verified: true },
  { id: 'ahrefs', name: 'Ahrefs · herramientas gratuitas', category: 'Keywords', access: 'Freemium', url: 'https://ahrefs.com/es/free-seo-tools', use: 'Descubrir ideas de keywords, revisar SERPs y consultar muestras de backlinks.', limit: 'Resultados limitados. Ahrefs Free para tu sitio y las herramientas puntuales no equivalen al paquete completo.', verified: true },
  { id: 'trends', name: 'Google Trends', category: 'Keywords', access: 'Gratis', url: 'https://trends.google.com/trends/', use: 'Comparar interés relativo, estacionalidad y regiones antes de elegir temas.', limit: 'El índice 0–100 es relativo; no es volumen absoluto de búsquedas.' },
  { id: 'planner', name: 'Google Keyword Planner', category: 'Keywords', access: 'Gratis', url: 'https://ads.google.com/home/tools/keyword-planner/', use: 'Ampliar ideas de palabras clave y contrastar rangos de demanda por mercado.', limit: 'Necesitas una cuenta de Google Ads. La precisión disponible depende de la cuenta; competencia publicitaria no es dificultad SEO.' },
  { id: 'semrush', name: 'Semrush', category: 'Keywords', access: 'Freemium', url: 'https://es.semrush.com/free-tools/', use: 'Complementar la investigación con herramientas gratuitas y análisis limitados de competidores.', limit: 'Las cuotas dependen de la herramienta y cuenta. Una prueba de un plan de pago no es un plan gratuito permanente.', verified: true },
  { id: 'rich', name: 'Rich Results Test', category: 'Schema', access: 'Gratis', url: 'https://search.google.com/test/rich-results', use: 'Comprobar la elegibilidad técnica del marcado para resultados enriquecidos de Google.', limit: 'No valida todos los tipos de Schema.org y aprobar no garantiza que Google muestre un resultado enriquecido.' },
  { id: 'schema', name: 'Schema Markup Validator', category: 'Schema', access: 'Gratis', url: 'https://validator.schema.org/', use: 'Validar sintaxis y vocabulario Schema.org, incluso para tipos sin resultado enriquecido.', limit: 'No evalúa por sí solo las políticas ni la elegibilidad específica de Google.' },
  { id: 'ga4', name: 'Google Analytics 4', category: 'Medición', access: 'Gratis', url: 'https://marketingplatform.google.com/about/analytics/', use: 'Medir adquisición y acciones valiosas: contacto, registro, compra o solicitud de presupuesto.', limit: 'Versión estándar con límites. Configura privacidad y consentimiento según corresponda; no envíes datos personales en eventos.' },
  { id: 'looker', name: 'Looker Studio', category: 'Medición', access: 'Freemium', url: 'https://lookerstudio.google.com/', use: 'Crear un informe recurrente con Search Console y Analytics sin copiar cifras cada semana.', limit: 'Hay funciones Pro y conectores de terceros de pago. Empieza con conectores de Google.' },
  { id: 'gbp', name: 'Google Business Profile', category: 'SEO local', access: 'Gratis', url: 'https://www.google.com/business/', use: 'Gestionar datos, reseñas y presencia local de un negocio elegible.', limit: 'No es para cualquier web: los negocios exclusivamente online normalmente no son elegibles. Revisa las políticas.' },
  { id: 'alerts', name: 'Google Alerts', category: 'Autoridad', access: 'Gratis', url: 'https://www.google.com/alerts', use: 'Detectar menciones de tu marca y oportunidades de relaciones públicas.', limit: 'Cobertura parcial. No sustituye un índice completo de backlinks.' },
  { id: 'gtmetrix', name: 'GTmetrix', category: 'Rendimiento', access: 'Freemium', url: 'https://gtmetrix.com/', use: 'Profundizar en la cascada de carga y contrastar diagnósticos de rendimiento.', limit: 'Ofrece acceso inicial gratuito; revisa las cuotas de tu cuenta y qué pruebas requieren plan. PageSpeed es la primera opción sin coste.', verified: true },
  { id: 'seranking', name: 'SE Ranking', category: 'Medición', access: 'Prueba / pago', url: 'https://seranking.com/', use: 'Centralizar seguimiento de posiciones, auditorías y análisis competitivo cuando necesites escalar.', limit: 'No se asume una capa gratuita permanente. Consulta condiciones y duración de la prueba antes de registrarte.' },
  { id: 'byword', name: 'Byword', category: 'Contenido', access: 'Prueba / pago', url: 'https://byword.ai/pricing/', use: 'Evaluar generación de borradores a escala una vez que tengas una estrategia y revisión editorial.', limit: 'Producto de pago. No es necesario para empezar. Verifica hechos, originalidad y utilidad antes de publicar.', verified: true },
  { id: 'getalink', name: 'Getalink', category: 'Autoridad', access: 'Prueba / pago', url: 'https://app.getalink.com/editores', use: 'Referencia aportada para explorar el mercado de publicaciones; la ruta enlazada es para editores.', limit: 'No es una recomendación de comprar enlaces para manipular rankings. Los enlaces pagados deben declararse con rel="sponsored" o nofollow.' },
  { id: 'katapulta', name: 'Katapulta', category: 'Técnico', access: 'Prueba / pago', url: 'https://www.youtube.com/watch?v=9fDdxxrJUHA&t=194s', use: 'Referencia del vídeo para auditoría y arquitectura. El enlace abre la explicación del curso.', limit: 'Proveedor, disponibilidad y precio pendientes de verificar. Puedes cubrir el inicio con GSC y Screaming Frog.' },
  { id: 'openseo', name: 'OpenSEO · Cloudflare', category: 'GEO', access: 'Self-hosted', url: 'https://github.com/every-app/open-seo/blob/main/docs/SELF_HOSTING_CLOUDFLARE.md', use: 'Evaluar auditorías y visibilidad IA en una instalación que controles, con acceso MCP.', limit: 'Requiere DataForSEO y R2 habilitado con método de pago. Workers Free limita auditorías a unas 40 páginas; no equivale a coste total cero.', verified: true },
]

export type SeoStage = {
  id: string
  title: string
  subtitle: string
  pillar: string
  time: string
  why: string
  tasks: { id: string; title: string; detail: string }[]
  tools: string[]
  done: string
  warning: string
  video: number
  template: string
}

export const seoStages: SeoStage[] = [
  {
    id: 'contexto', title: 'Antes de abrir una herramienta', subtitle: 'Negocio, audiencia y un objetivo concreto.', pillar: 'Estrategia', time: '30–45 min',
    why: 'El SEO atrae demanda relevante. Primero aclara a quién ayudas y qué acción quieres conseguir; más visitas no siempre significan más negocio.',
    tasks: [
      { id: 'brief', title: 'Escribe el contexto del proyecto', detail: 'Anota oferta, audiencia, país e idioma, diferenciador y restricciones. Si usas IA, comparte solo contexto que puedas divulgar, nunca credenciales ni datos de clientes.' },
      { id: 'conversion', title: 'Define una conversión y una línea base', detail: 'Elige una acción medible: formulario enviado, registro o compra. Registra fecha de inicio y datos disponibles; si no hay medición, escribe “sin datos”, no cero.' },
      { id: 'competidores', title: 'Encuentra 3 competidores de búsqueda', detail: 'Busca lo que buscaría tu cliente. Guarda las URLs que responden a esa intención, aunque no sean tus competidores comerciales habituales.' },
    ], tools: ['trends', 'gsc'], done: 'Tienes un brief, un mercado definido y una conversión principal.', warning: 'No prometas primeras posiciones ni resultados en un plazo fijo. Técnica, contenido y autoridad trabajan juntos.', video: 365,
    template: 'Oferta:\nAudiencia y problema:\nPaís / idioma:\nDiferenciador y evidencias:\nConversión principal:\nLínea base y fecha:\nCompetidores en buscadores:\n',
  },
  {
    id: 'medicion', title: 'Prepara tu punto de partida', subtitle: 'Conecta la medición antes de hacer cambios.', pillar: 'Medición', time: '30–60 min',
    why: 'Search Console explica cómo llegas desde Google; Analytics explica lo que pasa después. Configurarlos pronto evita perder tu línea base.',
    tasks: [
      { id: 'gsc', title: 'Verifica el sitio en Search Console', detail: 'Añade una propiedad de dominio y verifica por DNS si tienes acceso. Si no, usa prefijo de URL. Envía el sitemap real de tu sitio y confirma que se puede leer.' },
      { id: 'analytics', title: 'Comprueba una conversión real', detail: 'Configura GA4 u otra analítica existente, según tu política de privacidad. Prueba el evento en modo depuración y comprueba que no se duplica. No instales varios trackers sin necesidad.' },
      { id: 'baseline', title: 'Guarda el informe inicial', detail: 'Anota clics, impresiones, CTR y posición media, con periodo y país. Guarda conversiones orgánicas por separado. En sitios nuevos, espera a que lleguen datos. Añade Bing Webmaster Tools.' },
    ], tools: ['gsc', 'ga4', 'bing'], done: 'Propiedad verificada, sitemap enviado y conversión comprobada o pendiente documentado.', warning: 'Esta guía no conecta tus cuentas: la configuración y consulta se realizan en cada herramienta.', video: 5335,
    template: 'Propiedad GSC:\nSitemap:\nAnalítica y evento clave:\nPeriodo de referencia:\nClics / impresiones / CTR:\nConversiones orgánicas:\nPendientes de configuración:\n',
  },
  {
    id: 'auditoria', title: 'Comprueba que puedan encontrarte', subtitle: 'Rastreo, indexación y errores que sí importan.', pillar: 'Técnico', time: '45–90 min',
    why: 'Una página excelente no ayuda si los buscadores no pueden acceder a ella. Atiende primero los bloqueos de páginas que aportan valor.',
    tasks: [
      { id: 'crawl', title: 'Haz un rastreo inicial', detail: 'Introduce tu dominio en Screaming Frog. Revisa códigos 4xx/5xx, enlaces internos rotos, redirecciones encadenadas y páginas huérfanas al contrastar con el sitemap. Exporta hallazgos.' },
      { id: 'index', title: 'Inspecciona 3 URLs importantes', detail: 'En Inspección de URLs de GSC revisa la versión indexada y la prueba en directo: respuesta HTTP, robots.txt, noindex y canonical elegido. Un bloqueo en robots.txt no sustituye noindex.' },
      { id: 'fix', title: 'Prioriza y verifica las correcciones', detail: 'Registra URL, problema, impacto y solución. Redirige solo a equivalentes reales; un contenido eliminado sin reemplazo puede devolver 404/410. No redirijas todos los 404 al inicio.' },
    ], tools: ['frog', 'gsc', 'bing'], done: 'Las URLs prioritarias son accesibles y tienes un listado de errores con próxima acción.', warning: 'No toda exclusión es un error: filtros, duplicados y páginas privadas pueden estar correctamente fuera del índice.', video: 794,
    template: 'URL afectada | problema | impacto | solución | fecha de verificación\n\nRobots / noindex:\nCanonical elegido por Google:\nErrores prioritarios:\n',
  },
  {
    id: 'keywords', title: 'Descubre qué necesita tu audiencia', subtitle: 'Intención de búsqueda antes que volumen.', pillar: 'Contenido', time: '60–90 min',
    why: 'Una buena oportunidad combina relevancia para tu negocio, una necesidad real y capacidad para crear una respuesta mejor. Una puntuación baja de dificultad no basta.',
    tasks: [
      { id: 'seeds', title: 'Reúne preguntas y términos semilla', detail: 'Parte de dudas de clientes, servicios y consultas de GSC. Amplía con Ahrefs, autocompletado y Trends. Compara siempre país e idioma; no confundas interés relativo con búsquedas mensuales.' },
      { id: 'intent', title: 'Lee la SERP de 5 oportunidades', detail: 'Observa si aparecen guías, productos, comparativas, vídeos o resultados locales. Anota intención, formato dominante y qué falta. No elijas una keyword solo por volumen o KD.' },
      { id: 'gems', title: 'Prioriza 5 temas alcanzables', detail: 'Busca problemas específicos donde tengas experiencia: preguntas con intención comercial, contenido desactualizado o consultas con impresiones propias. En sitios con datos, revisa oportunidades en posiciones 8–20 sin tratarlas como garantía.' },
    ], tools: ['ahrefs', 'trends', 'planner', 'semrush', 'gsc'], done: 'Tienes 5 temas priorizados con intención, evidencia y una página candidata.', warning: 'Los volúmenes y dificultades de terceros son estimaciones. La competencia de Ads no mide dificultad orgánica.', video: 1379,
    template: 'Tema | consulta | país | intención | formato SERP | URL candidata | evidencia | prioridad\n\nPreguntas de clientes:\nOportunidades detectadas:\n',
  },
  {
    id: 'arquitectura', title: 'Dale un lugar a cada tema', subtitle: 'Mapa de URLs y enlaces internos con sentido.', pillar: 'Estrategia', time: '45–60 min',
    why: 'La arquitectura conecta necesidades con páginas. Ayuda al lector y al buscador a entender qué es importante y cómo se relaciona.',
    tasks: [
      { id: 'map', title: 'Asigna una intención principal por página', detail: 'Dibuja inicio → categorías o servicios → páginas específicas y recursos. Agrupa variantes que respondan a la misma intención; no crees una página por cada variación de palabra.' },
      { id: 'links', title: 'Conecta páginas relacionadas', detail: 'Añade enlaces HTML rastreables desde categorías y contenidos útiles hacia las páginas prioritarias. Usa textos descriptivos, evita páginas huérfanas y comprueba navegación móvil.' },
      { id: 'migration', title: 'Documenta cambios de URLs', detail: 'Si sustituyes una URL existente, prepara un mapa de redirecciones a equivalentes y actualiza enlaces internos y sitemap. Para idiomas, evalúa hreflang solo cuando existan versiones equivalentes reales.' },
    ], tools: ['frog', 'gsc'], done: 'Cada tema prioritario tiene una URL y una ruta de acceso desde el sitio.', warning: 'No cambies URLs que ya funcionan solo para introducir más palabras clave.', video: 1603,
    template: 'Tema / intención → URL → página padre → enlaces internos de origen\n\nURLs a conservar:\nRedirecciones necesarias:\n',
  },
  {
    id: 'contenido', title: 'Crea algo que merezca ser leído', subtitle: 'Briefs claros, experiencia propia y revisión humana.', pillar: 'Contenido', time: 'Por pieza',
    why: 'El contenido debe resolver el problema, no rellenar un número de palabras. La IA puede ayudar a estructurar; la responsabilidad editorial sigue siendo tuya.',
    tasks: [
      { id: 'brief', title: 'Prepara un brief antes del borrador', detail: 'Define audiencia, intención, respuesta principal, secciones, fuentes, ejemplos propios y siguiente acción. Selecciona primero pocas piezas importantes, no un calendario masivo imposible de mantener.' },
      { id: 'evidence', title: 'Aporta evidencia original', detail: 'Incluye casos reales con permiso, capturas, pruebas, metodología o experiencia demostrable. Identifica autor y fuentes. Distingue hechos, estimaciones y opinión.' },
      { id: 'review', title: 'Revisa antes de publicar y agenda actualización', detail: 'Verifica citas, datos, enlaces, derechos y afirmaciones. Si usas IA, no publiques borradores sin validar. Anota fecha de revisión y quién actualizará la pieza cuando cambie el tema.' },
    ], tools: ['trends', 'gsc', 'byword'], done: 'La pieza responde a la intención, tiene evidencia comprobable y una próxima revisión.', warning: 'Publicar muchas páginas con IA sin valor añadido puede incumplir las políticas contra contenido a escala abusivo.', video: 2009,
    template: 'Título de trabajo:\nAudiencia e intención:\nRespuesta principal:\nSecciones:\nEvidencia / experiencia propia:\nFuentes verificadas:\nCTA:\nFecha de próxima revisión:\n',
  },
  {
    id: 'onpage', title: 'Haz que cada página se entienda', subtitle: 'Títulos, semántica y experiencia de lectura.', pillar: 'Contenido', time: '20–40 min / URL',
    why: 'El on-page hace explícito el propósito de una página. Optimiza para comunicar con claridad, no para repetir una keyword un número exacto de veces.',
    tasks: [
      { id: 'meta', title: 'Revisa title, descripción y encabezados', detail: 'Escribe un title único y preciso y una descripción útil, sin promesas engañosas. Usa un encabezado principal claro y secciones jerárquicas. Google puede reescribir títulos y snippets.' },
      { id: 'media', title: 'Cuida imágenes y enlaces', detail: 'Usa texto alternativo contextual en imágenes informativas y alt vacío en las decorativas. Comprime archivos, declara dimensiones y enlaza recursos relevantes con textos comprensibles.' },
      { id: 'ux', title: 'Lee la página como un cliente en móvil', detail: 'Comprueba legibilidad, navegación con teclado, formularios y CTA. Verifica que la respuesta principal esté disponible en HTML y que no se oculte detrás de interacciones innecesarias.' },
    ], tools: ['frog', 'lighthouse'], done: 'La página tiene propósito claro, metadatos propios, lectura cómoda y acción útil.', warning: 'No existe una densidad ideal de keywords ni un mínimo universal de palabras. La meta descripción no es un factor directo de ranking.', video: 2328,
    template: 'URL:\nIntención principal:\nTitle:\nDescripción:\nH1 y secciones:\nEnlaces internos:\nProblemas móviles / accesibilidad:\n',
  },
  {
    id: 'schema', title: 'Describe tus entidades sin inventar', subtitle: 'Datos estructurados que reflejen la página.', pillar: 'Técnico', time: '30–60 min',
    why: 'Schema.org ayuda a describir entidades y contenido. Google admite resultados enriquecidos para algunos tipos, con políticas y requisitos propios.',
    tasks: [
      { id: 'type', title: 'Elige el tipo que corresponde al contenido', detail: 'Considera Organization o Person para identidad, Article para una pieza editorial, BreadcrumbList para navegación y Product solo para productos reales. Usa LocalBusiness únicamente si aplica.' },
      { id: 'validate', title: 'Valida código y elegibilidad', detail: 'Comprueba el JSON-LD en Schema Markup Validator y la URL en Rich Results Test. Distingue errores obligatorios de advertencias opcionales. El marcado debe coincidir con lo visible.' },
      { id: 'monitor', title: 'Revisa después del despliegue', detail: 'Verifica la página publicada, no solo el generador. Consulta informes de mejoras de GSC cuando existan y revisa que las plantillas no repliquen autores, precios o fechas incorrectos.' },
    ], tools: ['schema', 'rich', 'gsc'], done: 'Marcado válido, fiel al contenido y revisado en la URL publicada.', warning: 'No inventes reseñas ni uses FAQ como truco universal. No hay un schema especial que garantice citas en IA.', video: 2554,
    template: 'URL:\nTipos Schema:\nEntidad y @id:\nErrores del validador:\nResultado del test de Google:\nFecha de verificación:\n',
  },
  {
    id: 'rendimiento', title: 'Haz que la experiencia sea rápida', subtitle: 'Core Web Vitals, no una carrera por el 100.', pillar: 'Técnico', time: '45–90 min',
    why: 'La velocidad importa para las personas. Usa el laboratorio para diagnosticar y los datos de usuarios reales para evaluar la experiencia cuando estén disponibles.',
    tasks: [
      { id: 'measure', title: 'Mide páginas representativas', detail: 'Prueba inicio, servicio o producto y artículo en PageSpeed, móvil y escritorio. Guarda URL, fecha y condiciones. Si no hay CrUX, documenta “sin datos de campo”.' },
      { id: 'cwv', title: 'Prioriza LCP, INP y CLS', detail: 'Referencia de buena experiencia en el percentil 75: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. Los datos CrUX cubren una ventana móvil de 28 días; el score Lighthouse no equivale a aprobar CWV.' },
      { id: 'improve', title: 'Corrige el cuello de botella y vuelve a probar', detail: 'Revisa imagen LCP, peso de JavaScript, scripts de terceros, caché y dimensiones de medios. Usa DevTools o GTmetrix para la cascada. En Astro prioriza HTML y pocas islas; WP Rocket e Imagify son opciones de WordPress, no requisitos universales.' },
    ], tools: ['psi', 'lighthouse', 'gtmetrix'], done: 'Tienes medición inicial, mejora prioritaria y comparación en condiciones similares.', warning: 'Lighthouse no mide INP real con una navegación básica; TBT es un diagnóstico de laboratorio, no el mismo indicador.', video: 5108,
    template: 'URL y fecha:\nDispositivo / condiciones:\nDatos de campo disponibles:\nLCP / INP / CLS:\nPrincipal bloqueo:\nCambio realizado y resultado:\n',
  },
  {
    id: 'autoridad', title: 'Construye confianza fuera de tu web', subtitle: 'Menciones relevantes, relaciones y presencia local.', pillar: 'Autoridad', time: 'Recurrente',
    why: 'La autoridad no se resume en una métrica de dominio. Construye señales reales con recursos útiles, reputación y presencia coherente donde participa tu audiencia.',
    tasks: [
      { id: 'assets', title: 'Crea una razón legítima para enlazarte', detail: 'Publica una investigación, una herramienta o una guía original. Contacta colaboradores o medios relevantes con una aportación concreta, no envíos masivos ni intercambios automatizados.' },
      { id: 'mentions', title: 'Revisa menciones y enlaces con contexto', detail: 'Configura Alerts para tu marca y consulta muestras de backlinks en Ahrefs. Prioriza relevancia y audiencia; DR y métricas similares son indicadores de terceros, no notas oficiales de Google.' },
      { id: 'local', title: 'Evalúa SEO local si tu negocio es elegible', detail: 'Si atiendes clientes presencialmente según las políticas, revisa Business Profile: categoría, horarios, datos coherentes y reseñas auténticas. Si no aplica, documenta la razón antes de marcar la tarea como revisada.' },
    ], tools: ['alerts', 'ahrefs', 'gbp', 'getalink'], done: 'Hay una acción de reputación relevante y la presencia local está revisada o justificada como no aplicable.', warning: 'Comprar enlaces que transmitan señales de ranking puede violar las políticas de Google. Identifica patrocinios; nunca compres reseñas.', video: 3369,
    template: 'Activo enlazable:\nMedios / colaboradores relevantes:\nMenciones detectadas:\nAcción de contacto:\nSEO local aplica / no aplica y por qué:\n',
  },
  {
    id: 'geo', title: 'Sé una fuente útil para las respuestas de IA', subtitle: 'GEO con fundamentos y experimentos medibles.', pillar: 'GEO', time: '45–60 min + revisiones',
    why: 'GEO busca mejorar la presencia en respuestas generativas. No es una receta garantizada: los motores, modelos y fuentes cambian, y las respuestas son variables.',
    tasks: [
      { id: 'source', title: 'Haz tu contenido claro, verificable y accesible', detail: 'Responde preguntas concretas, usa definiciones y tablas cuando aporten valor, cita fuentes primarias y muestra experiencia e identidad. Para AI Overviews y AI Mode, Google mantiene los requisitos SEO habituales; no exige archivos ni marcado especiales.' },
      { id: 'bots', title: 'Revisa acceso por motor y propósito', detail: 'Consulta la documentación vigente de los bots de Google, Bing y los motores de IA que te importen. Distingue búsqueda de entrenamiento y verifica bloqueos del CDN. llms.txt es una propuesta, no un requisito de Google ni garantía de citas.' },
      { id: 'experiment', title: 'Mantén un pequeño registro de pruebas', detail: 'Define 5 preguntas representativas y registra motor, modelo si se conoce, fecha, idioma, país, respuesta y URLs citadas. Repite con condiciones comparables. Es una muestra exploratoria, no una cuota de mercado ni una medición exhaustiva.' },
    ], tools: ['bing', 'gsc', 'openseo'], done: 'Tienes contenido verificable, acceso revisado y un registro reproducible de menciones y citas.', warning: 'GSC agrega el tráfico de las funciones IA de Google en Web: no atribuyas una variación exclusivamente a GEO. No confundas una mención de marca con una cita enlazada.', video: 4153,
    template: 'Pregunta | motor / modelo | fecha | país / idioma | marca mencionada | URL citada | observaciones\n\nAcceso de bots revisado:\nMejora a experimentar:\n',
  },
  {
    id: 'revision', title: 'Mide, aprende y vuelve a priorizar', subtitle: 'Un hábito pequeño, no una auditoría que se olvida.', pillar: 'Medición', time: '30 min / semana',
    why: 'El checklist registra trabajo realizado, no salud SEO ni resultados automáticos. Revisa el impacto con datos y decide el siguiente cambio útil.',
    tasks: [
      { id: 'weekly', title: 'Cada semana: comprueba cambios relevantes', detail: 'Revisa problemas nuevos de indexación, páginas prioritarias, clics y conversiones. Anota despliegues y campañas. No reacciones a un único día de variación.' },
      { id: 'monthly', title: 'Cada mes: compara periodos equivalentes', detail: 'Compara 28 días completos con el periodo anterior y el año anterior cuando exista. Segmenta país, dispositivo, marca/no marca y página. Considera estacionalidad y cambios en medición.' },
      { id: 'backlog', title: 'Elige las próximas 3 acciones y guarda respaldo', detail: 'Prioriza por impacto, confianza y esfuerzo. Revisa contenido desactualizado, canibalización real y conversiones antes de crear más páginas. Exporta este cuaderno; el guardado local no es un backup.' },
    ], tools: ['gsc', 'ga4', 'looker', 'seranking'], done: 'Has registrado una revisión fechada y tres próximas acciones con criterio.', warning: 'Más impresiones no siempre implican más negocio. No conviertas correlaciones en causas sin investigar.', video: 5335,
    template: 'Fecha y periodo comparado:\nQué cambió:\nResultados y fuente:\nPosibles explicaciones / limitaciones:\nPróximas 3 acciones:\nFecha de próxima revisión:\n',
  },
]

export const seoTaskIds = seoStages.flatMap(stage => stage.tasks.map(task => `${stage.id}:${task.id}`))
