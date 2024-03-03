import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { useContext } from 'react'
import { AuthContext } from '../context'
import MyLoader from './UI/loader/MyLoader/MyLoader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)
  if (isLoading) {
    return <MyLoader />
  } else {
    return (
      <Routes>
        {isAuth
          ? privateRoutes.map((route, index) => <Route key={index} {...route} />)
          : publicRoutes.map((route, index) => <Route key={index} {...route} />)}
      </Routes>
    )
  }
}

export default AppRouter
