/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";

const isNative = Capacitor.getPlatform() !== "web";

const getToken = async (): Promise<string | null> => {
  try {
    let rawValue: string | null = null;

    if (isNative) {
      const { value } = await Preferences.get({ key: "auth-store" });
      rawValue = value;
    } else {
      rawValue = localStorage.getItem("auth-store");
    }

    if (rawValue) {
      const parsed = JSON.parse(rawValue);
      return parsed?.state?.token ?? null;
    }

    return null;
  } catch (error) {
    console.error("Error al obtener o parsear el token:", error);
    return null;
  }
};

interface HttpClientPlugin {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, body: any) => Promise<T>;
  postAuth: <T>(url: string, body: any) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}

const httpClientPlugin: HttpClientPlugin = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP GET request failed with status ${response.status}`);
    }
    return response.json();
  },

  post: async <T>(url: string, body: any): Promise<T> => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      let errorBody: any = null;

      try {
        errorBody = await response.json();
      } catch (e) {
        // El cuerpo no es JSON válido
      }

      // Si message es array, unirlo
      const rawMessage = errorBody?.message;
      const message = Array.isArray(rawMessage)
        ? rawMessage.join(", ")
        : rawMessage ||
          `HTTP POST request failed with status ${response.status}`;

      const error = new Error(message) as Error & { status?: number };
      error.status = response.status;
      throw error;
    }

    return response.json();
  },

  postAuth: async <T>(url: string, body: any): Promise<T> => {
    const token = await getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      try {
        const errorBody = await response.json();
        // Devuelve solo el mensaje del backend si existe
        throw new Error(errorBody?.message || "Error desconocido del servidor");
      } catch (e) {
        throw new Error("Error desconocido del servidor");
      }
    }

    return response.json();
  },

  put: async <T>(url: string, body: any): Promise<T> => {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`HTTP PUT request failed with status ${response.status}`);
    }
    return response.json();
  },

  delete: async <T>(url: string): Promise<T> => {
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(
        `HTTP DELETE request failed with status ${response.status}`
      );
    }
    return response.json();
  },
};

export const http = httpClientPlugin;
