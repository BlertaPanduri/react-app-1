import React from "react";

class MyForm1 extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username: '',
            age: null,
            selected: '',
            textarea: ''

        };
        
    }
    myChangeHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        if(nam === 'age'){
            if(!Number(val)){
                alert("Your age must be a number");
            }
        }


        this.setState({[nam]: val});
    }

    render(){
        return (
            <form>
                <h1> Hello {this.state.username}  {this.state.age} {this.state.selected} {this.state.textarea}</h1>
                <p>Enter your name: </p>
                <input type = "text" name = "username" onChange={this.myChangeHandler}></input>
                <p>Enter your age: </p>
                <input type = "text" name = "age" onChange={this.myChangeHandler}></input>
                <p>select </p>
                <select name ='selected' onChange={this.myChangeHandler}>
                    <option value ="Value1">Value1</option>
                    <option value ="Value2">Value2</option>
                    <option value ="Value3">Value3</option>

                </select>
                <p>type something </p>
                <textarea name ='textarea' onChange={this.myChangeHandler}></textarea>

            </form>

        )


    }



}
export default MyForm1;