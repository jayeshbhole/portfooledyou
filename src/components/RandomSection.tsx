import Image from "next/image";
import React from "react";

interface RandomItem {
  image: string;
  title: string;
}

const RandomSection: React.FC = () => {
  const items: RandomItem[] = [
    { image: "/path/to/image1.jpg", title: "Literary Club of IIIT Pune" },
    { image: "/path/to/image2.jpg", title: "An invitation to create memories" },
    { image: "/path/to/image3.jpg", title: "Literary Club of IIIT Pune" },
    {
      image: "/path/to/image4.jpg",
      title: "Just-in-time generated NFT for winners of Shatranj",
    },
    { image: "/path/to/image5.jpg", title: "Concept for EthIndia Fellowship" },
  ];

  return (
    <section className="my-8">
      <h2 className="mb-4 text-2xl font-bold">The `Random` Section</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.image}
              alt={item.title}
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
