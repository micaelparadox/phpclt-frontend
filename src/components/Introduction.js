import React from 'react';

const Introduction = () => (
  <div id="introduction" className="p-4">
    <h2 className="text-2xl font-bold">Introduction</h2>
    <p className="mt-2">
      <strong>Frictionless PHP Development!</strong> Seamlessly run and switch between different versions of PHP, with different installed extensions, thanks to the power of containers.
      Take the advantage of goodie commands like <code className="bg-gray-700 text-white p-1 rounded">phpctl create</code> to start a new project, <code className="bg-gray-700 text-white p-1 rounded">phpctl repl</code> to start a REPL, <code className="bg-gray-700 text-white p-1 rounded">phpclt init</code> to initialize a new configuration file <strong>and a lot more</strong>.
    </p>
  </div>
);

export default Introduction;
