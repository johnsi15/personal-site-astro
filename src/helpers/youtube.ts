export async function getLatestYouTubeVideo(channelId: string) {
  const apiKey = import.meta.env.YOUTUBE_API_KEY
  if (!apiKey) {
    console.error('YOUTUBE_API_KEY is not defined in environment variables.')
    return {
      title: 'Error fetching video',
      videoUrl: '',
      thumbnailUrl: '',
    }
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`
    )

    const data = await response.json()

    console.log({ data })

    if (data.items && data.items.length > 0) {
      const video = data.items[0]
      return {
        title: video.snippet.title,
        videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        thumbnailUrl: video.snippet.thumbnails.high.url,
      }
    } else {
      console.error('No videos found for the channel.')
      return {
        title: 'No videos found',
        videoUrl: '',
        thumbnailUrl: '',
      }
    }
  } catch (error) {
    console.error('Error fetching YouTube video:', error)
    return {
      title: 'Error fetching video',
      videoUrl: '',
      thumbnailUrl: '',
    }
  }
}
