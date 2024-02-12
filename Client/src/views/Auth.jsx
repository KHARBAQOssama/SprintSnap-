import { Outlet } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import ResetPassword from '../components/auth/ResetPassword'
import ForgetPassword from '../components/auth/forgetPassword'
import Logo from '../components/common/Logo'
const Auth = () => {
  return (
    <div className='flex flex-col px-8 h-[100vh] w-[100vw] py-4 overflow-y-auto bg-light-auth-bg bg-no-repeat bg-cover bg-center gap-24'>
        <Logo classItems={"h-[3.5em]"} containerClass={""} ></Logo>
        <Outlet/>
    </div>
  )
}

export default Auth