
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stylesData from './stylesData.reducer';



const rootReducer = combineReducers({
    stylesData: stylesData,
    routing: routerReducer
});

export default rootReducer;