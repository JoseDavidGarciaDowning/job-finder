
import { Plus } from 'lucide-react';
import React from 'react';
import { Skill } from '../../interfaces/skill.interface';



interface Props {
    suggestion: Skill;
    handleSuggestionClick: (suggestion: Skill) => void;
}

const CategorySuggestion: React.FC<Props> = ({suggestion, handleSuggestionClick}) => {

    return (
      <button
        type="button"
        onClick={() => handleSuggestionClick(suggestion)}
        className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
      >
        <div className="flex items-center gap-2">
          <Plus className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{suggestion.name}</span>
        </div>
      </button>
    );
};

export default CategorySuggestion;