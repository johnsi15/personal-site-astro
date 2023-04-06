/* eslint-disable camelcase */
import styles from './PostsDetailHome.module.css'

const PostsDetailHome = ({
  slug,
  featureImage,
  title,
  custom_excerpt = '',
  excerpt = '',
}) => {
  let excerpt_custom = custom_excerpt
    ? custom_excerpt.slice(0, 160)
    : excerpt
    ? excerpt.slice(0, 160)
    : ''
  return (
    <>
      <article className={styles.post}>
        <a href={`/blog/${encodeURIComponent(slug)}`}>
          <img
            className={styles.featureImage}
            src={featureImage}
            alt={title}
            width={346}
            height={200}
            loading='lazy'
          />
        </a>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <a href={`/blog/${encodeURIComponent(slug)}`}>{title}</a>
          </h2>
          <p className='excerpt'>{excerpt_custom}...</p>
        </div>
      </article>
    </>
  )
}

export default PostsDetailHome
