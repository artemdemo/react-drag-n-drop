import * as tasksConst from '../constants/tasks';

export function updateTaskPosition(draggedTask, boardId, position) {
    return {
        type: tasksConst.UPDATE_TASK_POSITIONS_AFTER_DRAGGING,
        draggedTask,
        boardId,
        position,
    };
}
