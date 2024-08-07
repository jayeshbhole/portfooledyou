import Image from "next/image";
import React from "react";

interface RandomItem {
  image: string;
  title: string;
}

const items: RandomItem[] = [
  {
    image: "/images/eclectic.png",
    title: "Logo Iterations - Literary Club of IIIT Pune",
  },
  { image: "/images/lamhein.png", title: "An invitation to create memories" },
  {
    image: "/images/eclectic2.png",
    title: "Logo Iterations - Literary Club of IIIT Pune",
  },
  {
    image: "/images/shatranj.png",
    title: "Just-in-time generated NFT for winners of Shatranj",
  },
  { image: "/images/uno.png", title: "Concept for EthIndia Fellowship" },
];

const RandomSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="item-cell text-2xl font-semibold tracking-wide">
        <span>The `Random Designs` Section</span>
      </h2>

      <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {items
          .reduce(
            (acc, item, index) => {
              acc[index % 3]!.push(item);
              return acc;
            },
            [[] as RandomItem[], [] as RandomItem[], [] as RandomItem[]],
          )
          .map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((item, index) => (
                <div key={index} className="relative h-fit">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="h-fit w-full rounded object-cover"
                  />
                  <p className="p-2 text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default RandomSection;
