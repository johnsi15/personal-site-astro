import { useState, useEffect, useCallback } from 'react'

function usePagination({ meta, posts, isProduction }) {
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [data, setData] = useState([])
  // console.log(meta)

  useEffect(() => {
    // loadPosts()
    setPageCount(Math.ceil(meta.pagination.total / meta.pagination.limit))
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

  // useEffect(() => {
  //   setData(posts.slice(0, meta.pagination.limit))
  // }, [])

  async function loadPosts(page) {
    try {
      // console.log('This is page ->', page)
      const postsPerPage = meta.pagination.limit
      // console.log({ postsPerPage })
      const indexOfLastPost = page * postsPerPage
      // console.log({ indexOfLastPost })
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

      // console.log(currentPosts)
      setData(currentPosts)
    } catch (err) {
      console.error('Algo salio mal ', err)
    }
  }

  // const handlePageClick = (event) => {
  //   // console.log('Event select', event.selected)
  //   let page = event.selected + 1
  //   // console.log('This si page handle Click ', page)
  //   setPage(page)

  //   window.scrollTo(0, 0)
  // }

  const handlePageClick = useCallback(
    (event) => {
      // console.log('Event select', event.selected)
      let page = event.selected + 1
      // console.log('This si page handle Click ', page)
      setPage(page)
      loadPosts(page)
      window.scrollTo(0, 0)
    },
    [page]
  )
  // console.log('Thi is page count -> ' + pageCount)
  // console.log('Thi is page -> ' + page)
  return { handlePageClick, data, page, pageCount }
}

export default usePagination
