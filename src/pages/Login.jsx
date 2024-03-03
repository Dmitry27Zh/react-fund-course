import { useContext } from 'react'
import MyButton from '../component/UI/button/MyButton'
import MyInput from '../component/UI/input/MyInput'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    navigate('..')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput text="text" placeholder="login" />
        <MyInput text="password" placeholder="password" />
        <MyButton>Process</MyButton>
      </form>
    </div>
  )
}

export default Login
