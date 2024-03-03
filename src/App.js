import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App
