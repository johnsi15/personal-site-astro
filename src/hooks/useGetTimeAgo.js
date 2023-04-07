import { useEffect, useState } from 'react'
import { getTimeAgo } from '../helpers/formattedDate'

function useGetTimeAgo({ publishedDate }) {
  const [timeAgo, setTimeAgo] = useState()
  const timestamp = new Date(publishedDate).getTime()

  useEffect(() => {
    setTimeAgo(getTimeAgo(timestamp))
  }, [])

  return { timeAgo }
}

export default useGetTimeAgo
