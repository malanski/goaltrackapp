import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Linking } from 'react-native'
import { Icon } from 'react-native-elements'


type Props = {
  onDeleteAll: () => void
  trueValues: boolean[]
}

export default function Footer({onDeleteAll, trueValues}: Props) {
  const portfolioLink = () => {
    Linking.openURL('https://malanski.github.io/portfolio/#/projects')
  }

  return (
    <View style={styles.footer}>
      {trueValues.length > 1 && (
        <TouchableOpacity onPress={onDeleteAll}>
        <Text style={styles.removeChecked}>
          Remover atividades concluídas
        </Text>
      </TouchableOpacity>
      )}

      <Text style={styles.signature}>
        Desenvolvido por Ulisses Malanski
      </Text>
      <TouchableOpacity
        style={styles.portfolioLink}
        onPress={portfolioLink}
      >
        <Icon name='arrow-left' color='#47b167' />
        <Text style={styles.link}>
          Portfolio
        </Text>
        <Icon name='arrow-right' color='#4767b1' />
      </TouchableOpacity>
    </View>
  )
}