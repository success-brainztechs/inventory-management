import { AppSidebar } from "@/components/layout/DashboardSidebar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { KeyRound, LogOut, User } from "lucide-react"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-card px-4 gap-4 shrink-0">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-3">
              {/* {tenant && (
                <span className="text-xs text-muted-foreground hidden sm:block">{tenant.businessName}</span>
              )} */}
              <span className="text-xs text-muted-foreground hidden sm:block">My Tenant</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full hover:bg-muted p-1 pr-2 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                      SP
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-foreground leading-none">Success Admin</p>
                      <p className="text-[10px] text-muted-foreground">Admin</p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">Success Admin</p>
                    <p className="text-xs text-muted-foreground">success@gmail.com</p>
                    <Badge variant="outline" className="mt-1 text-[10px]">Admin</Badge>
                    {/* {tenant && <p className="text-[10px] text-muted-foreground mt-1">Workspace: {tenant.code}</p>} */}
                    <p className="text-[10px] text-muted-foreground mt-1">Workspace: success-workspace</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><User className="h-3.5 w-3.5 mr-2" />Profile</DropdownMenuItem>
                  <DropdownMenuItem><KeyRound className="h-3.5 w-3.5 mr-2" />Change Password</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={()=>console.log("Decide later")} className="text-destructive"><LogOut className="h-3.5 w-3.5 mr-2" />Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Outlet/>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout