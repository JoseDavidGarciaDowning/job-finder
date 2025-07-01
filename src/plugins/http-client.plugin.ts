/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { API_BASE_URL } from '../config/config';

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
  getAuth: <T>(url: string) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}

// Helper para concatenar el BASE_URL
const buildUrl = (url: string) => {
  if (url.startsWith("http")) return url;
  return `${API_BASE_URL.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
};

const httpClientPlugin: HttpClientPlugin = {
  get: async <T>(url: string): Promise<T> => {
    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP GET request failed with status ${response.status}`);
    }
    return response.json();
  },

  getAuth: async <T>(url: string): Promise<T> => {
    const token = await getToken();
    const headers: Record<string, string> = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody?.message || "Error desconocido del servidor");
    }

    return response.json();
  },

  post: async <T>(url: string, body: any): Promise<T> => {
    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl, {
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

    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody?.message || "Error desconocido del servidor");
    }

    return response.json();
  },

  put: async <T>(url: string, body: any): Promise<T> => {
    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl, {
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
    const fullUrl = buildUrl(url);
    const response = await fetch(fullUrl, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(
        `HTTP DELETE request failed with status ${response.status}`
      );
    }
    return response.json();
  },
};

export const http = httpClientPlugin;
