import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardsList from '../components/BoardsList/BoardsList';

class MainView extends Component {
    render() {
        return (
            <div>
                <BoardsList />
            </div>
        );
    }
}

export default connect(
    () => {
        return {};
    }
)(MainView);
