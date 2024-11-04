import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
}

export default App;
// Homework
// Open your react application in your IDE
// Navigate to your App.js file
// Refactor your module to use a Class Component rather than a Functional Component
// Tips: Review your imports and your exports. Also make sure you understand the render() function and what it returns.
// Be prepared to answer the question: "What is the difference in importing React and importing Component"? What do you gain access to with each?