import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react";

import Greeting from "./exercises/13-components-import-export/Greeting";
import Profile from "./exercises/13-components-import-export/Profile";
import Counter from "./exercises/13-components-import-export/Counter";
import Exercise from "./exercises/16-delete-from-array-state/Exercise";


function AboutMe(){
  return <p>I am learning React.</p>
}

// Aufgabe 2: Verwende JavaScript-Variablen und Berechnungen innerhalb von JSX. Thema: JavaScript in JSX
function Profile2(){
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



// Aufgabe 4: Reagiere mit einer Funktion auf einen Button-Klick. Thema: Events & onClick
function WelcomeButton(){

  function handleClick(){
    console.log("Hello from React!");
  }

  return <button onClick={handleClick}>Say hello</button>
}


// Aufgabe 6: Verändere denselben State mit mehreren Buttons. Thema: useState vertiefen
function AdvancedCounter(){

  const [count, setCount] = useState(0);

  function handleIncrease(){

    setCount(count + 1);

  }

  function handleDecrease(){

    setCount(count - 1);

  }

  function handleReset(){

    setCount(0);

  }

  return(
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )

}

// Aufgabe 7: Zeige unterschiedliche Inhalte abhängig vom State an. Thema: Conditional Rendering
function ToggleMessage(){

  const [toggle, setToggle] = useState(false);

  function toggleStatus(){

    setToggle(!toggle);

  }

  const statusToggle = toggle ? "Hello React!" : "Message is hidden.";
  

  return (
    <div>
      <p>{statusToggle}</p>
      <button onClick={toggleStatus}>Toggle message</button>
    </div>
  );
}


// Aufgabe 8: Rendere mehrere Elemente aus einem Array. Thema: Lists & map()
function TechList(){

  const technologies = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React"},
    { id: 3, name: "C#"},
    {id: 4, name: "HTML"}
  ]

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


function LiveInput(){

  const [name, setName] = useState("");

  function handleChange(event){

    setName(event.target.value);

  }

  return(
    <div>
      <input value={name} onChange={handleChange}/>
      <p>Hello {name}</p>
    </div>
  );
}


function NameForm(){

  const [name, setName] = useState("");

  const [submittedName, setSubmittedName] = useState("");


  function handleChange(event){

    setName(event.target.value);
  }

  function handleSubmit(event){

    event.preventDefault();

    setSubmittedName(name);
  }

  return(

    <>
      <form onSubmit={handleSubmit}>
          <input value={name} onChange={handleChange}></input>
          <button>Submit</button>
      </form>

      <p>Submitted Name: {submittedName}</p>
    </>

  )
}

// Aufgabe 11: Lass eine Child-Komponente über eine Callback-Prop den State der Parent-Komponente verändern. Thema: Child-to-Parent Communication
// Parent
function MessageBox(){

  const [message, setMessage] = useState("Original message");

  function handleChangeMessage(){

    setMessage("Message changed!");

  }

  return(
    <>
      <p>{message}</p>

      <ChangeMessageButton onButtonClick={handleChangeMessage} />
    </>
  )
}


// Child
function ChangeMessageButton(props){

  return(
    <button onClick={props.onButtonClick}>Change message</button>
  )
}


// Aufgabe 12: Verschiebe gemeinsamen State in den gemeinsamen Parent, damit mehrere Child-Komponenten darauf zugreifen können. Thema: Lifting State Up
function SharedCounter(){

  const [count, setCount] = useState(0);

  function increaseCount(){

    setCount(count + 1);
  }

  function decreaseCount(){

    setCount(count - 1);
  }

  return(

    <div>
      <CounterDisplay count={count} />
      <CounterControls onIncreaseButtonClick={increaseCount} onDecreaseButtonClick={decreaseCount}/>
    </div>
  )
}


function CounterDisplay(prop){

  return(
    <p>{prop.count}</p>
  )
}


function CounterControls(props){

  return(

    <div>
      <button onClick={props.onIncreaseButtonClick}>Increase</button>
      <button onClick={props.onDecreaseButtonClick}>Decrease</button>
    </div>
  )

}




function App() {
  return(
    <div>

      <Exercise />

      <SharedCounter />

      <Greeting />
      <AboutMe />
      <Profile name="Lukas" study="Human-Computer-Interaction" year={2026}/>
      <Profile name="Anna" study="Computer-Science" year={2019}/>

      <WelcomeButton />

      <Counter />

      <AdvancedCounter />

      <ToggleMessage />

      <TechList />

      <LiveInput />

      <NameForm />

      <MessageBox />

    </div>
  )
}

export default App
