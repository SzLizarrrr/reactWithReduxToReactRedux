import React, { Component } from 'react';
import store from './store';
import ReduxChild1 from './ReduxChild1';
// import { connect } from 'react-redux';

class ReduxApp extends Component {
    state = {
        display: store.getState().display
    }

    componentDidMount() {
        store.subscribe(() => this.setState({display: store.getState().display}))
    }

  render() {
    return (
      <div>
        <div>{this.state.display}</div>
        <ReduxChild1 />
      </div>
    );
  }
}

export default ReduxApp;
