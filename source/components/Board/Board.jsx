import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragField } from '../DragField/DragField';
import { DragItem } from '../DragItem/DragItem';
import Task from '../Task/Task';

import './Board.less';

class Board extends Component {
    constructor(props) {
        super(props);
        this.dragStarted = () => {};
    }

    render() {
        const { board, tasks } = this.props;
        const boardTasks = tasks.filter(task => task.boardId === board.id);

        return (
            <div className='board'>
                <div className='board__name'>{board.name}</div>
                <DragField className='board__content'>
                    {boardTasks.map(task => (
                        <DragItem className='task'
                                  key={`task-${task.id}`}
                                  dragStarted={this.dragStarted}>
                            <Task task={task} />
                        </DragItem>
                    ))}
                </DragField>
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
