import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactReduxChild2 extends Component{

    render() {
        return (
            <div>
                <button onClick={() => this.props.reset()}>reset</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset: () => {
            dispatch({type: 'CHANGE_HELLO', payload: {display: 'hello'}})
        }
    }
}

export default connect(null, mapDispatchToProps)(ReactReduxChild2)