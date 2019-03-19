import React, { Component } from 'react';
import axios from 'axios';
import Child1 from './Child1';

class App extends Component {
  state = {
    display: 'hello'
  }

  changeDisplayFromBack() {
    axios.get('http://localhost:3000/api/hello/victor').then(res => this.setState({display: res.data.hello}))
  }

  resetDisplay() {
    this.setState({display: 'hello'})
  }
  
  render() {
    return (
      <div>
        <div>{this.state.display}</div>
        <Child1 resetDisplay={()=> this.resetDisplay()} changeHello={() => this.changeDisplayFromBack()}/>
      </div>
    );
  }
}

export default App;
