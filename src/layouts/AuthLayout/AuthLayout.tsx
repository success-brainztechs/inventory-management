import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      This is auth layout
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout