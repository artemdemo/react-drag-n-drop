# React drag and drop components

Drag and drop solution for react in different model environments

![alt tag](react-dnd.png)

## Getting started

Install

```
$ npm i
```

Run local server and watch file changes

```
$ npm start
```

Open [localhost:8080](http://localhost:8080/)

## How to use

Since React can be used with different models - Flux, Redux, etc - I can't build solution that will fit for all of them.
Therefore I decided to build components wrap with API that will provide data about dragged elements and user will decide how to use it.

In this repository you can find working example with React and Redux, but you can build similar solution with Flux or any other model of your choise.

**`<DragItemsContainer>`**

Container that hold dragging elements

Properties:
* `className`
* `container` - data about container (for example, board that hold tasks)

**`<DragItem>`**

Draggable element

Properties:
* `className`
* `item` - data about dragged item (for example, task that will dragged)
* `dragStarted` - event, that will fire when dragging started
* `dragStopped` - event, that will fire when dragging stopped

`<DragItem>` should be always inside of `<DragItemsContainer>`. In addition `<DragItemsContainer>` shouldn't hold any other components.

```javascript
<DragItemsContainer className='board__content'
                    container={board.id}>
    {boardTasks.map(task => (
        <DragItem className='task'
                  key={`task-${task.id}`}
                  item={task.id}
                  dragStarted={this.dragStarted}
                  dragStopped={(event, itemData) => this.dragStopped(task, itemData)}>
            <Task task={task} />
        </DragItem>
    ))}
</DragItemsContainer>
```
