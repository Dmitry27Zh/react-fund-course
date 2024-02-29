import PostItem from './PostItem'

const PostsList = ({ posts, title, removePost }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} removePost={removePost}></PostItem>
      ))}
    </>
  )
}

export default PostsList
