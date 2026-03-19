import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div>
      This is main Layout
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout