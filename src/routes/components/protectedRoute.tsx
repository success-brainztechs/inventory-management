import { useAuthStore } from "@/store/auth-store"
import { useNavigate } from "react-router"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const { isAuthenticated, userDetails, isLoading, error } = useAuthStore()

  if (isLoading) {
    return <p>Loading...</p> // Replace with appropriate loader or spinner component
  }

  if (error || !isAuthenticated) {
    navigate("/")
    return
  }

  if (userDetails && !userDetails.is_profile_completed) {
    if (location.pathname !== "/complete-profile") {
      navigate("/complete-profile", { replace: true })
      return
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute
