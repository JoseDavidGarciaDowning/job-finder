import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";
import { OfferDuration, WorkplaceType, WorkSchedule } from "../../interfaces/offer.interfaces";

interface Skill {
  id: string;
  name: string;
}

interface Ubication {
  countryId: string;
  countryName: string;
  regionName: string;
  regionId: string;
}



interface OfferStore {
  salary: number;
  description: string;
  requirements: string;
  title: string;
  responsabilities: string;
  skills: Skill[];
  ubication: Ubication;
  offerDuration: OfferDuration;
  workplaceType: WorkplaceType;
  workSchedule: WorkSchedule;

  setSalary: (salary: number) => void;
  setDescription: (description: string) => void;
  setRequirements: (requirements: string) => void;
  setTitle: (title: string) => void;
  setResponsabilities: (responsabilities: string) => void;
  setSkills: (skills: Skill[]) => void;
  setCountryId: (countryId: string) => void;
  setCountryName: (countryName: string) => void;
  setRegionName: (regionName: string) => void;
  setRegionId: (regionId: string) => void;
  setOfferDuration: (duration: OfferDuration) => void;
  setWorkplaceType: (type: WorkplaceType) => void;
  setWorkSchedule: (schedule: WorkSchedule) => void;

  clearOffer: () => void;
}

export const storeApi: StateCreator<OfferStore> = (set) => ({
    salary: 0,
    description: "",
    requirements: "",
    title: "",
    responsabilities: "",
    skills: [],
    ubication: {
        countryId: "",
        countryName: "",
        regionName: "",
        regionId: "",
    },
    offerDuration: "1_mes",
    workplaceType: "presencial",
    workSchedule: "tiempo_completo",

    setSalary: (salary: number) => set({ salary }),
    setDescription: (description: string) => set({ description }),
    setRequirements: (requirements: string) => set({ requirements }),
    setTitle: (title: string) => set({ title }),
    setResponsabilities: (responsabilities: string) => set({ responsabilities }),
    setSkills: (skills: Skill[]) => set({ skills }),
    setCountryId: (countryId: string) =>
        set((state) => ({
            ubication: { ...state.ubication, countryId },
        })),
    setCountryName: (countryName: string) =>
        set((state) => ({
            ubication: { ...state.ubication, countryName },
        })),
    setRegionName: (regionName: string) =>
        set((state) => ({
            ubication: { ...state.ubication, regionName },
        })),
    setRegionId: (regionId: string) =>
        set((state) => ({
            ubication: { ...state.ubication, regionId },
        })),
    setOfferDuration: (duration: OfferDuration) =>
        set({ offerDuration: duration }),
    setWorkplaceType: (type: WorkplaceType) =>
        set({ workplaceType: type }),
    setWorkSchedule: (schedule: WorkSchedule) =>
        set({ workSchedule: schedule }),

    clearOffer: () =>
        set({
            salary: 0,
            description: "",
            requirements: "",
            title: "",
            responsabilities: "",
            skills: [],
            ubication: {
                countryId: "",
                countryName: "",
                regionName: "",
                regionId: "",
            },
            offerDuration: "1_mes",
            workplaceType: "presencial",
        }),
});

export const useOfferStore = create<OfferStore>()(
  devtools(
    persist(storeApi, {
      name: "offer-store",
      storage: customSessionStorage,
    })
  )
);
