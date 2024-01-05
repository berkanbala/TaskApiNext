import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Header from "@/common/components/header/header";
import ToastProvider from "@/common/context/toastProvider";
import "@/styles/globals.scss";

const robotFlex = Roboto_Flex({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["system-ui"],
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
    <html lang="tr">
      <body className={robotFlex.className} suppressHydrationWarning>
        <ToastProvider>
          <Header />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
