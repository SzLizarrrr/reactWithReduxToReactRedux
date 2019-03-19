import React, { Component } from 'react'

export default class Child2 extends Component{
    render() {
        return (
            <div>
                <button onClick={() => this.props.resetD()}>reset</button>
            </div>
        )
    }
}