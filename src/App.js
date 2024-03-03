import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import About from './pages/About'
import Posts from './pages/Posts'
import NavBar from './component/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App
