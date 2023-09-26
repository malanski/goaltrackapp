import { AppRegistry } from 'react-native'
import App from '@root/App.tsx';

AppRegistry.registerComponent("goaltrackapp", () => App)

if (window.document) {
  AppRegistry.runApplication("goaltrackapp", {
    rootTag: document.getElementById('app-root'),
  })
}