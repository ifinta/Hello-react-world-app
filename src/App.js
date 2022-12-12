import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
      <Say text="Hello React World!"/>
  );
}

const Say = (props) => {

  return (
    <div className="Say-rows">
      {props.text.split('').map((c,i) => {
        return (
          <Spell key={i} ch={c}/>
        );
      })}
    </div>
  );
}

const Spell = (props) => {

  const [color, setColor] = useState("white");  
  const [width, setWidth] = useState("50px");  
  const [height, setHeight] = useState("50px");  
  
  useEffect(() => {
    const colors = ["yellow", "aqua", "red", "green", "lightgreen", "pink", "bisque", "lightgrey", "black"];
    const timer = setInterval(() => {
      setColor(colors[Math.round(Math.random()*(colors.length-1))]);
      setWidth(`${Math.max(30, Math.round(Math.random()*100))}px`);
      setHeight(`${Math.max(30, Math.round(Math.random()*100))}px`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Spell-container" style={{backgroundColor:  color, width: width, height: height}}>
      {props.ch}
    </div>
  );
}

export default App;
