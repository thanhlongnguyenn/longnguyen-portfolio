import React from "react";
import Header from "./components/header";
import TabView from "./components/tabview";
import { SlidingTabBar } from "./components/test";

export default function Home() {
  return (
    <div>
      <Header />
      <TabView/>
      {/* <SlidingTabBar /> */}
      <div style={{ height: "500vh" }}></div>
    </div>
  );
}
