import DropDown from './DropDown';

interface DropDownsTypes {
  subMenuArr: object[];
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDowns = ({ subMenuArr, setIsNavOpen }: DropDownsTypes) => {
  return (
    <div className="absolute h-auto top-5 flex items-start bg-white rounded-2xl px-2 py-4 flex-1 shadow-2xl border border-gray-200 ">
      {subMenuArr.map(({ title, p, src, to }: any, idx) => (
        <DropDown
          to={to}
          src={src}
          title={title}
          p={p}
          setIsNavOpen={setIsNavOpen}
        />
      ))}
    </div>
  );
};

export default DropDowns;
