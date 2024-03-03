import './styles/App.css'
import NavBar from './component/NavBar'
import AppRouter from './component/AppRouter'
import { useEffect, useState } from 'react'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setIsAuth(!!localStorage.getItem('auth'))
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
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
