import React, { Component } from "react";
import { Container, Content } from "native-base";

import SourceList from "../components/SourceList";
import AppHeader from "../components/headers/AppHeader";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <SourceList />
        </Content>
      </Container>
    );
  }
}

export default HomePage;
