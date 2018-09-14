import React, { Component } from "react";
import {
  Header,
  Body,
  Title,
  Right,
  Button,
  Icon,
  Item,
  Input,
  Text
} from "native-base";

class AppHeader extends Component {
  state = {
    search_bar: false
  };

  _toggleHeader = () => {
    this.setState(prev => ({ search_bar: !prev.search_bar }));
  };

  render() {
    const searchHeader = (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="close" onPress={this._toggleHeader} />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
    const normalHeader = (
      <Header>
        <Body>
          <Title>News Feed</Title>
        </Body>
        <Right>
          <Button transparent onPress={this._toggleHeader}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
    return this.state.search_bar ? searchHeader : normalHeader;
  }
}

export default AppHeader;
