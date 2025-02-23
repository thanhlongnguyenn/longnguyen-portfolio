'use client';

import React from 'react';

const Header = () => {
    return (
      <div className="flex justify-between ml-10 mr-10 my-10">
        <div className="hidden md:block text-sm font-bold">Last visitor: Melbourne AU</div>
        <div className='flex justify-center'>
            <img src="#" alt="Logo" className="w-10 h-10 mx-auto"/>
        </div>
        <div className="hidden md:block text-sm font-bold">4:53pm AEDT</div>
      </div>
    );
}

export default Header;