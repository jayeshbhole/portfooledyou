import Image from "next/image";
import React from "react";

interface RandomItem {
  image: string;
  title: string;
}

const RandomSection: React.FC = () => {
  const items: RandomItem[] = [
    { image: "/images/eclectic.png", title: "Literary Club of IIIT Pune" },
    { image: "/images/lamhein.png", title: "An invitation to create memories" },
    { image: "/images/eclectic.png", title: "Literary Club of IIIT Pune" },
    {
      image: "/images/shatranj.png",
      title: "Just-in-time generated NFT for winners of Shatranj",
    },
    { image: "/images/uno.png", title: "Concept for EthIndia Fellowship" },
  ];

  return (
    <section className="flex flex-col gap-2">
      <h2 className="item-cell text-2xl font-semibold tracking-wide">
        The `Random` Section
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="h-auto w-full rounded object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-sm text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RandomSection;
