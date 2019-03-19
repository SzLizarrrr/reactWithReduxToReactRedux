import React, { Component } from 'react';
import axios from 'axios';
import store from './store';
import ReduxChild2 from './ReduxChild2';

export default class ReduxChild1 extends Component {

    changeHello() {
        axios.get('http://localhost:3000/api/hello/victor').then(res => {
            store.dispatch({
                type: 'CHANGE_HELLO',
                payload: {display: res.data.hello}
            })
        })
    }

    render() {
        return (
            <div>
                <div><button onClick={() => this.changeHello()}>change</button></div>
                <ReduxChild2 />
            </div>
        )
    }
}