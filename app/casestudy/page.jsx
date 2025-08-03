import { Assistant } from "next/font/google";
import CaseStudy from '../components/CaseStudy';

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: 'Logym Case Study - From Product to Promise',
  description: 'The Logym One-Pager Case Study - A comprehensive look at building a SaaS landing page',
  keywords: 'SaaS, landing page, case study, web design, UI/UX, fitness app, Logym',
  openGraph: {
    title: 'Logym Case Study - From Product to Promise',
    description: 'The Logym One-Pager Case Study - A comprehensive look at building a SaaS landing page',
    type: 'website',
  },
};

export default function CaseStudyPage() {
  return (
    <div className={assistant.className}>
      <CaseStudy />
    </div>
  );
}