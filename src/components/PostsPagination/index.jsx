// import ReactPaginate from 'react-paginate'
import Posts from '../PostsGrid'
// import styles from './PostsPagination.module.css'

import usePagination from '../../hooks/usePagination'
import Pagination from '../Pagination'

const PostsPagination = ({ posts, meta, isProduction }) => {
  const { handlePageClick, data, previousPage, nextPage, currentPage } =
    usePagination({
      meta,
      posts,
      isProduction,
    })

  let newPosts = posts.slice(0, meta.pagination.limit)

  if (data.length > 0) newPosts = data

  return (
    <>
      {posts.length > 0 && <Posts posts={newPosts} columns='3' />}

      <Pagination
        postsPerPage={meta.pagination.limit}
        totalPosts={meta.pagination.total}
        paginate={handlePageClick}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />

      {/* <ReactPaginate
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
      /> */}
    </>
  )
}

export default PostsPagination
