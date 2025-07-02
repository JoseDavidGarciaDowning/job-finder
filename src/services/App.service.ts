import { API_BASE_URL } from "../config/config";
import { Offer } from "../interfaces/offer.interfaces";
import { http } from "../plugins/http-client.plugin";

export class AppService {
  static async getOfferById(offerId: string): Promise<Offer> {
    await new Promise(resolve => setTimeout(resolve, 3000));

    try {
      return await http.getAuth(`${API_BASE_URL}/api/offer/${offerId}`);
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
      throw error;
    }
  }
}
