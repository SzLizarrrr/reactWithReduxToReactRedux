import React, { Component } from 'react';
import store from './store';

export default class ReduxChild1 extends Component {

    reset() {
        store.dispatch({
            type: 'CHANGE_HELLO',
            payload: {display: 'hello'}
        })
    }

    render() {
        return (
            <button onClick={() => this.reset()}>reset</button>
        )
    }
}