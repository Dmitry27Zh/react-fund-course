import { useEffect, useState } from 'react'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'
import PostFilter from './component/PostFilter'
import MyModal from './component/UI/modal/MyModal/MyModal'
import MyButton from './component/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'
import MyLoader from './component/UI/loader/MyLoader/MyLoader'
import { useFetching } from './hooks/useFetching'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton className="start" style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error occurred: {postError}</h1>}
      {isPostsLoading ? (
        <MyLoader />
      ) : (
        <PostsList posts={sortedAndSearchedPosts} title="List 1" removePost={removePost} />
      )}
    </div>
  )
}

export default App
