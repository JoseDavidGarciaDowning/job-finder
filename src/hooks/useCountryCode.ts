import { useEffect, useState } from "react";

// Recomendación: pasar la URL como argumento para mayor reutilización
export const useCountryCode = (countryId: string | null, baseUrl: string) => {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      if (!countryId) return;
      try {
        const response = await fetch(`${baseUrl}/${countryId}`);
        const data = await response.text();
        setCountryCode(data);
      } catch (error) {
        console.error("Error al obtener el código del país:", error);
      }
    };

    fetchCountryCode();
  }, [countryId, baseUrl]);

  return countryCode;
};
