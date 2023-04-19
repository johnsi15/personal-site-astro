/* eslint-disable camelcase */
import useGetTimeAgo from '../../hooks/useGetTimeAgo'
import styles from './PostProfile.module.css'

const PostProfile = ({
  primary_author,
  primary_tag,
  published_at: publishedDate,
}) => {
  const { publishedAt } = useGetTimeAgo({ publishedDate })

  console.info(publishedAt)
  return (
    <section className={styles.profile__section}>
      <div className={styles.profile__post}>
        <div className={styles.profile}>
          <a href='/sobre-mi' className={styles.profile_avatar}>
            <img
              className={styles.profile__image}
              src={
                primary_author.profile_image
                  ? primary_author.profile_image.replace('admin', 'static')
                  : 'https://static.ghost.org/v3.0.0/images/ghost.png'
              }
              alt={primary_author.name}
              width='35'
              height='35'
            />
          </a>
          <span className={styles.profile__name}>{primary_author.name}</span>
        </div>
        <span>{publishedAt}</span>
      </div>
      {primary_tag && (
        <section className={styles.category}>
          <a href={`/tags/${encodeURIComponent(primary_tag.slug)}`}>
            {primary_tag.name}
          </a>
        </section>
      )}
    </section>
  )
}

export default PostProfile
