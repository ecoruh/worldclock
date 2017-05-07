import React from 'react';
import { Clock } from './clock.js'

export class WorldClockGadget extends React.Component {
  render() {
    return (
      <div>
        <Clock offset={this.props.offset} />
        <h4>{this.props.timezone}</h4>
        <hr/>
      </div>
    );
  }
}
