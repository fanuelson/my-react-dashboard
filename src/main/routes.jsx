import React from 'react';
import { Redirect, Route } from 'react-router';
import Cadastro from '../cadastro/cadastro';
import Dashboard from '../dashboard/dashboard';


export default props => (
        <div>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/cadastro' component={Cadastro} />
            <Redirect from='*' to='/' />
        </div>
)