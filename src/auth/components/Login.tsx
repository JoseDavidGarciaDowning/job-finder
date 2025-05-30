import {
  AuthProviders,
  Footer,
  ForgotPassword,
  FormAuth,
  FormDescription,
  FormHeader,
} from "../components";

import React from "react";

interface Props {
  title: string;
  role: "applicant" | "company";
}

const Login: React.FC<Props> = ({ title, role }) => {
  return (
    <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-white min-h-screen overflow-auto ">
      {/* Header */}
      <FormHeader title={title} />

      <div className="bg-[#FBF6FF] flex-grow ">
        {/* form description */}
        <FormDescription
          title="Iniciar sesión"
          description="Por favor inica sesión en tu cuenta registrada"
        />
        <FormAuth title="INICIAR SESIÓN" mode="login" role={role} />

        <ForgotPassword />
        {/* Register link */}
        <p className="px-7 text-center text-black mb-7">Inicia sesión con</p>
        <AuthProviders />
        <Footer description="Todavía no tienes cuenta?" title="CREAR CUENTA" />
      </div>
    </div>
  );
};

export default Login;
