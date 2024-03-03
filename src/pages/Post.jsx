import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { useEffect, useState } from 'react'
import MyLoader from '../component/UI/loader/MyLoader/MyLoader'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  useEffect(() => {
    fetchPostById(id)
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
    </div>
  )
}

export default Post
