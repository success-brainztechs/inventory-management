import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            IV
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">InvenTrack</h1>
            <p className="text-xs text-muted-foreground">Inventory & Billing</p>
          </div>
        </div>

        <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout