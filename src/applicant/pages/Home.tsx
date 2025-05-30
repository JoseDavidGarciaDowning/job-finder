import { IonAvatar, IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import JobCard from "../../components/ui/JobCard";
import { useApplicantStore } from "../../stores/applicant/applicant.store";

const Home: React.FC = () => {
  const firstName = useApplicantStore((state) => state.firstName);
  return (
    <IonPage>
      <IonHeader>
        <div className="px-7 pt-9 pb-2">
          <div className="flex justify-between items-start">
            <div className="py-2.5">
              <h1 className="text-2xl font-bold text-indigo-900">Hola</h1>
              <h2 className="text-2xl font-bold text-indigo-900">
                {firstName}
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
        <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-[#F9F9F9] min-h-screen overflow-auto ">
          <JobCard
            titleJob="Senior Product Designer"
            companyName="Google Inc"
          />
          <JobCard
            titleJob="Senior Software Developer"
            companyName="Microsoft"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
