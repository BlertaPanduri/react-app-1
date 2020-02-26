import React from "react";
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ""}
    }

    onChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render(){
        return(
            <form>
                <h1>Hello {this.state.username} </h1>
                <input type ="text" onChange={this.onChangeHandler}/>
            </form>
        )

    }
}
export default MyForm;