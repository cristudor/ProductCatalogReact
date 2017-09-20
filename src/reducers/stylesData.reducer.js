import { InitialStateEvents } from '../constants/reduxEventConstants';


const initialState = {
    styles: [],
    currentEditingStyle: {},
    currentEditingOption: {},
    currentEditingSku: {}
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

                currentEditingStyle: {
                    urn: "urn:product:Style:" + action.style.Id,
                    name: action.style.Name,
                    comment: action.style.Description,
                    datecreated: action.style.datecreated,
                    attributes: action.style.attributes,
                    categories: action.style.categories,
                    designs: action.style.designs
                },

                currentEditingOption: {
                    optionID: action.style.optionID,
                    odbmsID: action.style.odbmsID,
                    OptionDescription: action.style.OptionDescription,
                    OptionRange: action.style.OptionRange
                },

                currentEditingSku: {
                    skuIdOdbms: action.style.skuIdOdbms,
                    skuName: action.style.skuName,
                    skuUrn: action.style.skuUrn,
                    upcId: action.style.upcId,
                    upcType: action.style.upcType
                }

            };
    }

    return state;
};

export default stylesData;
