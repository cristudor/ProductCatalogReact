import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { loadStylesList } from '../actions/startupActions';

const StyleListItem = (props) => {
    return (
        <Link to={"/style/" + props.styleId} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.name}</h5>
            </div>
            <p className="mb-1">{props.description}</p>
        </Link>);
};

//this is my react component
class StylesList extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount() {
        this.props.populateList();
    }

    render() {

        const items = this.props.styles.map(item => <StyleListItem key={item.id} styleId={item.id} name={item.name} description={item.description}/>);

        return (
            <div className="container-fluid">
                <div className="list-group">
                    { items }
                </div>
            </div>);
    }
}

//this is the first parameter from the Connect function.
// User defined function which maps the Redux state to the data properties of the react component
const mapStateToProps = (state) => {
    return {
        styles: state.stylesData.styles
    };
};

//this is the second parameter from the Connect function.
// User defined function which maps the Redux event dispatcher to the data properties of the react component
const mapDispatchToProps = (dispatch) => {
    return {
        populateList: () => dispatch(loadStylesList())
    };
};

// Connect function comes from the library 'react-redux'
//export a wrapper on the react component that provides access to the redux state and notification system.
export default connect(mapStateToProps, mapDispatchToProps)(StylesList);
