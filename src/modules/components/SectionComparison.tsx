/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionLayout from "./SectionLayout";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import ComparisonTable from "./ComparisonTable";

type Props = {
  scroll: (to: number) => void;
};

function SectionComparison({ scroll }: Props) {
  return (
    <>
      <ParallaxLayer offset={2} speed={0.1} onClick={() => scroll(3)}>
        <SectionLayout>
          <div className="flex w-full flex-col text-2xl space-y-3 md:space-y-5 md:text-4xl font-bold items-center relative">
            <p>Ricoh Theta SC 2</p>
            <p>VS</p>
            <p>Insta360 One X2</p>
            <Image
              src="/assets/Ricoh.jpeg"
              alt="Ricoh"
              width={200}
              height={200}
              className="object-contain absolute left-20 -top-60 -rotate-[30deg]"
            />
            <Image
              src="/assets/Insta360.webp"
              alt="Ricoh"
              width={200}
              height={200}
              className="object-contain absolute right-20 -bottom-60 rotate-[30deg]"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.1} onClick={() => scroll(4)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-2xl md:text-4xl font-bold items-start">
            <p className="mb-5 md:mb-10">Photo Quality</p>
            <img
              src="/assets/Comparison.jpg"
              alt="photo quality comparison"
              className="object-contain w-[1280px] h-auto"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.1} onClick={() => scroll(5)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-2xl md:text-4xl font-bold items-start">
            <p className="mb-5 md:mb-10">Video Quality</p>
            <iframe
              width="1280"
              height="600"
              src={`https://www.youtube.com/embed/kUpszwHhAmY`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </SectionLayout>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.1} onClick={() => scroll(6)}>
        <SectionLayout>
          <div className="flex flex-col w-full text-2xl md:text-4xl  items-start">
            <p className="mb-5 md:mb-10 font-bold">Comparison Table</p>
            <ComparisonTable />
          </div>
        </SectionLayout>
      </ParallaxLayer>
    </>
  );
}

export default SectionComparison;
