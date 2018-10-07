import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect()