import React, { Component } from 'react';
import ContentHeader from './contentHeader';
import Content from './content';

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContentHeader title={this.props.pageTitle} small={this.props.pageTitleSmall} />
                <Content>
                    {this.props.children}
                </Content>
            </div>
        )
    }
}
