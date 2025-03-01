'use client';

import React, { useState, useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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
      <div ref={headerRef} className="header">
      </div>
      {isVisible && (
        <div className="sticky top-10 z-50 flex justify-center">
          <NavigationMenu className="border rounded-xl p-2 px-6 navigation-menu">
            <NavigationMenuList className="flex space-x-10">
              <NavigationMenuItem className="navigation-menu-item">
                <NavigationMenuLink href="#">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="navigation-menu-item">
                <NavigationMenuLink href="#">About Me</NavigationMenuLink>{" "}
              </NavigationMenuItem>
              <NavigationMenuItem className="navigation-menu-item">
                <NavigationMenuLink href="#">Projects</NavigationMenuLink>{" "}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  );
}

export default TabView;