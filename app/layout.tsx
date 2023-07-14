import { Figtree } from "next/font/google";

import Sidebar from "@/components/sidebar";
import SupabaseProvider from "@/providers/supabase-provider";
import UserProvider from "@/providers/user-provider";
import ModalProvider from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toaster-provider";
import getSongsByUserId from "@/actions/get-songs-by-user-id";
import Player from "@/components/player"
import getActiveProductsWithPrices from "@/actions/get-active-products-with-prices";

import "./globals.css";

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone made by Antonio",
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
};
