import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";



interface ApplicantStore {
    firstName: string;
    lastName: string;
    hasProfile: boolean;


    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
    setHasProfile: (hasProfile: boolean) => void;
}

export const storeApi: StateCreator<ApplicantStore> = (set) => ({
    firstName: "",
    lastName: "",
    hasProfile: false,

    setFirstName: (name: string) => {
        set({ firstName: name });
    },
    setLastName: (name: string) => {
        set({ lastName: name });
    },
    setHasProfile: (hasProfile: boolean) => {
        set({ hasProfile });
    }
})


export const useApplicantStore = create<ApplicantStore>()(
  devtools(
    persist(storeApi, { name: "applicant-store", storage: customSessionStorage })
  )
);

