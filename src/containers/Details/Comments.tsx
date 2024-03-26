import {
  QuoteRight,
  Reply,
  ThumbsDown,
  ThumbsUp,
} from "@/components/Icons/solid";
import AddComment from "./AddComment";

export default function Comments() {
  return (
    <>
      <ul className="text-justify mb-4">
        <li>
          <div className="grid grid-cols-[max-content_1fr] gap-x-3 mb-4">
            {/* <div className="rounded-lg overflow-hidden w-11 h-11 relative">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                fill
                style={{ objectFit: "scale-down" }}
              />
            </div> */}
            <div className="bg-neutral text-neutral-content rounded-full w-12 h-12 flex-center">
              <span className="text-xl">AI</span>
            </div>
            <div>
              <span className="block mb-1">John Doe</span>
              <span className="block text-xs text-base-content/70">
                30.08.2018, 17:53
              </span>
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
            <div className="flex justify-between items-center p-4 border-t border-base-content/5 ">
              <div className="text-xs ">
                <button className="me-4 opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  نقل قول
                  <QuoteRight className="w-3 h-3 ms-1" />
                </button>
                <button className="opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  پاسخ
                  <Reply className="w-3 h-3 ms-1" />
                </button>
              </div>
              <div>
                <button className="me-4 opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  18
                  <ThumbsDown className="w-4 h-4 ms-1 text-red-500" />
                </button>
                <button className="opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  12
                  <ThumbsUp className="w-4 h-4 ms-1 text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <AddComment />
    </>
  );
}
