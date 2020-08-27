import React, { useState } from 'react';

import { ReactComponent as ChevronUp } from './common/svg/chevron-up.svg';
import { ReactComponent as ChevronDown } from './common/svg/chevron-down.svg';
import { ReactComponent as Cup } from './common/svg/cup.svg';
import Grinder from './common/Grinder/Grinder';
import Grinders from './common/data/grinders';
import Stopwatch from './components/stopwatch';

const App = () => {
  const [isGrinderVisible, setGrinderVisible] = useState(false);
  const [isMaxStopwatchView, setMaxStopwatchView] = useState(true);

  return (
    <div className="flex flex-col bg-lightBeige">
      <header className="flex items-end justify-between rounded-b-xl text-white h-40 bg-gradient-to-r from-mediumBrown to-lightBrown">
        <h1 className="px-5 pb-5 font-light">The Grind</h1>
        <Cup className="w-40 h-32 mr-5 mb-5" />
      </header>
      <div className="flex flex-col bg-lightBeige">
        <div className="rounded m-5 bg-ivory">
          <div className="flex flex-row justify-between">
            <h2 className="py-2 pl-3 font-semibold">STOPWATCH</h2>
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

        <div className="rounded m-5 bg-ivory">
          <div className="flex flex-row justify-between">
            <h2 className="p-2 font-semibold">GRINDERS</h2>
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
