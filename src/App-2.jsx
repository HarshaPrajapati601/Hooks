import React, { useRef } from "react";

const App = () => {

    const inputRef = useRef();
    const triggerHandler = () => {
        console.log("hello", inputRef.current.value);
    }

        return(
            <div>
                <h1>Form</h1>
               <InputComponent ref={inputRef} />
                <button onClick={triggerHandler}>
                    Trigger
                </button>
            </div>
        )
}

const InputComponent = React.forwardRef((props, ref) => {
    return(
        <input type="text" ref={ref} />
    )
}

)

export default App;