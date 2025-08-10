import Image from 'next/image';
import React from 'react';

const RecentExamples = () => {
  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary-background)',
      }}
    >
      <div className="w-full px-6 grid md:px-12 py-20 md:py-30 md:grid-cols-2 ">
        <div className="flex flex-col justify-center items-start gap-5 order-2 md:order-1">
          <h2 className="text-2xl md:text-5xl font-bold">Recent Examples</h2>
          <p>
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
          className="order-1 md:order-2 absolute top-0 -right-6/12 z-40"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default RecentExamples;
