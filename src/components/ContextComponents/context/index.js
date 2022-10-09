import React, {Component} from 'react';

const MyContext = React.createContext(); // create a instance of the context;

class MyProvider extends Component {
  state = {
    users :[
        {id: 1, name: 'harsha'},
        {id: 2, name: 'Renu'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Jacob'}
    ],
    active: true
  };


    render() {
        return(
            <MyContext.Provider value={this.state.users}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider}


