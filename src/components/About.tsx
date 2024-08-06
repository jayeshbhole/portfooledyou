import React from "react";

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-bold">About Me</h2>
      <p className="text-gray-300">{about}</p>
    </section>
  );
};

export default About;
