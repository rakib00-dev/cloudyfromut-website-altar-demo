import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropDownProps {
  title: string;
  p: string;
  src: string;
  to?: string;
  paraClassName?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<DropDownProps> = ({
  title,
  p,
  src,
  to = '#',
  className,
  imgClassName,
  paraClassName,
  titleClassName,
  setIsNavOpen,
}) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`transition-all duration-300 relative h-36 flex gap-1 justify-start items-center md:w-xs rounded-md z-30 group hover:bg-blue-400 ${
        isActive ? 'text-[var(--primary-color)]' : ''
      } ${className}`}
      onClick={() => setIsNavOpen?.(false)}
    >
      <Image
        src={src}
        alt={title || ''}
        width={65}
        height={65}
        className={`p-3 group-hover:invert group-hover:brightness-0 rounded ${imgClassName}`}
      />
      <div className="grid text-left w-full group-hover:*:text-white">
        <h5 className={`capitalize text-xl font-bold w-full ${titleClassName}`}>
          {title}
        </h5>
        <p className={`font-medium ${paraClassName}`}>{p}</p>
      </div>
    </Link>
  );
};

export default DropDown;
