import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/react';
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

const JobApplications: React.FC = () => {
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/company/home" />
          </IonButtons>
          <IonTitle>Gestionar Postulaciones</IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default JobApplications; 