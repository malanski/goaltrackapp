import Header from './src/components/Header'
import Home from './src/screens/Home'

import { ThemeProvider } from 'react-native-elements'
import { styles } from './styles'
import { StatusBar, View } from 'react-native'
import { ActivityContextProvider } from './src/context/ActivityContext'
import React from 'react'

export default function App() {
  return (
        <ThemeProvider>
          <ActivityContextProvider>
            <View style={styles.container}>
              <StatusBar translucent />
              <Header />
              <Home />
            </View>
          </ActivityContextProvider>
        </ThemeProvider>
  )
}

