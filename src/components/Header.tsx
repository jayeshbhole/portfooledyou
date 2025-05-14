import { links } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="mt-16 flex flex-col gap-2">
      <Image
        src="/images/pfp.png"
        alt="Profile Picture"
        width={512}
        height={512}
        className="h-32 w-32 cursor-pointer rounded-xl transition-colors hover:bg-white/5"
      />

      <h1 className="item-cell text-4xl font-bold">
        <span>{name}</span>
      </h1>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0">
        <ul className="flex list-inside list-disc flex-col">
          <li className="item-cell">
            <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-500 text-transparent print:text-neutral-500">
                •
              </div>
            </div>
            <span>Web3 Developer, Designer</span>
          </li>
          <li className="item-cell">
            <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-500 text-transparent print:text-neutral-500">
                •
              </div>
            </div>
            <span>Designer</span>
          </li>
          <li className="item-cell">
            <div className="h-4 w-[2.5ch] self-start pt-3 leading-[1]">
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-500 text-transparent print:text-neutral-500">
                •
              </div>
            </div>
            <span>
              B.Tech ECE,{" "}
              <Link
                className="ml-[1ch]"
                href="https://iiitp.ac.in"
                target="_blank"
              >
                @IIIT Pune
              </Link>
            </span>
          </li>
        </ul>

        <ul className="grid grid-cols-2">
          {links.map((link, index) => (
            <li key={index} className="item-cell">
              <Link
                href={link.href}
                className="group flex h-full w-full items-center"
                target="_blank"
              >
                <ArrowRight className="mr-[1ch] inline-block h-4 w-4 transition-transform duration-300 ease-bouncy group-hover:-rotate-45" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
