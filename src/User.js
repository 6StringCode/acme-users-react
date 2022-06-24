import React, { Component } from "react";
import axios from "axios";

class User extends Component{
    constructor(){
        super();
        this.state = {
            user: {}
        };
    }
    async componentDidMount(){
        const user = (await axios.get(`/api/users/${this.props.selectedUserId}`)).data;
        console.log(user);
    }
    render(){
        const { user } = this.state;
        return (
            <div>
                { user.bio }
            </div>
        );
    }
}

export default User;