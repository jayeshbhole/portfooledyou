/* eslint-disable react/jsx-key */
import Link from "next/link";
import type { ReactElement } from "react";

export interface ExperienceItem {
  company: string;
  position: string;
  image: string;
  duration: string;
  description: Array<ReactElement | string>;
}

export interface ProjectItem {
  name: string;
  date: string;
  description: Array<ReactElement | string>;
  link: string;
  tech: string[];
  images: string[];
}

interface AppData {
  name: string;
  title: string;
  about: ReactElement;
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const appData: AppData = {
  name: "Jayesh Bhole",
  title: "Web3 Developer, Designer",
  // about: `I want to be part of the reason your users tweet about how good the app feels. Why? Cause it puts a stupidly wide smile on my face :)`,
  about: (
    <span key="1">
      I want to be part of the reason your users tweet about how good the app
      feels.
      <br />
      Why? Cause it puts a stupidly wide smile on my face :)
    </span>
  ),
  experience: [
    {
      company: "ZeroDev Inc.",
      position: "Full Stack Developer",
      duration: "Feb 2025 - Current",
      image: "zerodev.png",
      description: [
        <span key="1">
          Designed and built{" "}
          <Link href="https://7702.zerodev.app" target="_blank">
            EIP-7702 Examples
          </Link>{" "}
          utilising the ZeroDev SDK and embedded wallet providers.
        </span>,

        <span key="1">
          Built the{" "}
          <Link href="https://dashboard.zerodev.app" target="_blank">
            v2 Dashboard
          </Link>{" "}
          and related APIs with TypeScript, PostgreSQL, and React.
        </span>,
      ],
    },
    {
      company: "StakeEase",
      position: "Founding Engineer, Designer",
      duration: "Jan 2024 - Feb 2025",
      image: "stakeease.png",
      description: [
        <span key="1">
          Designed and built the user interface for{" "}
          <Link href="https://stakeease.com" target="_blank">
            stakeease.com
          </Link>{" "}
          facilitating the seamless management of over $5 million in restaked
          Ethereum assets.
        </span>,
        "Gathered insights with PostHog about user flows, UI interactions and usage patterns.",
        "Worked on indexing defi positions of users for Uniswap V3-like liquidity pools.",
      ],
    },
    {
      company: "Router Protocol",
      position: "Fullstack Developer",
      duration: "May 2023 - Feb 2025",
      image: "router.png",
      description: [
        <span key="1">
          Built a micro-service for Router Chain with Go that produces analytics
          for over 5,000 cross-chain events daily.
        </span>,
        <span key="2">
          Developed a scalable frontend framework to create{" "}
          <Link href="https://poc.routerintents.com/all" target="_blank">
            PoC intent-based apps{" "}
          </Link>
          which reduced development efforts and upkeep time by <b>60-70%.</b>
        </span>,
        <span key="3">
          Designed and built{" "}
          <Link href="https://store.routerintents.com" target="_blank">
            Adapter Store
          </Link>{" "}
          serving as a repository to cross-chain intent adapters built on
          Router.
        </span>,
        <span key="4">
          Built{" "}
          <Link
            href="https://warpcast.com/routerprotocol/0x8d5d3ebc"
            target="_blank"
          >
            Farcaster Frames
          </Link>{" "}
          to facilitate bridging from the Farcaster feed of users.
        </span>,
        "Published multi-chain wallet connection SDK that supports over 25+ networks and their respective wallets with full support for sending transactions and fetching token data.",
        "Setup CI workflows to check for code quality and build issues with GitHub actions.",
      ],
    },
    {
      company: "EthIndia Fellowship",
      position: "Fellow",
      duration: "Feb 2023 - Apr 2023",
      image: "eif.png",
      description: [
        "Performed UX research of crypto wallets and interviewed users from different demographics.",
        <span key="1">
          Designed and implemented an{" "}
          <Link href="https://devfolio.co/projects/one-aa-human-wallet-3bbb">
            account abstracted wallet
          </Link>{" "}
          based on ERC 4337 in Solidity, React and Pimlico SDK.
        </span>,
        "Added onboarding with phone numbers to the wallet which simplifies the onboarding process and reduces overhead of storing seed phrases.",
      ],
    },
    {
      company: "Router Protocol",
      position: "Blockchain Intern",
      duration: "Aug 2022 - Feb 2023",
      image: "router.png",
      description: [
        "Worked on UI features and redesign for Dfyn Exchange in React using Redux, Material UI and Tailwind CSS.",
        "Built analytics web app with Svelte and subgraphs with The Graph to index trades and extract liquidity data for users and exchange pools.",
      ],
    },
    {
      company: "Polygon Fellowship",
      position: "Fellow",
      duration: "Jun 2022 - Aug 2022",
      image: "polygon.png",
      description: [
        "Built a Decentralised Autonomous Organisation with voting and treasury integration with Solidity, Hardhat.",
        "Worked on projects like lending/borrowing DeFi app, decentralised social media and deadman's switch.",
      ],
    },
    // {
    //   company: "Myriad Technologies",
    //   position: "Web3 Developer Intern",
    //   duration: "May 2022 - Jun 2022",
    //   description: [
    //     "Developed a monorepo for a lending/borrowing protocol using Typescript, Solidity and Yarn.",
    //     "Engineered contract deployment scripts for the said lending/borrowing protocol contracts using Hardhat.",
    //   ],
    // },
  ],
  projects: [
    {
      name: "One - AA Human Wallet",
      date: "Apr 2023",
      description: [
        "Built at EthIndia Fellowship 3.0.",
        "ERC4337 Wallet with SMS onboarding and account usernames.",
      ],
      link: "https://devfolio.co/projects/one-aa-human-wallet-3bbb",
      tech: [
        "ERC4337",
        "Solidity",
        "React",
        "Typescript",
        "Firebase",
        "Web3Auth",
      ],
      images: ["one-wallet-1.png", "one-wallet-2.png"],
    },
    {
      name: "Panda Wallet",
      date: "Dec 2022",
      description: [
        <>🏆 at EthIndia Hackathon 2023</>,
        "ERC4337 Wallet with social recovery and guardians",
      ],
      link: "https://devfolio.co/projects/panda-wallet-698f",
      tech: ["Solidity", "React", "ERC4337", "Covalent"],
      images: ["panda-wallet-1.png", "panda-wallet-2.png"],
    },
    {
      name: "Samrajya DAO",
      date: "Aug 2022",
      description: [
        "Chess DAO to support players and build a community around chess",
        "Built with React, Solidity and Hardhat.",
      ],
      link: "https://devfolio.co/projects/samrajya-dao-4d97",
      tech: ["React", "Solidity", "Hardhat"],
      images: ["samrajya-dao-1.png", "samrajya-dao-2.png"],
    },
    {
      name: "Stroller Protocol",
      date: "Feb 2022",
      description: [
        <>🏆 at ETHGlobal&apos;s Road to Web3.</>,
        "Automated top up service for Superfluid streams.",
      ],
      link: "https://ethglobal.com/showcase/stroller-protocol-3x6sy",
      tech: ["The Graph", "ChainLink", "React", "Chakra UI"],
      images: ["stroller-1.png"],
    },
    {
      name: "Shatranj",
      date: "Dec 2021",
      description: [
        <>🏆 at Polygon BUIDLIT.</>,
        "Web based chess dapp with staking and just-in-time generated NFTs for winners.",
      ],
      link: "https://devfolio.co/projects/shatranj-d063",
      tech: ["IPFS", "Solidity", "Moralis Cloud", "HTML Canvas"],
      images: ["shatranj-1.png", "shatranj-2.png", "shatranj-3.png"],
    },
    {
      name: "Marsmello",
      date: "Aug 2021",
      description: [
        <>🏆 at ETHOdyssey.</>,
        "Truly decentralised game featuring NFTs, play-to-earn tokens and assets built and deployed on the Ethereum network.",
        "Built with React Spring, a browser based infinite 2D world game renderer.",
        <span key="1">
          Watch the demo{" "}
          <Link href="https://youtu.be/i628A8aNCEk" target="_blank">
            here
          </Link>
        </span>,
      ],
      link: "https://devfolio.co/projects/marsmello-a90e",
      tech: ["React Spring", "The Graph"],
      images: ["marsmello-1.png", "marsmello-2.png", "marsmello-3.png"],
    },
  ],
};

export const links = [
  { name: "Devfolio", href: "https://devfolio.co/@0xjayesh" },
  { name: "Github", href: "https://github.com/jayeshbhole" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1-Z8MKR2qPEfyGDNoUxbmok8cRdVWvOfh/view?usp=drive_link",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jayeshbhole/",
  },
  { name: "Twitter", href: "https://x.com/supremebattak" },
  { name: "Medium", href: "https://0xjayesh.medium.com" },
  { name: "v1 Portfolio", href: "https://v1.0xjaye.sh" },
];
