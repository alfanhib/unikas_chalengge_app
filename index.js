import React from 'react'
import { AppRegistry } from 'react-native'
import { Root } from 'native-base'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'
import Reactotron from 'reactotron-react-native'
import './ReactotronConfig'


const store = Reactotron.createStore(rootReducers, applyMiddleware(thunk))

const App = () => (
	<Provider store={store}>
		<Root>
			<AppNavigator />
		</Root>
	</Provider>
)

console.disableYellowBox = true
AppRegistry.registerComponent("unikas_challenges", () => App);

