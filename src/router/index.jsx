import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import Post from '../pages/Post'

export const routes = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/posts/:id',
    element: <Post />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/',
    element: <Navigate to="/posts" />,
  },
  {
    path: '*',
    element: <Navigate to="/error" />,
  },
]
