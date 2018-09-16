import React, { Component } from 'react';

class Grinder extends Component {

    table = () => {
        const { brew_methods } = this.props;

        return <table className="table is-striped">
            <thead>
              <tr>
                <th title="Brew Method">Method</th>
                <th title="Minimum Value">Min</th>
                <th title="Maximum Value">Max</th>
              </tr>
            </thead>
            <tbody>
              {brew_methods.map((brew_method, i) => <tr key={i}>
                  <td>{brew_method.name}</td>
                  <td>{brew_method.min_value}</td>
                  <td>{brew_method.max_value}</td>
                </tr>)}
            </tbody>
          </table>;
    };

    render(){
        const { label } = this.props;
        return <div className="card">
            <header className="card-header">
              <p className="card-header-title">{label}</p>
            </header>
            <div className="card-content">
              <div className="content">{this.table()}</div>
            </div>
          </div>;
    }
}

export default Grinder;