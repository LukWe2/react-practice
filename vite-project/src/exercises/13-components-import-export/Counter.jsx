import { useState } from "react";

// Aufgabe 5: Verändere sichtbare Daten nach einem Button-Klick. Thema: State & useState
function Counter(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
  <div>
    <p>Clicks: {count}</p>
    <button onClick={handleClick}>Click me</button>
  </div>
  );
}

export default Counter;