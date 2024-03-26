import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("@/containers/Cantacts"));

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Cantacts" });

  return {
    title: t("title"),
    // description: t("description"),
    icons: [],
  };
}

export default function CantactsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  return <DynamicComponent />;
}
