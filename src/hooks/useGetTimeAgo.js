import { useEffect, useState } from 'react'
import { getTimeAgo, getDateHuman } from '../helpers/formattedDate'

function useGetTimeAgo({ publishedDate }) {
  const [timeAgo, setTimeAgo] = useState()
  const [publishedAt, setPublishedAt] = useState()

  const timestamp = new Date(publishedDate).getTime()
  // sacar este hook y volverlo un helper
  useEffect(() => {
    setTimeAgo(getTimeAgo(timestamp))
    setPublishedAt(getDateHuman(timestamp))
  }, [])

  return { timeAgo, publishedAt }
}

export default useGetTimeAgo
