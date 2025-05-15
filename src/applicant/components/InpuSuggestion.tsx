import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

interface Props {
  placeholder?: string;
  url?: string;
  title: string;
  onNewSelectedState?: (newState: boolean) => void;
}

const InputSuggestion: React.FC<Props> = ({
  placeholder,
  url,
  onNewSelectedState,
  title,
}) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [dummySuggestions, setDummySuggestions] = useState<string[]>([
    "Liberia Guanacaste",
    "San Jose",
    "Cartago",
    "Alajuela",
    "Heredia",
    "Guanacaste",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        try {
          const response = await fetch(url + `/${value}`);
          const data = await response.json();
          console.log(data);
          // setDummySuggestions(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [value, url]);

  const onInputChange = (e: any) => {
    setValue(e.target.value);
    if (isSelected) {
      setIsSelected(false);
    }
  };
  const onInputFocus = () => {
    setShowSuggestions(true);
  };

  const onInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
    if (!isSelected) {
      setValue("");
    }
    if (onNewSelectedState) onNewSelectedState(isSelected);
  };

  return (
    <div className="relative  w-full max-w-md">
      <label
        htmlFor={title}
        className="block text-sm font-medium text-[#150B3D] *:mb-1"
      >
        {title}
      </label>
      <input
        type="text"
        placeholder={placeholder || "Escribe una dirección..."}
        className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />

      {showSuggestions && (
        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-60 overflow-auto">
          {dummySuggestions.map((sug, idx) => (
            <Suggestion
              key={idx}
              onMouseDown={() => {
                setValue(sug);
                setIsSelected(true);
                setShowSuggestions(false);
              }}
              title={sug}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSuggestion;
