import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ReactReduxChild2 from './ReactReduxChild2';

class ReactReduxChild1 extends Component{

    render() {
        return (
            <div>
                <button onClick={() => this.props.changeHello()}>change</button>
                <ReactReduxChild2 />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeHello: () => {
            axios.get('http://localhost:3000/api/hello/victor').then(res => {
                dispatch({type: 'CHANGE_HELLO', payload: {display: res.data.hello}})
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ReactReduxChild1)