import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";


interface LocationStore {
    description: string
    placeId: string
    setDescription: (description: string) => void
    setPlaceId: (placeId: string) => void
}


export const storeApi: StateCreator<LocationStore> = (set) => ({
    description: "",
    placeId: "",
    setDescription: (description: string) => {
        set({ description });
    },
    setPlaceId: (placeId: string) => {
        set({ placeId });
    },


});

export const useLocationStore = create<LocationStore>()(devtools(storeApi));