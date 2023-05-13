import { useEffect, useState } from 'react'
// import { getTimeDate } from '../helpers/formattedDate'

function useGetTimeAgo({ publishedDate }) {
  const [timeAgo, setTimeAgo] = useState()
  const [publishedAt, setPublishedAt] = useState()

  // const timestamp = new Date(publishedDate).getTime()
  // // sacar este hook y volverlo un helper
  // useEffect(() => {
  //   setTimeAgo(timeAgo(timestamp))
  //   setPublishedAt(publishedAt(timestamp))
  // }, [])

  return { timeAgo }
}

export default useGetTimeAgo
