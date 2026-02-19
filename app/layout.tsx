import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}