import { Redirect, Route, Switch } from "react-router-dom";
import { useAuthStore } from "../stores";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  searchOutline,
  bookmarkOutline,
  checkmarkDoneOutline,
} from "ionicons/icons";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import Home from "../applicant/pages/Home";
import Filtrar from "../applicant/pages/Filtrar";
import JobDetail from "../applicant/pages/JobDetail";
import NoResultsFounds from "../applicant/pages/NoResultsFounds";
const ApplicantRoutes = () => {
  const isAuthenticated =
    useAuthStore((state) => state.status) === "authenticated";
  const userRole = useAuthStore((state) => state.user?.currentRole)!;

  // Si no está autenticado, no montamos ni el IonTabs ni el IonRouterOutlet
  // if (!isAuthenticated) {
  //   return <Redirect to="/login/applicant" />;
  // }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route path="/applicant/inicio" render={() => <Home />} />
            <Route path="/applicant/buscar" render={() => <Filtrar/>} />
            <Route path="/applicant/jobDetail" render={() => <JobDetail/>} />
            <Route path="/applicant/noResults" render={() => <NoResultsFounds/>} />
            
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/applicant/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="buscar" href="/applicant/buscar">
            <IonIcon icon={searchOutline} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="guardados" href="/applicant/guardados">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>Guardados</IonLabel>
          </IonTabButton>
          <IonTabButton tab="aplicados" href="/applicant/aplicados">
            <IonIcon icon={checkmarkDoneOutline} />
            <IonLabel>Aplicados</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default ApplicantRoutes;
