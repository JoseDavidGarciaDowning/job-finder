import { IonReactRouter } from "@ionic/react-router";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import {
  homeOutline,
  addCircleOutline,
  bookmarkOutline,
  checkmarkDoneOutline,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router";

// Estado de autenticación
import { useAuthStore } from "../stores";

// Páginas con tabs
import CompanyHome from "../company/pages/CompanyHome";
import CreateJob from "../company/pages/CreateJob";
import JobDetail from "../applicant/pages/JobDetail";
import JobApplications from "../company/pages/JobApplications";

const CompanyRoutes = () => {
  const isAuthenticated =
    useAuthStore((state) => state.status) === "authenticated";
  const userRole = useAuthStore((state) => state.user?.currentRole)!;

  if (!isAuthenticated || userRole !== "company") {
    console.log("User not authenticated, redirecting to login");
    return <Redirect to="/login/company" />;
  }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/company/inicio" component={CompanyHome} />
            <Route exact path="/company/postJob" component={CreateJob} />
            <Route exact path="/jobs/jobDetail/:id" component={JobDetail} />
            <Route exact path="/company/job-applications" component={JobApplications} />
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/company/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="PostJob" href="/company/postJob">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Crear empleo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Crated" href="/company/crated">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>Guardados</IonLabel>
          </IonTabButton>
          <IonTabButton tab="applicants" href="/company/job-applications">
            <IonIcon icon={checkmarkDoneOutline} />
            <IonLabel>Aplicados</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default CompanyRoutes;
