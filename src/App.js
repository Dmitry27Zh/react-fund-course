import { useRef, useState } from 'react'
import Counter from './component/Counter'
import ClassCounter from './component/ClassCounter'
import './styles/App.css'
import PostsList from './component/PostsList'
import MyButton from './component/UI/button/MyButton'
import MyInput from './component/UI/input/MyInput'

function App() {
  const [value, setValue] = useState('Text')
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'description' },
    { id: 2, title: 'JS 2', body: 'description' },
    { id: 3, title: 'JS 3', body: 'description' },
  ])
  const titleInputRef = useRef()
  const bodyInputRef = useRef()
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: titleInputRef.current.value,
      body: bodyInputRef.current.value,
    }
    setPosts([...posts, newPost])
    titleInputRef.current.value = ''
    bodyInputRef.current.value = ''
  }

  return (
    <div className="App">
      <form>
        <MyInput ref={titleInputRef} type="text" placeholder="Title" />
        <MyInput ref={bodyInputRef} type="text" placeholder="Description" />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostsList posts={posts} title="List 1" />
      <PostsList posts={posts} title="List 2" />
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
