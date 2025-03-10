import React from "react";
import Header from "./components/header";
import TabView from "./components/tabview";
import Greetings from "./components/greetings";
import About from "./pages/about";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-auto">
        <TabView />
      </div>
      <div className="overflow-hidden">
        <div>
          <div id="home" className="h-dvh">
            <div className="flex justify-center items-center md:mt-52">
              <div className="flex w-full justify-center items-center max-w-6xl text-lg cursor-default">
                <Greetings />
              </div>
            </div>
          </div>
          <div id="about" className="h-dvh">
            <About />
          </div>
          <div id="projects" className="h-dvh">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
