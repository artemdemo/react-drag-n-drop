import * as tasksConst from '../constants/tasks';

const defaultTasks = [
    {
        id: 0,
        boardId: 0,
        position_index: 0,
        name: 'Zero task',
    },
    {
        id: 1,
        boardId: 0,
        position_index: 1,
        name: 'First task',
    },
    {
        id: 2,
        boardId: 0,
        position_index: 2,
        name: 'Second task',
    },
];

function sortByPosition(taskA, taskB) {
    if (taskA.position_index < taskB.position_index) {
        return -1;
    }
    if (taskA.position_index > taskB.position_index) {
        return 1;
    }
    return 0;
}

export function tasks(state = defaultTasks, action) {
    switch (action.type) {
        case tasksConst.UPDATE_TASK_POSITIONS_AFTER_DRAGGING:
            const draggedTask = Object.assign({}, action.draggedTask, {boardId: action.boardId});
            const sortedTasks = state
                .filter(task => task.boardId === action.boardId && task.id !== draggedTask.id)
                .sort(sortByPosition);
            let boardTasks = [];

            if (sortedTasks.length === 0) {
                boardTasks.push(draggedTask);
            } else {
                for (let i = 0, len = sortedTasks.length; i < len; i++) {
                    if (sortedTasks[i].id === action.nearTaskId) {
                        if (action.position === 'before') {
                            boardTasks.push(draggedTask);
                            boardTasks.push(sortedTasks[i]);
                        } else {
                            boardTasks.push(sortedTasks[i]);
                            boardTasks.push(draggedTask);
                        }
                    } else {
                        boardTasks.push(sortedTasks[i]);
                    }
                }
            }

            boardTasks = boardTasks.map((task, index) => Object.assign(task, {
                position_index: index,
            }));

            return state
                .filter(task => task.boardId !== action.boardId && task.id !== draggedTask.id)
                .concat(boardTasks);
        default:
            return state;
    }
}
