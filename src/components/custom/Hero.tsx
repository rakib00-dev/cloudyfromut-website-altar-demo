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
  const [position, setPosition] = React.useState('bottom');

  return (
    <section className="relative max-w-7xl mx-auto w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 grid gap-5 md:py-30">
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
                Pick your type of project here
                <GoTriangleDown className="fill-blue-500 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
