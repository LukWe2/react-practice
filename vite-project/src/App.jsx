import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Aufgabe 1: Erstelle mehrere einfache React-Komponenten und füge sie in App zusammen. Thema: Components & JSX
function Greeting(){
  return <h1>Hello React!</h1>
}


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

// Aufgabe 3 - Props: Übergib Daten von der Parent- (App) an die Child-Komponente (Profile) und verwende sie dort. Thema: Props
// so sind React Components wiederverwendbar, brauch nicht neue Component für anderes Profil
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


// Aufgabe 4: Reagiere mit einer Funktion auf einen Button-Klick. Thema: Events & onClick
function WelcomeButton(){

  function handleClick(){
    console.log("Hello from React!");
  }

  return <button onClick={handleClick}>Say hello</button>
}


// Aufgabe 5: Verändere sichtbare Daten nach einem Button-Klick. Thema: State & useState
import { useState } from "react";

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





function App() {
  return(
    <div>
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
    </div>
  )
}

export default App
