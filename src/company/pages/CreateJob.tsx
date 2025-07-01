import { IonContent, IonPage, IonToast } from "@ionic/react";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import Location from "../../components/Location";
import SectionFormJobPost from "../components/SectionRadioButton";
import SectionTextAreaJobPost from "../components/SectionTextAreaJobPost";

import SectionCategoryForm from "../components/SectionCategoryForm";
import SectionGeneral from "../components/SectionGeneral";
import { useOfferStore } from "../../stores/offer/offer.store";
import {
  OfferDuration,
  WorkplaceType,
  WorkSchedule,
} from "../../interfaces/offer.interfaces";
import { CompanyService } from "../services/company.service";


const CreateJob: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const salary = useOfferStore((state) => state.salary);
  const setSalary = useOfferStore((state) => state.setSalary);
  const jobTitle = useOfferStore((state) => state.title);
  const setJobTitle = useOfferStore((state) => state.setTitle);
  const description = useOfferStore((state) => state.description);
  const setDescription = useOfferStore((state) => state.setDescription);
  const requirements = useOfferStore((state) => state.requirements);
  const setRequirements = useOfferStore((state) => state.setRequirements);
  const responsibilities = useOfferStore((state) => state.responsabilities);
  const setResponsibilities = useOfferStore(
    (state) => state.setResponsabilities
  );
  const offerDuration = useOfferStore((state) => state.offerDuration);
  const setOfferDuration = useOfferStore((state) => state.setOfferDuration);
  const workplaceType = useOfferStore((state) => state.workplaceType);
  const setWorkplaceType = useOfferStore((state) => state.setWorkplaceType);

  const countryId = useOfferStore((state) => state.ubication.countryId);
  const countryName = useOfferStore((state) => state.ubication.countryName);
  const regionName = useOfferStore((state) => state.ubication.regionName);
  const regionId = useOfferStore((state) => state.ubication.regionId);

  const skills = useOfferStore((state) => state.skills);

  const clearOffer = useOfferStore((state) => state.clearOffer);


  const workSchedule = useOfferStore((state) => state.workSchedule);
  const setWorkSchedule = useOfferStore((state) => state.setWorkSchedule);

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const salaryValue = Number(e.target.value);
    if (!isNaN(salaryValue)) {
      setSalary(salaryValue);
    }
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(e.target.value);
  };
  const onNewDescription = (newDescription: string) => {
    setDescription(newDescription);
  };
  const onNewRequeriments = (newRequirements: string) => {
    setRequirements(newRequirements);
  };
  const onNewResponsabilities = (newResponsabilities: string) => {
    setResponsibilities(newResponsabilities);
  };
  const onNewOfferDuration = (value: string) => {
    setOfferDuration(value as OfferDuration);
  };
  const onNewOfferWorkplaceType = (value: string) => {
    setWorkplaceType(value as WorkplaceType);
  };
  const onNewOfferWorkSchedule = (value: string) => {
    setWorkSchedule(value as WorkSchedule);
  };

  const onPublishOffer = async () => {
    try {
      await CompanyService.createOffer({
        title: jobTitle,
        salary: salary,
        description: description,
        responsibilities: responsibilities,
        requirements: requirements,
        workplaceType: workplaceType,
        workSchedule: workSchedule,
        offerDuration: offerDuration,
        ubication: {
          countryId: countryId,
          countryName: countryName,
          regionId: regionId,
          regionName: regionName,
        },
        skills: skills,
      });

      clearOffer();
      setShowToast(true); // Muestra el toast
    } catch (error) {
      console.error("Error al crear la oferta:", error);
      // Aquí podrías mostrar otro toast indicando el error
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center">
            <button className="mr-3">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">
              Información del empleo
            </h1>
          </div>

          {/* Form Content */}
          <div className="px-4 py-6 space-y-6">
            {/* Job Title Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionGeneral title="Título del empleo">
                <div className="px-4 py-4">
                  <input
                    type="text"
                    id="job-title"
                    name="job-title"
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ejemplo: Desarrollador Frontend"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                </div>
              </SectionGeneral>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionGeneral title="Salario mensual (en USD)">
                <div className="px-4 py-4">
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ejemplo: 1500 USD"
                    value={salary}
                    onChange={handleSalaryChange}
                  />
                </div>
              </SectionGeneral>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionGeneral title="Ubicación del trabajo">
                <div className="px-4 py-4">
                  <Location role="jobOffer" />
                </div>
              </SectionGeneral>
            </div>
            {/* Job Category Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionCategoryForm title="Habilidades" />
            </div>
            {/* Availability Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionFormJobPost
                title="Tiempo que estará disponible la oferta"
                options={[
                  { value: "1_mes", label: "1 Mes" },
                  { value: "2_meses", label: "2 Meses" },
                  { value: "2_semanas", label: "2 semanas" },
                  { value: "3_a_5_meses", label: "3 a 5 meses" },
                ]}
                onNewSelectedOption={onNewOfferDuration}
                value={offerDuration}
              />
            </div>

            {/* Workplace Type Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionFormJobPost
                title="Horario de trabajo"
                options={[
                  { value: "tiempo_completo", label: "Tiempo completo" },
                  { value: "medio_tiempo", label: "Medio tiempo" },
                  { value: "por_horas", label: "Por horas" },
                  { value: "flexible", label: "Flexible" },
                  { value: "jornada_rotativa", label: "Jornada rotativa" },
                  { value: "turno_nocturno", label: "Turno nocturno" },
                ]}
                onNewSelectedOption={onNewOfferWorkSchedule}
                value={workSchedule}
              />
            </div>

              {/*work_schedule */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionFormJobPost
                title="Tipo de lugar de trabajo"
                options={[
                  { value: "remoto", label: "Remoto" },
                  { value: "hibrido", label: "Híbrido" },
                  { value: "presencial", label: "Presencial" },
                ]}
                onNewSelectedOption={onNewOfferWorkplaceType}
                value={workplaceType}
              />
            </div>

            {/* Job Description Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionTextAreaJobPost
                title="Descripción del trabajo"
                onNewText={onNewDescription}
                value={description}
              />
            </div>

            {/* Responsibilities Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionTextAreaJobPost
                title="Responsabilidades"
                onNewText={onNewResponsabilities}
                value={responsibilities}
              />
            </div>

            {/* Requirements Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SectionTextAreaJobPost
                title="Requisitos"
                onNewText={onNewRequeriments}
                value={requirements}
              />
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
            <div className="flex space-x-3">
              <button className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Regresar
              </button>
              <button
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={onPublishOffer}
              >
                PUBLICAR OFERTA
              </button>
            </div>
          </div>

          {/* Bottom padding to account for fixed buttons */}
          <div className="h-20"></div>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Oferta publicada exitosamente!"
          duration={2000}
          position="bottom"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default CreateJob;
