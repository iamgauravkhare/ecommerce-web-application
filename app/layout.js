import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Home - Flipkart",
  description: "Next.js app router project template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
