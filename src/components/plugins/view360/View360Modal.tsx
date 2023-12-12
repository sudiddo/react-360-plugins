"use client";

import HotspotsList from "@/components/plugins/view360/HotspotsList";
import ImageListbox from "@/components/ImageListbox";
import { projections } from "@/constants/projections";
import View360, { ControlBar, LoadingSpinner } from "@egjs/react-view360";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function View360Modal(): JSX.Element {
  const [ready, setReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projection, setProjection] = useState(projections[0]);

  const changeProjection = (id: number) => {
    setProjection(projections[id - 1]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // check if document is ready
    if (document.readyState === "complete") {
      setReady(true);
    }
  }, []);

  return ready ? (
    <>
      <div className=" flex items-center justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black rounded-lg text-white text-lg font-medium px-5 py-3 hover:opacity-70"
        >
          <p>View 360</p>
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-7xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col w-full justify-between gap-5 md:flex-row md:space-x-5">
                    <div className="w-full md:w-[1024px]">
                      <View360
                        key={projection.id}
                        className="is-16by9 rounded-lg"
                        projection={projection.image}
                        hotspot={{
                          zoom: false,
                        }}
                        plugins={[new ControlBar(), new LoadingSpinner()]}
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
                      <ImageListbox
                        projection={projection}
                        setProjection={setProjection}
                      />
                      <a
                        href="https://naver.github.io/egjs-view360/"
                        target="_blank"
                        className="underline font-medium"
                      >
                        Plugin Link
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  ) : (
    <div />
  );
}
