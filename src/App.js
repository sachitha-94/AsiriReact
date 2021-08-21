import logo from './logo.svg';
import './App.css';
import  TestFunctionalComponent from './TestFunctionalComponent';
import  TestClassComponent from './TestClassComponent';


function App() {
  return (
    <div className="App">
      {/* <TestClassComponent/> */}
      <TestFunctionalComponent/>
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
