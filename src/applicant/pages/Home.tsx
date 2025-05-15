import { IonAvatar, IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className="px-7 pt-9 pb-2">
          <div className="flex justify-between items-start">
            <div className="py-2.5">
              <h1 className="text-2xl font-bold text-indigo-900">Hola</h1>
              <h2 className="text-2xl font-bold text-indigo-900">
                Orlando Diggs.
              </h2>
            </div>
            <IonAvatar className="w-9">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-[#F9F9F9] min-h-screen overflow-auto "></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
