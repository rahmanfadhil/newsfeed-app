import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import {
  Container,
  Header,
  Body,
  Title,
  Button,
  Icon,
  Right,
  Content
} from "native-base";
import SourceList from "./components/SourceList";
import AppHeader from "./components/AppHeader";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppHeader />
          <Content>
            <SourceList />
          </Content>
        </Container>
      </Provider>
    );
  }
}
