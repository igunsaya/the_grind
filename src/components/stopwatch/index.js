import React, { Component } from 'react';
import _ from 'lodash-core';
import moment from 'moment';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      time_ms: moment().startOf('day'),
      isRunning: false,
    };
  }

  handleStartClick = () => {
    this.timer = setInterval(this.ticker, 10);
    this.setState({
      isRunning: true,
    });
  };

  handleStopClick = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
    });
  };

  handleResetClick = () => {
    this.handleStopClick();
    this.setState({ time_ms: moment().startOf('day') });
  };

  ticker = () => {
    this.setState({ time_ms: this.state.time_ms.add(10, 'ms') });
  };

  renderPrimaryButton = () => {
    const { isRunning } = this.state;
    let label = 'Start';
    let onClick = this.handleStartClick;
    if (isRunning) {
      label = 'Stop';
      onClick = this.handleStopClick;
    }
    return (
      <button
        className="border border-gray-500 px-5 py-3 rounded bg-gray-200"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  render() {
    return (
      <div className="px-3 py-5">
        <div className="text-4xl text-center tracking-widest px-14 py-4">
          {moment(_.get(this.state, 'time_ms', '')).format(
            moment.HTML5_FMT.TIME_MS,
          )}
        </div>
        <div className="flex flex-row justify-around">
          {this.renderPrimaryButton()}
          <button className="border border-gray-500 px-5 py-3 rounded bg-gray-200" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
