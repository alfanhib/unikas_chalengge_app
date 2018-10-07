import { StackNavigator } from 'react-navigation'
import SplashScreenContainer from './app/containers/SplashScreenContainer'
import LoginContainer from './app/containers/LoginContainer'
import SignupContainer from './app/containers/SignupContainer'
import HomeContainer from './app/containers/HomeContainer'
import AddContactContainer from './app/containers/AddContactContainer'
import EditContactContainer from './app/containers/EditContactContainer'


const AppNavigator = StackNavigator(
    {
        SplashScreen: { screen: SplashScreenContainer },
        Login: { screen: LoginContainer },
        Signup: { screen: SignupContainer },
        HomeContainer: { screen: HomeContainer },
        AddContactContainer: { screen:AddContactContainer},
        EditContactContainer: { screen: EditContactContainer }
    },{
        initialRouteName: 'SplashScreen',
        headerMode:'none'
    }
)

export default AppNavigator