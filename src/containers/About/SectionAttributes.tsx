import {
  Bell,
  Film,
  Globe,
  Rocket,
  Trophy,
  Tv,
} from "@/components/Icons/solid";

export default function SectionAttributes() {
  return (
    <>
      <article className="prose max-w-full">
        <h1>HotFlix - بهترین مکان برای فیلم</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>
        <p>
          {
            "'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use LoremIpsum as their default model text, and a search for 'lorem ipsum'will uncover many web sites still in their infancy. Various versionshave evolved over the years, sometimes by accident, sometimes onpurpose (injected humour and the like)."
          }
        </p>
      </article>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Tv className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">Ultra HD</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Film className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">فیلم</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Trophy className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">جوایز</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Bell className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">اطلاعیه</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Rocket className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">موشک</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[max-content_1fr] p-0 gap-x-6">
          <div className="text-primary">
            <Globe className="w-10 h-10" />
          </div>
          <div>
            <h2 className="mb-2">زیرنویس چند زبانه</h2>
            <p className="text-sm">
              اگر می‌خواهید از قسمتی از Lorem Ipsum استفاده کنید، باید مطمئن
              شوید که هیچ چیز شرم‌آوری در وسط متن پنهان نشده باشد.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
