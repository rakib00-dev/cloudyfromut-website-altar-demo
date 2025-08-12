import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { CSSProperties, HTMLElementType, ReactNode } from 'react';

interface ListItemProps {
  className?: string;
  smallClassName?: string;
  navLink: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  children: HTMLElementType | ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  notLink?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  className,
  smallClassName,
  navLink,
  onMouseOver,
  onMouseOut,
  children,
  onClick,
  notLink,
  style,
}) => {
  const pathname = usePathname();

  const isActive = pathname === navLink;

  return (
    <li className="pb-5 lg:pb-0 flex">
      {notLink ? (
        <span
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `flex justify-center items-center gap-1 relative text-xl  text-gray-700 font-bold cursor-pointer transition-all duration-100 capitalize  lg:text-sm  ${
                  isActive ? 'text-[var(--primary-color)]' : ''
                } ${className || ''}`
          }
        >
          {children}
        </span>
      ) : (
        <Link
          href={navLink}
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `flex justify-center items-center gap-1 relative text-xl  text-gray-700 font-bold cursor-pointer transition-all duration-100 capitalize  lg:text-sm hover:text-[var(--primary-color)]  ${
                  isActive ? 'text-blue-500' : ''
                } ${className || ''}`
          }
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default ListItem;
