import { ProjectItem } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="item-cell text-2xl font-semibold tracking-wide">
        <span>Things I&apos;m Proud of</span>
      </h2>

      {/* make projects similar to experience map */}
      {projects.map((project, index) => (
        <>
          <div key={index + "c"} className="my-1 flex flex-col gap-2">
            <div className="item-cell flex w-full flex-wrap justify-between sm:flex-nowrap">
              <Link
                href={project.link}
                target="_blank"
                className="group flex w-full flex-1 items-center gap-1 text-base font-medium sm:w-fit"
              >
                <span>{project.name}</span>

                <ArrowRight className="ml-[0.75ch] inline-block h-4 w-4 transition-transform duration-300 ease-bouncy group-hover:-rotate-45" />
              </Link>

              <p className="w-fit text-right italic opacity-50">
                {project.date}
              </p>
            </div>

            <ul className="flex list-inside list-none flex-col gap-1">
              {project.description.map((item, i) => (
                <li key={i} className="item-cell">
                  <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-500"></div>
                  </div>

                  <span className="">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr
            key={index + "hr"}
            className="mb-1 border-t border-neutral-300/25 dark:border-neutral-700/25"
          />
        </>
      ))}
    </section>
  );
};

export default Projects;
