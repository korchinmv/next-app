import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Header />
        <main className='grow container mx-auto px-20'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
