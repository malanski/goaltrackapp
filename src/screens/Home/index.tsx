import { ScrollView, View } from 'react-native'
import { styles } from './styles'
import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import ActivityCard from './components/ActivityCard'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [activity, setActivity] = useState('')
  const [activityList, setActivityList] = useState<string[]>([])
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  
  useEffect(() => {
    getData();
  }, []);

  function handleAddActivity() {
    if (activity) {
      const updatedActivityList = [...activityList, activity]
      const updatedIsCheckedList = [...isCheckedList, false]

      setActivityList(updatedActivityList)
      setIsCheckedList(updatedIsCheckedList)
      setActivity('')
      storeData(updatedActivityList, updatedIsCheckedList)
      console.log(activity)
    }
  }

  function handleRemoveActivity(index: number) {
    const updatedActivityList = [...activityList];
    updatedActivityList.splice(index, 1);

    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList.splice(index, 1)

    setActivityList(updatedActivityList)
    setIsCheckedList(updatedIsCheckedList)
    storeData(updatedActivityList, updatedIsCheckedList)
  }

  function handleCheckActivity(index: number) {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[index] = !updatedIsCheckedList[index]
    setIsCheckedList(updatedIsCheckedList)
    storeData(activityList, updatedIsCheckedList);
  }

  const storeData = async (activityList: string[], isCheckedList: boolean[]) => {
    try {
      await AsyncStorage.setItem('activityList', JSON.stringify(activityList))
      await AsyncStorage.setItem('isCheckedList', JSON.stringify(isCheckedList))
    } catch (error) {
      // saving error
      console.error('Erro ao salvar os dados:', error);
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
        console.log('Dados do usuário:', activityListData);
        console.log('Estados do usuário:', isCheckedList);
      }
      
     
      
    } catch (error) {
      // error reading value
      console.error('Erro ao recuperar os dados:', error);
    }
    console.log('Done.')
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
          {
            activityList.map((item, index) => (

              <ActivityCard
                key={`activity-${index}`}
                item={item}
                index={index}
                onPress={() => handleCheckActivity(index)}
                listCheck={isCheckedList[index]}
                onRemove={() => handleRemoveActivity(index)} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}
