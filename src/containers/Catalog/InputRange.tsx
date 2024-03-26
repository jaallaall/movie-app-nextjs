import { useState } from "react";

type Props = {
  label: string;
};

export default function InputRange({ label }: Props) {
  const [value, setValue] = useState<string>("40");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="dropdown group">
      <label className="text-sm opacity-80">{label} :</label>
      <div tabIndex={0} role="button" className="flex mt-1 items-center">
        <span className="block min-w-12">{value}</span>
        <span
          className={`group-focus:after:bg-primary group-focus:before:bg-primary group-focus:before:rotate-45 group-focus:after:-rotate-45 group-focus:after:w-4 group-focus:before:origin-[5px_0] group-focus:after:origin-[2px_1.5px] ms-2 before:w-4 before:h-0.5 before:block before:mb-1 after:w-2 after:h-0.5 after:block before:duration-500 before:ease-in-out after:duration-500 after:ease-in-out before:bg-white after:bg-white`}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-4 bg-base-200 rounded-lg mt-2 w-52"
      >
        <input
          type="range"
          min={0}
          max="100"
          defaultValue={value}
          className="range range-primary range-xs"
          onChange={handleChange}
          dir="ltr"
        />
      </ul>
    </div>
  );
}
