import { useState } from 'react'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'
import MySelect from './component/UI/select/MySelect'
import MyInput from './component/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ghl', body: '3description' },
    { id: 2, title: 'def', body: '1description' },
    { id: 3, title: 'abc', body: '2description' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput placeholder="Search..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        <MySelect
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'Name' },
            { value: 'body', name: 'Description' },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {posts.length === 0 ? 'No posts...' : <PostsList posts={posts} title="List 1" removePost={removePost} />}
    </div>
  )
}

export default App
