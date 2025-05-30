import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import Location from "./Location";
import { useHistory } from "react-router";
import { useApplicantStore } from "../../stores/applicant/applicant.store";
import { useLocationStore } from "../../stores/location/location.store";
import { ApplicantService } from "../services/location";

const FormApplicant: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    ubicacion: "",
  });
  const history = useHistory();

  const setFirstName = useApplicantStore((state) => state.setFirstName);
  const setLastName = useApplicantStore((state) => state.setLastName);

  const countryId = useLocationStore((state) => state.countryId);
  const countryName = useLocationStore((state) => state.countryName);
  const regionName = useLocationStore((state) => state.regionName);
  const regionId = useLocationStore((state) => state.regionId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFirstName(formData.nombre);
    setLastName(formData.apellidos);
    // Aquí iría la lógica para enviar los datos
    ApplicantService.createBaseApplicationProfile({
      firstName: formData.nombre,
      lastName: formData.apellidos,
      ubication: {
        countryName,
        countryId,
        regionName,
        regionId,
      },
    });
    console.log("esto le esta llegando al servicio");
    console.log({
      firstName: formData.nombre,
      lastName: formData.apellidos,
      ubication: {
        countryName,
        countryId,
        regionName,
        regionId,
      },
    });
    history.push("/applicant/inicio");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg ">
            <div className="p-6 pb-4">
              <h2 className="text-2xl font-medium text-center text-gray-800">
                Profile
              </h2>
              <p className="text-center text-gray-500 mt-1">
                Necesitamos los siguientes datos para mejorar tu experiencia
              </p>
            </div>
            <form onSubmit={handleSubmit} className="px-6 pb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-[#150B3D] mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="text-[#323232]  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellidos"
                    className="block text-sm font-medium text-[#150B3D] *:mb-1"
                  >
                    Apellidos
                  </label>
                  <input
                    id="apellidos"
                    name="apellidos"
                    type="text"
                    placeholder="Introduce tus apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="text-[#323232]   w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                  />
                </div>
                <Location />

                <button
                  type="submit"
                  className="w-full mt-6 px-4 py-2 bg-[#130160] text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1 transition-all"
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FormApplicant;
