import React, { Component } from "react";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
  Icon
} from "native-base";

class SourceList extends Component {
  _renderListItem = (item, i) => {
    return (
      <ListItem
        key={i}
        thumbnail
        onPress={() => this.props.history.push("/source/" + i)}
      >
        <Left>
          <Thumbnail square source={{ uri: item.icon }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  };
  render() {
    return (
      <List>
        <ListItem itemDivider>
          <Text>GENERAL</Text>
        </ListItem>
        {this.props.sources.sources_list_search.map(
          (item, i) =>
            item.category === "general" ? this._renderListItem(item, i) : null
        )}
        <ListItem itemDivider>
          <Text>TECHNOLOGY</Text>
        </ListItem>
        {this.props.sources.sources_list_search.map(
          (item, i) =>
            item.category === "technology"
              ? this._renderListItem(item, i)
              : null
        )}
        <ListItem itemDivider>
          <Text>BUSINESS</Text>
        </ListItem>
        {this.props.sources.sources_list_search.map(
          (item, i) =>
            item.category === "business" ? this._renderListItem(item, i) : null
        )}
        <ListItem itemDivider>
          <Text>SPORT</Text>
        </ListItem>
        {this.props.sources.sources_list_search.map(
          (item, i) =>
            item.category === "sport" ? this._renderListItem(item, i) : null
        )}
      </List>
    );
  }
}

export default connect(({ sources }) => ({ sources }))(withRouter(SourceList));
