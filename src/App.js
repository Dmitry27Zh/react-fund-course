import { useState } from 'react'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'
import PostFilter from './component/PostFilter'
import MyModal from './component/UI/modal/MyModal/MyModal'
import MyButton from './component/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ghl', body: '3description' },
    { id: 2, title: 'def', body: '1description' },
    { id: 3, title: 'abc', body: '2description' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortedAndSearchedPosts} title="List 1" removePost={removePost} />
    </div>
  )
}

export default App
