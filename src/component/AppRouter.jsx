import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'

const AppRouter = () => {
  const isAuth = true

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route, index) => <Route key={index} {...route} />)
        : publicRoutes.map((route, index) => <Route key={index} {...route} />)}
    </Routes>
  )
}

export default AppRouter
