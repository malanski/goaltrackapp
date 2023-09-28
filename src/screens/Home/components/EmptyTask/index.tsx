import { Text, View } from "react-native"
import { styles } from './styles'
import { Icon } from "react-native-elements"



export default function EmptyTask() {
  return (
    <View>
      <Text style={styles.emptyListMessage}>
        Você ainda não cadastrou nenhuma atividade.
      </Text>
      <View style={styles.emptyList}>

        <Text style={styles.emptyListMessage}>
          Escreva o que quiser e clique em + para criar uma nova tarefa.

        </Text>
        <Icon name='arrow-upward' color='#4767b1' size={85} />
      </View>
    </View>
  )
}