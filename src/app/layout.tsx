

import "./globals.css";
import GlobalContextProvider from "../app/userContext";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    </GlobalContextProvider>
  );
}