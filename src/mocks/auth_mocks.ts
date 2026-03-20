import type { AuthResponse, AuthUser, Tenant } from "@/types/auth-types";

export const mockAuthUser: AuthUser = {
    user_id: "user-id-1",
    email: "success.brainztechs+admin@gmail.com",
    date_of_birth: "2000-01-01",
    first_name: "Success",
    gender: "Male",
    image: "https://picsum.photos/id/237/200/300",
    last_name: "Admin",
    phone_number: "9876543210",
    role: "Admin",
    is_profile_completed: true
}

export const mockTenant: Tenant= {
  id: "tenant-1",
  code: "brainzshop",
  business_name: "Brainz Shop",
  owner_name: "Success Admin",
  owner_email: "success.brainztechs+admin@gmail.com",
};

export const mockUserTenant: { tenant: Tenant, user: AuthUser} = {
    tenant: mockTenant,
    user: mockAuthUser
}

export const mockAuthResponse: AuthResponse = {
    success: false,
    message: "Auth Registration completed",
    data: {
        is_profile_completed: false,
        token: "randomToken",
        user_id: "user-id-1"
    }
}