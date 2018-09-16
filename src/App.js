import React, { Component } from 'react';
import './App.css';
import Grinder from './common/Grinder/Grinder';
import Grinders from './common/data/grinders';

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
          {Grinders.map((grinder, i) => <div key={i} className="grinder-item">
              <Grinder label={grinder.label} brew_methods={grinder.brew_methods} />
            </div>)}
        </div>
      </div>;
  }
}

export default App;