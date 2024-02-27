import { useState } from 'react'
import Counter from './component/Counter'
import ClassCounter from './component/ClassCounter'
import './styles/App.css'
import PostItem from './component/PostItem'

function App() {
  const [value, setValue] = useState('Text')
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'description' },
    { id: 2, title: 'JS 2', body: 'description' },
    { id: 3, title: 'JS 3', body: 'description' },
  ])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>List</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
