import { Redirect, Route, Switch } from "react-router-dom";
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
  bookmarkOutline,
  searchSharp,
  personOutline,
} from "ionicons/icons";

// Tu lógica de autenticación
import { useAuthStore } from "../stores";

// Páginas dentro del esquema de tabs
import Home from "../applicant/pages/Home";
import Filtrar from "../applicant/pages/Filtrar";
import NoResultsFounds from "../applicant/pages/NoResultsFounds";

// Página fuera del tab bar
import JobDetail from "../applicant/pages/JobDetail"; // Asegúrate de tener este componente
import SearchResults from "../applicant/pages/SearchResults";

const ApplicantRoutes = () => {
  const isAuthenticated =
    useAuthStore((state) => state.status) === "authenticated";
  const userRole = useAuthStore((state) => state.user?.currentRole)!;

  if (!isAuthenticated || userRole !== "applicant") {
    console.log("User not authenticated, redirecting to login");
    return <Redirect to="/login/applicant" />;
  }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route path="/applicant/inicio" render={() => <Home />} />

            <Route path="/applicant/buscar" render={() => <Filtrar />} />
            <Route exact path="/jobs/jobDetail/:id" component={JobDetail} />
            <Route path="/applicant/resultados" render={() => <SearchResults />} />
            <Route
              path="/applicant/noResults"
              render={() => <NoResultsFounds />}
            />
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="inicio" href="/applicant/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="buscar" href="/applicant/buscar">
            <IonIcon icon={searchSharp} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="guardados" href="/applicant/guardados">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel>Guardados</IonLabel>
          </IonTabButton>
          <IonTabButton tab="aplicados" href="/applicant/aplicados">
            <IonIcon icon={personOutline} />
            <IonLabel>Aplicados</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default ApplicantRoutes;
