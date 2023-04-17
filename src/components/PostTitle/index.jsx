import styles from './PostTitle.module.css'

const PostTitle = ({ children, capitalize, flex }) => {
  return (
    <h1
      className={`${styles.title} ${capitalize ? styles.capitalize : ''} ${
        flex ? styles.title_flex : ''
      }`}
    >
      {children}
    </h1>
  )
}

export default PostTitle
