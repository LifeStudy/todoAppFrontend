import React, { Component } from 'react';

import If from '../Template'


export default class IconButton extends Component {
    render() {
        return (
            <If test={!props.hide}>
                <button className={'btn btn-' + props.style}
                    onClick={props.onClick}>
                    <i className={'fa fa-' + props.icon}></i>
                </button>
            </If>
        );
    }
}
