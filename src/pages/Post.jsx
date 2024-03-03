import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { useEffect, useState } from 'react'
import MyLoader from '../component/UI/loader/MyLoader/MyLoader'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })
  useEffect(() => {
    fetchPostById(id)
    fetchComments(id)
  }, [])

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Comments</h2>
      {isCommentsLoading ? (
        <MyLoader />
      ) : (
        comments.map((comment) => (
          <div key={comment.id} style={{ marginTop: 15 }}>
            <h3>{comment.email}</h3>
            <div>{comment.body}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default Post
