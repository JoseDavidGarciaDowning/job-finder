import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";

interface RoleLocation {
  countryId: string;
  countryName: string;
  regionName: string;
  regionId: string;
}

interface LocationStore {
  applicant: RoleLocation;
  company: RoleLocation;

  setApplicantCountryName: (name: string) => void;
  setApplicantCountryId: (placeId: string) => void;
  setApplicantRegionName: (name: string) => void;
  setApplicantRegionId: (placeId: string) => void;

  setCompanyCountryName: (name: string) => void;
  setCompanyCountryId: (placeId: string) => void;
  setCompanyRegionName: (name: string) => void;
  setCompanyRegionId: (placeId: string) => void;

  clearLocations: () => void;
}

export const storeApi: StateCreator<LocationStore> = (set) => ({
  applicant: {
    countryId: "",
    countryName: "",
    regionName: "",
    regionId: "",
  },
  company: {
    countryId: "",
    countryName: "",
    regionName: "",
    regionId: "",
  },

  // Métodos para applicant
  setApplicantCountryName: (name) =>
    set((state) => ({
      applicant: { ...state.applicant, countryName: name },
    })),
  setApplicantCountryId: (placeId) =>
    set((state) => ({
      applicant: { ...state.applicant, countryId: placeId },
    })),
  setApplicantRegionName: (name) =>
    set((state) => ({
      applicant: { ...state.applicant, regionName: name },
    })),
  setApplicantRegionId: (placeId) =>
    set((state) => ({
      applicant: { ...state.applicant, regionId: placeId },
    })),

  // Métodos para company
  setCompanyCountryName: (name) =>
    set((state) => ({
      company: { ...state.company, countryName: name },
    })),
  setCompanyCountryId: (placeId) =>
    set((state) => ({
      company: { ...state.company, countryId: placeId },
    })),
  setCompanyRegionName: (name) =>
    set((state) => ({
      company: { ...state.company, regionName: name },
    })),
  setCompanyRegionId: (placeId) =>
    set((state) => ({
      company: { ...state.company, regionId: placeId },
    })),

  // Reset de todo
  clearLocations: () =>
    set({
      applicant: {
        countryId: "",
        countryName: "",
        regionName: "",
        regionId: "",
      },
      company: {
        countryId: "",
        countryName: "",
        regionName: "",
        regionId: "",
      },
    }),
});

export const useLocationStore = create<LocationStore>()(
  devtools(
    persist(storeApi, { name: "location-store", storage: customSessionStorage })
  )
);
