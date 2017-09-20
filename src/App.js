import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';


import { BrowserRouter, Route, Link } from 'react-router-dom';

import {slide as Menu, MenuWrap} from 'react-burger-menu'

//my REACT components
import Home from './components/home.react';
import StylesList from './components/stylesList.react';
import StylePage from './components/stylePage.react';

//the REDUX root reducer
import rootReducer from "./reducers/rootReducer";

import './css/app.css';


//call redux createStore using MY reducer, to initialize the state management system
//and change notifications
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


const divStyle = {
    height: '100%',
    background: 'white',
    zIndex: "0"
};

const paddingStyle = {
    paddingLeft: '100px',
    paddingTop: '20px',
    zIndex: "1",
    background: 'white'
};

class App extends React.Component {
    render() {
        /*Provider: is an wrapper component that propagates REDUX state and change notifications to ALL React children components*/
        /*BrowserRouter: top level REACT ROUTER component*/
        /*Route: map URL route to REACT component */
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div id="outer-container" style={divStyle}>

                        <header className="navbar navbar-fixed-top" style={paddingStyle}>
                            <h3>Product Catalog React POC</h3>
                        </header>
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                            <Link id="home" className="menu-item" to="/">List Products</Link>
                            <Link id="about" className="menu-item" to="/about">Create Design</Link>
                            <Link id="contact" className="menu-item" to="/contact">Sample Management</Link>
                            <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                        </Menu>
                        <main id="page-wrap">
                        <Route exact path="/" component={StylesList} />
                        <Route path="/style/:styleId" component={StylePage} />
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
    //
    // links() {
    //     //renders links bar
    //     return (
    //         <nav>
    //             <Link to="/">Home</Link>
    //             <Link to="/stylesList">Styles list</Link>
    //         </nav>
    //     );
    // }
}

export default App;