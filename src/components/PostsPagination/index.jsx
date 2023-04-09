import ReactPaginate from 'react-paginate'
import Posts from '../PostsGrid'

import usePagination from '../../hooks/usePagination'

const PostsPagination = ({ posts, meta, isProduction }) => {
  const { handlePageClick, data, pageCount } = usePagination({
    meta,
    posts,
    isProduction,
  })

  let newPosts = posts.slice(0, meta.pagination.limit)

  if (data.length > 0) {
    newPosts = data
  }

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
        activeClassName={'active'}
      />
    </>
  )
}

export default PostsPagination
