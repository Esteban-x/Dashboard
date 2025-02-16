import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import NextAuthProvider from "@/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Esteban-x dashboard",
  description: "Esteban-x dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />

              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
