import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import colors from '../styles/colors';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ChangeValue, autenticacaoUser } from '../actions/AutenticacaoActions';

import bg from '../image/bg.png';

class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
    }

    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');
  }

  redireciona() {
    this.props.navigator.push('Teste');
  }

  changeValue = (name, value) => {
    this.setState({ [name]: value });
  }

  onChangeText = (text) => {
    ['email', 'password']
      .map((name) => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.props.ChangeValue(name, text);
        }
      });
  }

  onFocus = () => {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }
    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onSubmitEmail = () => {
    this.email.focus();
  }

  onSubmitPassword = () => {
    this.password.blur();
  }

  logout() {
    AsyncStorage.removeItem('usuario');
    AsyncStorage.removeItem('token');

    this.props.navigator.resetTo({
      screen: {
        screen: 'Login',
        title: 'Login',
        navigatorStyle
      }
    });
  }

  onSubmit = () => {
    this.setState({ loading: true });
    const { email, password } = this.props;

    let errors = {};
    ['email', 'password']
      .forEach((name) => {
        let value = this.props[name];

        if (!value) {
          errors[name] = 'Não pode ser vazio';
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Senha muito curta';
          }
        }
      });

    this.props.autenticacaoUser(email, password);

    // if (Object.keys(errors).length === 0 && errors.constructor === Object) {
    //   this.setState({ loading: true });

    //   firebase.auth().signInWithEmailAndPassword(
    //     this.props.email,
    //     this.state.password
    //   ).then(userData => {
    //     AsyncStorage.setItem('token', JSON.stringify(userData.user.refreshToken));
    //     AsyncStorage.setItem('user_data', JSON.stringify(userData));
    //     global.token = userData.user.refreshToken;
    //     global.user = userData;
    //     this.setState({ loading: false })
    //     Actions.core();
    //   }).catch(err => {
    //     this.setState({ message: err.code, loading: false })
    //   })
    // }
    this.setState({ errors, loading: false });
  }

  render() {
    let { errors = {}, loading } = this.state;

    console.log('props', this.props);

    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
        <View style={styles.top}>
          <Text style={styles.title}>WhatsApp Clone</Text>
          {/* <Image style={styles.imgLogo} source={isAliveLogo} /> */}
        </View>

        <View style={styles.body}>
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
            // clearTextOnFocus={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType='next'
            error={errors.email}
          />

          <TextField
            label='Senha'
            baseColor={colors.white2}
            textColor={colors.white2}
            value={this.props.password}
            ref={this.passwordRef}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            returnKeyType='done'
            error={errors.password}
            maxLength={30}
          />

          <TouchableOpacity onPress={() => { Actions.register() }}>
            <Text style={styles.forgotPassword}>Criar conta</Text>
          </TouchableOpacity>

          <Button
            onPress={() => { this.onSubmit() }}
            text={'ACESSAR'}
            loading={this.state.loading}
          />

          <Text style={styles.messageErro}>{this.props.messageErr}</Text>

        </View>

        <View style={{ flex: 1 }} />
      </ImageBackground>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    // backgroundColor: 'green'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white
  },
  imgLogo: {
    marginTop: 40
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  forgotPassword: {
    color: colors.white2,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 20,
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
    email: state.AutenticacaoReducers.email,
    password: state.AutenticacaoReducers.password,
    messageErr: state.AutenticacaoReducers.messageErr,
  }
)

export default connect(mapStateToProps, { ChangeValue, autenticacaoUser })(LoginScreen);