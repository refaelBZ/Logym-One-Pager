import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
