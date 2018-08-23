import React from 'react'
import {  Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard'
import Cadastro from '../cadastro/cadastro';

export default props => (
        <div>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/cadastro' component={Cadastro} />
            <Redirect from='*' to='/' />
        </div>
)