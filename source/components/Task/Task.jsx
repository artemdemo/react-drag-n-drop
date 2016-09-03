import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Task.less';

class Task extends Component {
    render() {
        const { task } = this.props;

        return (
            <div className='task'>
                <div className='task__name'>{task.name}</div>
            </div>
        );
    }
}

export default connect(
    () => {
        return {};
    }
)(Task);
