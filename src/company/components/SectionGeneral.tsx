import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, ReactNode } from "react";

interface SectionGeneralProps {
  title: string;
  children: ReactNode;
}

const SectionGeneral: React.FC<SectionGeneralProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Aquí el contenido está montado siempre, solo se oculta visualmente */}
      <div className={isOpen ? "block" : "hidden"}>{children}</div>
    </>
  );
};

// function withSectionGeneral<T extends object>(
//     WrappedComponent: React.ComponentType<T>,
//     title: string
// ) {
//     return (props: T) => (
//         <SectionGeneral title={title}>
//             <WrappedComponent {...props} />
//         </SectionGeneral>
//     );
// }

// export { SectionGeneral, withSectionGeneral };

export default SectionGeneral;
