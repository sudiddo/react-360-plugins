"use client";

import HotspotsList from "@/components/plugins/view360/HotspotsList";
import ImageListbox from "@/components/plugins/view360/ImageListbox";
import { projections } from "@/components/plugins/view360/constants/projections";
import View360, { ControlBar, LoadingSpinner } from "@egjs/react-view360";
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
    <div className="flex flex-col w-full justify-between gap-5">
      <div className="w-full">
        <View360
          ref={viewerRef}
          key={projection.id || 1}
          className="is-16by9"
          projection={projection.image}
          plugins={[new ControlBar(), new LoadingSpinner()]}
        >
          <HotspotsList
            changeProjection={changeProjection}
            projection={projection}
          />
        </View360>
      </div>
      <div className="flex flex-col w-[300px] space-y-4 h-fit shrink-0 border rounded-md p-5">
        <p className="text-2xl font-bold">View 360</p>
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
