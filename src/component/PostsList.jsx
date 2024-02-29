import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'

const PostsList = ({ posts, title, removePost }) => {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>No posts...</h1>
  } else {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <TransitionGroup>
          {posts.map((post) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem post={post} removePost={removePost}></PostItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    )
  }
}

export default PostsList
