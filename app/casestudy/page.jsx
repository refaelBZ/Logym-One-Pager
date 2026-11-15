import { Assistant } from "next/font/google";
import CaseStudy from '../components/CaseStudy';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/site';

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: {
    absolute: 'Logym Case Study - From Product to Promise',
  },
  description: 'The Logym One-Pager Case Study - A comprehensive look at building a SaaS landing page',
  keywords: 'SaaS, landing page, case study, web design, UI/UX, fitness app, Logym',
  alternates: {
    canonical: `${SITE_URL}/casestudy`,
  },
  openGraph: {
    title: 'Logym Case Study - From Product to Promise',
    description: 'The Logym One-Pager Case Study - A comprehensive look at building a SaaS landing page',
    type: 'website',
    url: `${SITE_URL}/casestudy`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Logym logo mark on a dark background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logym Case Study - From Product to Promise',
    description: 'The Logym One-Pager Case Study - A comprehensive look at building a SaaS landing page',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CaseStudyPage() {
  return (
    <div className={assistant.className}>
      <CaseStudy />
    </div>
  );
}