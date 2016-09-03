import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.less';

class Board extends Component {
    render() {
        const { board } = this.props;

        return (
            <div className='board'>
                <div className='board__name'>{board.name}</div>
                <div className='board__content'></div>
            </div>
        );
    }
}

export default connect(
    () => {
        return {};
    }
)(Board);
