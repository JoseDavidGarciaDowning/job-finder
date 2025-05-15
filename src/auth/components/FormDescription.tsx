import React from "react";

interface Props {
    title: string;
    description: string;
}

const FormDescription: React.FC<Props> = ({title, description}) => {
  return (
    <div className="px-7 py-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-black">{title}</h1>
      <p className="text-xl  text-[#585858]">
        {description}
      </p>
    </div>
  );
};

export default FormDescription;
