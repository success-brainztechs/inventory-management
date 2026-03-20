import type { BaseResponse } from "./base-types"

export interface AuthUser {
  user_id: string
  email: string
  date_of_birth: string
  first_name: string
  gender: string
  image: string
  last_name: string
  phone_number: string
  role: string
  is_profile_completed: boolean
}

export interface Tenant {
  id: string
  code: string
  business_name: string
  owner_name: string
  owner_email: string
}

export interface AuthData {
  is_profile_completed: boolean
  token: string
  user_id: string
}

export interface RegistrationPayload {
  business_name: string
  owner_name: string
  email: string
  password: string
  phone_number?: string
}

export interface AuthResponse extends BaseResponse {
    data: AuthData
}
