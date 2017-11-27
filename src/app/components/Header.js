import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-light nav-pills">
              <a className="nav-item nav-link active" href="#">Active</a>
              <a className="nav-item nav-link" href="#">Link</a>
              <a className="nav-item nav-link" href="#">Link</a>
              <a className="nav-item nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}
