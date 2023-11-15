/* eslint-disable camelcase */
import styles from './PostsDetailHome.module.css'

const PostsDetailHome = ({ slug, featureImage, title, excerpt = '' }) => {
  return (
    <>
      <article className={styles.post}>
        <a href={`/blog/${encodeURIComponent(slug)}`}>
          <img
            className={styles.featureImage}
            src={featureImage}
            alt={title}
            width={340}
            height={200}
            loading='lazy'
          />
        </a>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <a href={`/blog/${encodeURIComponent(slug)}`}>{title}</a>
          </h2>
          <p className={styles.excerpt}>{excerpt}...</p>
        </div>
      </article>
    </>
  )
}

export default PostsDetailHome
