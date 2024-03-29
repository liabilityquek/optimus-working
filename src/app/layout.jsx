import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimus",
  description: "I am Optimus, an AI to serve your request.",
};

export default function RootLayout({ children }) {
  const session = getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <NextAuthProvider>{children}</NextAuthProvider>
    </html>
  );
}
