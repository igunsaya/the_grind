import React, { Component, useEffect, useState } from 'react';
import moment from 'moment';

const Stopwatch = ({ showLaps }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  function toggle() {
    setIsRunning(!isRunning);
  }

  function lap() {
    const lastTotal = laps.length >= 1 ? laps[laps.length - 1].total : 0;
    const duration = time - lastTotal;
    setLaps(laps => [...laps, { duration, total: time }]);
  }

  function reset() {
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  }

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10); //10ms
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const buttonStyle =
    'rounded mx-2 w-1/3 bg-brown text-white font-bold';

  return (
    <div className="px-3 py-5">
      <div className="font-semibold text-4xl text-center tracking-widest px-14 pb-8">
        {moment(time).format('mm:ss.SSS')}
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
              <th className="border px-4 py-2" title="Pour">
                Pour
              </th>
              <th className="border px-4 py-2" title="Duration">
                Duration
              </th>
              <th className="border px-4 py-2" title="Total">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">Pour {i + 1}</td>
                <td className="border px-4 py-2">
                  {moment(lap.duration).format('mm:ss')}
                </td>
                <td className="border px-4 py-2">
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
