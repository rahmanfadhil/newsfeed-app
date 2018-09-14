import React, { Component } from "react";
import queryString from "query-string";
import { WebView } from "react-native";
import { Container, Header, Body, Left, Button, Icon } from "native-base";

class ArticleDetail extends Component {
  render() {
    const { url } = queryString.parse(this.props.location.search);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name="close" />
            </Button>
          </Left>
          <Body />
        </Header>
        <WebView source={{ uri: url }} />
      </Container>
    );
  }
}

export default ArticleDetail;
