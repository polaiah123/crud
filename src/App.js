//import logo from './logo.svg';
import './App.css';
import Register from './Components/Register'
import Edit from './Components/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" exact element={<Register/>}/>
         <Route path="/edit" exact element={<Edit/>}/>
       </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
