import { useState } from 'react'
import Counter from './component/Counter'
import ClassCounter from './component/ClassCounter'

function App() {
  const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
