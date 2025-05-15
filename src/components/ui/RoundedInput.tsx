
import React from 'react';


interface Props {
    name: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoundedInput: React.FC<Props> = ({ name, onChange, placeholder}) => {

    return (
      <input
        type="text"
        className=" h-16  w-full p-4 rounded-full border focus:outline-none shadow-sm bg-white focus:border-[#40189D] text-[#323232] border-[#FFFFFF]"
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    );
};

export default RoundedInput;