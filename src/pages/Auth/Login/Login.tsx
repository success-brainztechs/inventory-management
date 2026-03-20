import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShieldCheck, Users } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

const Login = () => {
  const navigate = useNavigate()
  // Admin form
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")

  // Staff form
  const [workspace, setWorkspace] = useState("")
  const [username, setUsername] = useState("")
  const [staffPassword, setStaffPassword] = useState("")

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!adminEmail || !adminPassword) {
      toast.error("Please fill in all fields")
      return
    }
    // const ok = loginAdmin(adminEmail, adminPassword)
    toast.success("Welcome back!")
    navigate("/")
  }

  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!workspace || !username || !staffPassword) {
      toast.error("Please fill in all fields")
      return
    }
    toast.success("Logged in successfully")
    navigate("/")
  }
  return (
    <Card>
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-lg">Sign in to your account</CardTitle>
        <CardDescription>Choose your login method below</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="admin">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="admin" className="gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Admin Login
            </TabsTrigger>
            <TabsTrigger value="staff" className="gap-1.5">
              <Users className="h-3.5 w-3.5" />
              Staff Login
            </TabsTrigger>
          </TabsList>

          <TabsContent value="admin">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@company.com"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="flex items-center justify-between text-xs">
                <button type="button" className="text-primary hover:underline">
                  Forgot Password?
                </button>
                <Link to="/signup" className="text-primary hover:underline">
                  Create Workspace
                </Link>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="staff">
            <form onSubmit={handleStaffLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workspace">Workspace Code</Label>
                <Input
                  id="workspace"
                  placeholder="brainzshop"
                  value={workspace}
                  onChange={(e) => setWorkspace(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Use the workspace code provided by your administrator.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="staff-username">Username</Label>
                <Input
                  id="staff-username"
                  placeholder="storekeeper"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="staff-password">Password</Label>
                <Input
                  id="staff-password"
                  type="password"
                  placeholder="••••••••"
                  value={staffPassword}
                  onChange={(e) => setStaffPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default Login
