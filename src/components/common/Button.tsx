import Link from 'next/link';
import React from 'react';

interface ButtonTypes {
  text: string;
  href?: string;
  bgColor?: string;
  className?: string;
  textSize?: string;
}

const Button = ({
  text,
  href = '#',
  bgColor = 'bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)]',
  className = 'px-8 py-3',
  textSize = 'text-sm ',
}: ButtonTypes) => {
  return (
    <Link
      href={href}
      className={`transition-all duration-300 cursor-pointer text-white border-2 font-bold ${textSize} rounded-4xl uppercase  ${bgColor} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
