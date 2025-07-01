import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";

interface CompanyStore {
  name: string;
  description: string;
  hasProfile: boolean;

  setName: (name: string) => void;
  setDescription: (name: string) => void;
  setHasProfile: (hasProfile:boolean)=> void;
}

export const storeApi: StateCreator<CompanyStore> = (set) => ({
  name: "",
  description: "",
  hasProfile: false,
  setName: (name: string) => {
    set({ name });
  },
  setDescription: (description: string) => {
    set({ description });
  },
  setHasProfile: (hasProfile: boolean) => {
    set({ hasProfile });
  },
});

export const useCompanyStore = create<CompanyStore>()(
  devtools(
    persist(storeApi, { name: "company-store", storage: customSessionStorage })
  )
);
