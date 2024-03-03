import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import NavBar from './component/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </div>
  )
}

export default App
