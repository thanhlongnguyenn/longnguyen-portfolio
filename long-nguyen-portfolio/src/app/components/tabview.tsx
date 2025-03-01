'use client';

import React, { useState, useEffect, useRef } from "react";

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

  return (
    <>
      <div ref={headerRef} className="header"></div>
      {isVisible && (
        <div className="sticky top-8 flex items-center justify-center w-full">
          <nav className="tabview shadow-xl">
            <ul className="flex space-x-1">
              <li>
                <a
                  href="#"
                  className="tabview-item transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tabview-item transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tabview-item transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="tabview-item transition-colors duration-200"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default TabView;