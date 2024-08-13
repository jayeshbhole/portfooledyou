import Image from "next/image";
import React from "react";
import type { ExperienceItem } from "../constants/data";

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
  return (
    <>
      <div className="group my-1 flex flex-col">
        <button className="item-cell flex w-full cursor-pointer flex-wrap items-center justify-between gap-2 outline-none group-focus-within:bg-white/5 sm:flex-nowrap">
          <Image
            src={`/images/work/${job.image}`}
            alt={job.company}
            width={64}
            height={64}
            className="object-fit ml-2 h-12 w-12 rounded-xl p-0"
          />

          <h3 className="flex w-fit flex-1 flex-col flex-wrap text-left text-base font-medium sm:gap-1">
            <span className="">{job.position}</span>
            <span className="text-2sm">{job.company}</span>
          </h3>

          <p className="w-fit italic opacity-50 sm:w-fit sm:text-right">
            {job.duration}
          </p>
        </button>

        <ul className="mt-2 flex max-h-0 list-inside list-none flex-col gap-1 overflow-hidden transition-all duration-500 ease-in-out group-focus-within:max-h-screen">
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
