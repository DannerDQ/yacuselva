import NavBar from "@/components/ui/navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yacu Selva",
  description: "Distribuidora de Agua de Mesa Yacu Selva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <UserProvider>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
