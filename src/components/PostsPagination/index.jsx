import ReactPaginate from 'react-paginate'
import Posts from '../PostsGrid'
import styles from './PostsPagination.module.css'

import usePagination from '../../hooks/usePagination'

const PostsPagination = ({ posts, meta, isProduction }) => {
  const { handlePageClick, data, pageCount } = usePagination({
    meta,
    posts,
    isProduction,
  })

  let newPosts = posts.slice(0, meta.pagination.limit)

  if (data.length > 0) newPosts = data

  return (
    <>
      {posts.length > 0 && <Posts posts={newPosts} columns='3' />}

      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={styles.active}
        className={styles.pagination}
        pageClassName={styles.item}
        pageLinkClassName={styles.itemLink}
        previousClassName={`${styles.item} ${styles.previous}`}
        nextClassName={`${styles.item} ${styles.next}`}
        disabledClassName={styles.disabled}
        previousLinkClassName={styles.itemLink}
        nextLinkClassName={styles.itemLink}
      />
    </>
  )
}

export default PostsPagination
