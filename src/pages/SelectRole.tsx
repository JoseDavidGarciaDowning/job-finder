import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React from "react";

import BuscadorIcon from "../../public/icons/Buscador";
import EmpresaIcon from "../../public/icons/EmpresaIcon";

const SelectRole: React.FC = () => {
  const router = useIonRouter();

  const handdleButton = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    router.push("/login/applicant");
  }

  return (
    <IonPage id="select-role-page">
      <IonContent>
        <div className="flex flex-col items-center min-h-screen bg-[#FBF6FF] p-6">
          {/* Logo y encabezado */}
          <div className="flex items-center flex-grow w-[340px] h-[77px]">
            {/* <Logo /> */}
            <img src="/icons/Logo.png" alt="Logo" />
          </div>

          {/* Contenido principal */}
          <div className="w-full max-w-md mb-10">
            <h2 className="text-2xl font-bold text-black mb-2">
              Continuar como
            </h2>
            <p className="text-gray-600 mb-8">
              Elige una opción para continuar y aprovecha lo mejor de nuestra
              plataforma
            </p>

            {/* Tarjetas de opciones */}
            <div className="space-y-4 flex flex-col gap-5">
              <div
                onClick={handdleButton}
                className={` bg-white  p-4 rounded-[22px] border cursor-pointer transition-al shadow-2xl`}
              >
                <div className="flex items-center gap-4 h-20">
                  <div className="w-18 h-18 rounded-full bg-[#F5F0FF] flex items-center justify-center">
                    <BuscadorIcon />
                  </div>
                  <div>
                    <h3 className="text-[#40189D] font-bold">
                      BUSCADOR DE EMPLEO
                    </h3>
                    <p className="text-sm text-black">
                      Encontrar trabajo aquí nunca ha sido tan fácil
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push("/login/company")}
                className={`bg-white  p-4 rounded-[22px]  border cursor-pointer transition-all shadow-2xl`}
              >
                <div className="flex items-center gap-4 h-20">
                  <div className="w-18 h-18 rounded-full bg-[#F5F0FF] flex items-center justify-center">
                    <EmpresaIcon />
                  </div>
                  <div>
                    <h3 className="text-[#40189D] font-bold">EMPRESA</h3>
                    <p className="text-sm text-black">
                      Encuentra al candidato ideal más rápido con nosotros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectRole;
