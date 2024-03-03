import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import Post from '../pages/Post'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/error" element={<Error />} />
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  )
}

export default AppRouter
