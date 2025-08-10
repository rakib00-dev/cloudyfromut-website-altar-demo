import React from 'react';
import SideTextContent from '../common/SideTextContent';
import Image from 'next/image';
import Link from 'next/link';

const HomeServices = () => {
  const homeServicesCards = [
    {
      src: '/images/home-services/svg-image-14.svg',
      title: 'Product Scope',
      p: 'A structured 15 day process to align your product vision with your business goals.',
    },
    {
      src: '/images/home-services/svg-image-15.svg',
      title: 'AI Development & Enablement',
      p: 'We leverage ML and Generative AI strategically to ensure your business is future-ready.',
    },
    {
      src: '/images/home-services/svg-image-16.svg',
      title: 'MVP Builder',
      p: 'Go to the market quickly with a high-quality Minimum Viable Product.',
    },
    {
      src: '/images/home-services/svg-image-17.svg',
      title: 'Custom Software Development',
      p: 'Lean frameworks applied to your vision to create an innovative custom software solution.',
    },
    {
      src: '/images/home-services/svg-image-18.svg',
      title: 'UX/UI Design',
      p: 'Design an engaging product that is easy-to-use, attractive and functional.',
    },
    {
      src: '/images/home-services/svg-image-19.svg',
      title: 'Dedicated Teams',
      p: 'Build your product with a dedicated team of developers.',
    },
  ];

  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary-background)',
      }}
    >
      <div className="w-full grid gap-5 px-6 md:px-12 py-20 md:py-30">
        <SideTextContent
          h2="Our Services Have a Proven Structured Process"
          p="Building great products needs deep business insight, and a very structured process, that’s why we’re driven by process."
          className="items-start md:items-center md:mx-50"
          headerTextAlign="md:text-center"
          pClassName="md:text-center"
          order="order-1"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full order-2">
          {homeServicesCards.map((card, index) => (
            <Link
              href={'#'}
              key={index}
              className="bg-white rounded-xl w-full md:w-[23.2rem] md:h-80 shadow-2xl p-6 flex flex-col "
            >
              <div className="grid place-items-center mt-3 mb-6">
                <Image src={card.src} alt={card.title} width={55} height={55} />
              </div>
              <h3 className="text-2xl mb-2 font-semibold">{card.title}</h3>
              <p className="text-md text-gray-600">{card.p}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
