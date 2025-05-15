import React from "react";
import ArrowLeft from "../../../public/icons/Arrow";
import { useIonRouter } from "@ionic/react";

interface Props {
  title: string;
}

const FormHeader: React.FC<Props> = ({ title }) => {
  const router = useIonRouter();

  const goBack = () => {
    router.goBack();
  };

  return (
    <div className="flex items-center px-7 py-6 mt-7 bg-white">
      <button
        onClick={goBack}
        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-7"
      >
        <ArrowLeft />
      </button>
      <h1 className="text-xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default FormHeader;
