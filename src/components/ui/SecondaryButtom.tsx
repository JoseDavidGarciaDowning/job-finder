
import React from 'react';


interface Props {
  title: string;
  onClick?: () => void;
}

const SecondaryButtom: React.FC<Props> = ({title, onClick}) => {

    return (
      <button
        onClick={onClick}
        className="w-full h-16 p-4 rounded-full bg-[#E1D3FF] text-[#40189D] font-bold"
      >
        {title}
      </button>
    );
};

export default SecondaryButtom;