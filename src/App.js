import React from "react";

import { config } from "./config";
import * as firebase from "firebase/app";
import { FirestoreProvider } from "@react-firebase/firestore";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import "firebase/auth";
import { ThemeProvider } from "styled-components";
import "firebase/firestore";

import { theme } from "../src/components/Theme";
import { MainComponent } from "./components/MainComponent";

const App = () => {
  return (
    <div className="App">
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirestoreProvider {...config} firebase={firebase}>
          <ThemeProvider theme={theme()}>
            <MainComponent />
          </ThemeProvider>
        </FirestoreProvider>
      </FirebaseAuthProvider>
    </div>
  );
};

export default App;
