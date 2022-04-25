import React from 'react';

class Button extends React.Component{

    constructor(){
        super()

        this.state = {
            is_user_logged_in: false,
            counter : 0
          }

        
    }

    // login(){
    //     this.setState({
    //         is_user_logged_in: true
    //     }, function(){
    //         console.log("State has changed")
    //     })
    // }

    login(){
        this.setState((prevState, props) => ({
            is_user_logged_in: true
        }))


    }



    logout(){
        this.setState({
            is_user_logged_in: false
        })
    }

    // increaseCounter(){
    //     this.setState({
    //         counter : this.state.counter + 1
    //     })
    // }

  

    increaseCounter(){

        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))

    }


    render(){

        if(this.state.is_user_logged_in == false){
            this.authButton = <button onClick={() => this.login() }>Log in</button>
        }else{
            this.authButton = <button onClick={() => this.logout() }>Log out</button>
        }
        

        return (
            <div>
                <p>
                {this.state.counter}
            </p>
            <button onClick={() => this.increaseCounter() }>Increase Counter</button>
                {this.authButton}
            </div>
        )

    }



}

export default Button;