/* eslint-disable camelcase */
import Cover from '../Cover'
import PostTitle from '../PostTitle'
import PostProfile from '../PostProfile'

const PostHeader = ({
  title,
  cover,
  capitalize = false,
  primary_author,
  primary_tag,
  published_at,
}) => {
  console.log({ primary_tag })
  return (
    <Cover>
      <PostTitle capitalize={capitalize && 'capitalize'}>{title}</PostTitle>
      <PostProfile
        primary_author={primary_author}
        primary_tag={primary_tag}
        published_at={published_at}
      />
    </Cover>
  )
}

export default PostHeader
