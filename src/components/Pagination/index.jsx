import styles from './Pagination.module.css'
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles['pagination-container']}>
      <ul className={styles.pagination}>
        <li
          onClick={previousPage}
          className={`${styles.pageNumber} ${styles.previous} ${
            currentPage === 1 ? styles.disabled : ''
          }`}
        >
          <a
            className={styles.pageNumberLink}
            tabIndex='0'
            role='button'
            aria-disabled='false'
          >
            Anterior
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={(e) => paginate(e, number)}
            className={`${styles.pageNumber} ${
              currentPage === number ? styles.active : ''
            }`}
          >
            <a
              className={styles.pageNumberLink}
              role='button'
              tabIndex='0'
              aria-label={`Page ${number}`}
            >
              {number}
            </a>
          </li>
        ))}

        <li
          onClick={nextPage}
          className={`${styles.pageNumber} ${styles.next} ${
            currentPage === pageNumbers.length ? styles.disabled : ''
          }`}
        >
          <a
            className={styles.pageNumberLink}
            tabIndex='0'
            role='button'
            aria-disabled='false'
          >
            Siguiente
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
