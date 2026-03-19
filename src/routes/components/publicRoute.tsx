import { Navigate } from "react-router";

import { useAuthStore } from "@/store/auth-store";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <p>Loading...</p>; // Replace with a spinner or loading component
  }

  if (isAuthenticated) {
    // If the user is logged in, redirect to the dashboard
    return <Navigate to="/dashboard/home" />;
  }

  // If the user is not logged in, render the public page
  return <>{children}</>;
};

export default PublicRoute;