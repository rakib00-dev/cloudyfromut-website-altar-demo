'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React, {
  useEffect,
  useRef,
  useState,
  CSSProperties,
  ReactNode,
} from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { usePathname } from 'next/navigation';
import Button from '../common/Button';

interface ListItemProps {
  className?: string;
  smallClassName?: string;
  navLink: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

interface DropDownProps {
  title?: string;
  src?: string;
  to: string;
  className?: string;
  imgClassName?: string;
}

const Navbar: React.FC = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);
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

  const ListItem: React.FC<ListItemProps> = ({
    className,
    smallClassName,
    navLink,
    onMouseOver,
    onMouseOut,
    children,
    onClick,
    style,
  }) => {
    const isActive = pathname === navLink;
    return (
      <li className="pb-5 lg:pb-0 flex">
        <Link
          href={navLink}
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `flex justify-center items-center gap-1 relative text-xl  text-gray-700 font-bold cursor-pointer transition-all duration-300 capitalize  lg:text-sm hover:text-gray-500  ${
                  isActive ? 'text-blue-500' : ''
                } ${className || ''}`
          }
        >
          {children}
        </Link>
      </li>
    );
  };

  const DropDown: React.FC<DropDownProps> = ({
    title = 'web design',
    src,
    to = '#',
    className,
    imgClassName,
  }) => {
    const isActive = pathname === to;
    return (
      <Link
        href={to}
        className={`flex gap-2 p-4 justify-start items-center w-full rounded-md ${
          isActive ? 'DropItemActive' : 'DropItemHover'
        } ${className || ''} ${src ? '' : 'pl-10 py-6 underline'}`}
        onClick={() => setIsNavOpen(false)}
      >
        {src && (
          <Image
            src={src}
            alt={title}
            width={44}
            height={44}
            className={`p-3 rounded bg-gray-100/80 ${imgClassName || ''}`}
          />
        )}
        <h5 className="capitalize text-sm w-fit font-bold">{title}</h5>
      </Link>
    );
  };

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b border-gray-200 z-50"
        ref={navBarFix}
      >
        <nav className="relative flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl bg-white/60 w-full h-20 m-auto lg:py-2.5">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <div className="text-md font-medium w-32 md:w-64 md:text-lg">
            <Link href="/" className="flex items-center" onClick={scrollToTop}>
              <Image
                src="./images/navbar/altar-logo.svg"
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
                navLink="#"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                work{' '}
                <FaChevronDown
                  style={{ color: 'var(--primary-color)' }}
                  className={
                    isHovered ? 'rotate-180 transition-all' : 'transition-all'
                  }
                />
              </ListItem>
              <ListItem
                navLink="#"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                solutions{' '}
                <FaChevronDown
                  style={{ color: 'var(--primary-color)' }}
                  className={
                    isHovered ? 'rotate-180 transition-all' : 'transition-all'
                  }
                />
              </ListItem>
              <ListItem navLink="/pricing" onClick={scrollToTop}>
                pricing
              </ListItem>
              <ListItem navLink="#" onClick={scrollToTop}>
                about us
              </ListItem>
              <ListItem navLink="#" onClick={scrollToTop}>
                careers
              </ListItem>
              <ListItem
                navLink="#"
                onMouseOver={() => setIsResourceHovered(true)}
                onMouseOut={() => setIsResourceHovered(false)}
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
      </motion.div>

      {/* Mobile Menu */}
      <OutsideClickHandler onOutsideClick={() => setIsNavOpen(false)}>
        {/* {isNavOpen && ( */}
        <div
          className={`fixed transition-all duration-300 flex flex-col w-full pb-10 h-full pl-5 md:px-10 pt-5 gap-10 bg-white overflow-y-auto lg:hidden z-20 ${
            isNavOpen ? 'top-20' : '-top-[200%]'
          }`}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <ul className="flex flex-col leading-6 mr-4 overflow-x-auto mb-10">
            <ListItem
              className="w-full"
              navLink=""
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

            <ListItem
              className="w-full"
              navLink=""
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

            <ListItem navLink="#" onClick={() => setIsNavOpen(false)}>
              pricing
            </ListItem>
            <ListItem navLink="#" onClick={() => setIsNavOpen(false)}>
              about us
            </ListItem>
            <ListItem navLink="#" onClick={() => setIsNavOpen(false)}>
              careers
            </ListItem>
            <ListItem navLink="#" onClick={() => setIsNavOpen(false)}>
              Tech
            </ListItem>
            <ListItem
              className="w-full"
              navLink=""
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
