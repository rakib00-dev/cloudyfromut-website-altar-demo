'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GoTriangleDown } from 'react-icons/go';
import HomePriceCalculator from './HomePriceCalculator';

export default function Hero() {
  const [selectedOption, setSelectedOption] = React.useState('');

  const selectiveDropDowns = [
    { title: 'Fintech Application', value: 'fintech-application' },
    { title: 'Data Mining Tool', value: 'data-mining-tool' },
    { title: 'Open Banking App', value: 'open-banking-app' },
    { title: 'Marketplace', value: 'marketplace' },
    { title: 'API', value: 'api' },
    { title: 'Analytics / BI Dashboard', value: 'analytics-bi-dashboard' },
    { title: 'Community / Social Network', value: 'community-social-network' },
    {
      title: 'Artificial Intelligence Application',
      value: 'artificial-intelligence-application',
    },
    { title: 'AI on the edge', value: 'ai-on-the-edge' },
    { title: 'Music & Entertainment App', value: 'music-entertainment-app' },
    { title: 'Regtech Software', value: 'regtech-software' },
    {
      title: 'System Integration Project',
      value: 'system-integration-project',
    },
    { title: 'Blockchain App', value: 'blockchain-app' },
    { title: 'Lifestyle App', value: 'lifestyle-app' },
    { title: 'Health & Fitness App', value: 'health-fitness-app' },
    { title: 'Travel App', value: 'travel-app' },
    { title: 'Sports App', value: 'sports-app' },
  ];

  console.log(selectedOption);

  return (
    <section className="relative max-w-7xl mx-auto w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 grid gap-5 py-20 md:py-30 md:mb-20">
        {!selectedOption && (
          <h1 className="text-5xl md:text-6xl font-extrabold py-4 w-full md:w-[45rem] mx-auto md:text-start">
            Pick your type of project.
          </h1>
        )}

        <div className="flex justify-center w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className=" flex justify-start w-full md:w-[45rem]"
            >
              <Button
                variant="outline"
                className="flex text-md py-6 text-gray-500 justify-between border-blue-300 border"
              >
                {selectedOption
                  ? `${selectedOption}`
                  : 'Pick your type of project here'}
                <GoTriangleDown className="fill-blue-500 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70 md:min-w-3xl">
              <DropdownMenuLabel>
                Pick your type of project here
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
              >
                {selectiveDropDowns.map(({ title, value }) => (
                  <DropdownMenuRadioItem
                    key={value}
                    value={value}
                    // onClick={() => setSelectedOption(title)}
                  >
                    {title}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* {selectedOption && ( */}
        {selectedOption && selectedOption.length > 4 && <HomePriceCalculator />}
      </div>
    </section>
  );
}
