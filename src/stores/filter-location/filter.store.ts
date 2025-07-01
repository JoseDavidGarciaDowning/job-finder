import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";



interface FilterLocationStore {

    countryId: string;
    setCountryId: (countryId: string) => void;
    regionId: string;
    setRegionId: (regionId: string) => void;
    countryName: string;
    setCountryName: (countryName: string) => void;
    regionName: string;
    setRegionName: (regionName: string) => void;
}

export const storeApi: StateCreator<FilterLocationStore> = (set) => ({
   regionId: "",
   regionName: "",
   countryId: "",
   countryName: "",
   setRegionId: (regionId: string) => set({ regionId }),
   setRegionName: (regionName: string) => set({ regionName }),
   setCountryId: (countryId: string) => set({ countryId }),
   setCountryName: (countryName: string) => set({ countryName }),
})



export const useFilterLocationStore = create<FilterLocationStore>()(
  devtools(
    persist(storeApi, { name: "filter-search-location-store", storage: customSessionStorage })
  )
);
