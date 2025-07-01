import React from "react";
import { useCountryInput } from "../hooks/useInput";
import Suggestion from "./Suggestion";

interface Props {
  url: string;
  styles?: string;
  onNewSelectedState?: (newState: boolean) => void;
  setRegionName: (name: string) => void;
  setRegionId: (placeId: string) => void;
}

const RegionInputSuggestions: React.FC<Props> = ({
  url,
  styles,
  onNewSelectedState,
  setRegionName,
  setRegionId,
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



  return (
    <div className="relative  w-full max-w-md">
      <label
        htmlFor="Region"
        className="block text-sm font-medium text-[#150B3D] *:mb-1"
      >
        Region
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
                setShowSuggestions(false);
                setRegionName(prediction.description);
                setRegionId(prediction.place_id);
              }}
              title={prediction.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionInputSuggestions;
