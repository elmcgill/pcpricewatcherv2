import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';
import {getParts} from '../../actions/watcherActions';

class Parts extends Component {

    componentDidMount(){
        this.props.getParts(this.props.listId);
    }

    render(){
        const partItems = this.props.parts.map(part => (
            <div key={part.id}>
                <h3>CPU Links</h3>
                <p>{part.cpu}</p>
                <h3>Motherboard Links</h3>
                <p>{part.mobo}</p>
            </div>
        ));
        return (
            <div>
                <h1>Parts List</h1>
                <h1>Id: {this.props.listId} </h1>
                <h3>{partItems}</h3>
            </div>
        );
    }
}

Parts.propTypes = {
    getParts: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    parts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    id: state.parts.id,
    parts: state.parts.parts
});

export default connect(mapStateToProps, {getParts})(Parts);