import Image from "next/image";
import AddReview from "./AddReview";

export default function Reviews() {
  const rate = 7;
  return (
    <>
      <ul className="text-justify mb-4">
        <li>
          <div className="grid grid-cols-[max-content_1fr_max-content] gap-x-3 mb-4 items-center">
            <div className="rounded-lg overflow-hidden w-11 h-11 relative">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                fill
                style={{ objectFit: "scale-down" }}
              />
            </div>
            <div>
              <span className="block mb-1">John Doe</span>
              <span className="block text-xs text-base-content/70">
                30.08.2018, 17:53
              </span>
            </div>
            <div
              className={`flex justify-center items-center border-2 text-sm rounded-full w-9 h-9 bg-black/20 ${
                rate < 6.5
                  ? "border-error"
                  : rate > 7
                  ? "border-primary"
                  : "border-success"
              }`}
            >
              {rate}
            </div>
          </div>
          <div className="border border-base-content/5 rounded-lg">
            <div className="p-6">
              <p>
                انواع مختلفی از قسمت‌های Lorem Ipsum در دسترس است، اما اکثریت
                آن‌ها به شکلی دچار تغییراتی شده‌اند، با طنز تزریقی، یا کلمات
                تصادفی که حتی کمی باورپذیر به نظر نمی‌رسند. اگر می‌خواهید از
                قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن شوید که هیچ چیز
                شرم‌آوری در وسط متن پنهان نشده باشد.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <AddReview />
    </>
  );
}
