import styles from "./page.module.scss";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import ProgressSection from "./components/ProgressSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Workout from "./components/Workout";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const title = "Logym - Stop Checking Boxes. Start Seeing Results.";
const description = "The only fitness app with a revolutionary interface for logging workouts in seconds. Focus on what truly matters – your progress.";

export const metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Logym logo mark on a dark background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ProgressSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
