import { useMemo, useState } from 'react'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'
import PostFilter from './component/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ghl', body: '3description' },
    { id: 2, title: 'def', body: '1description' },
    { id: 3, title: 'abc', body: '2description' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.trim().toLowerCase().includes(filter.query.trim().toLowerCase()))
  }, [sortedPosts, filter.query])
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortedAndSearchedPosts} title="List 1" removePost={removePost} />
    </div>
  )
}

export default App
