import React from "react";
import Suggestion from "./Suggestion";
import { useCountryInput } from "../hooks/useInput";


interface Props {
  url: string;
  styles?: string;
  onNewSelectedState?: (newState: boolean) => void;
  onNewCountryID?: (newId: string) => void;
  setCountryName: (name: string) => void;
  setCountryIdStore: (placeId: string) => void;
}

const CountryInput: React.FC<Props> = ({
  url,
  styles,
  onNewSelectedState,
  onNewCountryID,
  setCountryName,
  setCountryIdStore,
}) => {
  const {
    value,
    showSuggestions,
    suggestions,
    onInputChange,
    onInputFocus,
    onInputBlur,
    setValue,
    setIsSelected,
    setShowSuggestions,
  } = useCountryInput({ url, onNewSelectedState });

  // const setCountryName = useLocationStore((state) => state.setApplicantCountryName);
  // const setCountryIdStore = useLocationStore((state) => state.setApplicantCountryId);

  return (
    <div className="relative h-full   w-full max-w-md">
      <label
        htmlFor="Pais"
        className="block text-sm font-medium text-[#150B3D] *:mb-1"
      >
        Pais
      </label>
      <input
        type="text"
        placeholder={"Escribe una dirección..."}
        className={
          styles
        ? styles
        : "text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
        value={value}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />

      {showSuggestions && (
        <ul className="absolute z-10 w-full  bg-white border rounded-md shadow-md mt-1 max-h-36 overflow-auto">
          {suggestions?.map((prediction) => (
            <Suggestion
              key={prediction.place_id}
              onMouseDown={() => {
                setValue(prediction.description);
                setIsSelected(true);
                onNewCountryID?.(prediction.place_id);
                setShowSuggestions(false);
                setCountryName(prediction.description);
                setCountryIdStore(prediction.place_id);
              }}
              title={prediction.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryInput;
