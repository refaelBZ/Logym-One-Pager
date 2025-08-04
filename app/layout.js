import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Logym - Stop Checking Boxes. Start Seeing Results.",
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
        {children}
      </body>
    </html>
  );
}
