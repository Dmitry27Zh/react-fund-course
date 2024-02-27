import PostItem from './PostItem'

const PostsList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </>
  )
}

export default PostsList
