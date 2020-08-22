import React, { Component, useState } from 'react';
import _ from 'lodash-core';

import { ReactComponent as ChevronUp } from './common/svg/chevron-up.svg';
import { ReactComponent as ChevronDown } from './common/svg/chevron-down.svg';
import Grinder from './common/Grinder/Grinder';
import Grinders from './common/data/grinders';
import Stopwatch from './components/stopwatch';

const App = () => {
  const [isGrinderVisible, setGrinderVisible] = useState(false);

  return (
    <div className="flex flex-col">
      <header className="bg-gray-700 text-white p-3">
        <h1>The Grind</h1>
      </header>
      <div className="border-2 m-5">
        <h2 className="p-2">Stopwatch</h2>
        <Stopwatch />
      </div>

      <div className="border-2 m-5">
        <div className="flex flex-row justify-between">
          <h2 className="p-2">Grinders</h2>
          <button
            className="p-2"
            onClick={() => setGrinderVisible(!isGrinderVisible)}
          >
            {isGrinderVisible ? (
              <ChevronUp className="w-8" />
            ) : (
              <ChevronDown className="w-8" />
            )}
          </button>
        </div>
        {isGrinderVisible
          ? Grinders.map((grinder, i) => (
              <div key={i}>
                <Grinder
                  label={grinder.label}
                  brew_methods={grinder.brew_methods}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default App;
