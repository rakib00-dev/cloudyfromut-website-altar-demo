import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import Image from 'next/image';

export default function Hoe() {
  return (
    <>
      <Navbar />
      <Hero />
      <Image
        src={'/images/hero/bg-prop-2-right.svg'}
        alt="hero bg"
        width={400}
        height={400}
        className="absolute top-0 right-0 -z-10 hidden md:block"
      />
      <div
        className="w-full absolute -z-20 py-60 -translate-y-65"
        style={{
          backgroundColor: 'var(--secondary-background)',
        }}
      ></div>
      {/* <div className="mt-[80rem]"></div> */}
    </>
  );
}
