import React, {Component} from 'react'
import SplashScreen from '../components/SplashScreen'
import { AsyncStorage } from 'react-native'
import { StackActions, NavigationActions} from 'react-navigation'


class SplashScreenContainer extends Component{

    async componentDidMount(){
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        await console.log(data)
        if(data !== null){
          this.navigateToHome()
        }else{
          this.navigateToLogin()
        }
      }

      navigateToHome(){
        setTimeout(() => {
          this.props.navigation.dispatch(
            StackActions.reset({
              index:0,
              actions:[NavigationActions.navigate({routeName:'HomeContainer'})]
            })
          )
        }, 1000)
      }
    
      navigateToLogin(){
        setTimeout(() => {
          this.props.navigation.dispatch(
            StackActions.reset({
              index:0,
              actions:[NavigationActions.navigate({routeName:'Login'})]
            })
          )
        }, 1000)
      }

    render(){
        return(
            <SplashScreen />
        )
    }
}

export default SplashScreenContainer