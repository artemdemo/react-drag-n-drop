import React, { Component } from 'react';
import throttle from '../../utils/throttle';

export class DragItemsContainer extends Component {
    constructor(props) {
        super(props);

        this.hasDragItems = false;

        this.state = {
            renderPlaceholder: false,
        };

        let removePlaceholderTimeoutId = null;

        this.dragOver = throttle(() => {
            if (!this.hasDragItems) {
                this.setState({
                    renderPlaceholder: true,
                });
                clearTimeout(removePlaceholderTimeoutId);
                removePlaceholderTimeoutId = setTimeout(() => {
                    this.setState({
                        renderPlaceholder: false,
                    });
                }, 100);
            }
        }, 50);
    }

    render() {
        const { className = '' } = this.props;
        this.hasDragItems = this.props.children.length > 0;

        const renderPlaceholder = () => {
            if (this.state.renderPlaceholder) {
                return (
                    <div className='drag-item__placeholder
                                    drag-item__placeholder_before' />
                );
            }
            return null;
        };

        return (
            <div className={className}
                 onDragOver={this.dragOver}>
                {renderPlaceholder()}
                {this.props.children}
            </div>
        );
    }
}
