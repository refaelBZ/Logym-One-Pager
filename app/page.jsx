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
const description = "Logym is a workout tracker with a single workout screen: log every set in seconds and see your progress over time.";

export const metadata = {
  description,
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
      <link rel="canonical" href={`${SITE_URL}/`} />
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
