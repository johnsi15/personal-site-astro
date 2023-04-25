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
    </>
  )
}

export default PostsPagination
