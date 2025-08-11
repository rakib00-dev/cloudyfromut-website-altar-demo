import React from 'react';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--cta-bg)]">
      <div
        className={`max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center md:px-12 pb-10 md:pb-30 gap-5 *:text-white`}
      >
        <div className="grid gap-7">
          <img
            src="/images/navbar/altar-logo_light.svg"
            alt="altar logo"
            loading="lazy"
            width={150}
            height={39}
            className="w-32 h-8 md:w-36 md:h-9 "
          />
          <h3 className="text-4xl md:text-6xl font-bold w-2/3">
            Let’s talk about your project
          </h3>
          <Button
            text="Schedule a Call"
            className="border-[var(--primary-color)] not-hover:bg-transparent"
          />
          <div className="flex items-center gap-8">
            <img
              src="/images/call-to-action/review-clutch.svg"
              alt="company details"
              loading="lazy"
              className="opacity-40 size-25"
            />
            <img
              src="/images/call-to-action/review-pme-22.svg"
              alt="comapny logo"
              loading="lazy"
              className="opacity-40 size-20"
            />
          </div>
        </div>
        <div className="grid gap-5 md:gap-10">
          <img
            src="/images/call-to-action/city-lisbon-light-768x456.png.webp"
            alt="city lisbon light image"
            className="w-50 h-30 md:w-100 md:h-60 opacity-50"
            loading="lazy"
          />
          <div className="grid gap-3 md:gap-5 w-2/3">
            <h4 className="text-lg font-bold">LISBON HQ</h4>
            <span className="*:text-sm">
              <p>Address: R. Adriano C. de Oliveira 4A 1600-312</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:lisbon@altar.io"
                  className="text-[var(--primary-color)] hover:text-[#8d064c]"
                  style={{}}
                >
                  lisbon@altar.io
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
