import React, { Component } from 'react';
import throttle from './utils/throttle';
import { setLandingContainer, setNearItem, setPosition } from './services/dragService';

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

                // If board has no items then `nearItem` should be set to `undefined`
                setNearItem();
                // as well as `position` case it's not relevant in this case
                setPosition();
            }
            const { container } = this.props;
            setLandingContainer(container);
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

DragItemsContainer.PropTypes = {
    container: React.PropTypes.any,
};
