import React from "react"
import { Outlet } from "react-router"
import { AuthProvider } from "@/providers/AuthProvider"

const Blank: React.FC = () => {
  return (
    <AuthProvider>
      <div className="h-screen">
        <main>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  )
}

export default Blank
