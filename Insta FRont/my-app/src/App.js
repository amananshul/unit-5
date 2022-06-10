import {Login} from '../src/comp/Login'
import './App.css';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Routes>
<Login/>
  <Route path='/Login' element={<Login/>}></Route>
</Routes>
    </div>
  );
}

export default App;
