import { Form, Input, Checkbox, Button } from 'antd'

let a = 1
function LoginData() {
   return (
      <Form>
         123
      </Form>
   )
}
function Login(props) {
   console.log(props);
   return (
      <div className='form'>
         登录页面{ a }
         <LoginData></LoginData>
      </div>
   )
}

export default Login