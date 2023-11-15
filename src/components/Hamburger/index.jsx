import React, { useState, useCallback } from 'react'
import styles from './Hamburger.module.css'

// const { active, handleClick } = Astro.props
const Hamburger = () => {
  const [active, setActive] = useState(false) // Menu

  const handleClick = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <button
      aria-label='Hamburger'
      id='Hamburger'
      className={`${styles.hamburger} ${styles['hamburger--collapse']} ${
        active ? styles['is-active'] : ''
      }`}
      type='button'
      onClick={handleClick}
    >
      <span className={styles['hamburger-box']}>
        <span className={styles['hamburger-inner']} />
      </span>
    </button>
  )
}

export default Hamburger
