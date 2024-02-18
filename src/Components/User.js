import React from "react";

class User extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            user:{
               
            }

        }
        
    }
    
    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/AnthonyIrudhayaAakash");
        const json = await data.json();

        
        console.log("json", json);
        this.setState({
            user:json
        })
        
    }
    componentWillUnmount(){
        console.log("unmount");
    }
    render(){
        
        
        // const { name, fav } = this?.props;

        const {name , id} = this.state.user;
        
        return(
            <div className="usercard">
                <h1>{name}</h1>
                <h2>{id}</h2>
               
            </div>
        )
    }
    
}
export default User;