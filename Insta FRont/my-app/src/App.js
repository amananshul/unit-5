import {Login} from '../src/comp/Login'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './comp/Navbar';
function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
  <Route path='/login' element={<Login/>}></Route>
</Routes>
    </div>
  );
}

export default App;
