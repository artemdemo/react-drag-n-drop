const defaultTasks = [
    {
        id: 0,
        boardId: 0,
        name: 'Zero task',
    },
    {
        id: 1,
        boardId: 0,
        name: 'First task',
    },
    {
        id: 2,
        boardId: 0,
        name: 'Second task',
    },
];

export function tasks(state = defaultTasks, action) {
    switch (action.type) {
        default:
            return state;
    }
}
