import React from "react";
import { MyProvider } from "./components/ContextComponents/context";
import Users from "./components/ContextComponents/Users";

const App = () => {

        return(
            <div>
                <h1>Form</h1>
                <MyProvider>
                <Users/>
                </MyProvider>
            </div>
        )
}

export default App;