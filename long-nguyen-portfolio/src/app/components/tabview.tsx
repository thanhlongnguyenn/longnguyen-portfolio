"use client";

import React, { useState, useEffect } from "react";

const TabView = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`sticky top-0 w-full transition-all duration-500 header ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="logo">Logo</div>
            <ul className="flex space-x-20">
              <li onClick={() => scrollTo("home")} className="cursor-pointer">
                Home
              </li>
              <li onClick={() => scrollTo("about")} className="cursor-pointer">
                About
              </li>
              <li
                onClick={() => scrollTo("projects")}
                className="cursor-pointer"
              >
                Projects
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`sticky flex items-center justify-center tabview-padding transition-all duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } cursor-pointer`}
      >
        <nav className="tabview shadow-xl">
          <ul className="flex space-x-7">
            <li onClick={() => scrollTo("home")} className="tabview-item">
              Home
            </li>
            <li onClick={() => scrollTo("about")} className="tabview-item">
              About
            </li>
            <li onClick={() => scrollTo("projects")} className="tabview-item">
              Projects
            </li>
            {/* <li onClick={() => scrollTo("settings")} className="tabview-item">
              Settings
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TabView;