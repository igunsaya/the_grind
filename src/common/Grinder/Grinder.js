import React, { Component } from 'react';

class Grinder extends Component {
  table = () => {
    const { brew_methods } = this.props;

    return (
      <table className="container mx-auto">
        <thead>
          <tr className="bg-primary text-offwhite">
            <th className="border border-brown px-4 py-2" title="Brew Method">
              Method
            </th>
            <th className="border border-brown px-4 py-2" title="Minimum Value">
              Min
            </th>
            <th className="border border-brown px-4 py-2" title="Maximum Value">
              Max
            </th>
          </tr>
        </thead>
        <tbody>
          {brew_methods.map((brew_method, i) => (
            <tr key={i} className={i%2 ? "bg-gray-200" : null}>
              <td className="border border-brown px-4 py-2">
                {brew_method.name}
              </td>
              <td className="border border-brown px-4 py-2">
                {brew_method.min_value}
              </td>
              <td className="border border-brown px-4 py-2">
                {brew_method.max_value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    const { label } = this.props;
    return (
      <div className="m-3">
        <h3 className="py-3 italic">{label}</h3>
        {this.table()}
      </div>
    );
  }
}

export default Grinder;
