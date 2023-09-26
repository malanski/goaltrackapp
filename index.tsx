import { AppRegistry } from 'react-native'
import App from './App'
import { expo } from './app.json'

const appName = expo.name

AppRegistry.registerComponent(appName, () => App)

if (window.document) {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  })
}
