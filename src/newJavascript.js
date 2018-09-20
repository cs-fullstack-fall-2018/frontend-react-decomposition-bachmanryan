import {Component} from "react";

class betterName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appTitle: "To Do List Ninja", // My Application Title
            requestFailed: false,
            todos: [] // This will hold my list of ToDos
        };
    }

    render() {
        return (
            <div className="betterName">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>
            </div>
        )
    }
}
export default betterName;