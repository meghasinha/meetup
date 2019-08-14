import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText:''
  };

  onNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    if(value < 1)
    {
      this.setState({ errorText: " Number should be at least 1." })
    }
    else
    {
      this.props.updateEvents(null, null, value);
      this.setState({ errorText: "" })
    }
  }
s
  render() {
    return (
      <div className="NumberOfEvents">
      <ErrorAlert text={this.state.errorText} />
        <span>Show </span>
        <input
          type="number"
          className="number-of-events"
          onChange={this.onNumberChanged}
          value={this.state.number}
        />
        <span> Events</span>
      </div>
    );
  }
}


  export default NumberOfEvents;
