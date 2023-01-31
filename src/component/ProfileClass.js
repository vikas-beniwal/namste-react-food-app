import React from "react";
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:0,
            userInfo:{
                name:"dummy profile",
                location:"dummy location"
            }
        }
        console.log("constructor profile calss")
    }
    async componentDidMount(){
        console.log("componentDidMount profile class");
        const data = await fetch("https://api.github.com/users/vikas-beniwal")
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate profile class")
    }
    render() {
        const {count} =this.state;
        console.log("render class profile");
        return (
            <div>
                <h2>Profile class</h2>
                <h3>name : {this.state.userInfo.name}</h3>
                <h3>location : {this.state.userInfo?.location}</h3>

                <h3>class count : {count}</h3>
                <button onClick={()=>this.setState({count:count+1})}> SetCount </button>

            </div>
        )
}
}

export default Profile ;