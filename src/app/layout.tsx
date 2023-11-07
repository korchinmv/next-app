import { Titillium_Web } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const titillium = Titillium_Web({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${titillium.className} flex flex-col h-screen bg-slate-200`}
      >
        <Header />
        <main className='grow container mx-auto px-2'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
