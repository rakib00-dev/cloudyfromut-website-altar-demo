import Image from 'next/image';
import React from 'react';
import SecondaryHeader from '../common/SecondaryHeader';

const RecentExamples = () => {
  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary-background)',
      }}
    >
      <div className="w-full md:h-[418px] px-6 grid grid-cols-1 md:px-12 py-10 md:py-30 md:grid-cols-2 gap-5">
        <div className="flex h-fit flex-col justify-center items-start gap-2 md:gap-5 order-2">
          <SecondaryHeader>Recent Examples</SecondaryHeader>
          <p className="h-fit">
            Here are some examples of projects we worked on over the last few
            months. This will help you understand how pricing can vary depending
            on factors like size and complexity.
          </p>
        </div>

        <Image
          src={'/images/recent-examples/pricing1.png.webp'}
          alt="recent examples pricing laptop image"
          width={500}
          height={500}
          className="order-1 md:order-2 md:absolute top-0 md:-right-6/12 z-40"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default RecentExamples;
