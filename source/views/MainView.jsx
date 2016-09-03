import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainView extends Component {
    render() {
        return (
            <div>
                Main View
            </div>
        );
    }
}

export default connect(
    () => {
        return {};
    }
)(MainView);
