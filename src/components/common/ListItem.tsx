import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { CSSProperties, HTMLElementType, ReactNode } from 'react';

interface ListItemProps {
  className?: string;
  smallClassName?: string;
  href: string;
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
  href,
  onMouseOver,
  onMouseOut,
  children,
  onClick,
  notLink,
  style,
}) => {
  const pathname: string = usePathname();

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
              : `flex justify-center items-center gap-1 relative text-xl  text-gray-700 font-bold cursor-pointer transition-all duration-100 capitalize  lg:text-sm ${
                  className || ''
                }`
          }
        >
          {children}
        </span>
      ) : (
        <Link
          href={href}
          style={style}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
          className={
            smallClassName
              ? smallClassName
              : `flex justify-center items-center gap-1 relative text-xl font-bold cursor-pointer transition-all duration-100 capitalize  lg:text-sm hover:text-[var(--primary-color)]
                 ${className || ''} ${
                  pathname === href
                    ? 'text-[var(--primary-color)]'
                    : 'text-gray-700'
                }`
          }
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default ListItem;
