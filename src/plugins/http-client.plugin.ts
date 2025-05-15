/* eslint-disable @typescript-eslint/no-explicit-any */


interface HttpClientPlugin {
    get: <T>(url: string) => Promise<T>;
    post: <T>(url: string, body: any) => Promise<T>;
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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`HTTP POST request failed with status ${response.status}`);
        }
        return response.json();
    },

    put: async <T>(url: string, body: any): Promise<T> => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`HTTP PUT request failed with status ${response.status}`);
        }
        return response.json();
    },

    delete: async <T>(url: string): Promise<T> => {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`HTTP DELETE request failed with status ${response.status}`);
        }
        return response.json();
    },
};

export const http = httpClientPlugin;
