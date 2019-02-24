console.disableYellowBox = true;

import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import firebase from 'firebase';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import LoginScreen from "./src/screens/LoginScreen";
import RegiterUser from "./src/screens/RegiterUser";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import CoreScreen from "./src/screens/CoreScreen";
import AddContactScreen from "./src/screens/AddContactScreen";

class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBM-IS4sMuMcsR_QzNLNyo36cmbx5oDUxA",
      authDomain: "whatapp-clone-895f3.firebaseapp.com",
      databaseURL: "https://whatapp-clone-895f3.firebaseio.com",
      projectId: "whatapp-clone-895f3",
      storageBucket: "whatapp-clone-895f3.appspot.com",
      messagingSenderId: "608288930670"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router>
          <Stack key="root">
            <Scene key="login" initial hideNavBar gesturesEnabled={false} component={LoginScreen} />
            <Scene key="register" component={RegiterUser} />
            <Scene key="welcome"  hideNavBar gesturesEnabled={false} component={WelcomeScreen} />
            <Scene key="core" initial hideNavBar gesturesEnabled={false} component={CoreScreen} />
            <Scene key="add" title={"Adicionar Contato"} component={AddContactScreen} />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App;