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

export default function Hero() {
  const [position, setPosition] = React.useState('');

  console.log(position);

  return (
    <section className="relative max-w-7xl mx-auto w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 grid gap-5 py-20 md:py-30">
        <h1 className="text-5xl md:text-6xl font-extrabold py-4 w-full md:w-[45rem] mx-auto md:text-start">
          Pick your type of project.
        </h1>

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
                {position ? `${position}` : 'Pick your type of project here'}
                <GoTriangleDown className="fill-blue-500 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70 md:min-w-3xl">
              <DropdownMenuLabel>
                Pick your type of project here
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="pick-your-type-of-project-here">
                  Pick your type of project here
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="fintech-application">
                  Fintech Application
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="data-mining-tool">
                  Data Mining Tool
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="open-banking-app">
                  Open Banking App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="marketplace">
                  Marketplace
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="api">API</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="analytics-bi-dashboard">
                  Analytics / BI Dashboard
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="community-social-network">
                  Community / Social Network
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="artificial-intelligence-application">
                  Artificial Intelligence Application
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ai-on-the-edge">
                  AI on the edge
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="music-entertainment-app">
                  Music & Entertainment App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="regtech-software">
                  Regtech Software
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system-integration-project">
                  System Integration Project
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="blockchain-app">
                  Blockchain App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lifestyle-app">
                  Lifestyle App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="health-fitness-app">
                  Health & Fitness App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="travel-app">
                  Travel App
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sports-app">
                  Sports App
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
