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
        isRunning: true
    });
  }

  handleStopClick = () => {
    clearInterval(this.timer);
    this.setState({
        isRunning: false
    });
  }

  handleResetClick = () => {
    this.handleStopClick();
    this.setState({time_ms: moment().startOf('day')});
  }

  ticker = () => {
    this.setState({ time_ms: this.state.time_ms.add(10, 'ms') });
  }

  renderPrimaryButton = () => {
    const { isRunning } = this.state;
    let label = "Start";
    let onClick = this.handleStartClick;
    if (isRunning) {
        label = "Stop";
        onClick = this.handleStopClick;
    }
    return (
        <a className="card-footer-item" onClick={onClick}>{label}</a>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content title has-text-centered">
            {moment(_.get(this.state, 'time_ms', '')).format(
              moment.HTML5_FMT.TIME_MS,
            )}
          </div>
        </div>
        <div className="card-footer">
          {this.renderPrimaryButton()}
          <a className="card-footer-item" onClick={this.handleResetClick}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}

export default Stopwatch;