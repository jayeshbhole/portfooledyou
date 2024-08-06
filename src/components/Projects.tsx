import React, { ReactNode } from "react";

interface ProjectItem {
  name: string;
  date: string;
  description: ReactNode[];
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold tracking-wide">
        Things I&apos;m Proud of
      </h2>

      {/* make projects similar to experience map */}
      {projects.map((project, index) => (
        <div key={index} className="my-1 flex flex-col">
          <div className="item-cell flex w-full justify-between whitespace-nowrap">
            <h3 className="flex flex-1 gap-1 text-base font-medium">
              <span>{project.name}</span>
            </h3>

            <p className="text-right italic opacity-50">{project.date}</p>
          </div>

          <ul className="mt-2 flex list-inside list-none flex-col">
            {project.description.map((item, i) => (
              <li key={i} className="item-cell">
                <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-500"></div>
                </div>

                <span className="">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
