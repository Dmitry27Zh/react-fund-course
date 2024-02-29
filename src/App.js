import { useState } from 'react'
import Counter from './component/Counter'
import ClassCounter from './component/ClassCounter'
import './styles/App.css'
import PostsList from './component/PostsList'
import PostForm from './component/PostForm'

function App() {
  const [value, setValue] = useState('Text')
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'description' },
    { id: 2, title: 'JS 2', body: 'description' },
    { id: 3, title: 'JS 3', body: 'description' },
  ])
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((existingPost) => existingPost.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      <PostsList posts={posts} title="List 1" removePost={removePost} />
      <PostsList posts={posts} title="List 2" removePost={removePost} />
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
