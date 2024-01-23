import React from 'react';

const Usage = () => (
  <div id="usage" className="p-4">
    <h2 className="text-2xl font-bold">Usage</h2>
    <p>Then you can use <code className="bg-gray-700 text-white p-1 rounded">phpctl</code> or <code className="bg-gray-700 text-white p-1 rounded">pctl</code> with a subcommand:</p>
    <div className="bg-gray-800 text-white p-4 rounded my-4">
      <code>phpctl &lt;command&gt; [arguments]</code>
    </div>
    <p>For example:</p>
    <div className="bg-gray-800 text-white p-4 rounded my-4">
      <code>phpctl php -m # To show built-in modules</code>
    </div>
    <p>Or</p>
    <div className="bg-gray-800 text-white p-4 rounded">
      <code>phpctl sh echo 'Hello, World!' # To run arbitrary sh commands inside the container</code>
    </div>
  </div>
);

export default Usage;
