
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-5xl md:text-6xl font-bold animate-text-gradient">
        SolV
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Smart Solar EV Charging Dashboard
      </p>
    </header>
  );
};

export default Header;
