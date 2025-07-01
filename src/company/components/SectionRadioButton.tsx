import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SectionFormJobPostProps {
  title: string;
  options: Option[];
  onNewSelectedOption?: (option: string) => void;
  value?: string | null;
}

const SectionRadioButton: React.FC<SectionFormJobPostProps> = ({
  title,
  options,
  onNewSelectedOption,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState<string | null>(value || null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 pb-4 space-y-3">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="availability"
                value={option.value}
                checked={optionSelected === option.value}
                onChange={(e) => {
                  setOptionSelected(e.target.value);
                  if (onNewSelectedOption) {
                    onNewSelectedOption(e.target.value);
                  }
                }}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionRadioButton;
