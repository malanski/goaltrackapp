import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Icon } from 'react-native-elements'

type Props = {
  index: number
  item: string
  onPress: () => void
  onRemove: () => void
  listCheck: boolean
}

export default function ActivityCard({index, item, onPress, listCheck, onRemove}: Props) {
  return (
    <>
      <View key={index} style={styles.activityItem}>

        <TouchableOpacity onPress={onPress}>
          {listCheck ? (
            <Icon name='check-circle' color='#32a728' size={24} />
          ) : (
            <Icon name='circle' color='#98a7b3' />
          )}


        </TouchableOpacity>

        <Text style={styles.activityText}>{item}</Text>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={onRemove}
        >
          <Icon
            name='remove-circle'
            color='#bb5525'
          />
        </TouchableOpacity> 
      </View>

    </>
  )
}