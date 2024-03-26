import { useState } from "react";

export default function AddReview() {
  const [rate, setRate] = useState<number>(0);
  return (
    <form className="border border-base-content/5 p-6 rounded-lg">
      <input className="input mb-4 bg-base-200 w-full" placeholder="عنوان" />
      <textarea
        placeholder="بررسی"
        className="textarea textarea-lg w-full bg-base-200 mb-4"
        rows={3}
      />
      <div className="mb-4 max-w-56">
        <label className="mb-3 flex">
          امتیاز : <span className="px-2 block">{rate}</span>
        </label>
        <input
          type="range"
          min={0}
          max="10"
          step={0.1}
          value={rate}
          className="range range-primary range-xs"
          dir="ltr"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value);
            setRate(value);
            event.target.value = value.toString();
          }}
        />
      </div>
      <button className="btn btn-custom min-w-36 mt-6">ارسال</button>
    </form>
  );
}
