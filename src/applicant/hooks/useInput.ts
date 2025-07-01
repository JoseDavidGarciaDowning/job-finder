import { useCallback,  useState } from "react";
import { PlacesAutoComplete } from "../../interfaces/places-autocomplete";
import debounce from "just-debounce-it";

import { searchLocation } from "../services/location";

interface UseCountryInputProps {
  url: string;
  onNewSelectedState?: (newState: boolean) => void;
  // onNewPlaceID?: (newId: string) => void;
}

export const useCountryInput = ({
  url,
  onNewSelectedState,
}: // onNewPlaceID,
UseCountryInputProps) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [suggestions, setSuggestions] = useState<PlacesAutoComplete[]>([]);

  const debouncedSearchLocation = useCallback(
    debounce(async (url: string, value: string) => {
      const suggestions = await searchLocation({ url, value });
      setSuggestions(suggestions);
    }, 300),
    []
  );

  // Handlers
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (isSelected) setIsSelected(false);
    debouncedSearchLocation(url, e.target.value);
  };

  const onInputFocus = () => setShowSuggestions(true);

  const onInputBlur = () => {
    // const newPlaceId = suggestions && suggestions[0] ? suggestions[0].place_id : "";
    setTimeout(() => setShowSuggestions(false), 100);
    if (!isSelected) setValue("");
    if (onNewSelectedState) onNewSelectedState(isSelected);
    // if (onNewPlaceID) onNewPlaceID(newPlaceId);
  };

  return {
    value,
    setValue,
    setIsSelected,
    showSuggestions,
    suggestions,
    onInputChange,
    onInputFocus,
    onInputBlur,
    setShowSuggestions,
  };
};
