import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Login from "../components/Login";

const LoginApplicant: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Login title="Buscador de empleo" role="applicant" />
      </IonContent>
    </IonPage>
  );
};

export default LoginApplicant;
