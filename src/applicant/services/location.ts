import { Category } from "../../interfaces/category.interface";
import { Offer, OfferSearchResults } from "../../interfaces/offer.interfaces";
import { http } from "../../plugins/http-client.plugin";

interface Ubication {
  countryId: string;
  countryName: string;
  regionName: string;
  regionId: string;
}

interface BaseApplicantProfile {
  firstName: string;
  lastName: string;
  ubication: Ubication;
}

export const searchLocation = async ({
  url,
  value,
}: {
  url: string;
  value: string;
}) => {
  if (!value) {
    throw new Error("Value cannot be empty");
  }
  try {
    const safeValue = encodeURIComponent(value);
    console.log(`fetching data from: ${url}/${safeValue}`);
    const response = await fetch(`${url}/${safeValue}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Podés lanzar el error para manejarlo afuera también
    throw error;
  }
};

export class ApplicantService {
  static async createBaseApplicationProfile(data: BaseApplicantProfile) {
    console.log({ data });
    try {
      return await http.postAuth(`http://localhost:3000/api/applicant`, {
        ...data,
      });
    } catch (error) {
      console.error("Error al crear el perfil base del solicitante:", error);
      throw error;
    }
  }
  static async getOffers():Promise<Offer[]> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    try {
      return await http.getAuth("http://localhost:3000/api/offer");
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
      throw error;
    }
  }

  static async getCategories(category: string):Promise<Category[]> {
    try {
      return await http.getAuth(`http://localhost:3000/api/category/name/${category}`);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      throw error;
    }
  }

  static async getSubCategories(categoryId:string, subCategoryName:string):Promise<Category[]> {
    try {
      return await http.getAuth(`http://localhost:3000/api/skill/by-category/${categoryId}/${subCategoryName}`);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      throw error;
    }
  }

  static async getOffersByFilter(categoryId: string, skillId: string, salaryMin: number, salaryMax: number, workplaceType: string, workSchedule: string, regionId: string):Promise<OfferSearchResults[]> {
  
      return await http.postAuth(`http://localhost:3000/api/offer/filter`, {
        categoryId,
        skillId,
        salaryMin,
        salaryMax,
        workplaceType,
        workSchedule,
        regionId,
      });
  
 
  }
}
