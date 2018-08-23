import '../core/template/dependencies';
import React, { Component } from 'react';
import './App.css';

import Header from '../core/template/header';
import SideBar from '../core/template/sideBar';
import Footer from '../core/template/footer';
import Routes from './routes';
import { HashRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="wrapper">
                    <Header />
                    <SideBar />
                    <div className='content-wrapper'>
                        <Routes />
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;