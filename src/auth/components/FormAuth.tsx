import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import { useAuthStore } from "../../stores";
import RoundedInput from "../../components/ui/RoundedInput";
import MainButton from "../../components/ui/MainButton";

interface Props {
  title: string;
  mode: "login" | "register";
  role: "applicant" | "company";
}

const FormAuth: React.FC<Props> = ({ title, mode, role }) => {
  const history = useHistory();

  const loginUser = useAuthStore((state) => state.loginUser);
  const registerUser = useAuthStore((state) => state.registerUser);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    if (mode === "login") {
      await loginUser(email.value, password.value); // le pasás el role también si lo necesitás
    } else {
      await registerUser(email.value, password.value, role); // idem
    }

    // Redireccionar según el rol
    if (role === "applicant") {
      history.push("/applicant");
    } else {
      history.push("/company");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2 px-7">
        <RoundedInput name="email" placeholder="example@gmail.com" />
        <PasswordInput />
        <MainButton title={title} />
      </div>
    </form>
  );
};

export default FormAuth;
