import Header from './src/components/Header'
import Home from './src/screens/Home'
import { ThemeProvider } from 'react-native-elements'
import { styles } from './styles'
import { View } from 'react-native'

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
    </ThemeProvider>
  )
}

