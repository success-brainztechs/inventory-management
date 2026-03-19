import type { AuthData, AuthUser, RegistrationPayload } from "@/types/auth-types"
import { create } from "zustand";
import type { useNavigate } from "react-router"
import { mockAuthResponse, mockAuthUser } from "@/mocks/auth_mocks";

interface AuthState {
  isLoading: boolean
  authData: AuthData | null
  userDetails: AuthUser | null
  isAuthenticated: boolean
  error: string | null
  initializeAuth: (navigate: ReturnType<typeof useNavigate>) => void
  registerUserWorkspace: (
    payload: RegistrationPayload
  ) => Promise<void>;
  fetchUserDetails: () => Promise<void>;
  clearUserDetails: (navigate: ReturnType<typeof useNavigate>) => void;
  setIsAuthenticated: (auth: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: true,
  authData: null,
  userDetails: null,
  isAuthenticated: false,
  error: null,
  initializeAuth: (navigate: ReturnType<typeof useNavigate>) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false, isLoading: false });
      navigate("/"); // Redirect to home if not authenticated
    }
  },

  registerUserWorkspace: async (payload) => {
    set({ isLoading: true });
    try{
      // const response = await registrationService(payload)
      console.log("payload: ", payload)
      const response = mockAuthResponse;
      set({ authData: response.data });
    } catch(error) {
      console.error("Failed to register user workspace", error);
    } finally {
      set({ isLoading: false })
    }
  },

  fetchUserDetails: async () => {
    set({ isLoading: true });
    try{
      // const response = await fetchUserDetailsService();
      const response = mockAuthUser
      set({ userDetails: response, isAuthenticated: true })
    } catch (error) {
      console.error("Failed to fetch user details", error);
    } finally {
      set({ isLoading: false });
    }
  },

  clearUserDetails: (navigate: ReturnType<typeof useNavigate>) => {
    set({
      authData: null,
      userDetails: null,
      isAuthenticated: false,
      error: null,
    });
    localStorage.removeItem("accessToken");
    navigate("/"); // Redirect to landing page on clear
  },

  setIsAuthenticated: (auth: boolean) => set({ isAuthenticated: auth })
}))