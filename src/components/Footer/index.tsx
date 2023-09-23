import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Linking } from 'react-native'
import { Icon } from 'react-native-elements'


export default function Footer() {
  const portfolioLink = () => {
    Linking.openURL('https://malanski.github.io/portfolio/#/projects')
  }
  return (
    <View style={styles.footer}>
      <Text style={styles.signature}>
        Desenvolvido por Ulisses Malanski
      </Text>
      <TouchableOpacity
        style={styles.portfolioLink}
        onPress={portfolioLink}
      >
        <Icon name='arrow-left' color='#4767b1' />
        <Text style={styles.link}>
          Portfolio
        </Text>
        <Icon name='arrow-right' color='#4767b1' />
      </TouchableOpacity>
    </View>
  )
}