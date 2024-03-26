import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("@/containers/Details"));

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Details" });

  return {
    title: t("title"),
    // description: t("description"),
    icons: [],
  };
}

export default function DetailsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations();
  return <DynamicComponent />;
}
