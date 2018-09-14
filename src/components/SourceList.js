import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, Text } from "native-base";

class SourceList extends Component {
  render() {
    console.log(this.props.sources);
    return (
      <List>
        <ListItem itemDivider>
          <Text>GENERAL</Text>
        </ListItem>
        {this.props.sources.sources_list.map(
          (item, i) =>
            item.category === "general" ? (
              <ListItem key={i}>
                <Text>{item.name}</Text>
              </ListItem>
            ) : null
        )}
        <ListItem itemDivider>
          <Text>TECHNOLOGY</Text>
        </ListItem>
        {this.props.sources.sources_list.map(
          (item, i) =>
            item.category === "technology" ? (
              <ListItem key={i}>
                <Text>{item.name}</Text>
              </ListItem>
            ) : null
        )}
        <ListItem itemDivider>
          <Text>BUSINESS</Text>
        </ListItem>
        {this.props.sources.sources_list.map(
          (item, i) =>
            item.category === "business" ? (
              <ListItem key={i}>
                <Text>{item.name}</Text>
              </ListItem>
            ) : null
        )}
        <ListItem itemDivider>
          <Text>SPORT</Text>
        </ListItem>
        {this.props.sources.sources_list.map(
          (item, i) =>
            item.category === "sport" ? (
              <ListItem key={i}>
                <Text>{item.name}</Text>
              </ListItem>
            ) : null
        )}
      </List>
    );
  }
}

export default connect(({ sources }) => ({ sources }))(SourceList);
