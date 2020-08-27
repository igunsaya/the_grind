import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Stopwatch = ({ showLaps }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [shownTime, setShownTime] = useState(0);
  const [laps, setLaps] = useState([]);

  function toggle() {
    setIsRunning(!isRunning);
  }

  function lap() {
    const lastTotal = laps.length >= 1 ? laps[laps.length - 1].total : 0;
    const duration = time - lastTotal;
    setLaps(laps => [...laps, { duration, total: time }]);
    setShownTime(0);
  }

  function reset() {
    setTime(0);
    setShownTime(0);
    setLaps([]);
    setIsRunning(false);
  }

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        setShownTime((shownTime) => shownTime + 10);
      }, 10); //10ms
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const buttonStyle =
    'rounded mx-1 w-1/3 bg-darkBrown text-white font-bold';

  let lapStyle = 'invisible';
  if (laps && laps.length > 0){
    lapStyle = 'visible h-1 mr-3 text-darkBrown font-bold text-lg';
  }
    return (
      <div className="px-3 py-5">
        <span className={`float-right ${lapStyle}`}>{`+${laps.length}`}</span>
        <div className="pl-5 pb-8">
          <div className="font-bold text-5xl text-left tracking-wide" >
          {moment(shownTime).format('mm')}:
          {moment(shownTime).format('ss')}.
          {moment(shownTime).format('SSS')}
          </div>
        </div>
        <div className="flex flex-row justify-between h-12">
          <button className={buttonStyle} onClick={toggle}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className={buttonStyle} onClick={lap}>
            Lap
          </button>
          <button className={buttonStyle} onClick={reset}>
            Reset
          </button>
        </div>
        {showLaps && laps.length > 0 ? (
          <table className="container mx-auto mt-5">
            <thead>
              <tr>
                <th className="border border-lightBrown px-4 py-2" title="Pour">
                  Pour
                </th>
                <th
                  className="border border-lightBrown px-4 py-2"
                  title="Duration"
                >
                  Duration
                </th>
                <th
                  className="border border-lightBrown px-4 py-2"
                  title="Total"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {laps.map((lap, i) => (
                <tr key={i}>
                  <td className="border border-lightBrown px-4 py-2">
                    Pour {i + 1}
                  </td>
                  <td className="border border-lightBrown px-4 py-2">
                    {moment(lap.duration).format('mm:ss')}
                  </td>
                  <td className="border border-lightBrown px-4 py-2">
                    {moment(lap.total).format('mm:ss')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
};

export default Stopwatch;
