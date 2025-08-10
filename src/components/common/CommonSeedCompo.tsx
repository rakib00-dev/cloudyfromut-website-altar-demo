import React from 'react';
import SideTextContent from './SideTextContent';
import Image from 'next/image';
interface CommonSeedCompoTypes {
  src?: string;
  h2: string;
  p: string;
  wantImage?: boolean;
}

const CommonSeedCompo = ({ src, h2, p, wantImage }: CommonSeedCompoTypes) => {
  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary-background)',
      }}
    >
      <div className="w-full md:h-[418px] px-6 grid grid-cols-1 md:px-12 py-10 md:py-30 md:grid-cols-2 gap-5">
        <SideTextContent h2={h2} p={p}></SideTextContent>
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
            alt="recent examples pricing laptop image"
            width={500}
            height={500}
            className="order-1 md:order-2 top-0 md:-right-6/12 z-40"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    </section>
  );
};

export default CommonSeedCompo;
