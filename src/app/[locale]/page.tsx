import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const DynamicComponent = dynamic(() => import("@/containers/Home"));

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("title"),
    description: t("description"),
    icons: [],
  };
}

export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return <DynamicComponent />;
}
