import { mockAuthUser } from "@/mocks/auth_mocks"
import type { AuthUser } from "@/types/auth-types"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"

interface AuthContextProps {
  userDetails: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  setIsAuthenticated: (status: boolean) => void
  setUserDetails: (details: AuthUser) => void
  clearUserDetails: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState<AuthUser | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const initializeAuth = useCallback(async () => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      setIsLoading(false)
      navigate("/") // Redirecting to landing page if not authenticated
    }
  }, [])

  const fetchCustomerDetails = useCallback(async () => {
    setIsLoading(true)
    try {
      // Use API and remove mock in ideal case
      // const response = await fetchCustomerDetailsService()
      const response = mockAuthUser
      setUserDetails(response)
      setError(null)
      if (!response) {
        navigate("/") // Change according to need
      }
    } catch (err: any) {
      console.error("Error fetching user details: ", err)
      setError("Failed to fetch user details")
      setUserDetails(null)
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearUserDetails = () => {
    setUserDetails(null)
    setIsAuthenticated(false)
    setError(null)
    localStorage.removeItem("accessToken")
    navigate("/") // Redirect to landing page
  }

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  useEffect(() => {
    if (isAuthenticated) {
      fetchCustomerDetails()
    } else {
      setIsLoading(false) // Stop loading if no token
    }
  }, [isAuthenticated, fetchCustomerDetails])

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        isAuthenticated,
        isLoading,
        error,
        setIsAuthenticated,
        setUserDetails,
        clearUserDetails,
      }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("useAuthContext must be added within a AuthProvider")
    }

    return context;
}
