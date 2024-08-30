"use client";
import Image from "next/image";
import React, { useState } from "react";
import type { ExperienceItem } from "../constants/data";
import { cn } from "../utils";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="item-cell text-2xl font-semibold tracking-wide">
        <span>Places I&apos;ve been</span>
      </h2>

      {experience.map((job, index) => (
        <ExperienceItemComponent job={job} key={index} />
      ))}
    </section>
  );
};

const ExperienceItemComponent = ({ job }: { job: ExperienceItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group my-1 flex flex-col">
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "item-cell flex w-full cursor-pointer flex-wrap items-center justify-between gap-2 outline-none focus:outline",
            open ? "bg-white/5" : "",
          )}
        >
          <h3 className="flex w-full flex-wrap gap-4 text-left text-base font-medium 2xs:w-fit">
            <Image
              src={`/images/work/${job.image}`}
              alt={job.company}
              width={64}
              height={64}
              className="object-fit h-12 w-12 rounded-xl p-0"
            />

            <div className="flex flex-col">
              <span className="">{job.position}</span>
              <span className="text-2sm">{job.company}</span>
            </div>
          </h3>

          <div className="flex w-fit items-center 2xs:flex-col 2xs:items-start">
            <p className="italic opacity-50 2xs:text-right">{job.duration}</p>

            <ChevronDown
              className={cn(
                "ml-auto w-[2ch] p-0 opacity-50 transition-transform duration-500 ease-bouncy",
                open ? "rotate-180" : "",
              )}
            />
          </div>
        </button>

        <ul
          className={cn(
            "mt-2 flex list-inside list-none flex-col gap-1 overflow-hidden transition-all duration-500 ease-in-out",
            open ? "max-h-screen" : "max-h-0",
          )}
        >
          {job.description.map((item, i) => (
            <li key={i} className="item-cell">
              <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-500 text-transparent print:text-neutral-500">
                  •
                </div>
              </div>

              <span className="">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="mb-1 border-t border-neutral-300/25 dark:border-neutral-700/25" />
    </>
  );
};

export default Experience;
