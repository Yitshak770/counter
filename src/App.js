
import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      increment : 0,
    }
  }

  augmenter = () => {
    this.setState({
      increment : this.state.increment + 2
    });
  }

  diminuer = () => {
    this.setState({
      increment : this.state.increment - 2
    });
  }

  render() {
   
    
    return (
      <div>
        <button1 class="bouton" onClick={this.augmenter}>augmenter</button1>
        <button2 class="bouton" onClick={this.diminuer}>diminuer</button2>
        <div id="display">
          <h2>DISPLAY</h2>
          <div><p>{this.state.increment}</p></div>
        </div>

      </div>
    )
  }
}






export default App;
