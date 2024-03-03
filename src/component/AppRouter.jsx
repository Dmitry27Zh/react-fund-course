import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { useContext } from 'react'
import { AuthContext } from '../context'

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route, index) => <Route key={index} {...route} />)
        : publicRoutes.map((route, index) => <Route key={index} {...route} />)}
    </Routes>
  )
}

export default AppRouter
