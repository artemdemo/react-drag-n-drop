import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppView extends Component {
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    () => {
        return {};
    }, {}
)(AppView);
