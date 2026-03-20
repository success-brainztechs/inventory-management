import { AppSidebar } from "@/components/layout/DashboardSidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useAuthStore } from "@/store/auth-store"
import { KeyRound, LogOut, Moon, Sun, User } from "lucide-react"
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router"

const MainLayout = () => {
  const [dark, setDark] = useState(false)
  const { userDetails, tenantDetails, clearUserandTenantDetails } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setDark(!dark)
  }
  const initials = `${userDetails?.first_name?.[0] ?? ""}${userDetails?.last_name?.[0] ?? ""}`

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-14 shrink-0 items-center gap-4 border-b bg-card px-4">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-3">
              {tenantDetails && (
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {tenantDetails.business_name}
                </span>
              )}
              <Button
                onClick={toggleTheme}
                className="rounded-md p-2 transition hover:bg-muted hover:text-foreground"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full p-1 pr-2 transition-colors hover:bg-muted">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {initials}
                    </div>
                    <div className="hidden text-left sm:block">
                      <p className="text-sm leading-none font-medium text-foreground">
                        {`${userDetails?.first_name} ${userDetails?.last_name}`}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{userDetails?.role}</p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{`${userDetails?.first_name} ${userDetails?.last_name}`}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {userDetails?.email}
                    </p>
                    <Badge variant="outline" className="mt-1 text-[10px]">
                      {userDetails?.role}
                    </Badge>
                    {/* {tenant && <p className="text-[10px] text-muted-foreground mt-1">Workspace: {tenant.code}</p>} */}
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      Workspace: {tenantDetails?.business_name}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-3.5 w-3.5" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <KeyRound className="mr-2 h-3.5 w-3.5" />
                    Change Password
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={()=>clearUserandTenantDetails(navigate)}
                    className="text-destructive"
                  >
                    <LogOut className="mr-2 h-3.5 w-3.5" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout
