import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React from "react";
// import Logo from "../../public/icons/Logo";
// import Logo from "../../public/icons/Logo";

const Welcome: React.FC = () => {
  const router = useIonRouter();
  const handleButton = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    router.push("/select", "forward", "replace");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center min-h-screen bg-[#1C58F2] p-8 text-white">
          {/* Logo and App Name */}
          <div className="flex items-center mt-[25vh] mb-[25vh] w-[340px] h-[77px]">
            {/* <Logo /> */}
            <img src="/icons/Logo.png" alt="Logo" />
          </div>

          {/* Main Content */}
          <h2 className="text-xl  text-center font-semibold mb-[6vh]">
            Tu próximo empleo solo a un clic.
          </h2>

          {/* Button */}
          <div className="w-full mt-auto">
            <button
              onClick={handleButton}
              className=" active:scale-95 transition-all active:bg-gray-400 w-full bg-white text-blue-600 py-4 px-6 rounded-full text-lg font-semibold"
            >
              SIGUIENTE
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
