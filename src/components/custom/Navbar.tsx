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
        className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b border-gray-200 z-20"
        ref={navBarFix}
      >
        <nav className="relative flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl bg-white/60 w-full h-20 m-auto lg:py-2.5">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

          <div className="text-md font-medium w-32 md:w-64 md:text-lg">
            <Link href="/" className="flex items-center" onClick={scrollToTop}>
              <Image
                src="./images/navbar/altar-logo.svg"
                alt="logo"
                width={150}
                height={39}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-end items-center w-full">
            <ul className="flex justify-center mx-auto items-center gap-5">
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
              <ListItem navLink="/our-work" onClick={scrollToTop}>
                pricing
              </ListItem>
              <ListItem navLink="/pricing" onClick={scrollToTop}>
                about us
              </ListItem>
              <ListItem navLink="/pricing" onClick={scrollToTop}>
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
            </ul>
            <Button text="book a call" />
          </div>

          {/* Mobile Menu Toggle */}
          {/* <div className="lg:hidden">
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
          </div> */}
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      {/* <OutsideClickHandler onOutsideClick={() => setIsNavOpen(false)}>
        {isNavOpen && (
          <div className="fixed top-20 flex flex-col w-full h-full pl-5 pt-5 gap-10 bg-white overflow-y-auto lg:hidden z-50">
            <ul className="flex flex-col leading-6">
              <ListItem
                navLink="/our-work"
                onClick={() => {
                  setIsNavOpen(false);
                  scrollToTop();
                }}
              >
                our work
              </ListItem>
              <ListItem
                navLink="/pricing"
                onClick={() => {
                  setIsNavOpen(false);
                  scrollToTop();
                }}
              >
                pricing
              </ListItem>
              <ListItem navLink="/contact" onClick={() => setIsNavOpen(false)}>
                contact
              </ListItem>
            </ul>
          </div>
        )}
      </OutsideClickHandler> */}
    </>
  );
};

export default Navbar;
