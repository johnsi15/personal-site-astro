import styles from './PostsFeature.module.css'
import { getTimeDate } from '../../helpers/formattedDate'

const PostsFeature = ({ data, slug }) => {
  const {
    title,
    featureImage,
    excerpt,
    publishedDate,
    primaryAuthor = 'John Serrano',
  } = data
  const { timeAgo } = getTimeDate({ publishedDate })

  return (
    <article className={styles.PostsFeature}>
      <a href={`/blog/${encodeURIComponent(slug)}`}>
        <img
          className={styles.picture}
          src={featureImage}
          alt={title}
          width='480'
          height='270'
        />
      </a>

      <div className={styles.content}>
        <header className={styles.post__header}>
          <h2>
            <a
              className={styles.title}
              href={`/blog/${encodeURIComponent(slug)}`}
            >
              {title}
            </a>
          </h2>
          <p>{excerpt}</p>
        </header>
        <footer className={styles.post__meta}>
          <div className={styles.profile}>
            <a
              className={styles.profile_avatar}
              href='/sobre-mi'
              aria-label={primaryAuthor}
            >
              <img
                className={styles.profile__image}
                src='/profile.webp'
                alt={primaryAuthor}
                width='35'
                height='35'
              />
            </a>
            <span className={styles.profile__name}>{primaryAuthor}</span>
          </div>
          <span>{timeAgo}</span>
          <a href={`/blog/${encodeURIComponent(slug)}`}>
            <span>Leer más</span>
          </a>
        </footer>
      </div>
    </article>
  )
}

export default PostsFeature
