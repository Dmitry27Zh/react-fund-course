import './styles/App.css'
import NavBar from './component/NavBar'
import AppRouter from './component/AppRouter'
import { useState } from 'react'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false)

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
