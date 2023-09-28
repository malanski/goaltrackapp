import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useState } from "react";
import { Icon } from 'react-native-elements'

type Props = {
  onAdd: () => void
  onChangeText: (text: any) => void
  value: string
}

export default function TaskInput({onAdd, value, onChangeText}: Props) {
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
            <Icon name="add-circle-outline" color='#98a7ca'/>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}