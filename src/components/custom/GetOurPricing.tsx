import React from 'react';
import CommonSeedCompo from '../common/CommonSeedCompo';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

const GetOurPricing = () => {
  return (
    <CommonSeedCompo
      h2="How We Get to Our Pricing"
      p="Our pricing is reflected by our lean, user-centric approach to product innovation and software development. This, combined with top industry talent, means our small focused teams deliver projects on time and on budget."
      wantImage
      className="mb-30"
    >
      <div className="flex flex-col items-start w-full h-fit">
        <Link
          href={'#seed-project'}
          className="flex justify-between items-center py-5 gap-3 font-bold text-2xl w-full border-b-2"
        >
          Learn more about our Seed Program{' '}
          <FaArrowDown className="" style={{ color: 'var(--primary-color)' }} />
        </Link>
        <Link
          href={'#seed-modules'}
          className="flex justify-between items-center py-5 gap-3 font-bold text-2xl w-full"
        >
          Learn more about our Structured Process{' '}
          <FaArrowDown className="" style={{ color: 'var(--primary-color)' }} />
        </Link>
      </div>
    </CommonSeedCompo>
  );
};

export default GetOurPricing;
