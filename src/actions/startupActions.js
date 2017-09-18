
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

    // fetch('http://localhost/api/styles/')
    //     .then((data) => dispatch({
    //     type: InitialStateEvents.STYLES_LIST_DATA_RECEVIED,
    //     styles: data
    // }));

};



export const loadStyleDetails = (styleId) => {
    return dispatch => {
        //call an API to get the styles details
        //emit an redux event with the results

        // dispatch({
        //     type: InitialStateEvents.STYLE_DATA_RECEVIED,
        //     style: {
        //         id: 1,
        //         name: 'Skinny jeans',
        //         description: 'sexy as hell'
        //     }
        // });

        fetch(`http://localhost:8080/RuaanV/skus/1.0.0/sku/${styleId}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                dispatch({
                    type: InitialStateEvents.STYLE_DATA_RECEVIED,
                    style: data
                })
            })
            .catch(e => {
                console.dir(e)
            })

    };
};
