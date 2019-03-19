import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactReduxChild1 from './ReactReduxChild1';

class ReactReduxApp extends Component{
    render() {
        return (
            <div>
                {this.props.display}
                <ReactReduxChild1 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        display: state.display
    }
}

export default connect(mapStateToProps)(ReactReduxApp);