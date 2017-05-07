import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let offset = props.offset ? props.offset : -date.getTimezoneOffset() / 60;
    date.setHours(offset + date.getHours() + date.getTimezoneOffset() / 60);
    this.state = { date: date };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = new Date();
    let offset = this.props.offset ? this.props.offset : -date.getTimezoneOffset() / 60;
    date.setHours(offset + date.getHours() + date.getTimezoneOffset() / 60);
    this.setState({ date: date });
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h4>{this.state.date.toDateString()}</h4>
      </div>
    );
  }
}

