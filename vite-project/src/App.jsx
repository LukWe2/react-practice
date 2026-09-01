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
    </div>
  )
}

export default App
