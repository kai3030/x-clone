import React from "react";

type Props = {
    children: React.ReactNode,
    title: string,
    id: string
};

const ModalInput = ({ children, title, id }: Props) => {
  return (
    <div className="flex flex-col h-[56px] relative my-[12px] mx-0">
      <label
        className="w-full inline-block absolute top-0 rounded text-xs h-[56px] p-[8px] text-[rgb(83, 100, 113)] border-[1px]"
        htmlFor={id}
      >
        {title}
      </label>
      {children}
    </div>
  );
};

export default ModalInput;
