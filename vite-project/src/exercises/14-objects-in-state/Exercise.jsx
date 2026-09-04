// bei age: user.age + 1 erst das user.age vergessen also hatte nur:
// age: age + 1 und das geht nicht

import { useState } from "react";

function UserProfile(){

  const [user, setUser] = useState({
    name: "Lukas",
    age: 24,
    city: "Würzburg"
  })

  function handleBirthday(){

    setUser({
      ...user,
      age: user.age + 1
    });
  }

  function handleMove(){

    setUser({
      ...user,
      city: "Berlin"
    });
  }


  return(
    
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={handleBirthday}>Birthday</button>
      <button onClick={handleMove}>Move to Berlin</button>
    </div>
  )
}


function Exercise(){

  return(
    <UserProfile />
  )
}

export default Exercise;