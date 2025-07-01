import { IonAvatar, IonIcon } from "@ionic/react";
import { bookmarkOutline } from "ionicons/icons";
import React from "react";
import TagJobCard from "./TagJobCard";

import { Offer } from "../../interfaces/offer.interfaces";
import { useHistory } from "react-router";


interface Props {
  offer: Offer;
  buttonActionName: string;
}

const JobCard: React.FC<Props> = ({ offer, buttonActionName }) => {
  const history = useHistory();

  return (
    <div className="w-full sm:w-2xl mx-auto p-6">
      <div className="bg-white  rounded-lg  p-3 ">
        {/* Bookmark icon */}
        <div className="flex justify-end">
          <IonIcon
            icon={bookmarkOutline}
            style={{ fontSize: "24px" }}
            className="-mb-2"
          />
        </div>

        <div className="flex items-start gap-4">
          {/* Google Logo */}
          <div className="flex-shrink-0">
            {/* <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              {/* <GoogleLogo /> */}
            {/* </div>  */}
            <IonAvatar className="w-9">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </div>

          {/* Job Details */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {offer.title}
            </h2>
            <p className="text-gray-600 text-xs mb-6">{offer.companyName}</p>

            {/* Tags and Apply Button Container */}
            <div className="flex items-center justify-between">
              {/* Tags */}
              <div className="flex gap-2">
                <TagJobCard title="Tiempo completo" />
                <TagJobCard title="Remoto" />
              </div>
            </div>
            <div className="flex items-center justify-end mt-1">
              {/* Apply Button */}
              <button
                onClick={() => history.push(`/jobs/jobDetail/${offer.id}`)}
             
                className="px-8 py-2 bg-[#40189D] hover:bg-purple-400 text-white rounded-lg font-normal transition-colors text-xs"
              >
                {buttonActionName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
