import React from 'react';

class Button extends React.Component{
    sayHello = () =>{
        alert("hello");
    }

    render(){
        return(
            <button onClick ={this.sayHello} >Click here!</button>
        )
    }
}
export default Button;