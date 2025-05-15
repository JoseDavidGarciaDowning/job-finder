import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Register from "../components/Register";

const RegisterApplicant: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Register title="Buscador de empleo" />
      </IonContent>
    </IonPage>
  );
};

export default RegisterApplicant;
