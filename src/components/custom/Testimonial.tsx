import Image from 'next/image';
import React from 'react';
import SideTextContent from '../common/SideTextContent';
import Button from '../common/Button';

const Testimonial = () => {
  return (
    <section className="relative max-w-7xl mx-auto w-full overflow-hidden">
      <div
        className={` w-full px-6 grid place-items-center grid-cols-1 md:px-12 pt-10 md:pt-30 md:grid-cols-2 gap-5`}
      >
        <div className="relative w-full md:w-[30rem] lg:w-[35rem] aspect-square z-10">
          <Image
            src="/images/testimonial/Group-3425.png.webp"
            alt="testimonial section image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hidden gap-20 md:grid mb-30">
          <SideTextContent
            h2="Get a dedicated proposal in a couple of days"
            p="Book a call with us and we’ll guide you through a structured process to assess the right list of features for your product. You’ll be driven through this process by product experts, not business developers or account owners."
            order="order-2"
            headerTextSize="text-3xl md:text-4xl w-2/3"
            className="md:gap-5"
          />
          <div className="order-2 grid">
            <p>Daniel de Castro Ruivo</p>
            <h5 className="font-bold">Co-Founder</h5>
            <div className="relative w-80 h-20 z-20">
              <Image
                src="/images/testimonial/image-234.png.webp"
                alt="testimonial section image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative w-full -top-20 md:px-12 grid place-items-center `}
      >
        <div
          style={{ background: 'var(--testimonial-bg' }}
          className="relative flex flex-col justify-center items-center md:h-40 w-full py-30 md:py-60 md:rounded-2xl overflow-hidden gap-5"
        >
          <h2
            className=" text-4xl md:text-5xl md:w-[30%] text-center font-bold z-10"
            style={{ color: '#fff' }}
          >
            Talk with a Product Expert
          </h2>
          <Button
            text="Book a Call"
            className="border-none z-10"
            padding="px-10 py-5"
          />
          <img
            src="/images/testimonial/bg-prop-5-right.svg"
            alt=""
            className="absolute "
          />
          <img
            src="/images/testimonial/bg-prop-5-right.svg"
            alt=""
            className="absolute right-0"
          />
          <img
            src="/images/testimonial/bg-prop-5-right.svg"
            alt=""
            className="absolute left-0"
          />
        </div>
        <div className="bg-[var(--cta-bg)] h-34 w-full absolute -bottom-30"></div>
      </div>
    </section>
  );
};

export default Testimonial;
