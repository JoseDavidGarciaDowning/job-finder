
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { createJSONStorage } from "zustand/middleware";

const isNative = Capacitor.getPlatform() !== "web";

// Storage híbrido para Zustand
const zustandStorage = {
  getItem: async (name: string) => {
    if (isNative) {
      const { value } = await Preferences.get({ key: name });
      return value;
    } else {
      return localStorage.getItem(name);
    }
  },
  setItem: async (name: string, value: string) => {
    if (isNative) {
      await Preferences.set({ key: name, value });
    } else {
      localStorage.setItem(name, value);
    }
  },
  removeItem: async (name: string) => {
    if (isNative) {
      await Preferences.remove({ key: name });
    } else {
      localStorage.removeItem(name);
    }
  },
};

export const customSessionStorage = createJSONStorage(() => zustandStorage);
