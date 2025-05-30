import { create, StateCreator } from "zustand";
import type { AllowedRoles, AuthStatus, User } from "../../interfaces";
import { devtools, persist } from "zustand/middleware";
import { AuthService } from "../../auth/services/auth.service";
import { customSessionStorage } from "../storages/capacitor.storage";
//preguntar

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  registerUser: (
    email: string,
    password: string,
    role: AllowedRoles
  ) => Promise<{ success: boolean; error?: string }>;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "checking",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authenticated", token, user });
      return { success: true };
    } catch (error: any) {
      console.log(error);
      set({ status: "not-authenticated", token: undefined, user: undefined });
      return { success: false, error: error?.message || "Login failed" };
    }
  },

  registerUser: async (
    email: string,
    password: string,
    role: AllowedRoles
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const { token, ...user } = await AuthService.register(
        email,
        password,
        role
      );
      set({ status: "authenticated", token, user });
      return { success: true };
    } catch (error: any) {
      console.log(error);
      set({ status: "not-authenticated", token: undefined, user: undefined });
      return { success: false, error: error?.message || "Registration failed" };
    }
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeApi, { name: "auth-store", storage: customSessionStorage })
  )
);
