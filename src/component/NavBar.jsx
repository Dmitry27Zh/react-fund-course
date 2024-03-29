import { Link } from 'react-router-dom'
import MyButton from './UI/button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../context'

const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Logout</MyButton>
      <div className="navbar__links">
        <Link className="navbar__link" to="/about">
          About
        </Link>
        <Link className="navbar__link" to="/posts">
          Posts
        </Link>
      </div>
    </div>
  )
}

export default NavBar
