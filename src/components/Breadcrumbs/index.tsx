"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

function capitalizeFirstLetter(string: string) {
  const str = string.charAt(0).toUpperCase() + string.slice(1);
  return str;
}

export default function Breadcrumbs() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {pathname.split("/").map((item, i) => {
          if (i === pathname.split("/").length - 1) {
            return <li key={i}>{t(item as any)}</li>;
          }
          return (
            <li key={i}>
              <Link href={"/" + item} className="hover:text-primary">
                {item === "" ? t("Index.title") : t(item as any)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
