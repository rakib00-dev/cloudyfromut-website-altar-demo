import Link from 'next/link';
import React from 'react';

interface ButtonTypes {
  text: string;
  href?: string;
  bgColor?: string;
  className?: string;
  textSize?: string;
  padding?: string;
}

const Button = ({
  text,
  href = '#',
  bgColor = 'bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)]',
  className = '',
  padding = 'px-8 py-3',
  textSize = 'text-xs md:text-sm ',
}: ButtonTypes) => {
  return (
    <Link
      href={href}
      className={`transition-all w-fit duration-300 cursor-pointer text-white border-2 font-bold ${textSize} rounded-4xl uppercase  ${bgColor} ${padding} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
