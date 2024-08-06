import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import RandomSection from "@/components/RandomSection";
import { appData } from "@/constants/data";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-16 flex max-w-[80ch] flex-col gap-10 px-4 print:mt-4 print:max-w-max">
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
