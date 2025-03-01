import React from "react";
import Header from "./components/header";
import TabView from "./components/tabview";
import Greetings from "./components/greetings";

export default function Home() {
  return (
    <div>
      <Header />
      <TabView />
      {/* filler space */}
      <div className="flex justify-center">
        <Greetings />
      </div>

      <div style={{ height: "500vh" }}></div>
    </div>
  );
}
