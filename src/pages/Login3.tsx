import { IonPage } from "@ionic/react";

import React from "react";
import Ojo from "../../public/icons/Ojo";
import ArrowLeft from "../../public/icons/Arrow";

const Login3: React.FC = () => {
  return (
    <IonPage>
      <div className="h-screen bg-white min-h-screen overflow-auto ">
        {/* Header */}
        <div className="flex items-center px-7 py-4 bg-white">
          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-7">
            <ArrowLeft />
          </button>
          <h1 className="text-xl font-bold text-black">Empresa</h1>
        </div>

        <div className="bg-[#FBF6FF]">
          <div className="p-7 flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-black">Iniciar sesión</h1>
            <p className="text-xl  text-[#585858]">
              Por favor inica sesión en tu cuenta registrada
            </p>
          </div>
          {/* Form */}
          <div>
            <div className="flex flex-col gap-2 px-7">
              {/* user */}
              <input
                type="text"
                className=" h-16  w-full p-4 rounded-full border focus:outline-none shadow-sm bg-white focus:border-[#40189D] text-[#323232] border-[#FFFFFF]"
                defaultValue="hanrykanwil"
              />
              {/* Password field */}
              <div className="relative mb-4">
                <input
                  type="password"
                  className=" h-16  w-full p-4 rounded-full border  focus:outline-none shadow-sm bg-white focus:border-purple-500 text-[#323232] border-[#FFFFFF] "
                  placeholder="Contraseña"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {/* <Eye className="h-5 w-5 text-gray-500" /> */}
                  <Ojo />
                </button>
              </div>
              <button className="w-full p-4 rounded-full bg-[#40189D] text-white font-bold">
                INICIAR SESIÓN
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="text-center mt-2 flex flex-col gap-1 mb-7">
            <p className="text-gray-600 text-sm">Olvidaste tu contraseña?</p>
            <a href="#" className="text-[#40189D] ml-1 font-medium">
              Restablecer contraseña
            </a>
          </div>
          {/* Register link */}
          <p className="px-7 text-center text-black mb-7">Inicia sesión con</p>
          <div className="flex justify-center gap-4">
            <button className="w-36 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-9 h-9 relative">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
            </button>
            <button className="w-36 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-9 h-9 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </button>
          </div>
          {/* Create account */}
          <div className="mt-5 px-7">
            <p className="text-center text-gray-600 mb-2">
              Todavía no tienes cuenta?
            </p>
            <button className="w-full h-16 p-4 rounded-full bg-[#E1D3FF] text-[#40189D] font-bold">
              CREAR CUENTA
            </button>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Login3;
