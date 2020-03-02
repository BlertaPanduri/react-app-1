import React from "react";
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ""}
    }

    onChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    mySubmitHandler =(ev) => {
        alert("you are submiting " + this.state.username)
    }

    render(){
        return(
            <form onSubmit = {this.mySubmitHandler} >
                <h1>Hello {this.state.username} </h1>
                <input type ="text" onChange={this.onChangeHandler}/>
                <input type ="submit"/>
            </form>
        )

    }
}
export default MyForm;