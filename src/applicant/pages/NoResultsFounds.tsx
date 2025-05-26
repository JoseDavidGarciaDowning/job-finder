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


          <div className="flex flex-col items-center justify-center px-6 py-32 text-center">

            <div className="flex justify-center items-center mb-16">
              <div className="relative">

                <div className="relative">
 
                  <div className="w-20 h-24 bg-blue-200 rounded-lg transform rotate-12 absolute -top-1 -right-1"></div>


                  <div className="w-20 h-24 bg-orange-400 rounded-lg relative z-10">

                    <div className="absolute top-3 left-3 right-3">
                      <div className="h-0.5 bg-white rounded mb-1"></div>
                      <div className="h-0.5 bg-white rounded mb-1"></div>
                      <div className="h-0.5 bg-white rounded w-3/4"></div>
                    </div>

                    <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded"></div>
                  </div>
                </div>


                <div className="absolute bottom-0 right-0 transform translate-x-3 translate-y-3 z-20">
                  <div className="relative">

                    <div className="w-12 h-12 border-4 border-purple-800 rounded-full bg-white"></div>
            
                    <div className="absolute -bottom-2 -right-2 w-6 h-2 bg-purple-800 rounded-full transform rotate-45"></div>
           
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 bg-purple-900 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-8 w-2 h-2 bg-orange-300 rounded-full"></div>
                <div className="absolute -bottom-8 left-8 w-1.5 h-1.5 bg-red-300 rounded-full"></div>
                <div className="absolute top-8 -right-10 w-1 h-1 bg-blue-300 rounded-full"></div>
              </div>
            </div>

       
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Resultados no encontrados</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                No se encontró ningún resultado. Por favor, verifica la ortografía o intenta con otra palabra.
              </p>
            </div>

            <button
              onClick={handleBackClick}
              className="mt-12 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default NoResultsFounds