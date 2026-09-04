function TechList(){

    const technologies = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "C#"},
    { id: 4, name: "HTML"}  
    ];

    return(

        <div>
            <h2>Technologies</h2>

            <ul>
                {technologies.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}


function Exercise(){

    return(

        <TechList />
    )
}

export default Exercise;