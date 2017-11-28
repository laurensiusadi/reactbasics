import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.user.initialAge,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        return(
            <div>
                <h1>It's your home { this.props.user.name }. You are { this.state.age } years old</h1>
                <h4>Hobbies</h4>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make older</button>
            </div>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object
};
