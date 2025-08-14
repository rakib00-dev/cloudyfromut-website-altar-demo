import CallToAction from '@/components/custom/CallToAction';
import CostCards from '@/components/custom/CostCards';
import GetOurPricing from '@/components/custom/GetOurPricing';
import Hero from '@/components/custom/Hero';
import HomeServices from '@/components/custom/HomeServices';
import RecentExamples from '@/components/custom/RecentExamples';
import SeedModules from '@/components/custom/SeedModules';
import SeedProject from '@/components/custom/SeedProject';
import Testimonial from '@/components/custom/Testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <ImageAndBgEffeect /> {/* effect */}
      <RecentExamples />
      <CostCards />
      {/* Get to our pricing ⬇️ */}
      <GetOurPricing />
      <SeedProject />
      <SeedModules />
      <HomeServices />
      <Testimonial />
      <CallToAction />
      {/* <div className="mt-[80rem]"></div> */}
    </>
  );
}

function ImageAndBgEffeect() {
  return (
    <>
      <Image
        src={'/images/hero/bg-prop-2-right.svg'}
        alt="hero bg"
        width={400}
        height={400}
        className="absolute top-0 right-0 -z-10 hidden md:block w-auto h-auto"
      />
      <div
        className="w-full h-[90rem] absolute -z-20 py-60 -translate-y-30 md:-translate-y-65"
        style={{
          backgroundColor: 'var(--secondary-background)',
        }}
      ></div>
    </>
  );
}
