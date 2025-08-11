import React from 'react';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--cta-bg)]">
      <div
        className={`max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center md:px-12 pb-10 md:pb-30 gap-5`}
      >
        <div>
          <img src="" alt="" />
          <h3></h3>
          <Button
            text="Schedule a Call"
            className="border-[var(--primary-color)] not-hover:bg-transparent"
          />
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <img
            src="/images/call-to-action/city-lisbon-light-768x456.png.webp"
            alt="city lisbon light image"
            className="size-40"
          />
          <div>
            <h4></h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
