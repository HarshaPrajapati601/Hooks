import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    triggerHandler = () => {
        console.log("hello", this.textInput.current.value);
    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input type="text" ref={this.textInput} />
                <button onClick={this.triggerHandler}>
                    Trigger
                </button>
            </div>
        )
    }
}

export default App;