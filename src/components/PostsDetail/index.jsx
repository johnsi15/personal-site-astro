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
  primary_author = 'John Serrano',
  publishedDate,
}) => {
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
            <h2>
              <a
                className={styles.title}
                href={`/blog/${encodeURIComponent(slug)}`}
              >
                {title}
              </a>
            </h2>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
        </header>
        <footer className={styles.post__meta}>
          <div className={styles.profile}>
            <a
              className={styles.profile_avatar}
              href='/sobre-mi'
              aria-label={primary_author}
            >
              <img
                className={styles.profile__image}
                src='/profile.jpg'
                alt={primary_author}
                width='35'
                height='35'
                loading='lazy'
              />
            </a>
            <span className={styles.profile__name}>{primary_author}</span>
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
