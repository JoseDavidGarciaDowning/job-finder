import React, { useState, useRef, useMemo } from "react";
import Chip from "./Chip";
import CategorySuggestion from "./CategorySuggestion";
import { Skill } from "../../interfaces/skill.interface";
import { useOfferStore } from "../../stores/offer/offer.store";

interface CategoryInputProps {
  placeholder?: string;
  suggestions: Skill[];
  onCategoriesChange?: (categories: Skill[]) => void;
  maxCategories?: number;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  placeholder = "Agregar categorías...",
  suggestions,
  onCategoriesChange,
  maxCategories = 10,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const categories = useOfferStore((state) => state.skills); // debe ser Skill[]
  const setCategoriesStore = useOfferStore((state) => state.setSkills);

  const filteredSuggestions = useMemo(() => {
    const query = inputValue.toLowerCase().trim();
    return query
      ? suggestions.filter(
          (s) =>
            s.name.toLowerCase().includes(query) &&
            !categories.some((c) => c.id === s.id)
        )
      : [];
  }, [inputValue, suggestions, categories]);

  const addCategory = (category: Skill) => {
    if (
      !categories.some((c) => c.id === category.id) &&
      categories.length < maxCategories
    ) {
      const updated = [...categories, category];
      setCategoriesStore(updated);
      onCategoriesChange?.(updated);
      setInputValue("");
    }
  };

  const removeCategory = (id: string) => {
    const updated = categories.filter((c) => c.id !== id);
    setCategoriesStore(updated);
    onCategoriesChange?.(updated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.key === "Enter" || e.key === ",") &&
      filteredSuggestions.length > 0
    ) {
      e.preventDefault();
      addCategory(filteredSuggestions[0]);
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      categories.length
    ) {
      removeCategory(categories[categories.length - 1].id);
    }
  };

  const handleSuggestionClick = (s: Skill) => {
    addCategory(s);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      <div
        className="px-3 py-2 border rounded-lg border-gray-300 bg-white focus-within:ring-2 focus-within:ring-blue-500"
        onClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={categories.length === 0 ? placeholder : ""}
          className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
          disabled={categories.length >= maxCategories}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 bg-gray-50 p-2 rounded-lg  ">
        {categories.map((cat) => (
          <Chip
            key={cat.id}
            category={cat}
            removeCategory={() => removeCategory(cat.id)}
          />
        ))}
      </div>

      {inputValue && filteredSuggestions.length > 0 && (
        <div className="mt-1 bg-white border rounded-lg shadow max-h-48 overflow-y-auto">
          {filteredSuggestions.map((s) => (
            <CategorySuggestion
              key={s.id}
              suggestion={s}
              handleSuggestionClick={handleSuggestionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryInput;
