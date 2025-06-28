import { Redirect, Route, useHistory } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useEffect } from "react";
import { notificationsService } from "./plugins/push-notifications.plugin";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import "@ionic/react/css/palettes/dark.always.css";
// import "@ionic/react/css/palettes/dark.class.css";
// import "@ionic/react/css/palettes/dark.system.css";

//  Theme variables
import "./theme/variables.css";

import SelectRole from "./pages/SelectRole";
import Welcome from "./pages/Welcome";
import ApplicantRoutes from "./routes/ApplicantRoutes";
import LoginEmpresa from "./auth/pages/LoginEmpresa";
import LoginApplicant from "./auth/pages/LoginApplicant";
import RegisterEmpresa from "./auth/pages/RegisterEmpresa";
import RegisterApplicant from "./auth/pages/RegisterApplicant";
import FormApplicant from "./applicant/components/FormApplicant";
import CompanyRoutes from "./routes/CompanyRoutes";

setupIonicReact();

const App: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    notificationsService.initialize();
  }, []);

  useEffect(() => {
    const handleNavigation = (event: Event) => {
      const { path } = (event as CustomEvent).detail;
      if (path) {
        history.push(path);
      }
    };

    window.addEventListener('navigateToPage', handleNavigation);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('navigateToPage', handleNavigation);
    };
  }, [history]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet animated={true}>
          {/* Rutas públicas */}
          <Route exact path="/login/company" component={LoginEmpresa} />
          <Route exact path="/login/applicant" component={LoginApplicant} />
          <Route exact path="/register/company" component={RegisterEmpresa} />
          <Route exact path="/register/applicant" component={RegisterApplicant} />
          <Route exact path="/form" component={FormApplicant} />
          <Route exact path="/select" component={SelectRole} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/formApplicant" component={FormApplicant} />

          {/* Redirección raíz */}
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>

          {/* Rutas protegidas por rol */}
          {/* Applicant */}
          <Route path="/applicant" component={ApplicantRoutes} />
          {/* Company */}
          <Route path="/company" component={CompanyRoutes} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
