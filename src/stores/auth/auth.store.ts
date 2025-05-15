import { create, StateCreator } from "zustand";
import type { AuthStatus, User } from "../../interfaces";
import { devtools, persist } from "zustand/middleware";
import { AuthService } from "../../auth/services/auth.service";
import { customSessionStorage } from "../storages/capacitor.storage";
//preguntar

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "checking",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authenticated", token, user });
      
    } catch (error) {
      console.log(error);
      set({ status: "not-authenticated", token: undefined, user: undefined });
    }
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeApi, { name: "auth-store", storage: customSessionStorage })
  )
);
