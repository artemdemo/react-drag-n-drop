import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragItemsContainer } from '../DragNDrop/DragItemsContainer';
import { DragItem } from '../DragNDrop/DragItem';
import Task from '../Task/Task';

import './Board.less';

class Board extends Component {
    constructor(props) {
        super(props);

        this.dragStarted = () => {};

        this.dragStopped = (event, itemData) => {
            console.log(itemData);
        };
    }

    render() {
        const { board, tasks } = this.props;
        const boardTasks = tasks.filter(task => task.boardId === board.id);

        return (
            <div className='board'>
                <div className='board__name'>{board.name}</div>
                <DragItemsContainer className='board__content'
                                    container={board.id}>
                    {boardTasks.map(task => (
                        <DragItem className='task'
                                  key={`task-${task.id}`}
                                  item={task.id}
                                  dragStarted={this.dragStarted}
                                  dragStopped={this.dragStopped}>
                            <Task task={task} />
                        </DragItem>
                    ))}
                </DragItemsContainer>
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
