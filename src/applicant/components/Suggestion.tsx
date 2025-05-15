
import React from 'react';

interface Props {
    onMouseDown: () => void;
    title: string
}

const Suggestion: React.FC<Props> = ({onMouseDown, title}) => {

    return (
      <li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
        onMouseDown={onMouseDown}
      >
        {title}
      </li>
    );
};

export default Suggestion;