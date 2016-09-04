import React, { Component } from 'react';

export class DragField extends Component {
    constructor(props) {
        super(props);

        this.dragOver = () => {};
    }

    render() {
        const { className = '' } = this.props;

        return (
            <div className={className}
                 onDragOver={this.dragOver}>
                {this.props.children}
            </div>
        );
    }
}
