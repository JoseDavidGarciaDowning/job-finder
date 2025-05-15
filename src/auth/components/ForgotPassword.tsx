
import React from 'react';

const ForgotPassword: React.FC = () => {

    return (
      <div className="text-center mt-2 flex flex-col gap-1 mb-7">
        <p className="text-gray-600 text-sm">Olvidaste tu contraseña?</p>
        <a href="#" className="text-[#40189D] ml-1 font-medium">
          Restablecer contraseña
        </a>
      </div>
    );
};

export default ForgotPassword;