import { useState } from 'react'
import Counter from './component/Counter'

function App() {
  const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <h2>{value}</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
