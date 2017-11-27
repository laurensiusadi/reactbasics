import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>It's your home { this.props.user.name }.</h1>
                <h4>Hobbies</h4>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object
};
