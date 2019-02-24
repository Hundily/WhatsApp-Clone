import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Header, Left, Right, Body, Title, Icon } from "native-base";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import BackButton from "../components/BackButton";
import Talks from "../components/Talks";
import Contact from "../components/Contact";
import colors from "../styles/colors";
import { Actions } from "react-native-router-flux";

const talks = () => (<Talks />);
const contact = () => (<Contact />);

export default class CoreScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header dark backgroundColor={colors.whats}>
          <Left>
            {/* <BackButton /> */}
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>WhatAppClone</Title>
          </Body>
          <Right style={{ alignItems: 'center', }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { Actions.add() }}>
              <Icon name='add' style={{ color: colors.black }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { alert('sair') }}>
              <Text>Sair</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <StatusBar backgroundColor={colors.whats} barStyle={"dark-content"} />

        {/* <TabBar style={{ backgroundColor: colors.whiteGray }} /> */}

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: talks,
            second: contact,
          })}
          onIndexChange={index => this.setState({ index })}
        // initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white
  },
  scene: {
    flex: 1,
  },
});