
import { X } from 'lucide-react';
import React from 'react';
import { Skill } from '../../interfaces/skill.interface';

interface Props {
    category: Skill;
    removeCategory: (category: string) => void;
}
const Chip: React.FC<Props> = ({category, removeCategory}) => {
    
    return (
      <div
  
        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-in fade-in-0 zoom-in-95 duration-200"
      >
        <span className="max-w-[120px] truncate">{category.name}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            removeCategory(category.name);
          }}
          className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors duration-150"
          aria-label={`Eliminar ${category.name}`}
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    );
};

export default Chip;