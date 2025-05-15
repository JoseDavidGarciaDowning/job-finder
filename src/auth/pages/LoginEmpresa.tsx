import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Login from "../components/Login";



const LoginEmpresa: React.FC = () => {


  return (
    <IonPage>
      <IonContent fullscreen>
          <Login title="Empresa" role="company" />
      </IonContent>
    </IonPage>
  );
};

export default LoginEmpresa;




  // <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-white min-h-screen overflow-auto ">
  //   {/* Header */}
  //   <FormHeader title="Empresa" />

  //   <div className="bg-[#FBF6FF] flex-grow ">
  //     {/* form description */}
  //     <FormDescription
  //       title="Iniciar sesión"
  //       description="Por favor inica sesión en tu cuenta registrada"
  //     />
  //     <FormAuth title="INICIAR SESIÓN" />

  //     <ForgotPassword />
  //     {/* Register link */}
  //     <p className="px-7 text-center text-black mb-7">Inicia sesión con</p>
  //     <AuthProviders />
  //     <Footer description="Todavía no tienes cuenta?" title="CREAR CUENTA" />
  //   </div>
  // </div>;
