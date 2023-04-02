import React from 'react'
// import TrackVisibility from 'react-on-screen'
import PostsDetail from '../PostsDetail'
import PostsDetailHome from '../PostsDetailHome'
import styles from './PostsGrid.module.css'

const Posts = ({ posts = [], columns }) => {
  // Three columns of the section blog -> https://johnserrano.co/blog
  if (columns === '3') {
    return (
      <section id='Posts' className={styles.PostsThree}>
        {/* {posts.map((post) => (
          <PostsDetail key={post.id} {...post} />
        ))} */}
      </section>
    )
  }

  // Two columns of the section home -> https://johnserrano.co/
  return (
    <section id='Posts' className={styles.Posts}>
      {posts.map((post) => (
        <PostsDetailHome
          key={post.id}
          slug={post.slug}
          {...post.data}
          collection={post.collection}
        />
      ))}
    </section>
  )
}

export default React.memo(Posts)
