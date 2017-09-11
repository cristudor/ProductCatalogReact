
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
    styles: []
};

const stylesDataReducer = (state = initialState, action) => {
    console.log('Reducer called');
    return initialState;
};


const rootReducer = combineReducers({
    stylesData: stylesDataReducer,
    routing: routerReducer
});

export default rootReducer;