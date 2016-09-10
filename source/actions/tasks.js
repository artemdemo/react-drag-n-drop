import * as tasksConst from '../constants/tasks';

export function updateTaskPosition(draggedTask, boardId, position, nearTaskId) {
    return {
        type: tasksConst.UPDATE_TASK_POSITIONS_AFTER_DRAGGING,
        draggedTask,
        boardId,
        position,
        nearTaskId,
    };
}
