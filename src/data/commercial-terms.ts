export const commercialTerms = {
  payment: 'El pago es 50% de anticipo para programar el proyecto y 50% al entregar. Antes de comenzar acordamos el alcance, las entregas y cómo se revisará el resultado.',
  hourlyRates: 'Para desarrollo y ajustes generales, la tarifa es de $80.000 COP por hora. Los sistemas a medida, las integraciones y el diagnóstico técnico especializado se cotizan entre $100.000 y $120.000 COP por hora, según su complejidad. La propuesta fija la tarifa y si el presupuesto es por proyecto o por horas.',
  timeline: 'Como referencia, una implementación puede tomar entre 2 y 8 semanas. Los sistemas de mayor complejidad requieren un calendario específico. El plazo comienza en la fecha de inicio confirmada por escrito, una vez recibidos el anticipo del 50%, la aprobación del alcance y los contenidos y accesos necesarios para la primera etapa. Los retrasos posteriores en materiales o aprobaciones pueden requerir una reprogramación acordada.',
  revisions: 'Se incluyen hasta 5 o 10 rondas de ajustes, según lo acordado en la propuesta. Cada ronda reúne las observaciones del responsable del proyecto sobre una entrega. Las nuevas funciones y los cambios de alcance se cotizan antes de ejecutarse.',
  support: 'Cada proyecto incluye entre 1 y 2 semanas de soporte después de la entrega para atender incidencias del trabajo realizado. La propuesta especifica la cobertura, los canales y los horarios de atención. Las mejoras y nuevas funciones se cotizan por separado.',
  annualSupport: 'Puedes contratar mantenimiento anual según las necesidades de tu web, tienda o sistema. La propuesta detalla las tareas, la frecuencia, las horas disponibles y la atención incluida. También puedes solicitar trabajos puntuales.',
  costs: 'Como referencia, el dominio parte de $40.000 COP y el hosting de $300.000 COP al año. Para webs sencillas evaluamos alojamiento estático según sus requisitos. Shopify incluye alojamiento en su suscripción. La propuesta detalla los costos iniciales, las renovaciones y los servicios adicionales, como correo, temas o aplicaciones.',
  ownership: 'Recomiendo que el dominio y las cuentas principales queden a tu nombre. Acordamos los accesos necesarios para trabajar, la entrega de las cuentas y quién se encarga de las renovaciones.',
}

export const priceDescriptions = {
  web: 'Una landing page sencilla cuesta entre $600.000 y $1.200.000 COP, según su complejidad. Los sitios con varias páginas o funciones adicionales se cotizan con su propio alcance.',
  store: 'Las tiendas online parten de $2.000.000 COP. El precio depende del catálogo, la plataforma y las integraciones. La propuesta especifica las funciones y la carga inicial de productos.',
  custom: 'Para una primera versión de un sistema a medida, la referencia parte de $3.000.000 COP. Revisamos tu proceso para definir qué funciones tendrá esa versión, sus integraciones y el presupuesto.',
  automotive: 'Una tienda online de repuestos parte de $2.000.000 COP. Los catálogos de vehículos se cotizan según sus filtros, fichas y administración. Para una primera versión de un sistema de inventario a medida, la referencia parte de $3.000.000 COP.',
}

export function commercialFaqs(type: keyof typeof priceDescriptions) {
  return [
    { question: '¿Cuánto cuesta el proyecto y cómo se paga?', answer: `${priceDescriptions[type]} ${commercialTerms.payment}` },
    { question: '¿Cuál es la tarifa para trabajos por horas?', answer: commercialTerms.hourlyRates },
    { question: '¿Cuál es el plazo y cuándo empieza a contar?', answer: commercialTerms.timeline },
    { question: '¿Cuántas rondas de ajustes están incluidas?', answer: commercialTerms.revisions },
    { question: '¿Qué soporte recibo después de la entrega?', answer: commercialTerms.support },
    { question: '¿Qué incluye el mantenimiento anual?', answer: commercialTerms.annualSupport },
    { question: '¿Qué costos de dominio, alojamiento y plataforma se pagan aparte?', answer: commercialTerms.costs },
    { question: '¿A nombre de quién quedan el dominio y las cuentas?', answer: commercialTerms.ownership },
  ]
}
