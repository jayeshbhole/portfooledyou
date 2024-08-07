import React, { ReactNode } from "react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: ReactNode[];
}

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
        <>
          <div key={index + "c"} className="my-1 flex flex-col">
            <div className="item-cell flex w-full flex-wrap justify-between sm:flex-nowrap">
              <h3 className="flex w-full flex-1 flex-wrap text-base font-medium sm:w-fit sm:gap-1">
                <span className="w-full sm:w-fit">{job.company}</span>
                <p className="whitespace-nowrap font-normal italic">
                  {job.position}
                </p>
              </h3>

              <p className="w-full italic opacity-50 sm:w-fit sm:text-right">
                {job.duration}
              </p>
            </div>

            <ul className="mt-2 flex list-inside list-none flex-col gap-1">
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

          <hr
            key={index + "hr"}
            className="mb-1 border-t border-neutral-300/25 dark:border-neutral-700/25"
          />
        </>
      ))}
    </section>
  );
};

export default Experience;
