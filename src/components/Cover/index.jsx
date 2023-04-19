import styles from './Cover.module.css'
const Cover = ({ children }) => {
  let urlM
  // if (url) {
  //   urlM = url.replace('h_1000', 'h_425')
  //   urlM = urlM.replace('w_1920', 'w_380')
  // }

  return (
    <section id='Cover' className={styles.Cover}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}

export default Cover
