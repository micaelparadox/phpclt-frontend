import React from 'react';

const Header = () => (
  <div className="bg-black text-white p-4 md:p-8">
    <img
      src="https://github.com/opencodeco/phpctl/assets/183722/f241cca0-aa1d-4776-b4f7-ff17c3f11955"
      alt="phpctl logo"
      className="h-12 mr-4"
    />
    <div>
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
      <p className="text-lg">🐳 A Docker-based development environment for PHP 🐘</p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic">
        Heavily inspired by{' '}
        <a href="https://github.com/opencodeco/hfctl" className="text-blue-400 hover:text-blue-600">
          opencodeco/hfctl
        </a>.
      </blockquote>
    </div>
  </div>
);

export default Header;
