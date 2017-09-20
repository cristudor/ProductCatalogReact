

export saveStyle = style => dispatch => {
    dispatch({type: "SetBusy"});

    fetch('https://davidwalsh.name/submit', {
        method: 'post',
        body: JSON.stringify(style)
    }).then(result => {
        fetch('a')
            .then(response => { dispatch()

            dispatch({type: "ClearBusy"});
        })
        .catch(e => {

        });
};