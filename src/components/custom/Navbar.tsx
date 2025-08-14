'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaChevronDown } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

import Button from '../common/Button';
import ListItem from '../common/ListItem';
import Loading from '../common/Loading';
import { DesktopDropDowns, MobileDropDowns } from '../common/DropDowns';
import {
  navSubResourcesArr,
  navSubServicesArr,
  navSubWorkArr,
} from '@/utils/navSubMenus';
import { useParams } from 'next/navigation';

const Navbar: React.FC = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  // const [isHovered, setIsHovered] = useState(false);

  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isResourceHovered, setIsResourceHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navBarFix = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navBarFix.current) return;
      if (window.scrollY >= 82) {
        navBarFix.current.style.position = 'sticky';
      } else {
        navBarFix.current.style.position = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b border-gray-200 z-50 "
        ref={navBarFix}
      >
        <nav className="relative flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl bg-white/60 w-full h-20 m-auto lg:py-2.5">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <div className="text-md font-medium w-32 md:w-64 md:text-lg">
            <Link href="/" className="flex items-center" onClick={scrollToTop}>
              <Image
                src="/images/navbar/altar-logo_dark.svg"
                alt="logo"
                width={150}
                height={39}
                className="w-32 h-8 md:w-36 md:h-9 "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-end items-center">
            <ul className="flex justify-end mx-auto items-center gap-5">
              <ListItem
                href="#"
                onMouseOver={() => setIsWorkHovered(true)}
                onMouseOut={() => setIsWorkHovered(false)}
                notLink
              >
                work{' '}
                <FaChevronDown
                  style={{ color: 'var(--primary-color)' }}
                  className={
                    isWorkHovered
                      ? 'rotate-180 transition-all'
                      : 'transition-all'
                  }
                />
                {isWorkHovered && (
                  <Suspense fallback={<Loading />}>
                    <DesktopDropDowns
                      subMenuArr={navSubWorkArr}
                      setIsNavOpen={setIsNavOpen}
                    />
                  </Suspense>
                )}
              </ListItem>
              <ListItem
                href="#"
                onMouseOver={() => setIsServicesHovered(true)}
                onMouseOut={() => setIsServicesHovered(false)}
                notLink
              >
                services{' '}
                <FaChevronDown
                  style={{ color: 'var(--primary-color)' }}
                  className={
                    isServicesHovered
                      ? 'rotate-180 transition-all'
                      : 'transition-all'
                  }
                />
                {isServicesHovered && (
                  <Suspense fallback={<Loading />}>
                    <DesktopDropDowns
                      subMenuArr={navSubServicesArr}
                      setIsNavOpen={setIsNavOpen}
                    />
                  </Suspense>
                )}
              </ListItem>
              <ListItem href="/pricing" onClick={scrollToTop}>
                pricing
              </ListItem>
              <ListItem href="#" onClick={scrollToTop}>
                about us
              </ListItem>
              <ListItem href="#" onClick={scrollToTop}>
                careers
              </ListItem>
              <ListItem
                href="#"
                onMouseOver={() => setIsResourceHovered(true)}
                onMouseOut={() => setIsResourceHovered(false)}
                notLink
              >
                resources
                <FaChevronDown
                  style={{ color: 'var(--primary-color)' }}
                  className={
                    isResourceHovered
                      ? 'rotate-180 transition-all'
                      : 'transition-all'
                  }
                />
                {isResourceHovered && (
                  <Suspense fallback={<Loading />}>
                    <DesktopDropDowns
                      subMenuArr={navSubResourcesArr}
                      setIsNavOpen={setIsNavOpen}
                      className="mr-35"
                    />
                  </Suspense>
                )}
              </ListItem>
              <Button text="book a call" />
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative flex justify-center items-center gap-5">
            {!isNavOpen ? (
              <RiMenu3Fill
                className="text-3xl"
                onClick={() => setIsNavOpen(true)}
              />
            ) : (
              <RiCloseFill
                className="text-3xl"
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <OutsideClickHandler onOutsideClick={() => setIsNavOpen(false)}>
        {/* {isNavOpen && ( */}
        <div
          className={`fixed transition-all duration-300 flex flex-col w-full pb-10 h-full pl-5 md:px-10 pt-5 gap-10 bg-white overflow-y-auto lg:hidden z-50 ${
            isNavOpen ? 'top-20' : '-top-[200%]'
          }`}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <ul className="flex flex-col leading-6 mr-4 overflow-x-auto w-full mb-10">
            <ListItem
              className="w-full"
              href=""
              style={{ justifyContent: 'space-between' }}
              onClick={() => {
                setIsWorkHovered((prev) => !prev);
                // setIsNavOpen(false);
                // scrollToTop();
              }}
            >
              work
              <FaChevronDown
                style={{ color: 'var(--primary-color)' }}
                className={
                  isWorkHovered ? 'rotate-180 transition-all' : 'transition-all'
                }
              />
            </ListItem>
            {isWorkHovered && (
              <Suspense fallback={<Loading />}>
                <MobileDropDowns
                  subMenuArr={navSubWorkArr}
                  setIsNavOpen={setIsNavOpen}
                />
              </Suspense>
            )}

            <ListItem
              className="w-full"
              href=""
              style={{ justifyContent: 'space-between' }}
              onClick={() => {
                setIsServicesHovered((prev) => !prev);
                // setIsNavOpen(false);
                // scrollToTop();
              }}
            >
              services
              <FaChevronDown
                style={{ color: 'var(--primary-color)' }}
                className={
                  isServicesHovered
                    ? 'rotate-180 transition-all'
                    : 'transition-all'
                }
              />
            </ListItem>
            {isServicesHovered && (
              <Suspense fallback={<Loading />}>
                <MobileDropDowns
                  subMenuArr={navSubServicesArr}
                  setIsNavOpen={setIsNavOpen}
                />
              </Suspense>
            )}

            <ListItem href="#" onClick={() => setIsNavOpen(false)}>
              pricing
            </ListItem>
            <ListItem href="#" onClick={() => setIsNavOpen(false)}>
              about us
            </ListItem>
            <ListItem href="#" onClick={() => setIsNavOpen(false)}>
              careers
            </ListItem>
            <ListItem href="#" onClick={() => setIsNavOpen(false)}>
              Tech
            </ListItem>
            <ListItem
              className="w-full"
              href=""
              style={{ justifyContent: 'space-between' }}
              onClick={() => {
                setIsResourceHovered((prev) => !prev);
              }}
            >
              Resources
              <FaChevronDown
                style={{ color: 'var(--primary-color)' }}
                className={
                  isResourceHovered
                    ? 'rotate-180 transition-all'
                    : 'transition-all'
                }
              />
            </ListItem>
            {isResourceHovered && (
              <Suspense fallback={<Loading />}>
                <MobileDropDowns
                  subMenuArr={navSubServicesArr}
                  setIsNavOpen={setIsNavOpen}
                />
              </Suspense>
            )}

            <div className="grid place-items-end">
              <Button text="book a call" className="grid py-2" />
            </div>
          </ul>
        </div>
        {/* )} */}
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
