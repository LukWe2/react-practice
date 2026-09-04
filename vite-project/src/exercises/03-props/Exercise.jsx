/*
without props is Exercise 2
*/

function Profile(props){

    return(
        <div>
            <p>{props.name}</p>
            <p>I study {props.study}.</p>
            <p>Current year: {props.year}</p>
            <p>Next year: {props.year + 1}</p>
        </div>
    )
}


function Exercise(){

    return(
        <Profile name="Lukas" study="HCI" year="2026" />
    )
}

export default Exercise;