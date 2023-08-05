import React, {Component} from 'react';
class User extends Component {
    render(){
        return React.createElement("div", null, React.createElement("h1", null, "Yo, This is without JSX!"))
    }
}

export default User;