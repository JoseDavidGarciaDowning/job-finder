import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";



interface ApplicantStore {
    firstName: string;
    lastName: string;


    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}

export const storeApi: StateCreator<ApplicantStore> = (set) => ({
    firstName: "",
    lastName: "",

    setFirstName: (name: string) => {
        set({ firstName: name });
    },
    setLastName: (name: string) => {
        set({ lastName: name });
    }
})


export const useApplicantStore = create<ApplicantStore>()(
  devtools(
    persist(storeApi, { name: "applicant-store", storage: customSessionStorage })
  )
);

