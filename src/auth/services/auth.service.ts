import { AllowedRoles } from "../../interfaces";
import { http } from "../../plugins/http-client.plugin";

interface LoginResponse {
  id: number;
  email: string;
  isActive: boolean;
  currentRole: string;
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const resp = await http.post<LoginResponse>("/api/auth/login", {
        email,
        password,
      });
      console.log(resp);
      return resp;
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Correo o contraseña incorrectos"); // Rethrow the error to handle it in the calling function if needed
    }
  };

  static register = async (
    email: string,
    password: string,
    role: AllowedRoles
  ): Promise<LoginResponse> => {
    try {
      const resp = await http.post<LoginResponse>("/api/auth/register", {
        email,
        password,
        currentRole: role,
      });

      return resp;
    } catch (error) {
      console.error("Error during register:", error);
      throw error; // Rethrow the error to handle it in the calling function if needed
    }
  };
}
