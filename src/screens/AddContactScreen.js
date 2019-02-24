import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import colors from '../styles/colors';
import Button from '../components/Button';

export default class AddContactScreen extends Component {

  onSubmit = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <TextField
          label='E-mail'
          // baseColor={colors.white2}
          // textColor={colors.white2}
          ref={this.emailRef}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          value={this.props.email}
          // clearTextOnFocus={true}
          onFocus={this.onFocus}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEmail}
          returnKeyType='next'
        // error={errors.email}
        />

        <Button
          onPress={() => { this.onSubmit() }}
          textColor={colors.white}
          text={'ADICIONAR'}
          loading={this.props.loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
