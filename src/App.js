import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const electron = window.electron;
const app = electron.app;
class App extends Component {

  
  handleClose = ()=>{
    console.log('退出应用。');
    electron.ipcRenderer.on('born', (event, person) => {console.log(person, 'born')});
    // electron.app.quit();
    // app.quit();
    // electron.dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
    electron.ipcRenderer.send('create', 'snowtest');
    console.log("snow","11111");
  }

  render() {
    return (
      <div className="App">
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
        <h1>hello world...</h1>
        <button onClick={this.handleClose}>点击关闭应用</button>
      </div>
    );
  }
}

export default App;
