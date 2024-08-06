import React from "react";

interface ProjectItem {
  name: string;
  date: string;
  description: string[];
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-bold">Things I&apos;m Proud of</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-400">{project.date}</p>
          <ul className="mt-2 list-inside list-disc">
            {project.description.map((item, i) => (
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

export default Projects;
