import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import React, { useContext } from 'react'
import TaskInput from './components/TaskInput'
import ActivityCard from './components/ActivityCard'
import Footer from '../../components/Footer'
import { Icon } from 'react-native-elements'
import CountTasks from './components/CountTasks'
import { ActivityContext } from '../../context/ActivityContext'

export default function Home() {
  const activityContext = useContext(ActivityContext)
  const {
    activity,
    activityList,
    countTrueValues,
    handleAddActivity,
    setActivity,
    handleCheckActivity,
    handleRemoveActivity,
    handleRemoveCheckedActivities,
    isCheckedList,
    isEmpty,
    trueValues,    
  } = activityContext || {}

  return (
    <View>
      <TaskInput
        onAdd={handleAddActivity}
        onChangeText={(text) => setActivity(text)}
        value={activity}
      />
      <CountTasks
        activityList={activityList}
        countTrueValues={countTrueValues} />

      <View style={styles.activityList}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isEmpty ? (
            <View style={styles.emptyList}>
              <Text style={styles.emptyListMessage}>
                Você ainda não cadastrou nenhuma atividade.
                Escreva o que quiser e clique em + para criar uma nova atividade ou tarefa!
              </Text>
              <Icon name='arrow-upward' color='#4767b1' />
            </View>
          ) : (
            activityList.map((item, index) => (

              <ActivityCard
                key={`activity-${index}`}
                item={item}
                index={index}
                onPress={() => handleCheckActivity(index)}
                listCheck={isCheckedList[index]}
                onRemove={() => handleRemoveActivity(index)} />
            ))
          )}
          <Footer
            onDeleteAll={handleRemoveCheckedActivities}
            trueValues={trueValues}
            />
        </ScrollView>
      </View>
    </View>
  );
}
