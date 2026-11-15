import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "./components/blog/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import '../styles/globals.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Logym - Stop Checking Boxes. Start Seeing Results.",
    template: "%s | Logym",
  },
  description: "The only fitness app with a revolutionary interface for logging workouts in seconds. Focus on what truly matters – your progress.",
  icons: {
    icon: '/logym.svg',
    shortcut: '/logym.svg',
    apple: '/logym.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}
