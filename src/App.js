import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.updateCounter = this.updateCounter.bind(this)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className="container">
        <textarea
          rows="3"
          onChange={this.updateCounter}
        >

        </textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  updateCounter(event) {
    this.setState({
      counter: event.target.value.length
    })
  }
}

export default App;
