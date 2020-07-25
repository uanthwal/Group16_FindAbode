import React, {Component} from 'react';

import '../../css/help/faq_sections.css';

export default class HelpOptions extends Component {
    state = {
        classes: this.props.classes,
        departmentName: this.props.departmentName,
        index: this.props.index,
        selected: this.props.selected
    };

    render() {
        const index = this.props.index;
        return (
            <li
                tabIndex={this.props.index}
                className={this.props.classes}
                onClick={() => {
                    this.props.deptClick(index);
                }}
            >
                <a>{this.state.departmentName}</a>
            </li>
        );
    }
}
