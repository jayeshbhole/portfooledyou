import React from "react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-bold">I&apos;ve worked at</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            {job.company} - {job.position}
          </h3>
          <p className="text-gray-400">{job.duration}</p>
          <ul className="mt-2 list-inside list-disc">
            {job.description.map((item, i) => (
              <li key={i} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
