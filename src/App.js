import './styles/App.css'
import NavBar from './component/NavBar'
import AppRouter from './component/AppRouter'
import { useEffect, useState } from 'react'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('auth'))
  useEffect(() => {
    setIsAuth(!!localStorage.getItem('auth'))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  )
}

export default App
