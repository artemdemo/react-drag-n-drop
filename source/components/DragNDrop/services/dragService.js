let draggedItem;
let landingContainer;
let position;
let nearItem;

export const setDraggedItem = (newDraggedItem) => {
    draggedItem = newDraggedItem;
};

export const getDraggedItem = () => {
    return draggedItem;
};

export const setLandingContainer = (newLandingContainer) => {
    landingContainer = newLandingContainer;
};

export const getLandingContainer = () => {
    return landingContainer;
};

export const setPosition = (newPosition) => {
    position = newPosition;
};

export const getPosition = () => {
    return position;
};

export const setNearItem = (newNearItem) => {
    nearItem = newNearItem;
};

export const getNearItem = () => {
    return nearItem;
};
