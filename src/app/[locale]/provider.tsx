"use client";

import Loading from "@/components/Loading";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { AppStore, store } from "@/redux/store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
// import { Provider } from "react-redux";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

type ProvidersProps = {
  children: React.ReactNode;
  session?: Session | null;
};

export default function AppProvider({ children, session }: ProvidersProps) {
  const pathname = usePathname();
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = store();
  // }

  if (!session && pathname === "/signin") {
    return (
      <SessionProvider session={session}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="flex flex-col items-center min-h-screen bg-[url('/static/section/section.jpg')] bg-center">
            <div className="px-4 max-w-[28rem] w-full my-auto">{children}</div>
          </section>
        </ThemeProvider>
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {/* <Provider store={storeRef.current}> */}
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        {/* </Provider> */}
      </ThemeProvider>
    </SessionProvider>
  );
}
