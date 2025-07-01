import React from "react";
import { Offer } from "../../interfaces/offer.interfaces";
import { useHistory } from "react-router";

interface Props {
  offer: Offer;
}

const JobDetailInfo: React.FC<Props> = ({ offer }) => {
  console.log("ofer desde JobDetailInfo", offer);
  const history = useHistory();

  if (!offer || !offer.title || !offer.description) {
    return <p>Cargando oferta...</p>;
  }
  return (
    <div className="max-w-md mx-auto bg-white min-h-full">
      <div className="flex items-center justify-between p-4 bg-white">
        <button className="p-2 -ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => history.goBack()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Detalles</h1>
        <button className="p-2 -mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-6">
        <p className="text-sm text-gray-600 mb-2">{offer.companyName}</p>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
              {offer.title}
            </h2>
          </div>
          <div className="ml-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2.09-.64 3-1.27.91.63 1.91 1.06 3 1.27 5.16-1 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1.5 text-sm text-purple-800 border border-purple-300 rounded-lg bg-purple-100">
            Tiempo Completo
          </span>
          <span className="px-3 py-1.5 text-sm text-purple-800 border border-purple-300 rounded-lg bg-purple-100">
            Trabajo Remoto
          </span>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Salario</p>
            <p className="text-gray-900 font-medium">${offer.salary}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Ubicación</p>
            <p className="text-gray-900 font-medium">
              {offer.ubication.regionName}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Descripción del trabajo
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {offer.description}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Requisitos
          </h3>
          <div className="space-y-2">{offer.requirements}</div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button className="flex-1 bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-900 transition-colors">
            APLICAR AHORA
          </button>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default JobDetailInfo;
