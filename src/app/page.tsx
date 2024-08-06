import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import RandomSection from "@/components/RandomSection";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface ProjectItem {
  name: string;
  date: string;
  description: string[];
}

interface AppData {
  name: string;
  title: string;
  about: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

const dummyData: AppData = {
  name: "Jayesh",
  title: "Developer (Self && Web3)",
  about:
    "I want to be part of the reason your users tweet about how good the app feels. Why? Cause it puts a stupidly wide smile on my face :)",
  experience: [
    {
      company: "StakeEase",
      position: "Founding Engineer & Designer",
      duration: "Jan 2024 - Current",
      description: [
        "Designed and built the user interface for stakeease.com to facilitate smoother and 60% cheaper restaking transactions.",
        "Gathered insights with PostHog about user flows, UI interactions and usage patterns.",
        "Worked on indexing defi positions of users for Uniswap V3-like liquidity pools.",
      ],
    },
    // Add more experience items here
  ],
  projects: [
    {
      name: "One - AA Human Wallet",
      date: "Apr 2023",
      description: [
        "Built at EthIndia Fellowship 3.0",
        "ERC4337 Wallet with SMS onboarding and account usernames",
        "On-chain session keys for multi device login and spending limits for sessions",
      ],
    },
    // Add more projects here
  ],
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <Header name={dummyData.name} title={dummyData.title} />
        <About about={dummyData.about} />
        <Experience experience={dummyData.experience} />
        <Projects projects={dummyData.projects} />
        <RandomSection />
      </div>
    </div>
  );
};

export default App;
