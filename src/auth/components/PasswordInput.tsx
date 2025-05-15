
import React from 'react';
import Ojo from '../../../public/icons/Ojo';

const PasswordInput: React.FC = () => {

    return (
        <div className="relative mb-4">
                  <input
                    type="password"
                    className=" h-16  w-full p-4 rounded-full border  focus:outline-none shadow-sm bg-white focus:border-purple-500 text-[#323232] border-[#FFFFFF] "
                    placeholder="Contraseña"
                    name='password'
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* <Eye className="h-5 w-5 text-gray-500" /> */}
                    <Ojo />
                  </button>
        </div>
    );
};

export default PasswordInput;