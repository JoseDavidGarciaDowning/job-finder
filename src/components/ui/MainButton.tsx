
import React from 'react';

interface Props {
  title: string;
}

const MainButton: React.FC<Props> = ({title}) => {

    return (
        <button className="w-full p-4 rounded-full bg-[#40189D] text-white font-bold">
        {title}
    </button>
    );
};

export default MainButton;