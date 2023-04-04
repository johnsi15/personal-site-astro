/* eslint-disable camelcase */
import React from 'react'
// import formatDistanceStrict from 'date-fns/formatDistanceStrict'
// const formatDistanceStrict = require('date-fns/formatDistanceStrict')
// import { es } from 'date-fns/locale'
import styles from './PostsDetail.module.css'

const PostsDetail = ({
  slug,
  featureImage,
  title,
  custom_excerpt = '',
  excerpt = '',
  primary_author = '',
  publishDate,
}) => {
  // {post.excerpt.slice(0, 92)}...
  let excerpt_custom = custom_excerpt
    ? custom_excerpt.slice(0, 160)
    : excerpt
    ? excerpt.slice(0, 160)
    : ''
  // console.log(published_at)
  // https://github.com/you-dont-need/You-Dont-Need-Momentjs
  // const timeAgo = formatDistanceStrict(new Date(published_at), new Date(), {
  //   locale: es,
  //   addSuffix: true,
  // })

  const DATE_UNITS = {
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

  const timestamp = new Date(publishDate).getTime()

  const timeAgo = getTimeAgo(timestamp)

  return (
    <>
      <article className='post'>
        <header className='post__header'>
          <a href={`/blog/${encodeURIComponent(slug)}`}>
            <img
              src={
                featureImage
                  ? featureImage.replace('admin', 'static')
                  : '/static/gallery.jpg'
              }
              alt={title}
              width='300'
              height='200'
              loading='lazy'
            />
          </a>
          <div className='content'>
            <a
              className={styles.title}
              href={`/blog/${encodeURIComponent(slug)}`}
            >
              <h2>{title}</h2>
            </a>
            <p className='excerpt'>{excerpt_custom}...</p>
          </div>
        </header>
        <footer className='post__meta'>
          <div className='profile'>
            <a className='profile_avatar' href='/sobre-mi'>
              <img
                className='profile__image'
                src={
                  primary_author.profile_image
                    ? primary_author.profile_image.replace('admin', 'static')
                    : 'https://static.ghost.org/v3.0.0/images/ghost.png'
                }
                alt={primary_author.name}
                width='35'
                height='35'
                loading='lazy'
              />
            </a>
            <span className='profile__name'>{primary_author.name}</span>
          </div>
          <span>{timeAgo}</span>
          <a href={`/blog/${encodeURIComponent(slug)}`}>
            <span>Leer más</span>
          </a>
        </footer>
      </article>
    </>
  )
}

export default React.memo(PostsDetail)
