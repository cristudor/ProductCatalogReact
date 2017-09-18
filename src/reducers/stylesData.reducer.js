import { InitialStateEvents } from '../constants/reduxEventConstants';


const initialState = {
    styles: [],
    currentEditingStyle: {}
};

const stylesData = (state = initialState, action) => {
    switch(action.type) {
        case InitialStateEvents.STYLES_LIST_DATA_RECEVIED:
            return {
                ...state,
                styles: action.styles
            };
        case InitialStateEvents.STYLE_DATA_RECEVIED:
            return {
                ...state,
                currentEditingStyle: {id:action.style.Id, name:action.style.Name, description:action.style.Description}
            };
    }

    return initialState;
};

export default stylesData;
