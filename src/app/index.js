import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Alert } from "./components/Alert";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        let user = {
            name: "Anna",
            initialAge: 27,
            hobbies: ["sports", "art"],
        };
        return (
            <div>
            <Header/>
                <div className="container-fluid">
                    <Alert message="Warning!"/>
                    <div className="row">
                        <div className="col-md-12">
                            <Home user={user}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
