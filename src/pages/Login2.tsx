import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login creado por sss</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} color="light" className="ion-padding">
        <IonGrid fixed={true}>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <IonCol size="12">
              {/* Aquí dentro va tu formulario */}
              <h1>Iniciar sesión</h1>
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>

              <IonButton expand="block" className="ion-margin-top">
                Iniciar sesión
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login2;
