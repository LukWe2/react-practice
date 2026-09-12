import { useState, useEffect } from "react";

function UserViewer(){

    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(function() {

        async function loadUsers(){

            try {

                setLoading(true);
                
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

                if (!response.ok){
                    throw new Error("Request failed");
                }

                const data = await response.json();

                setUser(data);
            } catch {

                setError("Could not load users.");
            } finally {

                setLoading(false);
            }
        };

        loadUsers();

    }, [userId]);

    
    function handleLoadIncrease(){

        setUserId(userId + 1);
    };

    function handleLoadDecrease(){

        if (userId > 1){
            setUserId(userId - 1);
        }
    };


    if (loading){
        return <p>Loading...</p>
    } else if (error){
        return <p>{error}</p>
    } else {
        return(
            <div>
                <p>User ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>

                <button onClick={handleLoadIncrease}>Next User</button>
                <button onClick={handleLoadDecrease}>Previous User</button>
            </div>
        )
    }
}


function Exercise() {
    return <UserViewer />;
}

export default Exercise;