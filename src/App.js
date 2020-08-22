import React, { useState } from 'react';

import { ReactComponent as ChevronUp } from './common/svg/chevron-up.svg';
import { ReactComponent as ChevronDown } from './common/svg/chevron-down.svg';
import Grinder from './common/Grinder/Grinder';
import Grinders from './common/data/grinders';
import Stopwatch from './components/stopwatch';

const App = () => {
  const [isGrinderVisible, setGrinderVisible] = useState(false);
  const [isMaxStopwatchView, setMaxStopwatchView] = useState(true);

  return (
    <div className="flex flex-col bg-beige">
      <header className="bg-primary text-white px-5 py-3 border-b-4 border-accent">
        <h1>The Grind</h1>
      </header>
      <div className="flex flex-col bg-beige">
        <div className="border-2 border-brown rounded m-5 bg-offwhite">
          <div className="flex flex-row justify-between">
            <h2 className="py-2 pl-3">Stopwatch</h2>
            <button
              className="p-2"
              onClick={() => setMaxStopwatchView(!isMaxStopwatchView)}
            >
              {isMaxStopwatchView ? (
                <ChevronUp className="w-8" />
              ) : (
                <ChevronDown className="w-8" />
              )}
            </button>
          </div>
          <Stopwatch showLaps={isMaxStopwatchView} />
        </div>

        <div className="border-2 border-brown rounded m-5 bg-offwhite">
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
    </div>
  );
};

export default App;
