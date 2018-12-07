import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Detail.css';

class Roster extends Component {
    displayPosition() {
        return this.props.person.position.split(/\s/g).map(word => word.charAt(0));
    }

    render() {
        const {person} = this.props;
        return (
            <div className="detail">
                <div className="image">
                    <h3>{person.name} ({this.displayPosition()})</h3>
                    <img src={person.image_url} alt={person.name + ' photo'} />
                </div>
                <div className="info">
                    <div className="link" onClick={this.props.onBackClick}>Back</div>
                </div>
            </div>
        );
    }
}

Roster.propTypes = {
    person: PropTypes.shape({
        image_url: PropTypes.string,
        name: PropTypes.string,
        position: PropTypes.string
    }),
    onBackClick: PropTypes.func
};

export default Roster;