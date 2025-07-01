import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React, { useEffect, useState } from "react";

import SalaryRangeSelector from "../../components/ui/SalaryRangeSelector";
import Location from "../../components/Location";
import Suggestion from "../components/Suggestion";
import { useCategoriesQuery } from "../hooks/useCategoriesQuery";
import { useSubCategoriesQuery } from "../hooks/useSubCategoriesQuery";
import { useFilterLocationStore } from "../../stores/filter-location/filter.store";


const Filtrar: React.FC = () => {
  // const history = useHistory();
  const navigate = useIonRouter();
   const [salaryRange, setSalaryRange] = useState({ lower: 2000, upper: 8000 });

  const [selectedJobType, setSelectedJobType] = useState("Presencial");
  const [selectedScheduleType, setScheduleType] = useState("tiempo_completo");
  const [showCategoriesSuggestions, setShowCategoriesSuggestions] =
    useState(false);
  const [showSubCategoriesSuggestions, setShowSubCategoriesSuggestions] =
    useState(false);

  const [categoryValue, setCategoryValue] = useState({ id: "", name: "" });
  const [subCategoryValue, setSubCategoryValue] = useState({ id: "", name: "" });

  const [categoryInput, setCategoryInput] = useState("");
  const [subCategoryInput, setSubCategoryInput] = useState("");

  const { isError, data: categories, refetch, error: categoryError } = useCategoriesQuery(
    categoryInput
  );

  const { isError: isErrorSubCategories, data: subCategories, refetch: refetchSubCategories, error: subCategoryError } = useSubCategoriesQuery(
    categoryValue.id,
    subCategoryInput
  );

  const regionId = useFilterLocationStore((state) => state.regionId);

  useEffect(() => {
    if (categoryInput.trim().length > 0) {
      refetch();
    }
  }, [categoryInput, refetch]);

  useEffect(() => {
    if (subCategoryInput.trim().length > 0) {
    
      refetchSubCategories();
    }
  }, [subCategoryInput, refetchSubCategories]);
  
  const handleSearch = () => {
    const query = new URLSearchParams({
      categoryId: categoryValue.id,
      skillId: subCategoryValue.id,
      regionId: regionId,
      workplaceType: selectedJobType,
      workSchedule: selectedScheduleType,
      salaryMin: salaryRange.lower.toString(),
      salaryMax: salaryRange.upper.toString(),
    }).toString();
  
    navigate.push(`/applicant/resultados?${query}`, 'forward');
  };

  const handleBackClick = () => {
    navigate.push("/applicant/inicio");
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryInput(e.target.value);
    setShowCategoriesSuggestions(true);
    if(categoryValue.name.trim().length !== 0){
      setCategoryValue({
        id: "",
        name: "",
      });
    }
  };

  const onNewSalaryRange = (salaryRange: { lower: number; upper: number }) => {
    setSalaryRange(salaryRange);
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubCategoryInput(e.target.value);
    setShowSubCategoriesSuggestions(true);
    if(subCategoryValue.name.trim().length !== 0){
      setSubCategoryValue({
        id: "",
        name: "",
      });
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding bg-[#F9F9F9]">
        <div className="max-w-md mx-auto md:rounded-3xl md:shadow-sm bg-[#F9F9F9] min-h-full md:min-h-0 md:p-6 p-0">
          <div className="flex items-center mb-8 md:mb-8 p-4 md:p-0">
            <button onClick={handleBackClick} className="p-2 md:p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-xl font-medium text-center flex-1 pr-7 md:pr-7">
              Filtrar Busqueda
            </h1>
          </div>

          <div className="px-4 md:px-0 space-y-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-inputLabelColor mb-2">
                Categoria
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border-white outline-none border  rounded-xl"
                  value={categoryInput}
                  onChange={ handleCategoryChange}
                ></input>
                {isError && <p className="text-red-500">{(categoryError as Error).message}</p>}
                {showCategoriesSuggestions && categories && !isError && (
                  <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-60 overflow-auto">
                    {categories.map((category) => (
                      <Suggestion
                        key={category.id}
                        onMouseDown={() => {
                          setCategoryValue({
                            id: category.id,
                            name: category.name,
                          });
                          setCategoryInput(category.name);
                          setShowCategoriesSuggestions(false);
                        }}
                        title={category.name}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-inputLabelColor mb-2">
                Sub Categoria
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={subCategoryInput}
                  onChange={handleSubCategoryChange}
                  className="w-full px-4 py-3 bg-white border-white outline-none border  rounded-xl"
                ></input>
                {isErrorSubCategories && <p className="text-red-500">{(subCategoryError as Error).message}</p>}
                {showSubCategoriesSuggestions && subCategories && !isErrorSubCategories && (
                  <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-60 overflow-auto">
                    {subCategories.map((subCategory) => (
                      <Suggestion
                        key={subCategory.id}
                        onMouseDown={() => {
                          setSubCategoryValue({
                            id: subCategory.id,
                            name: subCategory.name,
                          });
                          setSubCategoryInput(subCategory.name);
                          setShowSubCategoriesSuggestions(false);
                        }}
                        title={subCategory.name}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-6">
              <Location
                role="filterSearch"
                countryInputStyles="w-full px-4 py-3 bg-white border-white outline-none border  rounded-xl"
                regionInputStyles="w-full px-4 py-3 bg-white border-white outline-none border  rounded-xl"
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-black">
                  Salario Minimo
                </label>
                <span className="block text-sm font-medium text-black">
                  Salario Maximo
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-inputLabelColor">
                  Salario
                </label>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <SalaryRangeSelector onNewSalaryRange={onNewSalaryRange} />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de de lugar de Trabajo
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedJobType === "presencial"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setSelectedJobType("presencial")}
                >
                  Presencial
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedJobType === "híbrido"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setSelectedJobType("híbrido")}
                >
                  Híbrido
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedJobType === "remoto"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setSelectedJobType("remoto")}
                >
                  Remoto
                </button>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jornada Laboral
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "tiempo_completo"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("tiempo_completo")}
                >
                  Tiempo Completo
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "medio_tiempo"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("medio_tiempo")}
                >
                  Medio Tiempo
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "por_horas"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("por_horas")}
                >
                  Por horas
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "flexible"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("flexible")}
                >
                  Flexible
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "jornada_rotativa"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("jornada_rotativa")}
                >
                  Jornada rotativa
                </button>
                <button
                  className={`py-2 px-4 text-center text-sm rounded-lg ${
                    selectedScheduleType === "turno_nocturno"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-50"
                  }`}
                  onClick={() => setScheduleType("turno_nocturno")}
                >
                  Turno nocturno
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-0 pb-4 md:pb-0">
            <button
              onClick={handleSearch}
              className="w-full py-3 bg-[#130160] text-white font-medium rounded-xl hover:bg-indigo-800 transition-colors"
            >
              BUSCAR AHORA
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Filtrar;
