'use client';
import Navbar from '@/components/custom/Navbar';
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    if (pathname == '/') {
      redirect('/pricing');
    }
  }, []);

  return (
    <>
      <h1 className="text-6xl ">homepage</h1>
    </>
  );
}
