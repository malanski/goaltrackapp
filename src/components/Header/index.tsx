import React from 'react'
import { View } from "react-native";
import { styles } from './styles'
import { Icon, Text } from "react-native-elements";

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name='check' color='#32a728' size={48}/>
      <Text style={styles.textTitle}>
        Goal track
      </Text>
    </View>
  )
}