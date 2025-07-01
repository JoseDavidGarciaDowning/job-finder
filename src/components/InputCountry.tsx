
import React, { useState } from 'react';

const InputCountry: React.FC = () => {

    const [value, setValue] = useState('');

    return (
      <>
        <label
          htmlFor="Pais"
          className="block text-sm font-medium text-[#150B3D] *:mb-1"
        >
          Pais
        </label>
        <input
          type="text"
          placeholder={"Escribe una dirección..."}
          className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
    
        />
      </>
    );
};

export default InputCountry;