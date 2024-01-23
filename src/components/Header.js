import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center p-4 md:p-8">
        <div className="flex items-center">
          <img
            src="https://github.com/opencodeco/phpctl/assets/183722/f241cca0-aa1d-4776-b4f7-ff17c3f11955"
            alt="phpctl logo"
            className="h-12 mr-4"
          />
          <h1 className="text-3xl">
            phpctl{' '}
            <a href="https://github.com/opencodeco/phpctl/actions/workflows/ci.yml">
              <img
                src="https://github.com/opencodeco/phpctl/actions/workflows/ci.yml/badge.svg"
                alt="phpctl ci badge"
                className="inline-block h-6 ml-2"
              />
            </a>
          </h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Ícone do menu hambúrguer */}
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => scrollToSection('introduction')} className="block px-4 py-2 text-sm">Introduction</button>
        <button onClick={() => scrollToSection('getting-started')} className="block px-4 py-2 text-sm">Getting Started</button>
        <button onClick={() => scrollToSection('usage')} className="block px-4 py-2 text-sm">Usage</button>
        <button onClick={() => scrollToSection('command-list')} className="block px-4 py-2 text-sm">Command List</button>
        <button onClick={() => scrollToSection('configuration')} className="block px-4 py-2 text-sm">Configuration</button>
        <button onClick={() => scrollToSection('modules')} className="block px-4 py-2 text-sm">Modules</button>
        <button onClick={() => scrollToSection('contributing')} className="block px-4 py-2 text-sm">Contributing</button>
      </div>
      <p className="hidden md:block text-lg p-4">
        🐳 A Docker-based development environment for PHP 🐘
      </p>
      <blockquote className="hidden md:block border-l-4 border-blue-500 pl-4 italic">
        Heavily inspired by{' '}
        <a href="https://github.com/opencodeco/hfctl" className="text-blue-400 hover:text-blue-600">
          opencodeco/hfctl
        </a>.
      </blockquote>
    </nav>
  );
};

export default Header;
