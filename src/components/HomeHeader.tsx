
import { IonAvatar } from "@ionic/react";
import React from "react";

interface Props {
    name: string;
}

const HomeHeader: React.FC<Props> = ({name}) => {
  return (
    <div className="px-7 pt-9 pb-2">
      <div className="flex justify-between items-start">
        <div className="py-2.5">
          <h1 className="text-2xl font-bold text-indigo-900">Hola</h1>
          <h2 className="text-2xl font-bold text-indigo-900">{name}</h2>
        </div>
        <IonAvatar className="w-9">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
      </div>
    </div>
  );
};

export default HomeHeader;
