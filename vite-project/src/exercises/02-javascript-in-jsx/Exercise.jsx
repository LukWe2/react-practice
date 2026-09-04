function Profile(){

    const name = "Lukas";
    const study = "Human-Computer-Interaction";
    const year = 2026;

    return(
        <div>
            <p>{name}</p>
            <p>I study {study}.</p>
            <p>Current year: {year}</p>
            <p>Next year: {year + 1}</p>
        </div>
    )
}


function Exercise(){

    return(
        <Profile />
    )
}

export default Exercise;