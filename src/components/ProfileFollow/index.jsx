import styles from './ProfileFollow.module.css'

const ProfileFollow = () => {
  return (
    <div className={styles.follow}>
      <p>
        Soy <strong>John Serrano ingeniero de software</strong> con más de 7 años de experiencia. Me especializo en la creación de
        experiencias digitales de alto impacto. Entusiasta de las <strong>tecnologías web</strong>: JavaScript, TypeScript, Node.js, Docker,
        Firebase, React, etc. Me puedes encontrar en las siguientes redes sociales:
      </p>
      <ul className={styles.social_list}>
          <li>
            <a href='https://github.com/johnsi15' aria-label='GitHub' target='_blank' rel='noreferrer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-github'
                ><title>GitHub</title><path
                  d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/jandreys15' aria-label='Linkedin' target='_blank' rel='noreferrer'>
              <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-linkedin'
                  ><title>LinkedIn</title><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
                  ></path><rect x='2' y='9' width='4' height='12'></rect><circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/johnserranodev' aria-label='Twitter' target='_blank' rel='noreferrer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'
              ><path
                fill='currentColor'
                d='M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928ZM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843l-3.664-5.28Z'
              ></path>
            </svg>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/johnserranodev' aria-label='Facebook' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                  ><path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
              </svg>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default ProfileFollow
