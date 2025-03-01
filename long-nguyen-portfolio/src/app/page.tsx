import React from "react";
import Header from "./components/header";
import TabView from "./components/tabview";
import Greetings from "./components/greetings";
// import About from "./pages/about";
// import Projects from "./pages/projects";
import AnimatedContent from "@/components/ui/animatedcontent";

export default function Home() {
  return (
    <div id="home">
      <Header />

      <div className="flex justify-center md:mt-52">
        <div className="flex w-full max-w-6xl">
          <div className="hidden flex-1 md:flex items-center justify-center">
            animation
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Greetings />
          </div>
        </div>
      </div>
        <TabView />
      <div style={{ height: "500vh" }}></div>
    </div>
  );
}