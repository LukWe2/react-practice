import { useState, useEffect } from "react";

function UserList(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(function() {

        async function loadUsers(){

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok){
                    throw new Error("Request failed");
                }

                const data = await response.json();

                setUsers(data);
            } catch {

                setError("Could not load users.");
            } finally {

                setLoading(false);
            }
        }

        loadUsers();

    }, []);

    if (loading){
        return <p>Loading...</p>
    } else if (error){
        return <p>{error}</p>
    } else {
        return(
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        );
    }
};


function Exercise() {
    return <UserList />;
}

export default Exercise;