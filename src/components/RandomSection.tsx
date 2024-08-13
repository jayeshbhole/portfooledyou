"use client";
import Image from "next/image";
import React from "react";

interface RandomItem {
  image: string;
  title: string;
}

const items: RandomItem[] = [
  {
    image: "/images/random/ethmumbai.png",
    title: "Helping out Hackers @ETHMumbai",
  },
  {
    image: "/images/random/eclectic.png",
    title: "Logo Iterations - Literary Club of IIIT Pune",
  },
  {
    image: "/images/random/lamhein.png",
    title: "An invitation to create memories",
  },
  {
    image: "/images/random/eclectic2.png",
    title: "Logo Iterations - Literary Club of IIIT Pune",
  },
  {
    image: "/images/random/shatranj.png",
    title: "Just-in-time generated NFT for winners of Shatranj",
  },
  { image: "/images/random/uno.png", title: "Concept for EthIndia Fellowship" },
];

const RandomSection: React.FC = () => {
  const [maximized, setMaximized] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      {
        <dialog
          className={
            "group fixed inset-0 -z-[1] flex h-full w-full items-center justify-center bg-black/90 opacity-0 transition-all duration-300 ease-in-out open:z-50 open:opacity-100"
          }
          onClick={() => {
            setOpen(false);
          }}
          open={open && maximized < items.length}
        >
          <div className="relative flex translate-y-12 cursor-pointer flex-col items-center gap-2 rounded-md p-4 py-8 text-center transition-transform hover:bg-white/5 group-open:translate-y-0">
            <Image
              src={items[maximized]!.image}
              alt={items[maximized]!.title}
              width={500}
              height={500}
              className="block w-full max-w-lg select-none rounded object-cover"
            />
            <p className="text-sm text-neutral-200">
              {items[maximized]!.title}
            </p>
          </div>
        </dialog>
      }

      <section className="flex flex-col gap-2">
        <h2 className="item-cell text-2xl font-semibold tracking-wide">
          <span>The `Random` Section</span>
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
            .map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.map((item, rowIndex) => (
                  <button
                    key={rowIndex}
                    className="relative h-fit cursor-pointer rounded-md hover:bg-white/5"
                    onClick={() => {
                      setOpen(true);
                      setMaximized(colIndex + rowIndex * 3);
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-fit w-full rounded object-cover"
                    />
                    <p className="p-2 text-sm">{item.title}</p>
                  </button>
                ))}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default RandomSection;
