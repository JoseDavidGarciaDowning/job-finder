import { IonContent, IonPage } from "@ionic/react"
import React from "react"

const NoResultsFounds: React.FC = () => {
  const handleBackClick = () => {
    console.log("Back button clicked")
  }

  return (
    <IonPage>
      <IonContent className="ion-padding bg-gray-50">
        <div className="max-w-md mx-auto bg-white min-h-full">

          <div className="flex items-center p-4 border-b border-gray-100">
            <button onClick={handleBackClick} className="p-2 -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Diseño"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="mb-16">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Illustrasi-U3sNVoPaqNdd73wIAi3goYZXYbT2sa.png" 
                alt="No results illustration"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Resultados no encontrados</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                No se encontró ningún resultado. Por favor, verifica la ortografía o intenta con otra palabra.
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default NoResultsFounds