import React from 'react';
import { connect } from 'react-redux';

const StyleListItem = (props) => {

    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.name}</h5>
            </div>
            <p className="mb-1">{props.description}</p>
        </a>);
};

class StylesList extends React.Component {
    constructor(props) {
       super(props);
    }

    render() {

        const items = [1,2,3].map(idx => <StyleListItem key={idx} name="Skinny jeans" description="sexy as hell"/>);

        return (
            <div className="container-fluid">
                <div className="list-group">
                    { items }
                </div>
            </div>);
    }
}


export default StylesList;
