import { useState } from 'react'
import Counter from './component/Counter'
import ClassCounter from './component/ClassCounter'
import './styles/App.css'
import PostItem from './component/PostItem'

function App() {
  const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'JS', body: 'description' }} />
      <PostItem post={{ id: 2, title: 'JS', body: 'description' }} />
      <PostItem post={{ id: 3, title: 'JS', body: 'description' }} />
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
