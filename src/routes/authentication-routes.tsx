import AuthLayout from "@/layouts/AuthLayout";
import PublicRoute from "./components/publicRoute";
import Login from "@/pages/Auth/Login";
import ProtectedRoute from "./components/protectedRoute";
import CompleteProfile from "@/pages/Auth/CompleteProfile";
import SignUp from "@/pages/Auth/SignUp";

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/complete-profile",
        element: <CompleteProfile />,
      },
    ],
  }
];

export default AuthenticationRoutes;
