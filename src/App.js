import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { config } from "./config";
import * as firebase from "firebase/app";
import { FirestoreProvider } from "@react-firebase/firestore";
import "firebase/firestore";

function App() {
  return (
    <div className="App">
      <FirestoreProvider {...config} firebase={firebase}>
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
      </FirestoreProvider>
    </div>
  );
}

export default App;
