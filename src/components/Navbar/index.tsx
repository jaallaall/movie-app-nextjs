import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";
import { menu } from "./data";
import { useTranslations } from "next-intl";
import { RightToBracket } from "../Icons";

export default function Navbar() {
  const t = useTranslations("Index");
  return (
    <header className="bg-base-100 sticky top-0 border-b border-base-content/5 py-2 z-30">
      <div className="container">
        <div className="grid p-0 grid-cols-5 //grid-cols-2 items-center">
          <div className="max-md:col-span-2 max-md:row-start-1">
            <Logo />
          </div>
          <div className="dropdown lg:hidden max-md:row-start-2 max-md:col-span-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href} className="p-2">
                      {t(item.title as any)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden lg:flex flex-auto col-span-2">
            <ul className="menu menu-horizontal px-1">
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href}>{t(item.title as any)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="max-md:row-start-1 max-md:col-start-3 max-md:col-span-3">
            <Search />
          </div>
          <div className="flex items-center justify-end max-md:col-span-4">
            <LocaleSwitcher />
            <ThemeSwitcher />

            <Link
              className="btn btn-outline btn-custom h-10 md:w-auto w-10 ms-3 max-md:p-0"
              href={"/signin"}
            >
              <span className="md:block hidden">{t("signin")}</span>
              <RightToBracket className="w-5 h-5 md:hidden" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
