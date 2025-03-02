import React from "react";
import Header from "./components/header";
import TabView from "./components/tabview";
import Greetings from "./components/greetings";
import About from "./pages/about";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Header />
        <div className="flex justify-center md:mt-52">
          <div className="flex w-full max-w-6xl">
            <div className="flex-1 flex items-center justify-center text-lg cursor-default">
              <Greetings />
            </div>
          </div>
        </div>

        <TabView />
        <div style={{ height: "60vh" }}></div>

        <div id="about">
          <About />
        </div>
        <div style={{ height: "100vh" }}></div>
        <div id="projects">
          <Projects />
        </div>

        <div style={{ height: "500vh" }}></div>
      </div>
    </div>
  );
}