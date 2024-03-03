import MyButton from '../component/UI/button/MyButton'
import MyInput from '../component/UI/input/MyInput'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput text="text" placeholder="login" />
        <MyInput text="password" placeholder="password" />
        <MyButton>Process</MyButton>
      </form>
    </div>
  )
}

export default Login
