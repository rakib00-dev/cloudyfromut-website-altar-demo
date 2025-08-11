import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <section className="relative max-w-7xl mx-auto w-full overflow-hidden">
      <div
        className={`w-full md:h-[418px] px-6 grid place-items-center grid-cols-1 md:px-12 py-10 md:py-30 md:grid-cols-2 gap-5`}
      >
        <Image
          src={'/images/recent-examples/pricing1.png.webp'}
          alt="tesitiomonial section image"
          width={500}
          height={500}
          className="z-20"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default Testimonial;
