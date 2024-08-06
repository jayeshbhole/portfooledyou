import React, { ReactElement } from "react";

interface AboutProps {
  about: ReactElement;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="flex flex-col gap-2">
      {/* <h2 className="item-cell text-2xl font-semibold tracking-wide">
        <span>About Me</span>
      </h2> */}

      <div className="item-cell">
        <q className="relative pl-4 before:absolute before:inset-y-1/2 before:left-0 before:inline-block before:h-[100%] before:w-1 before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:bg-neutral-300 before:content-[''] dark:before:bg-neutral-700">
          {about}
        </q>
      </div>
    </section>
  );
};

export default About;
