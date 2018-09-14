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
import { connect } from "react-redux";
import { SET_SEARCH } from "../../types";

class AppHeader extends Component {
  state = {
    search_bar: false,
    search_input: ""
  };

  _toggleHeader = () => {
    this.setState(prev => ({ search_bar: !prev.search_bar }));
  };

  _onSearchChange = value => {
    this.setState({ search_input: value });
    this.props.setSearch(value);
  };

  render() {
    const searchHeader = (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={this._onSearchChange} />
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

export default connect(
  null,
  dispatch => ({
    setSearch: text => dispatch({ type: SET_SEARCH, payload: text })
  })
)(AppHeader);
