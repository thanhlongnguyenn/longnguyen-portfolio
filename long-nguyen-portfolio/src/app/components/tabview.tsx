"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimatedContent from "@/components/ui/animatedcontent";

const TabView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [headerRef]);

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
      <div ref={headerRef} className="header"></div>
      {isVisible && (
        <div className="sticky top-8 flex items-center justify-center w-full">
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={isVisible}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={0.9}
            threshold={0.2}
          >
            <nav className="tabview shadow-xl">
              <ul className="flex space-x-1">
                <li onClick={() => scrollTo("home")} className="tabview-item">
                  Home
                </li>

                <li onClick={() => scrollTo("about")} className="tabview-item">
                  About
                </li>

                <li
                  onClick={() => scrollTo("projects")} className="tabview-item"
                >
                  Projects
                </li>

                <li onClick={() => scrollTo("home")} className="tabview-item">
                  Settings
                </li>
              </ul>
            </nav>
          </AnimatedContent>
        </div>
      )}
    </>
  );
};

export default TabView;
