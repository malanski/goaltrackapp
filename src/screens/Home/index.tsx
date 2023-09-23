import { Alert, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import ActivityCard from './components/ActivityCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/Footer'
import { Icon } from 'react-native-elements'
import CountTasks from './components/CountTasks'

export default function Home() {
  const [activity, setActivity] = useState('')
  const [activityList, setActivityList] = useState<string[]>([])
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  const isEmpty = activityList.length === 0
  useEffect(() => {
    getData();
  }, []);

  function handleAddActivity() {
    if(activityList.includes(activity)){
      return Alert.alert("Atividade Repetida!", "Uma atividade com o mesmo nome ja foi cadstrada. Por favor adicione uma tarefa diferente.")
    }

    if (activity) {
      const updatedActivityList = [...activityList, activity]
      const updatedIsCheckedList = [...isCheckedList, false]

      setActivityList(updatedActivityList)
      setIsCheckedList(updatedIsCheckedList)
      setActivity('')
      storeData(updatedActivityList, updatedIsCheckedList)

    }
  }

  function handleRemoveActivity(index: number,) {
    Alert.alert(
      "Remover Atividade",
      `Você tem certeza que deseja remover a Atividade: ${activityList[index]}?`,
    [
      {
        text: "Sim",
        onPress: () => {
          const updatedActivityList = [...activityList];
          updatedActivityList.splice(index, 1);
      
          const updatedIsCheckedList = [...isCheckedList];
          updatedIsCheckedList.splice(index, 1)
      
          setActivityList(updatedActivityList)
          setIsCheckedList(updatedIsCheckedList)
          storeData(updatedActivityList, updatedIsCheckedList)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
  }

  function handleCheckActivity(index: number) {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[index] = !updatedIsCheckedList[index]
    setIsCheckedList(updatedIsCheckedList)
    storeData(activityList, updatedIsCheckedList);
  }

  const storeData = async (
    activityList: string[],
    isCheckedList: boolean[]) => {
    try {
      await AsyncStorage.setItem('activityList', JSON.stringify(activityList))
      await AsyncStorage.setItem('isCheckedList', JSON.stringify(isCheckedList))
    } catch (error) {
      // saving error
      Alert.alert('Erro ao salvar os dados:', `${error}`);
    }
  }

  const getData = async () => {
    try {
      const activityListData  = await AsyncStorage.getItem('activityList')
      const isCheckedListData   = await AsyncStorage.getItem('isCheckedList')
  
      if (activityListData && isCheckedListData ) {
        const activityList  = JSON.parse(activityListData)
        const isCheckedList = JSON.parse(isCheckedListData)
        setActivityList(activityList)
        setIsCheckedList(isCheckedList)
      }
    } catch (error) {
      // error reading value
      Alert.alert('Erro ao acessar dados:', `${error}`);
    }
  }

  return (
    <View>
      <TaskInput
        onAdd={handleAddActivity}
        onChangeText={(text) => setActivity(text)}
        value={activity}
      />

      <View style={styles.activityList}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CountTasks activityList={activityList} isCheckedList={isCheckedList}/>
          { isEmpty ? (
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
            )
            
          }

          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
