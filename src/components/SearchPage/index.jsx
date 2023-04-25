import useSearchPage from '../../hooks/useSearchPage'
import PostsGrid from '../PostsGrid'
import styles from './SearchPage.module.css'

const SearchPage = () => {
  const { state, onChange } = useSearchPage()
  // console.log({ state })
  return (
    <>
      <div className={styles.searcher__container}>
        <form className={styles.search__form}>
          <input
            type='text'
            value={state.search}
            placeholder='Buscar...'
            onChange={onChange}
          />
        </form>
      </div>

      <div className={styles.results}>
        {state.loading && <p className={styles.loading}>Loading...</p>}

        {state.data.length >= 1 && <PostsGrid posts={state.data} columns='3' />}

        {state.search.length >= 3 &&
          state.data.length <= 0 &&
          !state.loading && (
            <p className={styles.search_not_found}>
              No se encontraron resultados para la búsqueda.
            </p>
          )}
      </div>
    </>
  )
}

export default SearchPage
