import Image from 'next/image';
import React from 'react';

interface SideTextContentTypes {
  h2: string;
  p: string;
  order?: string;
  children?: string;
}

const SideTextContent = ({
  h2,
  p,
  order = 'order-2',
  children,
}: SideTextContentTypes) => {
  return (
    <div
      className={`flex relative h-fit flex-col justify-center items-start gap-2 md:gap-5 ${order}`}
    >
      <h2 className=" text-4xl md:text-5xl font-bold">{h2}</h2>
      <p className="h-fit">{p}</p>
      {children}
    </div>
  );
};

export default SideTextContent;
