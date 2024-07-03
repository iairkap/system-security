

import "./globals.css";
import GlobalContextProvider from "../app/userContext"; // Ajusta la ruta según sea necesario
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