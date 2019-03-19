import React, { Component } from 'react'
import Child2 from './Child2';

export default class Child1 extends Component{
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeHello()}>change</button>
                <Child2 resetD={() => this.props.resetDisplay()} />
            </div>
        )
    }
}