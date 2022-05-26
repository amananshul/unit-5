import { Button } from './comp/Button';
import React from 'react';
import './App.css';

function App() {
  const [theme,setTheme]=React.useState("light")
  return (
    <div className="App">
      {/* <button style={{color:"red"}}>Click me</button> */}
      <Button onClick={()=>setTheme("dark")}>Red Ghost</Button>
    </div>
  );
}

export default App;
