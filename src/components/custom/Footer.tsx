import React from 'react';
import { BiPhone } from 'react-icons/bi';
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="" style={{ background: 'var(--footer-bg)' }}>
      <footer
        className="flex justify-center m-auto w-full max-w-7xl items-center relative z-10 pt-10 overflow-hidden lg:pt-[120px] *:text-black"
        style={{ background: 'var(--text-primary)' }}
      >
        <div className="flex flex-col w-[95%] p-0 md:px-4 md:pt-4 md:flex-row">
          <div className="gird md:justify-center md:flex w-full">
            <div className="flex justify-end md:mr-10 px-4 ">
              <a href="/#" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="/images/footer/altar-logo__small__transparent-color.svg"
                  alt="logo"
                  className="w-10 md:w-14 md:mr-10"
                  loading="lazy"
                />
              </a>
            </div>

            <LinkGroup header="Goals">
              <NavLink link="/#" label="Case Studies" />
              <NavLink link="/#" label="Testimonials" />
              <NavLink link="/#" label="About Us" />
              <NavLink link="/#" label="Careers" />
              <NavLink link="/#" label="Blog" />
              <NavLink link="/#" label="Podcast" />
              <NavLink link="/#" label="Partnerships" />
              <NavLink link="/#" label="News" />
              <NavLink link="/#" label="Newsletter" />
            </LinkGroup>
            <LinkGroup header="Services">
              <NavLink link="/#" label="Product Scope" />
              <NavLink link="/#" label="AI Development & Enablement" />
              <NavLink link="/#" label="MVP Builder" />
              <NavLink link="/#" label="Custom Software Development" />
              <NavLink link="/#" label="UX/UI" />
              <NavLink link="/#" label="Dedicated Teams" />
            </LinkGroup>
            <LinkGroup header="Technology">
              <NavLink link="/#" label="Tech" />
              <NavLink link="/#" label="Open Source" />
              <NavLink link="/#" label="AI Manifesto" />
            </LinkGroup>
            <LinkGroup header="build">
              <NavLink link="/#" label="Play with Pricing" />
              <NavLink link="/#" label="Book a Call" />
            </LinkGroup>
          </div>
        </div>
      </footer>
      <div className="flex-col-reverse md:flex-row place-items-center flex justify-between md:items-center *:text-white mx-6 md:mx-12 py-10 pb-20 border-t border-gray-500 gap-2 ">
        <span className="text-sm text-gray-600">
          © {new Date().getFullYear()} Altar.io All rights reserved.
        </span>
        <a className="text-sm hover:text-white text-gray-600" href="">
          Privacy Policy
        </a>
        <span className="flex gap-5">
          <a
            href=""
            className="transition-all duration-200 p-3 bg-gray-700 hover:bg-gray-500 rounded-full"
          >
            <FaFacebookF className="size-4 " />
          </a>
          <a
            href=""
            className="transition-all duration-200 p-3 bg-gray-700 hover:bg-gray-500 rounded-full"
          >
            <FaLinkedinIn className="size-4 " />
          </a>
          <a
            href=""
            className="transition-all duration-200 p-3 bg-gray-700 hover:bg-gray-500 rounded-full"
          >
            <FaYoutube className="size-4 " />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;

interface LinkGroupTypes {
  children?: any;
  header?: string;
}

const LinkGroup = ({ children, header }: LinkGroupTypes) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-5 md:mb-9 capitalize text-xl md:text-2xl font-bold text-dark text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

interface NavLinkTypes {
  link?: string;
  label?: string;
  className?: string;
}

const NavLink = ({ link, label, className }: NavLinkTypes) => {
  return (
    <li className=" sm:leading-0 ">
      <a
        href={link}
        className={`text-sm md:text-[1rem] inline-block md:leading-loose text-gray-200 hover:underline hover:text-gray-500 ${className}`}
      >
        {label}
      </a>
    </li>
  );
};
