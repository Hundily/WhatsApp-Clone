import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import WhatsAppIcon from '../image/WhatsAppIcon.png';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';
import colors from '../styles/colors';
import bg from '../image/bg.png';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <View style={styles.container}>
          <Image source={WhatsAppIcon} style={{ width: 100, height: 100, marginBottom: 30 }} />
          <Text style={styles.welcome}>Welcome to WhatApp-Clone</Text>
          <Text style={[styles.welcome, { fontSize: 14 }]}>Developer by Hundily Cerqueira</Text>
          <Button onPress={() => { Actions.login() }} text="LOGIN" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.white
  },
});
