import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import { useHistory } from "react-router-dom"

const JobDetail: React.FC = () => {
  const history = useHistory()

  const handleBackClick = () => {
    history.push("/applicant/buscar")
  }

  const handleFavoriteClick = () => {
    console.log("Favorite button clicked")
  }

  const handleApplyClick = () => {
    console.log("Apply button clicked")
  }

  const handleBookmarkClick = () => {
    console.log("Bookmark button clicked")
  }

  return (
    <IonPage>
      <IonContent className="bg-gray-50">
        <div className="max-w-md mx-auto bg-white min-h-full">
          <div className="flex items-center justify-between p-4 bg-white">
            <button onClick={handleBackClick} className="p-2 -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Detalles</h1>
            <button onClick={handleFavoriteClick} className="p-2 -mr-2">
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
            <p className="text-sm text-gray-600 mb-2">TecnoNova Solutions</p>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 leading-tight">Ingeniero de Software Junior</h2>
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2.09-.64 3-1.27.91.63 1.91 1.06 3 1.27 5.16-1 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-6 justify-center">
              <span
                className="px-3 py-1.5 text-sm rounded-lg border"
                style={{
                  backgroundColor: "white",
                  color: "#40189D",
                  borderColor: "#40189D",
                }}
              >
                Tiempo Completo
              </span>
              <span
                className="px-3 py-1.5 text-sm rounded-lg border"
                style={{
                  backgroundColor: "white",
                  color: "#40189D",
                  borderColor: "#40189D",
                }}
              >
                Trabajo Remoto
              </span>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E1D3FF" }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "#40189D" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Salario</p>
                <p className="text-gray-900 font-medium">₡1,200,000 - ₡2,000,000 /mensual.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E1D3FF" }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "#40189D" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Ubicación</p>
                <p className="text-gray-900 font-medium">San José, Costa Rica</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción del trabajo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buscamos un(a) ingeniero(a) de Software Junior para el desarrollo de soluciones web innovadoras junto a
                equipos multidisciplinarios en un entorno ágil.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Requisitos</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#40189D" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">+2 años de experiencia en desarrollo backend y frontend</p>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#40189D" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Habilidad para resolver problemas y trabajar en equipo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#40189D" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dominio de .NET Core, React.js y bases de datos SQL/PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-md mx-auto flex items-center gap-4">
              <button
                onClick={handleBookmarkClick}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#EAEAEA" }}
              >
                <svg className="w-6 h-6" style={{ color: "#40189D" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button
                onClick={handleApplyClick}
                className="flex-1 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                style={{ backgroundColor: "#40189D" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2d0f6b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#40189D")}
              >
                APLICAR AHORA
              </button>
            </div>
          </div>

          <div className="h-20"></div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default JobDetail