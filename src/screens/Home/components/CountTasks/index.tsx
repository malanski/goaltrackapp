import { Text, View } from "react-native"
import { styles } from './styles'

type Props = {
  activityList: string[]
  isCheckedList: boolean[]
}

export default function CountTasks({ activityList, isCheckedList }: Props) {
  const trueValues = isCheckedList.filter(value => value === true)
  const countTrueValues = trueValues.length
  return (
    <View style={styles.countTasks}>
      {activityList.length > 0 && (
        <>
        <Text style={styles.totalAmount}>
          {activityList.length} Atividades
        </Text>

        <Text style={styles.doneAmount}>
          Concluídas {countTrueValues}
        </Text>
        </>
      )}

    </View>
  )
}