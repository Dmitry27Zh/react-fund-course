import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, removePost }) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => navigate(`/posts/${post.id}`)}>Открыть</button>
        <button onClick={() => removePost(post)}>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem
