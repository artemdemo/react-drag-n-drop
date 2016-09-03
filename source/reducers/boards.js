const defaultState = [
    {
        id: 0,
        name: 'ToDo',
    },
    {
        id: 1,
        name: 'In Progress',
    },
    {
        id: 2,
        name: 'Done',
    },
];

export function boards(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
