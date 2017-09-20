
//import { fetch } from 'whatwg-fetch';
import { InitialStateEvents } from '../constants/reduxEventConstants';


export const loadStylesList = () => dispatch => {
    //call an API to get the styles list
    //emit an redux event with the results

    dispatch({
        type: InitialStateEvents.STYLES_LIST_DATA_RECEVIED,
        styles: [ {
            id: 1,
            name: 'Skinny jeans',
            description: 'sexy as hell'
        }, {
            id: 2,
            name: 'Ripped jeans',
            description: 'even more sexy'
        } ]
    });

};



export const loadStyleDetails = (styleId) => {
    return dispatch => {
        //call an API to get the styles details
        //emit an redux event with the results

        dispatch({
            type: InitialStateEvents.STYLE_DATA_RECEVIED,
            style: {
                Id: styleId,
                Name: `${styleId}: Skinny jeans`,
                Description: 'sexy as hell',
                datecreated: "2017-01-31",
                attributes: ["option1"],
                categories: ["option1"],
                designs: [],
                //options details
                optionID: "Mensware-123456",
                odbmsID: "123456",
                OptionDescription: "Blue Skinny Jeans",
                OptionRange: 10,
                //sku details
                skuIdOdbms: "1234567",
                skuName: "Blue Skinny Jeans Size 32",
                skuUrn: "urn:product:sku:123-xyz-456",
                upcId: "1234567890123",
                upcType: "EAN"
            }
        });

        // fetch(`http://localhost:8080/RuaanV/skus/1.0.0/sku/${styleId}`)
        //     .then(function (response) {
        //         return response.json()
        //     })
        //     .then(function (data) {
        //         dispatch({
        //             type: InitialStateEvents.STYLE_DATA_RECEVIED,
        //             style: data
        //         })
        //     })
        //     .catch(e => {
        //         console.dir(e)
        //     })

    };
};
