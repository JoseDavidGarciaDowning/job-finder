import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import Register from "../components/Register";

const RegisterEmpresa: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Register title="Empresa" role="company" />
      </IonContent>
    </IonPage>
  );
};

export default RegisterEmpresa;
