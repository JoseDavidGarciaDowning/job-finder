import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import CategoryInput from "./CategoryInput";
import { Skill } from "../../interfaces/skill.interface";
import { API_BASE_URL } from "../../config/config";

interface Props {
  title: string;
}

const SectionCategoryForm: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([]);

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/skill`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

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

      {isOpen && <CategoryInput suggestions={skills} />}
    </div>
  );
};

export default SectionCategoryForm;
