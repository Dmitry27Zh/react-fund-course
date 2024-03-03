import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
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
