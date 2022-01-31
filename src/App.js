import { useState } from "react";
import './App.css';

export default function App() {

  const[active,setActive] = useState(false)

  const toogleMode = () =>{
    setActive(!active)
  }
  return (
    <header className="App">
      <div 
       className={active ? "icon icon-active" : "icon"}
       onClick={toogleMode}
      >
        <div className="hamburguer hamburguer-icon"></div>
      </div>
      <div className={active ? "menu menu-open" : "menu menu-close"}>
        <nav className="list">
          <ul className="list-items">
            <li>home</li>
            <li>product</li>
            <li>contact</li>
            <li>about us</li>
          </ul>
        </nav>
      </div> 
    </header>
  );
}
