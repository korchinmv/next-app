import { Titillium_Web } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const titillium = Titillium_Web({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--var-titillium",
});

//Выключаем SSR по необходимости
const DynamicFooter = dynamic(() => import("./../components/Footer"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${titillium.variable} flex flex-col h-screen bg-slate-200`}
      >
        <Header />
        <main className='grow container mx-auto px-2'>{children}</main>
        <DynamicFooter />
      </body>
    </html>
  );
}
