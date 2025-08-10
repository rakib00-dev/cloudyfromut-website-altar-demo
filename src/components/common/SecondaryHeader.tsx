import React from 'react';

const SecondaryHeader = ({ children }: { children: string }) => {
  return <h2 className="text-4xl md:text-5xl font-bold">{children}</h2>;
};

export default SecondaryHeader;
