
import React from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import FacebookAuthButton from './FacebookAuthButton';

const AuthProviders: React.FC = () => {

    return (
      <div className="flex justify-center gap-4">
        <GoogleAuthButton />
        <FacebookAuthButton />
      </div>
    );
};

export default AuthProviders;