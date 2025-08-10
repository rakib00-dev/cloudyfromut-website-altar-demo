import React from 'react';
import SideTextContent from '../common/SideTextContent';

const HomeServices = () => {
  const homeServicesCards = [
    {
      title: 'Community Management Platform',
      duration: '3 months',
      cost: '€40k',
      p: 'An MVP for a Q&A platform for the beauty industry.',
    },
    {
      title: 'Arts Marketplace',
      duration: '2 months',
      cost: '€18k',
      p: "Marketplace built to serve the specific needs of an Art's niche.",
    },
  ];

  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--secondary-background)',
      }}
    >
      <div className="w-full grid gap-5 px-6 md:px-12 py-20 md:py-30 md:pt-50">
        <SideTextContent
          h2="Our Services Have a Proven Structured Process"
          p="Building great products needs deep business insight, and a very structured process, that’s why we’re driven by process."
          className="items-start md:items-center mx-50"
          headerTextAlign="md:text-center"
          pClassName="md:text-center"
          order="order-1"
        />
        <div className="grid md:grid-cols-3 gap-6 w-full order-2">
          {homeServicesCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:w-[23.2rem] md:h-80 shadow-2xl p-6 grid "
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-lg text-gray-500">{card.duration}</p>
                <h4 className="text-5xl font-bold">{card.cost}</h4>
                <p className="text-md text-gray-600 mt-2">{card.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
