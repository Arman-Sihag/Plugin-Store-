import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="pt-12 pb-6 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 uppercase">
        Store
      </h1>
      <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">
        Plugins made by Starboy
      </p>
    </header>
  );
};