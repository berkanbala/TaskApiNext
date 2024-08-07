import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "@/common/context/appContext";
import Header from "@/common/components/header/header";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.scss";

const robotFlex = Roboto_Flex({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Task Api Next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/media/Logo.png" sizes="any" />
      </Head>
      <body className={robotFlex.className} suppressHydrationWarning>
        <AppContextProvider>
          <Header />
          {children}
          <ToastContainer theme="colored" />
        </AppContextProvider>
      </body>
    </html>
  );
}
