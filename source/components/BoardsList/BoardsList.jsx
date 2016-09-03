import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from '../Board/Board';

import './BoardsList.less';

class BoardsList extends Component {
    render() {
        const { boards } = this.props;

        return (
            <div className='boards-list'>
                {boards.map(board => (
                    <Board board={board} key={`board-${board.id}`} />
                ))}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            boards: state.boards,
        };
    }
)(BoardsList);
