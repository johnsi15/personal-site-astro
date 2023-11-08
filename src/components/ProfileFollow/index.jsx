import styles from './ProfileFollow.module.css'

const ProfileFollow = () => {
  return (
    <div className={styles.follow}>
      <p>
        Soy <strong>John Serrano</strong>.{' '}
        <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las
        tecnologías web: JavaScript, Node.js, TypeScript, Docker, Firebase, React, etc. Me
        puedes encontrar en las siguientes redes sociales:
      </p>
      <ul className={styles.follow__buttons}>
        <li>
          <a
            href='https://www.facebook.com/johnserrano15'
            title='Facebook'
            target='_blank'
          >
            <img
              alt='en Facebook'
              src='/follow/Facebook.svg'
              width='32'
              height='32'
            />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/jandrey15'
            target='_blank'
            title='Twitter'
          >
            <img
              alt='Twitter'
              src='/follow/Twitter.svg'
              width='32'
              height='32'
            />
          </a>
        </li>
        <li>
          <a href='https://github.com/johnsi15' target='_blank' title='GitHub'>
            <img alt='GitHub' src='/follow/Github.svg' width='32' height='32' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/jandreys15'
            target='_blank'
            title='LinkedIn'
          >
            <img
              alt='LinkedIn'
              src='/follow/LinkedIn.svg'
              width='32'
              height='32'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProfileFollow
