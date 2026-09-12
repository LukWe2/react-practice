import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react";

import Greeting from "./exercises/13-components-import-export/Greeting";
import Profile from "./exercises/13-components-import-export/Profile";
import Counter from "./exercises/13-components-import-export/Counter";
import Exercise from "./exercises/24-useeffect-dependency-fetch/Exercise";


function App() {
  return(
    <div>

      <Exercise />

    </div>
  )
}

export default App
