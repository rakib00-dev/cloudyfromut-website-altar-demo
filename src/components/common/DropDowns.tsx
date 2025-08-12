import DropDown from './DropDown';

interface DropDownsTypes {
  subMenuArr: object[];
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const DropDowns = ({ subMenuArr, setIsNavOpen, className }: DropDownsTypes) => {
  return (
    <div
      className={`absolute h-auto top-5 grid grid-cols-2 w-[41rem] bg-white rounded-2xl px-2 py-4 shadow-2xl border border-gray-200 ${className}`}
    >
      {subMenuArr.map(({ title, p, src, to }: any, idx) => (
        <DropDown
          to={to}
          src={src}
          title={title}
          p={p}
          setIsNavOpen={setIsNavOpen}
          key={idx}
        />
      ))}
    </div>
  );
};

export default DropDowns;
