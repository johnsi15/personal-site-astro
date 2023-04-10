import { useState, useEffect, useCallback } from 'react'

function usePagination({ meta, posts, isProduction }) {
  // const [page, setPage] = useState(0)
  // const [pageCount, setPageCount] = useState(0)
  // const [data, setData] = useState([])
  // console.log(meta)

  const [currentPage, setCurrentPage] = useState(meta.pagination.page)
  const [postsPerPage] = useState(meta.pagination.limit)

  useEffect(() => {
    // loadPosts()
    // setPageCount(Math.ceil(meta.pagination.total / meta.pagination.limit))
    // console.log('ok paso serPageCount')

    if (isProduction) {
      // eslint-disable-next-line no-undef
      // fbq('track', 'ViewContent', { content_name: 'blog' })
      // eslint-disable-next-line no-undef
      dataLayer.push({
        titulo: 'blog',
      })
    }
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const nextPage = () => {
    if (currentPage !== meta.pagination.pages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePageClick = useCallback(
    (event, pageNumber) => {
      // console.log('Event select', event.selected)
      console.log({ event: event })
      console.log({ pageNumber })
      // let page = event.selected + 1
      // console.log('This si page handle Click ', page)
      // setPage(page)
      // loadPosts(page)
      if (currentPage !== pageNumber) {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
      }
    },
    [currentPage]
  )
  // console.log('Thi is page count -> ' + pageCount)
  // console.log('Thi is page -> ' + page)
  return {
    handlePageClick,
    data: currentPosts,
    previousPage,
    nextPage,
    currentPage,
  }
}

export default usePagination
