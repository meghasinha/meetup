import React, { Component } from 'react';
import { ErrorAlert, WarnigAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText:'',
    warnigText:''
  };

  onNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
     if (navigator.online) { localStorage.setItem('lastNumber', JSON.stringify(value)); }
    if(value < 1)
    {
      this.setState({ errorText: " Number should be at least 1." })
    }
    else
    {
      this.props.updateEvents(null, null, value);
      this.setState({ errorText: "" })
    }
    if(!navigator.onLine)
    {
      this.setState({ warnigText: "You are offline  and data is loaded from cached"})
    }
    else
    {
    this.setState({ warnigText: ""})
    }
  }


  render() {
    return (
      <div className="NumberOfEvents">
      <ErrorAlert text={this.state.errorText} />
      <WarnigAlert text ={this.state.warnigText}/>
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
