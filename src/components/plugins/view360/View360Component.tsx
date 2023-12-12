"use client";

import HotspotsList from "@/components/plugins/view360/HotspotsList";
import ImageListbox from "@/components/ImageListbox";
import { projections } from "@/constants/projections";
import View360 from "@egjs/react-view360";
import { useEffect, useRef, useState } from "react";

export default function View360Component() {
  const [ready, setReady] = useState(false);
  const viewerRef = useRef<View360>(null);
  const [projection, setProjection] = useState(projections[0]);

  const changeProjection = (id: number) => {
    setProjection(projections[id - 1]);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      setReady(true);
    }
  }, []);

  return !ready ? (
    <div>Loading</div>
  ) : (
    <div className="flex flex-col w-full justify-between gap-5 md:flex-row md:space-x-5">
      <div className="w-full md:w-[1024px]">
        <View360
          ref={viewerRef}
          key={projection.id || 1}
          className="is-16by9 rounded-lg"
          projection={projection.image}
          // plugins={[new ControlBar(), new LoadingSpinner()]}
        >
          <HotspotsList
            changeProjection={changeProjection}
            projection={projection}
          />
        </View360>
      </div>
      <div className="flex flex-col space-y-3 shrink-0">
        <p className="text-2xl font-medium text-white bg-black p-3 text-center rounded-md">
          View 360
        </p>
        <ImageListbox projection={projection} setProjection={setProjection} />
        <a
          href="https://naver.github.io/egjs-view360/"
          target="_blank"
          className="underline font-medium"
        >
          Plugin Link
        </a>
      </div>
    </div>
  );
}
