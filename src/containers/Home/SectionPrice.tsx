import { Check, Xmark } from "@/components/Icons";

const data = [
  {
    id: 1,
    title: { title: "دوره", des: "رایگان" },
    version: "free",
    list: [
      { id: 1, check: true, title: "۷ روز" },
      { id: 2, check: true, title: "وضوح 720p" },
      { id: 3, check: false, title: "در دسترس بودن محدود" },
    ],
  },
  {
    id: 2,
    title: { title: "غیررایگان", des: "300,000 ریال / ماه" },
    version: "permium",
    list: [
      { id: 1, check: true, title: "1 ماه" },
      { id: 2, check: true, title: "کیفیت عالی" },
      { id: 3, check: true, title: "در دسترس بودن همیشگی" },
    ],
  },
  {
    id: 2,
    title: { title: "سینمایی", des: "600,000 ریال / ماه" },
    version: "cinematic",
    list: [
      { id: 1, check: true, title: "2 ماه" },
      { id: 2, check: true, title: "کیفیت فوق العاده" },
      { id: 3, check: true, title: "هر دستگاه" },
    ],
  },
];

export default function SectionPrice() {
  return (
    <>
      <div className="prose mb-8">
        <h1>آیتم های جدید</h1>
        <p>
          این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح بندی آن، با
          محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از Lorem
          Ipsum این است که بر خلاف استفاده از یک توزیع کم و بیش نرمال حروف دارد.
          بسیاری از بسته‌های انتشارات دسک‌تاپ و ویرایشگرهای صفحه وب اکنون از
          Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند و جستجوی
          «lorem ipsum» بسیاری از وب‌سایت‌ها را که هنوز در مراحل ابتدایی خود
          هستند، نشان می‌دهد.
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-6 gap-3">
        {data.map((item) => {
          return (
            <div className="card bg-base-200 p-6" key={item.id}>
              <div className="card-title justify-between">
                <span className="text-xl">{item.title.title}</span>
                <span
                  className={`text-xl ${
                    item.version === "permium" ? "text-success" : "text-primary"
                  }`}
                >
                  {item.title.des}
                </span>
              </div>
              <div className="card-body p-0">
                <ul className="list-none mb-0 pe-0 [&>li+li]:border-t [&>li+li]:border-base-100 [&>li]:py-3">
                  {item.list.map((itm) => {
                    return (
                      <li key={itm.id}>
                        {itm.check ? (
                          <Check className="w-5 h-5 inline-block me-2 text-success" />
                        ) : (
                          <Xmark className="w-5 h-5 inline-block me-2 text-red-600" />
                        )}
                        {itm.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="card-action mt-4">
                <button
                  className={`btn btn-outline w-full ${
                    item.version === "permium" ? "btn-success" : "btn-primary"
                  }`}
                >
                  انتخاب
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
