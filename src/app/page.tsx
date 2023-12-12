import View360Component from "@/components/plugins/view360/View360Component";

import "@egjs/react-view360/css/view360.min.css";

export default function Home() {
  return (
    <main className="flex justify-center p-5">
      <div className="md:max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-row w-full justify-between items-center">
          <div className="bg-black rounded-lg p-3 w-fit mb-5">
            <h1 className="font-bold text-2xl text-white">
              360 Tour Available Plugins
            </h1>
          </div>
          <a
            href="https://github.com/sudiddo/react-360-plugins"
            target="_blank"
            className="underline font-medium text-lg"
          >
            Github Repo
          </a>
        </div>
        {/* Content */}
        <div className="mt-10 flex flex-row ">
          <View360Component />
        </div>
      </div>
    </main>
  );
}
