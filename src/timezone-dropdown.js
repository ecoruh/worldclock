import React from 'react';
import { Alert, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { TZ } from './timezones.js';
import { WorldClockGadget } from './worldclock-gadget.js';

export class TimeZoneDropdown extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let offset = -date.getTimezoneOffset() / 60;
    this.state = { offset: offset, timezone: 'Local Time', clocks: [] };
    this.onSelectAlert = this.onSelectAlert.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.tzl = TZ.map((tz, i) =>
      <MenuItem key={i} eventKey={i} onSelect={this.onSelectAlert}>{tz.value} {tz.offset}</MenuItem>
    );
  }

  onSelectAlert(eventKey) {
    this.setState({ offset: TZ[eventKey].offset, timezone: TZ[eventKey].value });
  }

  handleAdd() {
    let clocks = this.state.clocks;
    clocks.push({ offset: this.state.offset, timezone: this.state.timezone });
    this.setState({ clocks: clocks });
  }

  render() {
    let gadgets = null;
    if (this.state.clocks.length) {
      gadgets = this.state.clocks.map((clock, i) =>
        <WorldClockGadget key={i} offset={clock.offset} timezone={clock.timezone} />
      );
    }
    return (
      <div>
        <DropdownButton bsStyle="default" title="Select time zone" id="dropdown-basic-1">
          {this.tzl}
        </DropdownButton>
        <p/>
        <Button bsStyle="primary" onClick={this.handleAdd} >Add World Clock</Button>
        <p/>
        <Alert bsStyle="warning">
          <strong>Time zone: </strong> {this.state.timezone}
        </Alert>
        <div>{gadgets}</div>
      </div>
    );
  }
}
