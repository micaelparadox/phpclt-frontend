import React from 'react';
import TipBox from './common/TipBox';

const GettingStarted = () => (
  <div id="getting-started" className="p-4 md:p-8">
    <h2 className="text-xl md:text-2xl font-bold text-white">Getting started</h2>
    <TipBox>
      <p>[!TIP]</p>
      <p>Pro-tip: use it with <a href="https://github.com/opencodeco/stack" className="underline">stack</a> to spin up infrastructure components like MySQL, Redis, RabbitMQ etc.</p>
    </TipBox>

  </div>
);

export default GettingStarted;
