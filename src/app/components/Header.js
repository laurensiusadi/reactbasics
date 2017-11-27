import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-dark bg-light nav-pills">
              <a class="nav-item nav-link active" href="#">Active</a>
              <a class="nav-item nav-link" href="#">Link</a>
              <a class="nav-item nav-link" href="#">Link</a>
              <a class="nav-item nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}
