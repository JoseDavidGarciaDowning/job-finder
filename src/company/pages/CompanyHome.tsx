<<<<<<< HEAD
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { http } from '../../plugins/http-client.plugin';

interface JobApplication {
  id: number;
  jobId: number;
  applicantId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const CompanyHome: React.FC = () => {
  const [postulaciones, setPostulaciones] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPostulaciones = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await http.get<JobApplication[]>('/api/job-application');
      setPostulaciones(data);
    } catch (err: any) {
      setError('Error al cargar postulaciones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostulaciones();
  }, []);

  const aprobarPostulacion = async (id: number) => {
    try {
      await http.put(`/api/job-application/${id}`, { status: 'Aprobada' });
      fetchPostulaciones();
      alert('Postulación aprobada y notificación enviada');
    } catch (err: any) {
      alert('Error al aprobar la postulación');
    }
  };
=======
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
>>>>>>> ramaFiltrado

  return (
    <IonPage>
      <IonHeader>
<<<<<<< HEAD
        <IonToolbar>
          <IonTitle>Postulaciones Recibidas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading && <p>Cargando postulaciones...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {postulaciones.length === 0 && !loading && <p>No hay postulaciones.</p>}
        {postulaciones.map((postulacion) => (
          <IonCard key={postulacion.id}>
            <IonCardHeader>
              <IonCardTitle>Postulación #{postulacion.id}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><b>Job ID:</b> {postulacion.jobId}</p>
              <p><b>Applicant ID:</b> {postulacion.applicantId}</p>
              <p><b>Status:</b> {postulacion.status}</p>
              <IonButton
                color="success"
                disabled={postulacion.status === 'Aprobada'}
                onClick={() => aprobarPostulacion(postulacion.id)}
              >
                Aprobar
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
=======
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
>>>>>>> ramaFiltrado
      </IonContent>
    </IonPage>
  );
};

export default CompanyHome;
