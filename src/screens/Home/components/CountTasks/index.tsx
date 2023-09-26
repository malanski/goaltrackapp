import React from 'react'
import { Text, View } from "react-native"
import { styles } from './styles'

type Props = {
  activityList: string[]
  countTrueValues: number
}

export default function CountTasks({ activityList, countTrueValues }: Props) {
  return (
    <>
      {activityList.length > 0 && (
        <View style={styles.countTasks}>
        <Text style={styles.totalAmount}>
          Atividades {activityList.length} 
        </Text>

        <Text style={styles.doneAmount}>
          {countTrueValues} Concluídas
        </Text>
        </View>
      )}
    </>
  )
}