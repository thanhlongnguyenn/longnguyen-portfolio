'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const datetime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'shortOffset',
    });

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const visitorlocation = 'Melbourne AU';
    // TODO: Implement a function to get the visitor's location
    return (
      <div>
        <div className="max-w-auto flex justify-between items-center my-10 mx-28">
          <div className="hidden md:block text-sm font-bold">
            Last visitor: Melbourne AU
          </div>
          <div className="flex justify-center">
            <div className="text-xl font-bold">Long Nguyen</div>
          </div>
          <div className="hidden md:block text-sm font-bold">Current time: {datetime}</div>
        </div>
      </div>
    );
}

export default Header;