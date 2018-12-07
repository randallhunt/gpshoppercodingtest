import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import './Roster.css';

class Roster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    click = (event) => {
        event.preventDefault();
        const name = event.currentTarget.dataset.name;
        const data = this.props.roster.find(person => person.name === name);
        this.setState({selected: data});
    }

    clear = (event) => {
        this.setState({selected: null});
    }

    render() {
        if (this.state.selected) {
            return <Detail person={this.state.selected} onBackClick={this.clear} />
        }

        const roster = this.props.roster.map(person => {
            return (
                <div className="person" key={person.name} onClick={this.click} data-name={person.name}>
                    <div className="image">
                        <img src={person.image_url} alt={person.name + ' photo'} />
                    </div>
                    <div className="details">
                        <h3>{person.name}</h3>
                        <div>{person.position}</div>
                    </div>
                </div>
            );
        });

        return (
            <div>{roster}</div>
        );
    }
}

Roster.propTypes = {
    roster: PropTypes.arrayOf(
        PropTypes.shape({
            image_url: PropTypes.string,
            name: PropTypes.string,
            position: PropTypes.string
        })
    )
};

export default Roster;