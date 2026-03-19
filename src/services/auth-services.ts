import axios from "@/config/axios";
import type { AuthResponse, RegistrationPayload } from "@/types/auth-types";

// The registration service
export const registrationService = async (
  payload: RegistrationPayload
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `/register-user`,
    payload
  );
  return response.data;
};