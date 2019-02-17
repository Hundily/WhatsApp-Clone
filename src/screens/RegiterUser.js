import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Button from '../components/Button';
import { TextField } from 'react-native-material-textfield';
import colors from '../styles/colors';
import { connect } from 'react-redux';
import { ChangeValue, registerUser } from '../actions/AutenticacaoActions';

import bg from '../image/bg.png';

class RegiterUser extends Component {
  static navigationOptions = { title: "Cadastro" };

  constructor(props) {

    super(props)
    this.state = {
      errors: {}
    }
  }

  onSubmit = () => {
    // var model = {
    //   name: this.props.name,
    //   email: this.props.email,
    //   password: this.props.password
    // }

    this.props.registerUser(this.props.name, this.props.email, this.props.password);
  }

  render() {
    let { errors = {} } = this.state;

    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
          <View style={styles.body}>
            <TextField
              label='Nome'
              ref={this.nameRef}
              baseColor={colors.white2}
              textColor={colors.white2}
              textColor={colors.white}
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              value={this.props.name}
              onFocus={this.onFocus}
              onChangeText={val => this.props.ChangeValue('name', val)}
              onSubmitEditing={this.onSubmitname}
              returnKeyType='next'
              error={errors.name}
            />

            <TextField
              label='E-mail'
              baseColor={colors.white2}
              textColor={colors.white2}
              ref={this.emailRef}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              value={this.props.email}
              onChangeText={val => this.props.ChangeValue('email', val)}
              onFocus={this.onFocus}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType='next'
              error={errors.email}
            />

            <TextField
              label='Senha'
              baseColor={colors.white}
              textColor={colors.white}
              tintColor={colors.white}
              value={this.props.password}
              ref={this.passwordRef}
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={val => this.props.ChangeValue('password', val)}
              returnKeyType='done'
              error={errors.password}
              maxLength={30}
            />

            <Text style={styles.messageErro}>{this.props.messageErr}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
              onPress={() => { this.onSubmit() }}
              text={'CADASTRAR'}
              loading={this.state.loading}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  imgLogo: {
    marginTop: 40
  },
  body: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  forgotPassword: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 20,
  },
  ou: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 32
  },
  ouText: {
    marginHorizontal: 16,
    color: colors.white2
  },
  messageErro: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 5
  }
})

const mapStateToProps = state => (
  {
    name: state.AutenticacaoReducers.name,
    email: state.AutenticacaoReducers.email,
    password: state.AutenticacaoReducers.password,
    messageErr: state.AutenticacaoReducers.messageErr,
  }
)

export default connect(mapStateToProps, { ChangeValue, registerUser })(RegiterUser);