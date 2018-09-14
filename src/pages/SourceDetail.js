import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-native";
import { Image, FlatList, TouchableOpacity } from "react-native";
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Card,
  CardItem,
  Thumbnail,
  Spinner
} from "native-base";
import moment from "moment";

import {
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_FULFILLED,
  FETCH_ARTICLES_REJECTED
} from "../types";

class SourceDetail extends Component {
  componentDidMount = () => {
    this._fetchData();
  };

  _fetchData = () => {
    const sourceDetail = this.props.sources.sources_list[
      Number.parseInt(this.props.match.params.id)
    ];
    this.props.getArticles(sourceDetail.source);
  };

  _renderList = data => {
    const sourceDetail = this.props.sources.sources_list[
      Number.parseInt(this.props.match.params.id)
    ];
    return (
      <TouchableOpacity
        onPress={() => this.props.history.push("/article?url=" + data.item.url)}
      >
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: sourceDetail.icon }} />
              <Body>
                <Text>{sourceDetail.name}</Text>
                <Text note>{moment(data.item.publishedAt).fromNow()}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: data.item.urlToImage }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Text>{data.item.description}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    console.log(this.props);
    const sourceDetail = this.props.sources.sources_list[
      Number.parseInt(this.props.match.params.id)
    ];
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.history.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{sourceDetail.name}</Title>
          </Body>
          <Right>
            <Button transparent onPress={this._fetchData}>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        <Content style={{ padding: 10 }}>
          {this.props.articles.loading ? (
            <Spinner />
          ) : (
            <FlatList
              data={this.props.articles.data}
              renderItem={this._renderList}
            />
          )}
        </Content>
      </Container>
    );
  }
}

export default connect(
  ({ articles, sources }) => ({ articles, sources }),
  dispatch => ({
    getArticles: source => {
      dispatch({ type: FETCH_ARTICLES_PENDING });
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=0d1ce78f19e749b7aed2ae84978dc610`
      )
        .then(data => data.json())
        .then(data => {
          dispatch({ type: FETCH_ARTICLES_FULFILLED, payload: data.articles });
        })
        .catch(err => {
          dispatch({ type: FETCH_ARTICLES_REJECTED, payload: err });
        });
    }
  })
)(withRouter(SourceDetail));
