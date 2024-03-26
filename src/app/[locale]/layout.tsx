import { locales } from "@/navigation";
import { Metadata, Viewport } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { isRtlLang } from "rtl-detect";
import AppProvider from "./provider";

// globals css styles
import "@/styles/globals.css";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

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
    applicationName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: APP_DEFAULT_TITLE,
      // startUpImage: [],
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: "website",
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
    twitter: {
      card: "summary",
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

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
