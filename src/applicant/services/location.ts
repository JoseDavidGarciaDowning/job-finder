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
  try {
    const response = await fetch(`${url}/${value}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export class ApplicantService {
  static async createBaseApplicationProfile(data: BaseApplicantProfile) {
    console.log({ data });
    try {
      return await http.postAuth(
        `https://qp5wg7p4-3000.use2.devtunnels.ms/api/applicant/`,
        {
          ...data,
        }
      );
    } catch (error) {
      console.error("Error al crear el perfil base del solicitante:", error);
      throw error;
    }
  }
}
