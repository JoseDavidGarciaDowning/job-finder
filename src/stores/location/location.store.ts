import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/capacitor.storage";


interface LocationStore {
    countryId: string;
    countryName: string;
    regionName: string;
    regionId: string;
    setCountryName: (name: string) => void
    setCountryId: (placeId: string) => void
    setRegionName: (name: string) => void
    setRegionId: (placeId: string) => void
}


export const storeApi: StateCreator<LocationStore> = (set) => ({

    countryId: "",
    countryName: "",
    regionName: "",
    regionId: "",
    setCountryName: (name: string) => {
        set({ countryName: name });
    },
    setCountryId: (placeId: string) => {
        set({ countryId: placeId });
    },
    setRegionName: (name: string) => {
        set({ regionName: name });
    }
    ,
    setRegionId: (placeId: string) => {
        set({ regionId: placeId });
    }



});

export const useLocationStore = create<LocationStore>()( devtools(
    persist(storeApi, { name: "location-store", storage: customSessionStorage })
));