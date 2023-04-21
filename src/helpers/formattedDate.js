const DATE_UNITS = {
  year: 31536000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
}

const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000
const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

const getTimeAgo = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat()

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit)
}

const getDateHuman = (timestamp) => {
  // const timestamp = 1575909015 // seconds

  // const milliseconds = timestamp * 1000 // 1575909015000

  const dateObject = new Date(timestamp)

  // const humanDateFormat = dateObject.toLocaleString() // 5/21/2021, 11:49:16 AM
  // console.log(humanDateFormat)

  // const dayName = dateObject.toLocaleString('es-CO', { weekday: 'long' }) // Lunes
  const month = dateObject.toLocaleString('es-CO', { month: 'long' }) // Mayo
  const dayNumber = dateObject.toLocaleString('es-CO', { day: 'numeric' }) // 9
  const year = dateObject.toLocaleString('es-CO', { year: 'numeric' }) // 2019
  // const hour = dateObject.toLocaleString('es-CO', { hour: 'numeric' }) // 10 AM
  // const minute = dateObject.toLocaleString('es-CO', { minute: 'numeric' }) // 30
  // const second = dateObject.toLocaleString('es-CO', { second: 'numeric' }) // 15
  // dateObject.toLocaleString('es-CO', { timeZoneName: 'short' }) // 12/9/2019, 10:30:15 AM CST
  // Viernes, 16 de Julio de 2021
  const dateHuman = `${dayNumber} ${month} - ${year}`
  return dateHuman
}

// const publishedAt = ({ publishedDate }) => {
//   const timestamp = new Date(publishedDate).getTime()

//   return getDateHuman(timestamp)
// }

// const timeAgo = ({ publishedDate }) => {
//   const timestamp = new Date(publishedDate).getTime()

//   return getTimeAgo(timestamp)
// }

const getTimeDate = ({ publishedDate }) => {
  const timestamp = new Date(publishedDate).getTime()

  return {
    timeAgo: getTimeAgo(timestamp),
    publishedAt: getDateHuman(timestamp),
  }
}

export { getTimeDate }
