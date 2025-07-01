import { Offer } from "../../interfaces/offer.interfaces";
import { http } from "../../plugins/http-client.plugin";



export class CompanyService {
  static async createBaseCompanyProfile(data: {
    name: string;
    description: string;
    ubication: {
      countryId: string;
      countryName: string;
      regionName: string;
      regionId: string;
    };
  }) {
    try {
      return await http.postAuth(
        `/api/company`,
        {
          ...data,
        }
      );
    } catch (error) {
      console.error("Error al crear el perfil base de la empresa:", error);
      throw error;
    }
  }

  static async createOffer(data: {
    title: string;
    salary: number;
    description: string;
    responsibilities: string;
    requirements: string;
    workplaceType: string;
    workSchedule: string;
    offerDuration: string;
    ubication: {
      countryId: string;
      countryName: string;
      regionId: string;
      regionName: string;
    };
    skills: Array<{ id: string; name: string }>;
  }) {
    try {
      return await http.postAuth(
        "/api/offer",
        { ...data }
      );
    } catch (error) {
      console.error("Error al crear la oferta:", error);
      throw error;
    }
  }

  static async getOffersByCompany(): Promise<Offer[]> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    try {
      return await http.getAuth(
        "/api/offer/company"
      );
    } catch (error) {
      console.error("Error al obtener las ofertas de la empresa:", error);
      throw error;
    }
  }
}