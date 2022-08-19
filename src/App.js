import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
          <li>메뉴4</li>
          
          <li>메뉴5</li>
        </ul>
      </div>

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
