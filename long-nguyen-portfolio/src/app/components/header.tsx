'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    // get the client current time
    let clientDateTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'shortOffset',
    });

 
    // for sticky navigation menu
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
          <div className="flex justify-center">
            {/* <img src="longnguyen.png" alt="longnguyen-ascii" /> */}
          </div>
          <div className="hidden md:block text-sm font-bold">
            {/* Last visitor: Melbourne AU */}
          </div>
        </div>
      </div>
    );
}

export default Header;