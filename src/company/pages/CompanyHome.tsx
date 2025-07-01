import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import HomeHeader from "../../components/HomeHeader";
import JobCard from "../../components/ui/JobCard";
import { useCompanyStore } from "../../stores/company/company.store";
import { CompanyService } from "../services/company.service";
import { useQuery } from "@tanstack/react-query";
import { FullScreenLoading } from "../../pages/FullScreenLoading";

const CompanyHome: React.FC = () => {
  const name = useCompanyStore((state) => state.name);
  // const [offers, setOffers] = useState<Offer[]>([]);

  const {
    data: offers,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () =>  CompanyService.getOffersByCompany(),
    staleTime: 2000,
  });

  return (
    <IonPage>
      <IonHeader>
        <HomeHeader name={name} />
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-7 pt-9 pb-2">
          <h1 className="text-xl font-bold text-indigo-900">
            ofertas laborales que has creado...
          </h1>
        </div>

        <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-[#F9F9F9] min-h-screen overflow-auto ">
          {isLoading && <FullScreenLoading />}
          {isError && <div className="text-red-500 font-semibold">{JSON.stringify(error)}</div>}
          {offers &&
            offers.length > 0 &&
            offers.map((offer) => (
              <JobCard
                key={offer.id}
                offer={offer}
                buttonActionName="Detalles"
              />
            ))}
          {/* Ejemplo de tarjetas de trabajo estáticas */}
          {/* <JobCard
                        titleJob="Senior Product Designer"
                        companyName="Google Inc"
                        buttonActionName="Detalles"
                    />
                    <JobCard
                        titleJob="Senior Software Developer"
                        companyName="Microsoft"
                        buttonActionName="Detalles"
                    /> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CompanyHome;
