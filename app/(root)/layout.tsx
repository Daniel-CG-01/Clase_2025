import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import type { Metadata } from "next";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 h-screen flex-col">
        <Header />
        {children}
        <Footer />
    </div>
    
  );
}
