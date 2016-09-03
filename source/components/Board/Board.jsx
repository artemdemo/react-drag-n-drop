import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/Task';

import './Board.less';

class Board extends Component {
    render() {
        const { board, tasks } = this.props;
        const boardTasks = tasks.filter(task => task.boardId === board.id);

        return (
            <div className='board'>
                <div className='board__name'>{board.name}</div>
                <div className='board__content'>
                    {boardTasks.map(task => (
                        <Task task={task} key={`task-${task.id}`} />
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            tasks: state.tasks,
        };
    }
)(Board);
