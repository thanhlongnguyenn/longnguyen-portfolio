'use client';

import React from "react";
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
    return (
      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-10">
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">About Me</NavigationMenuLink>{" "}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Projects</NavigationMenuLink>{" "}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
}

export default TabView;