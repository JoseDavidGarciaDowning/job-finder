import { IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AppService } from "../../services/App.service";
import { FullScreenLoading } from "../../pages/FullScreenLoading";
import JobDetailInfo from "./JobDetailInfo";

const JobDetail: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [shouldRefetch, setShouldRefetch] = useState(false);
  console.log({ idUrl: id });


  const {
    data: offer,
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["offer", id],
    queryFn: () => AppService.getOfferById(id),
    enabled: shouldRefetch,
    staleTime: 2000,
  });

  console.log({ offer });

  useIonViewDidEnter(() => {
    setShouldRefetch(true);
    refetch();
  });

  return (
    <IonPage>
      <IonContent className="bg-gray-50">
        {isError && (
          <div className="text-red-500 font-semibold">
            {JSON.stringify(error)}
          </div>
        )}

        {isLoading && <FullScreenLoading />}

        {offer && <JobDetailInfo offer={offer} />}
      </IonContent>
    </IonPage>
  );
};

export default JobDetail;
