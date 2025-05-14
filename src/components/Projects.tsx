"use client";
import type { ProjectItem } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Image from "next/image";

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="item-cell text-2xl font-semibold tracking-wide">
        <span>Things I&apos;m Proud of</span>
      </h2>

      {/* make projects similar to experience map */}
      {projects.map((project, index) => (
        <Fragment key={index}>
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

            <div className="flex gap-2 pl-8">
              {project.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="group relative"
                  onMouseEnter={() =>
                    setSelectedImage(`/images/projects/${image}`)
                  }
                  onClick={() => {
                    setOpen(true);
                    setSelectedImage(`/images/projects/${image}`);
                  }}
                >
                  <Image
                    src={`/images/projects/${image}`}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="h-24 w-24 cursor-pointer rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
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
        </Fragment>
      ))}

      {
        <dialog
          className="group fixed inset-0 z-[-1] flex h-full w-full items-center justify-center bg-black/90 opacity-0 transition-opacity duration-300 ease-in-out open:z-50 open:opacity-100"
          onClick={() => setOpen(false)}
          open={open}
        >
          <div className="relative flex cursor-pointer flex-col items-center gap-2 rounded-md p-4 py-8 text-center transition-transform hover:bg-white/5">
            <Image
              src={selectedImage ?? ""}
              alt="Selected Project Image"
              width={500}
              height={500}
              className="block max-h-[48rem] w-full max-w-2xl select-none rounded object-cover"
            />
          </div>
        </dialog>
      }
    </section>
  );
};

export default Projects;
