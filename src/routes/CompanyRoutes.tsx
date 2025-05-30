import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircleOutline, bookmarkOutline, checkmarkDoneOutline, homeOutline } from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router";
import { useAuthStore } from "../stores";
import CompanyHome from "../company/pages/CompanyHome";

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
          <IonTabButton tab="applicants" href="/company/applicants">
            <IonIcon icon={checkmarkDoneOutline} />
            <IonLabel>Aplicados</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default CompanyRoutes;
