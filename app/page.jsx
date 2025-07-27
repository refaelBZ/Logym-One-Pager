import styles from "./page.module.scss";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import ProgressSection from "./components/ProgressSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Workout from "./components/Workout";

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
