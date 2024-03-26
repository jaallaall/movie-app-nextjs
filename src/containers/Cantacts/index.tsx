import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Facebook,
  Instagram,
  Linkedin,
  Telegram,
  Whatsapp,
} from "@/components/Icons/brands";
import Link from "next/link";

export default function Cantacts() {
  return (
    <>
      <section className="md:min-h-52 min-h-36 bg-[url('/static/section/section.jpg')] bg-center">
        <div className="container m-auto">
          <div className="mb-4 prose">
            <h1>تماس با ما</h1>
          </div>
          <Breadcrumbs />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <h1 className="mb-4">تماس با ما</h1>
              <form className="border border-base-content/5 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className="input bg-base-200 w-full"
                    placeholder="نام"
                  />
                  <input
                    className="input bg-base-200 w-full"
                    placeholder="نشانی رایانامه"
                  />
                  <input
                    className="input bg-base-200 w-full md:col-span-2"
                    placeholder="موضوع"
                  />
                  <textarea
                    placeholder="پیام"
                    className="textarea textarea-lg w-full bg-base-200 md:col-span-2"
                    rows={3}
                  />
                </div>
                <button className="btn btn-custom min-w-36 mt-6">ارسال</button>
              </form>
            </div>
            <div className="col-span-2">
              <h2 className="mb-5">اطلاعات</h2>
              <p className="mb-6">
                این یک واقعیت طولانی است که خواننده هنگام تماشای طرح بندی آن، با
                محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از
                Lorem Ipsum این است که بر خلاف استفاده، توزیع کم و بیش نرمال
                حروف دارد.
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={"tel: 09390157719"}
                    className="hover:text-primary"
                  >
                    09390157719
                  </Link>
                </li>
                <li>
                  <Link
                    href={"mailto:jalal.khaleqi22@gmail.com"}
                    className="hover:text-primary"
                  >
                    jalal.khaleqi22@gmail.com
                  </Link>
                </li>
              </ul>
              <nav className="flex gap-4 mt-8">
                <button>
                  <Facebook className="w-7 h-7 hover:text-primary" />
                </button>
                <button>
                  <Instagram className="w-7 h-7 hover:text-primary" />
                </button>
                <button>
                  <Telegram className="w-7 h-7 hover:text-primary" />
                </button>
                <button>
                  <Whatsapp className="w-7 h-7 hover:text-primary" />
                </button>
                <button>
                  <Linkedin className="w-7 h-7 hover:text-primary" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
