
import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Counter from './counter';

class App extends Component
{


render() {
    
    
  return (
    <div className="container">
     
      <Counter />
      <Counter />
      <Counter />
      
    </div>
  )
}

}








export default App;