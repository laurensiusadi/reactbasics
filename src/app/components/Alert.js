import React from "react";

export class Alert extends React.Component {
    render() {
        return(
            <div className="alert alert-primary" role="alert">
              { this.props.message }
            </div>
        );
    }
}
