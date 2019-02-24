import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import colors from '../styles/colors';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { ChangeValue, AddContact } from '../actions/AppActions';

class AddContactScreen extends Component {

  onSubmit = () => {
    this.props.AddContact(this.props.email);
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
          value={this.props.email_contact}
          // clearTextOnFocus={true}
          onFocus={this.onFocus}
          onChangeText={val => this.props.ChangeValue("email_contact", val)}
          onSubmitEditing={this.onSubmitEmail}
          returnKeyType='next'
        // error={errors.email}
        />

        <Button
          onPress={() => { this.onSubmit() }}
          textColor={colors.white}
          text={'ADICIONAR'}
          loading={this.props.loadingBtnContact}
        />

        <Text style={styles.messageErro}>{this.props.messageErrAddContact}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageErro: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 5
  }
});

const mapStateToProps = state => (
  {
    email_contact: state.AppReducers.email_contact,
    messageErrAddContact: state.AppReducers.messageErrAddContact,
    loadingBtnContact: state.AppReducers.loadingBtnContact,
  }
)

export default connect(mapStateToProps, { ChangeValue, AddContact })(AddContactScreen);