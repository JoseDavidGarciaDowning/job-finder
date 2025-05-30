import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import { useAuthStore } from "../../stores";
import RoundedInput from "../../components/ui/RoundedInput";
import MainButton from "../../components/ui/MainButton";
import { useIonAlert, useIonLoading } from "@ionic/react";

interface Props {
  title: string;
  mode: "login" | "register";
  role: "applicant" | "company";
}

const FormAuth: React.FC<Props> = ({ title, mode, role }) => {
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [presentAlert] = useIonAlert();

  const loginUser = useAuthStore((state) => state.loginUser);
  const registerUser = useAuthStore((state) => state.registerUser);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    present({ message: "Cargando...", duration: 1000 });

    let success = false;
    let errorMessage = "";

    if (mode === "login") {
      const result = await loginUser(email.value, password.value);
      success = result.success;
      if (!success) {
        errorMessage = result.error!;
      }
    } else {
      const result = await registerUser(email.value, password.value, role);
      success = result.success;
      if (!success) {
        errorMessage = result.error!;
      }
    }

    dismiss();

    if (!success) {
      presentAlert({
        header: "Error",
        message: errorMessage,
        buttons: ["OK"],
      });
      return;
    }

    // Redireccionar según el modo y el rol
    if (mode === "register") {
      if (role === "applicant") {
        history.push("/login/applicant");
      } else {
        history.push("/login/company");
      }
    } else {
      if (role === "applicant") {
        history.push("/formApplicant");
      } else {
        history.push("/company/inicio");
      }
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
