import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import Post from '../pages/Post'
import Login from '../pages/Login'

export const privateRoutes = [
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

export const publicRoutes = [{ path: '/login', element: <Login /> }]
