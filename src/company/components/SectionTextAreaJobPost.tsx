import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface Props {
  title: string;
  onNewText?: (text: string) => void;
  value?: string;
}

const SectionTextAreaJobPost: React.FC<Props> = ({
  title,
  onNewText,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(value || "");
  return (
    <>
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
        <div className="px-4 pb-4">
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Buscamos un desarrollador backend apasionado y proactivo para unirse a nuestro equipo dinámico. El candidato ideal será responsable de diseñar, desarrollar y mantener la lógica del servidor, las bases de datos y las APIs que impulsan nuestras aplicaciones web y móviles."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (onNewText) {
                onNewText(e.target.value);
              }
            }}
          />
        </div>
      )}
    </>
  );
};

export default SectionTextAreaJobPost;
