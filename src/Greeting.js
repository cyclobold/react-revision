import React from 'react';

class Greeting extends React.Component{

    constructor(){
        super();
    }


    render(){

        return (<div>
                    Welcome { this.props.personname}
                    <div>{this.props.age}</div>
            </div>
            )

    }

}

export default Greeting