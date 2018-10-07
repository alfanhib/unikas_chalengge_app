import React, {Component} from 'react'
import Signup from '../components/Signup'
import { connect } from 'react-redux'
import { register } from '../actions/register'
import { Toast } from 'native-base'
import { Button } from 'native-base'
import { Text, StyleSheet } from 'react-native'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class SignupContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      email_address: '',
      username: '',
      password: '',
    }
  }

  async handleRegister(data){
    const valid = emailRegex.test(data.email_address) && data.email_address && data.username && data.password
    await this.props.register(data)
    const { message, status } = await this.props.signupResult
    await console.log(this.props.signupResult)
    if(valid && status === 201){
      await this.setState({
        email_address: '',
        username: '',
        password: '',
      })
      await Toast.show({
        position: "top",
        text: message,
        buttonText: "Register Success",
        duration: 3000,
        type: "success"
      })
      await this.props.navigation.navigate('Login')
    }else{
      await Toast.show({
        position: "top",
        buttonText: "Register Failed",
        duration: 3000,
        type: "danger"
      })
    }
  }

  renderRegisterButton(){
    const valid = emailRegex.test(this.state.email_address) && this.state.email_address && this.state.username && this.state.password
    return(
      valid ? (
        <Button full style={styles.registerButton} onPress={() => this.handleRegister(this.state)}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </Button>
      ):(
        <Button full style={styles.registerButtonDisabled} disabled={true}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </Button>
      )
    )
  }

    render(){
        return(
            <Signup 
                navigatetoLogin={() => this.props.navigation.navigate("Login")}
                valueEmail={this.state.email}
                valuePassword={this.state.password}
                valueUsername={this.state.username}
                onChangeEmail={(email_address) => this.setState({email_address})}
                onChangePassword={(password) => this.setState({password})}
                onChangeUsername={(username) => this.setState({username})}
                renderButtons={this.renderRegisterButton()}
            />
        )
    }
}

const styles = StyleSheet.create({
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
  }
})

const mapStateToProps = (state) => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed,
  signupResult: state.signupResult
})

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)