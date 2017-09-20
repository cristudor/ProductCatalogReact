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
                    datecreated: "2017-01-31",
                    attributes: ["option1"],
                    categories: ["option1"],
                    designs: []
                },

                currentEditingOption: {
                    optionID: "Mensware-123456",
                    odbmsID: "123456",
                    OptionDescription: "Blue Skinny Jeans",
                    OptionRange: 10
                },

                currentEditingSku: {
                    skuIdOdbms: "1234567",
                    skuName: "Blue Skinny Jeans Size 32",
                    skuUrn: "urn:product:sku:123-xyz-456",
                    upcId: "1234567890123",
                    upcType: "EAN"
                }

            };
    }

    return state;
};

export default stylesData;
