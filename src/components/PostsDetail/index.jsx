/* eslint-disable camelcase */
import React from 'react'
// import formatDistanceStrict from 'date-fns/formatDistanceStrict'
// const formatDistanceStrict = require('date-fns/formatDistanceStrict')
// import { es } from 'date-fns/locale'
import styles from './PostsDetail.module.css'
import { getTimeDate } from '../../helpers/formattedDate'

const PostsDetail = ({
  slug,
  featureImage,
  title,
  excerpt = '',
  primary_author = '',
  publishedDate,
}) => {
  // {post.excerpt.slice(0, 92)}...
  let excerpt_custom = excerpt ? excerpt.slice(0, 160) : ''
  // console.log(published_at)
  // https://github.com/you-dont-need/You-Dont-Need-Momentjs
  // const timeAgo = formatDistanceStrict(new Date(published_at), new Date(), {
  //   locale: es,
  //   addSuffix: true,
  // })
  const { timeAgo } = getTimeDate({ publishedDate })

  return (
    <>
      <article className={styles.post}>
        <header className={styles.post__header}>
          <a href={`/blog/${encodeURIComponent(slug)}`}>
            <img
              src={featureImage}
              alt={title}
              width='300'
              height='200'
              loading='lazy'
            />
          </a>
          <div className={styles.content}>
            <a
              className={styles.title}
              href={`/blog/${encodeURIComponent(slug)}`}
            >
              <h2>{title}</h2>
            </a>
            <p className={styles.excerpt}>{excerpt_custom}...</p>
          </div>
        </header>
        <footer className={styles.post__meta}>
          <div className={styles.profile}>
            <a className={styles.profile_avatar} href='/sobre-mi'>
              <img
                className={styles.profile__image}
                src='/profile.jpg'
                alt={primary_author.name}
                width='35'
                height='35'
                loading='lazy'
              />
            </a>
            <span className={styles.profile__name}>{primary_author.name}</span>
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
