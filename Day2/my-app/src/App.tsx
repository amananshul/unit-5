import React from 'react';
// import {Counter} from './components/Counter'
import {Todos} from './components/Todos'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Todos/>
     {/* <Counter init={0}>
       <button>add1</button>
     </Counter> */}
    </div>
  );
}

export default App;
