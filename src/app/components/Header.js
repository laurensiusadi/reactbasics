import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-light nav-pills">
            <a className="nav-item nav-link active" href="#">Active</a>
            <a className="nav-item nav-link" href="#">Link</a>
            <a className="nav-item nav-link" href="#">Link</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
        </nav>
    );
};
