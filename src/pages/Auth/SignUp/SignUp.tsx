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
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !form.businessName ||
      !form.ownerName ||
      !form.email ||
      !form.password
    ) {
      toast.error("Please fill in all fields")
      return
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }
    toast.success("Workspace created! Welcome to InvenTrack.")
    navigate("/")
  }

  const set = (key: string, val: string) =>
    setForm((f) => ({ ...f, [key]: val }))
  return (
    <Card>
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-lg">Create Workspace</CardTitle>
        <CardDescription>Set up your business on InvenTrack</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Business Name</Label>
            <Input
              placeholder="Brainz Shop"
              value={form.businessName}
              onChange={(e) => set("businessName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Owner Name</Label>
            <Input
              placeholder="John Doe"
              value={form.ownerName}
              onChange={(e) => set("ownerName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="admin@company.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => set("password", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={(e) => set("confirmPassword", e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Create Workspace
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUp
