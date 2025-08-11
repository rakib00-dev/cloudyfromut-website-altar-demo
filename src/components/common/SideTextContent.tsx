import Image from 'next/image';
import React from 'react';

interface SideTextContentTypes {
  h2: string;
  p: string;
  order?: string;
  children?: string;
  headerTextSize?: string;
  className?: string;
  pClassName?: string;
  headerTextAlign?: string;
}

const SideTextContent = ({
  h2,
  p,
  order = 'order-2',
  children,
  className = 'items-start',
  pClassName,
  headerTextSize = 'text-4xl md:text-5xl',
  headerTextAlign = 'text-start',
}: SideTextContentTypes) => {
  return (
    <div
      className={`flex relative h-fit flex-col justify-center gap-2 md:gap-5 ${order} ${className}`}
    >
      <h2 className={`${headerTextSize}  font-bold ${headerTextAlign}`}>
        {h2}
      </h2>
      <p className={`h-fit text-lg ${pClassName}`}>{p}</p>
      {children}
    </div>
  );
};

export default SideTextContent;
