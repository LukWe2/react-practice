function WelcomeButton(){

    function handleClick(){

        console.log("Hello from React!");
    }

    return <button onClick={handleClick}>Say hello</button>
}


function Exercise(){

    return(
        <WelcomeButton />
    )
}

export default Exercise;