import React from 'react';
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'
import Greeting from './Greeting'
 class LoginControl extends React.Component{

    constructor(props){
        super(props);
        this.handleLogInClick=this.handleLogInClick.bind(this)
        this.handleLogOutClick=this.handleLogOutClick.bind(this)
        this.state={isLoggedIn:false}

    }

    handleLogInClick(){
        this.setState({isLoggedIn:true})
    }
    handleLogOutClick(){
        this.setState({isLoggedIn:false})
    }


    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton click ={this.handleLogOutClick}/>
        }
        else {
            button =<LoginButton click = {this.handleLogInClick}/>
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }




 }
 export default LoginControl;


