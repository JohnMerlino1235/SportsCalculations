import React, {Component} from 'react'

export default class ModuleListItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
            </li>
        )
    }
}