import { useEffect, useReducer } from 'react'
// import { useRouter } from 'next/router'
import useSearchReducer from './useSearchReducer'
import initialState from './initialState'
import index from '../helpers/algolia'
import { useState } from 'react'

function useSearchPage() {
  const [state, dispatch] = useReducer(useSearchReducer, initialState)
  const [word, setWord] = useState('')

  const onChange = ({ target }) => {
    // console.log('Value is -> ', target.value)
    dispatch({ type: 'INPUT_SEARCH', payload: target.value })
  }

  // const router = useRouter()
  // console.log('router obj', router.query.word)
  // console.log(router)
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const word = urlParams.get('word')
    setWord(word)
    console.log('This is word', word)
  }, [])

  useEffect(() => {
    let mounted = true
    // console.log('This is search useEffect -> ', state.search)

    if (state.search) {
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      // dispatch({ type: 'CHANGE_LOADING' })
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    }

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false)
  }, [state.search])

  useEffect(() => {
    let mounted = true
    // console.log('This is search useEffect -> ', state.search)
    // console.log('This is router query', router.query)

    if (word) {
      dispatch({ type: 'INPUT_SEARCH', payload: word })

      dispatch({ type: 'FETCH_SEARCH' })
      // console.log('Fetch search router query word', router.query.word)

      index.search(word).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    } else {
      // dispatch({ type: 'RESET' })
      dispatch({ type: 'FETCH_SEARCH' })

      index.search(state.search).then(({ hits }) => {
        if (mounted) {
          dispatch({ type: 'FETCH_SEARCH_SUCCESS', payload: hits })
        }
      })
    }

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false)
  }, [word])

  return { state, onChange }
}

export default useSearchPage
