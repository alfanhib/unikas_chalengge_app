import React, { Component } from 'react'
import { Alert, StyleSheet, Text, View, } from 'react-native'
import { isEmpty, isEmail } from 'validator'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
import { Button, Spinner } from 'native-base'

import Login from '../components/Login'
import { login} from '../actions/login'

class LoginContainer extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  async Loginstatus(){
    const {loginResult} = await this.props
    console.log(loginResult)
    if(loginResult.condition == "Success"){
      const { navigation } = this.props
        navigation.dispatch(
          StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'HomeContainer'})]
          })
        )
    }else{
      await Alert.alert('Login gagal')
    }
  }

  async handleValidationLogin() {
    const loginResult = await this.props
    const { email, password } = await this.state
    await console.log(console.log('ini status', loginResult))
    if (isEmpty(email)) {
      await Alert.alert('Login gagal', 'Silahkan masukan alamat email yang valid')
    } else {
      await this.props.login(email, password)
      await this.Loginstatus()
    }
  }

  renderButtons() {
    const { email, password } = this.state
    const { loading } = this.props
    console.log(loading)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!isEmpty(email) && !isEmpty(password) && regexEmail.test(email) === true) {
			return (
        <Button full style={styles.registerButton} onPress={()=> this.handleValidationLogin()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_LOGIN' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.registerButtonText}>LOGIN</Text>
          )}
        </Button>
			)
		} else {
			return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between',width: '100%'}}>
          
          <Button full style={styles.registerButtonDisabled} disabled>
            <Text style={styles.registerButtonText}>LOGIN</Text>
          </Button>
        </View>
			)
		}
  }
  

  render() {
    return (
      <Login 
        navigateToRegister={() => this.props.navigation.navigate("Signup")}
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        onChangeEmail={(email) => this.setState({email})}
        onChangePassword={(password) => this.setState({password})}
        renderButtons={this.renderButtons()}
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonLoginActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  registerButton:{
    borderRadius: 5,
    backgroundColor: '#1dd1a1',
    marginVertical: 15,
    marginHorizontal: 40
  },
  registerButtonDisabled:{
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginVertical: 15,
    marginHorizontal: 40
  },
  registerButtonText:{
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonLoginActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonLoginActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonLoginActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonLoginInactive: {
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#fff',
    borderColor:'#d11e48'
  },
  buttonLoginInactiveText: {
    color: '#d11e48', 
    fontSize: 18 
  }
})

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed,
  loginResult: state.loginResult
})

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)