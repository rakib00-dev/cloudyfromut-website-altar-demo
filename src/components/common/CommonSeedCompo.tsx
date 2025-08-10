import React from 'react';
import SideTextContent from './SideTextContent';
import Image from 'next/image';

interface CommonSeedCompoTypes {
  src?: string;
  h2: string;
  p: string;
  wantImage?: boolean;
  children?: any;
  className?: string;
  style?: object;
  imgOrder?: string;
  textOrder?: string;
  imgWidth?: number;
  imgHeight?: number;
  id?: string;
}

const CommonSeedCompo = ({
  src,
  h2,
  id,
  p,
  wantImage,
  children,
  className,
  style,
  imgOrder,
  textOrder,
  imgWidth = 350,
  imgHeight = 350,
}: CommonSeedCompoTypes) => {
  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={style}
    >
      <div
        id={id}
        className={`w-full md:h-[418px] px-6 grid place-items-center grid-cols-1 md:px-12 py-10 md:py-30 md:grid-cols-2 gap-5 ${className}`}
      >
        <SideTextContent h2={h2} p={p} order={textOrder}>
          {children}
        </SideTextContent>

        {wantImage && (
          <Image
            src={'/images/seed-group/bg-prop-4-left.svg'}
            alt="hero bg"
            width={200}
            height={200}
            className="hidden top-0 left-0 z-10 md:block absolute "
          />
        )}

        {src && (
          <Image
            src={src}
            alt="recent examples pricing seed image"
            width={imgWidth}
            height={imgHeight}
            className={imgOrder}
          />
        )}
      </div>
    </section>
  );
};

export default CommonSeedCompo;
