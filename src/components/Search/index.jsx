import useSearch from '../../hooks/useSearch'
import styles from './Search.module.css'

const Search = () => {
  const { state, onChange, handleSubmit } = useSearch()

  const { search, data, loading } = state
  // console.log('This is state the component -> ', state)

  return (
    <div id="Search_content" className={styles.Search}>
      <form className={styles.search__form} onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={search}
            placeholder='Algolia'
            onChange={onChange}
          />
        </label>
        <button type='submit'>Buscar</button>
      </form>
      {search.length >= 3 && data.length >= 1 && (
        <div className={styles.search__results}>
          {data.map(({ id, title, slug }) => {
            return (
              <article className={styles['post-item']} key={id}>
                <a
                  className={styles.title}
                  href={`/blog/${encodeURIComponent(slug)}`}
                >
                  {title}
                </a>
              </article>
            )
          })}
        </div>
      )}

      {search.length >= 3 && data.length <= 0 && !loading && (
        <div className={styles.search__results}>
          <div className={styles.search__noResults}>
            <span>No tenemos resultados</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
