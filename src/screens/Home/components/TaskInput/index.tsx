import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useState } from "react";

type Props = {
  onAdd: () => void
  onChangeText: (text: any) => void
  value: string
}

export default function TaskInput({onAdd, value, onChangeText}: Props) {
  const [activity, setActivity] = useState('')
  const [activityList, setActivityList] = useState<string[]>([])
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);



  return (
    <>
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder='Nome da atividade'
          placeholderTextColor='#3f083f'
          value={value}
          onChangeText={onChangeText}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onAdd}
        >
          <Text style={styles.buttonAdd}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}