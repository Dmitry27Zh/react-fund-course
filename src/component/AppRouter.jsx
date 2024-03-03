import { Route, Routes } from 'react-router-dom'
import { routes } from '../router'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  )
}

export default AppRouter
