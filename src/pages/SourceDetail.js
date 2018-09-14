import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "react-native";
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
  Thumbnail
} from "native-base";

class SourceDetail extends Component {
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
            <Button transparent>
              <Icon name="refresh" />
            </Button>
          </Right>
        </Header>
        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: sourceDetail.icon }} />
                <Body>
                  <Text>{sourceDetail.name}</Text>
                  <Text note>April 15, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://s.abcnews.com/images/US/hurricane-florence-north-carolina-waves-ap-jef-180913_hpMain_16x9_992.jpg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text>
                North Carolina officials are working to rescue residents who
                were stranded
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect(({ sources }) => ({ sources }))(SourceDetail);
