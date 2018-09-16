import React, { Component } from 'react';
import _ from 'lodash-core';

import './App.css';
import Grinder from './common/Grinder/Grinder';
import Grinders from './common/data/grinders';
import Stopwatch from './components/stopwatch';

class App extends Component {

  render() {
    return <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">The Grind</span>
              </div>
            </nav>
          </header>
        </div>
      <div className="columns is-desktop">
        <div className="card-item">
          <Stopwatch />
        </div>
      </div>
        <div className="columns is-desktop">
          {Grinders.map((grinder, i) => <div key={i} className="card-item">
              <Grinder label={grinder.label} brew_methods={grinder.brew_methods} />
            </div>)}
        </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>{_.get(this.state, 'msg', 'Not executed')}</p>
        </div>
      </footer>
      </div>;
  }
}

export default App;