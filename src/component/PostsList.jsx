import PostItem from './PostItem'

const PostsList = ({ posts, title, removePost }) => {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>No posts...</h1>
  } else {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} removePost={removePost}></PostItem>
        ))}
      </>
    )
  }
}

export default PostsList
