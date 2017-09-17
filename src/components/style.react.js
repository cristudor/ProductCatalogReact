import React from 'react';
import { connect } from 'react-redux';

import { loadStyleDetails } from '../actions/startupActions';

//this is my react component
class Style extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount() {
        this.props.populateStyleDetails(this.props.styleId);
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{this.props.style.name}</h5>
                        </div>
                        <p className="mb-1">{this.props.style.description}</p>
                    </a>
                </div>
            </div>);
    }
}

//this is the first parameter from the Connect function.
// User defined function which maps the Redux state to the data properties of the react component
const mapStateToProps = (state) => {
    return {
        style: state.stylesData.currentEditingStyle
    };
};

//this is the second parameter from the Connect function.
// User defined function which maps the Redux event dispatcher to the data properties of the react component
const mapDispatchToProps = (dispatch) => {
    return {
        populateStyleDetails: (styleId) => dispatch(loadStyleDetails(styleId))
    };
};

// Connect function comes from the library 'react-redux'
//export a wrapper on the react component that provides access to the redux state and notification system.
export default connect(mapStateToProps, mapDispatchToProps)(Style);
