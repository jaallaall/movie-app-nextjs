import { locales } from "@/navigation";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { isRtlLang } from "rtl-detect";
import AppProvider from "./provider";

// globals css styles
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("title"),
    // description: t("description"),
    icons: [],
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  // const session = await getServerSession();

  const messages = useMessages();

  return (
    <html
      lang={locale}
      dir={isRtlLang(locale) ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={locale === "fa" ? "font-dana" : undefined}
    >
      <body className="min-h-screen flex flex-col has-[.drawer-toggle:checked]:max-md:overflow-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
