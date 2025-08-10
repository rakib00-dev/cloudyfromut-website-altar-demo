import React from 'react';

const CostCards = () => {
  const costCardsArr = [
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
    {
      title: 'API Middleware Connector',
      duration: '5 months',
      cost: '€90k',
      p: 'Software to seamlessly integrate several different third parties in a drag and drop interface.',
    },
    {
      title: 'Proptech Cloud',
      duration: '5 months',
      cost: '€350k',
      p: 'AI tool that analyses several data-points related to a certain geographic area and outputs the forward-looking value of real estate assets (by category – residential/commercial – type – compound/villa/flat – and size – 1/2/n bedrooms) in that area.',
    },
    {
      title: 'Legaltech',
      duration: '2 months',
      cost: '€100k',
      p: 'An MVP for a complex AI tool that analyses public rules on securities and advises front-office bankers on their sales choices towards the different client’s profiles.',
    },
    {
      title: 'Social Network Mobile App',
      duration: '5 months',
      cost: '€50k',
      p: 'A gamified fandom centric community where humans can engage in a closer and richer way.',
    },
    {
      title: 'Massive Data Ingestion System',
      duration: '3 months',
      cost: '€160k',
      p: 'A robust system constantly ingesting ~5TB of new data per day, keeping consistency and allowing immediate queries to all the data set.',
    },
    {
      title: 'MAdTech Platform',
      duration: '2 months',
      cost: '€18k',
      p: 'SaaS for FMCGs to create & manage integrated complex online and offline promotion campaigns, reaching each customer in an (almost) personalised way.',
    },
    {
      title: 'API Middleware Connector',
      duration: '5 months',
      cost: '€60k',
      p: 'Software to seamlessly integrate several different third parties in a drag and drop interface.',
    },
  ];

  return (
    <section
      className="relative max-w-7xl mx-auto w-full overflow-hidden"
      // style={{
      //   backgroundColor: 'var(--secondary-background)',
      // }}
    >
      <div className="w-full px-6 grid md:px-12 py-20 md:py-30 md:pt-50">
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {costCardsArr.map((card, index) => (
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

export default CostCards;
