import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap'
import Sku from '../components/sku.react';
import Style from '../components/style.react'
import Option from '../components/option.react'

import { loadStyleDetails } from '../actions/startupActions';

const paddingWrap = {
    paddingTop: "15px"
};

//this is my react component
class StylePage extends React.Component {

    componentDidMount() {
        this.props.populateStyleDetails(this.props.match.params.styleId);
    }

    render() {

        return (
                <Grid fluid={true} style={paddingWrap}>
                    <Row className="show-grid">
                        <Col xs={12} md={5}>
                            <Style id="styles" className="col-md-5"/>
                        </Col>
                        <Col xs={12} md={5}>
                            <Option id="options" className="col-md-5"/>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Sku id="skus" className="col-md-8"/>
                        </Col>
                    </Row>
                </Grid>

        );
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
export default connect(mapStateToProps, mapDispatchToProps)(StylePage);
