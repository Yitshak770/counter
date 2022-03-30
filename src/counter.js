import { Component } from 'react';
import './App.css';


class Counter extends Component {

  constructor() {
    super();
    this.state = {
      increment : 0,
    }
  }

  augmenter = () => {
    this.setState({
      increment : this.state.increment + 1
    });
  }

  diminuer = () => {
    this.setState({
      increment : this.state.increment - 1
    });
  }
  
  render() {
    
    
    return (
      <div className='counter'>
        <button className="bouton" onClick={this.augmenter}>augmenter</button>
        <button className="bouton" onClick={this.diminuer}>diminuer</button>
        <div id="display">
          <h2>DISPLAY</h2>
          <div><p>{this.state.increment}</p></div>
        </div>
        
      </div>
    )
  }
}

export default Counter;