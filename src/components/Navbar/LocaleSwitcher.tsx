import { Link, locales, usePathname } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const loclasFlag = {
  fa: {
    src: "/static/svg/iran.svg",
    alt: "flag-ir",
    title: "Basic.langFa",
  },
  en: {
    src: "/static/svg/us.svg",
    alt: "flag-en",
    title: "Basic.langEn",
  },
};

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="dropdown dropdown-end flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Image
          src={loclasFlag[locale as keyof typeof loclasFlag]?.src}
          className="rounded-full"
          alt={loclasFlag[locale as keyof typeof loclasFlag]?.alt}
          width={25}
          height={25}
          // loader={Boolean(locale)}
        />
      </div>

      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box top-full min-w-44"
      >
        {locales.map((loc) => {
          const val = loclasFlag[loc as keyof typeof loclasFlag];
          return (
            <li key={loc}>
              <Link
                className="flex items-center w-full cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal pointer-events-auto"
                href={pathname}
                locale={loc}
              >
                <Image
                  src={val?.src}
                  className="rounded-full me-2"
                  alt={val?.alt}
                  width={25}
                  height={25}
                />
                <span>{t(val?.title as any)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
