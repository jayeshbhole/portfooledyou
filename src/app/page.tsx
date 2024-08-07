import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import RandomSection from "@/components/RandomSection";
import { appData } from "@/constants/data";
import Link from "next/link";
import { MailIcon } from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto mt-4 grid w-full max-w-[80ch] grid-cols-[auto_1fr_auto] items-center justify-center px-4 print:hidden">
        <span className="item-cell">
          <span>Mumbai, IN 🇮🇳</span>
        </span>
        <div className="w-full flex-1"></div>

        <Link
          className="item-cell text-center"
          href="mailto:jayeshbhole123@gmail.com"
          target="_blank"
        >
          <span className="flex items-center justify-center gap-2">
            <span>Say Hi!</span>

            <MailIcon className="h-5 w-5" />
          </span>
        </Link>
      </div>
      <div className="container mx-auto mt-14 flex max-w-[80ch] flex-col gap-16 px-4 print:mt-4 print:max-w-max">
        <Header name={appData.name} />
        <About about={appData.about} />
        <Experience experience={appData.experience} />
        <Projects projects={appData.projects} />
        <RandomSection />
      </div>
    </div>
  );
};

export default App;
