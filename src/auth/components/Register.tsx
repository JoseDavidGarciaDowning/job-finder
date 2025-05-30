import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import FormHeader from './FormHeader';
import FormDescription from './FormDescription';
import FormAuth from './FormAuth';
import Footer from './Footer';



interface Props {
    title: string;
    role: 'applicant' | 'company';
}

const Register: React.FC<Props> = ({title, role}) => {

    return (

 
          <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-white min-h-screen overflow-auto ">
            {/* Header */}
            <FormHeader title={title} />

            <div className="bg-[#FBF6FF] flex-grow ">
              {/* form description */}
              <FormDescription
                title="Crear cuenta"
                description="Por favor ingresa tus datos para el registro"
              />
              <FormAuth title="CREAR CUENTA" mode='register' role={role} />
              {/* terms and conditions */}

              <Footer
                description="Ya tienes una cuenta?"
                title="INICIAR SESIÓN"
              />
            </div>
          </div>
 
    );
};

export default Register;