"use client";

import React, { useRef } from "react";
import Section360 from "../components/Section360";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import SectionComparison from "../components/SectionComparison";
import SectionViewer from "../components/SectionViewer";
import SectionLayout from "../components/SectionLayout";

function HomePage() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <main className="flex justify-center w-full h-full">
      <div className="w-full">
        {/* Content */}
        <Parallax ref={parallax} pages={12} className="no-scrollbar">
          <Section360 scroll={scroll} />
          <SectionComparison scroll={scroll} />
          <SectionViewer scroll={scroll} />
          <ParallaxLayer offset={11} speed={0.1}>
            <SectionLayout>
              <div className="flex w-full flex-col text-2xl space-y-3 md:space-y-5 md:text-4xl font-bold items-center relative">
                <p>Thank you for reading! ✌️ </p>
                <p className="text-base font-medium">Diddo ©2023</p>
                <button
                  onClick={() => scroll(0)}
                  className="border border-pink-400 bg-pink-300 rounded-lg p-3 text-white font-bold text-lg mt-10 hover:scale-110 transition-all ease-in-out duration-200"
                >
                  Scroll to top
                </button>
              </div>
            </SectionLayout>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}

export default HomePage;
