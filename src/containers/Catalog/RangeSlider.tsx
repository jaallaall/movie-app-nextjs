import { useCallback, useEffect, useState, useRef } from "react";

type Props = {
  min: number;
  max: number;
  onChange: Function;
  label: string;
  step?: number;
};

export default function RangeSlider({
  min,
  max,
  onChange,
  label,
  step,
}: Props) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleChangeMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    event.target.value = value.toString();
  };

  const handleChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    event.target.value = value.toString();
  };

  const style =
    "thumb pointer-events-none absolute w-52 h-0 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:mt-6 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative";

  return (
    <div className="w-full flex">
      <div className="dropdown w-full group">
        <label className="text-xs opacity-80">{label} :</label>
        <div tabIndex={0} role="button" className="flex mt-1 items-center ">
          <span className="block min-w-16">{minVal + " - " + maxVal}</span>
          <span
            className={`group-focus-within:after:bg-primary group-focus-within:before:bg-primary group-focus-within:before:rotate-45 group-focus-within:after:-rotate-45 group-focus-within:after:w-4 group-focus-within:before:origin-[5px_0] group-focus-within:after:origin-[2px_1.5px] ms-2 before:w-4 before:h-0.5 before:block before:mb-1 after:w-2 after:h-0.5 after:block before:duration-500 before:ease-in-out after:duration-500 after:ease-in-out before:bg-white after:bg-white`}
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-4 bg-base-200 rounded-lg mt-2"
          dir="ltr"
        >
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={handleChangeMinValue}
            className={`${style} ${minVal > 1 ? "z-[5]" : "z-[3]"}`}
            step={step}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={handleChangeMaxValue}
            className={`z-[4]  ${style}`}
            step={step}
          />
          <div className="relative w-52 h-6 flex items-center">
            <div className=" bg-base-100 w-full z-[1] rounded-md h-1 absolute" />
            <div
              ref={range}
              className=" z-[2] bg-primary rounded-md h-1 absolute"
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
