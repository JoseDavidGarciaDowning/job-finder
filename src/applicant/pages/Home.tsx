import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import JobCard from "../../components/ui/JobCard";
import { useApplicantStore } from "../../stores/applicant/applicant.store";
import HomeHeader from "../../components/HomeHeader";

import { ApplicantService } from "../services/location";
import { useQuery } from "@tanstack/react-query";
import { FullScreenLoading } from "../../pages/FullScreenLoading";

const Home: React.FC = () => {
  const firstName = useApplicantStore((state) => state.firstName);


  const {
    data: offers,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () =>  ApplicantService.getOffers(),
    staleTime: 2000,
  });

  return (
    <IonPage>
      <IonHeader>
        <HomeHeader name={firstName} />
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-[#F9F9F9] min-h-screen overflow-auto ">
          
          
          {isLoading && <FullScreenLoading />}
          {isError && <div className="text-red-500 font-semibold">{JSON.stringify(error)}</div>}
          {offers &&
            offers.length > 0 &&
            offers.map((offer) => (
              <JobCard
                key={offer.id}
                offer={offer}
                buttonActionName="Aplicar"
              />
            ))}

          {/* <JobCard
            titleJob="Senior Product Designer"
            companyName="Google Inc"
            buttonActionName="Aplicar"
          />
          <JobCard
            titleJob="Senior Software Developer"
            companyName="Microsoft"
            buttonActionName="Aplicar"
          /> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
