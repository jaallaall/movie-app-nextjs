import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return {
    title: t("title"),
    // description: t("description"),
    icons: [],
  };
}

export default function NotFoundPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center flex-auto bg-[url('/static/section/section.jpg')] bg-center">
      <div className="px-4 max-w-[28rem] w-full my-auto">
        <div className="border border-base-content/10 rounded-lg md:p-10 p-4 bg-base-100 text-center">
          <h1>
            <span className="text-6xl text-primary block">404</span>
            {t("NotFound.notFound")}
          </h1>
          <div>
            <Link href="/" className="btn btn-custom min-w-48 mt-8">
              {t("NotFound.goBack")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
