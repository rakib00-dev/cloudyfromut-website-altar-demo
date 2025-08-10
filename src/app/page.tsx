import CommonSeedCompo from '@/components/common/CommonSeedCompo';
import CostCards from '@/components/custom/CostCards';
import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import RecentExamples from '@/components/custom/RecentExamples';
import Image from 'next/image';

export default function Hoe() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageAndBgEffeect /> {/* effect */}
      <RecentExamples />
      <CostCards />
      <CommonSeedCompo
        h2="How We Get to Our Pricing"
        p="Our pricing is reflected by our lean, user-centric approach to product innovation and software development. This, combined with top industry talent, means our small focused teams deliver projects on time and on budget."
        wantImage
      />
      <div className="mt-[80rem]"></div>
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
        className="absolute top-0 right-0 -z-10 hidden md:block"
      />
      <div
        className="w-full absolute -z-20 py-60 -translate-y-30 md:-translate-y-65"
        style={{
          backgroundColor: 'var(--secondary-background)',
        }}
      ></div>
    </>
  );
}
