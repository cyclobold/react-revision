function Greeting(props){


    return (
        <div>
            <div>Good afternoon {props.personname}</div>
            <div>{props.age}</div>
            <div>{props.height}</div>
            <div>{props.children}</div>
        </div>
    )

}

export default Greeting;