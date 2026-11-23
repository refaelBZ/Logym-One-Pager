import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import JsonLd from "./components/blog/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { isPreviewDeployment, SITE_URL } from "@/lib/site";
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
  description: "Logym is a workout tracker with a single workout screen: log every set in seconds and see your progress over time.",
  icons: {
    icon: '/logym.svg',
    shortcut: '/logym.svg',
    apple: '/logym.svg',
  },
  // Preview URLs are public enough to be crawled. Keep them out of the index.
  ...(isPreviewDeployment()
    ? { robots: { index: false, follow: false } }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics />
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}
