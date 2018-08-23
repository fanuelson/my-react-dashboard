import React, { Component } from 'react';
import Page from '../core/template/page';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <Page pageTitle="Dashboard" pageTitleSmall="lala">

                <a className="btn btn-primary" > Salvar </a>
                <a className="btn btn-danger" > Salvar </a>
                <a className="btn btn-default" > Salvar </a>
                <a className="btn btn-warning" > Salvar </a>
           </Page>
        )
    }
}
