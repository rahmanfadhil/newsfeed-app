import React, { Component, Fragment } from "react";
import { NativeRouter, Route } from "react-router-native";
import { Provider } from "react-redux";
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Icon,
  Right,
  Content,
  View
} from "native-base";

import store from "./store";
import HomePage from "./pages/HomePage";
import SourceDetail from "./pages/SourceDetail";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/source/:id" component={SourceDetail} />
          </Fragment>
        </Provider>
      </NativeRouter>
    );
  }
}
