import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { BrowserRouter, Route, Link } from 'react-router-dom';

//my REACT components
import Home from './components/home.react';
import StylesList from './components/stylesList.react';

//the REDUX root reducer
import rootReducer from "./reducers/rootReducer";

import './css/app.css';



//call redux createStore using MY reducer, to initialize the state management system
//and change notifications
const store = createStore(rootReducer, applyMiddleware(logger));


class App extends React.Component {
    render() {
        /*Provider: is an wrapper component that propagates REDUX state and change notifications to ALL React children components*/
        /*BrowserRouter: top level REACT ROUTER component*/
        /*Route: map URL route to REACT component */
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        { this.links() }
                        <Route exact path="/" component={Home} />
                        <Route exact path="/stylesList" component={StylesList} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

    links() {
        //renders links bar
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/stylesList">Styles list</Link>
            </nav>
        );
    }
}

export default App;