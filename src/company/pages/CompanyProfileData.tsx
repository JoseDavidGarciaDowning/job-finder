import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Location from "../../components/Location";
import { useHistory} from 'react-router';
import { useCompanyStore } from '../../stores/company/company.store';
import { useLocationStore } from '../../stores/location/location.store';
import { CompanyService } from '../services/company.service';
const CompanyProfileData: React.FC = () => {
      const history = useHistory();

      const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        ubicacion: "",
      });

      const setHasProfile = useCompanyStore((state) => state.setHasProfile);
      const hasProfile = useCompanyStore((state) => state.hasProfile);
      useEffect(() => {
        if (hasProfile) {
          history.push("/company/inicio");
        }
      }, [hasProfile, history]);

  
        const setName = useCompanyStore((state) => state.setName);
        const setDescription = useCompanyStore((state) => state.setDescription);

        const countryId = useLocationStore((state) => state.company.countryId);
        const countryName = useLocationStore((state) => state.company.countryName);
        const regionName = useLocationStore((state) => state.company.regionName);
        const regionId = useLocationStore((state) => state.company.regionId);

        

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
        };

         const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setName(formData.nombre);
            setDescription(formData.descripcion);
           CompanyService.createBaseCompanyProfile({
            name: formData.nombre,
            description: formData.descripcion,
            ubication: {
              countryId,
              countryName,
              regionName,
              regionId,
            },
           })
          
            history.push("/company/inicio");
            setHasProfile(true);
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
                      htmlFor="descripcion"
                      className="block text-sm font-medium text-[#150B3D] *:mb-1"
                    >
                      Descripcion
                    </label>
                    <input
                      id="descripcion"
                      name="descripcion"
                      type="text"
                      placeholder="Introduce una breve descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                      required
                      className="text-[#323232]   w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <Location role='company'/>

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

export default CompanyProfileData;