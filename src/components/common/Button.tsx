import Link from 'next/link';
import React from 'react';

interface ButtonTypes {
  text: string;
  href?: string;
  bgColor?: string;
  className?: string;
}

const Button = ({
  text,
  href = '#',
  bgColor = 'bg-[var(--primary-color)]',
  className = 'px-8 py-3',
}: ButtonTypes) => {
  return (
    <Link
      href={href}
      className={`cursor-pointer text-white border-2 font-bold text-sm rounded-4xl uppercase ${bgColor} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
