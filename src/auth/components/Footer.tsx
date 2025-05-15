import React from "react";
import { useHistory, useLocation } from "react-router";
import SecondaryButtom from "../../components/ui/SecondaryButtom";

interface Props {
  title: string;
  description: string;
}

const Footer: React.FC<Props> = ({ title, description }) => {
  const location = useLocation();
  const history = useHistory();
  const handleSecondaryClick = () => {
    if (title === "CREAR CUENTA") {
      if (location.pathname.includes("/company")) {
        history.push("/register/company");
      } else if (location.pathname.includes("/applicant")) {
        history.push("/register/applicant");
      }
    } else if (title === "INICIAR SESIÓN") {
      if (location.pathname.includes("/company")) {
        history.push("/login/company");
      } else if (location.pathname.includes("/applicant")) {
        history.push("/login/applicant");
      }
    }
  };

  return (
    <div className="mt-5 px-7">
      <p className="text-center text-gray-600 mb-2">{description}</p>
      <SecondaryButtom title={title} onClick={handleSecondaryClick} />
    </div>
  );
};

export default Footer;
