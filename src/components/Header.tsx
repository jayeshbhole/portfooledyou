import React from "react";

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className="py-8">
      <h1 className="mb-2 text-4xl font-bold">{name}</h1>
      <p className="text-xl">{title}</p>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Devfolio
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Github
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Twitter
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-300">
          v1 Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
