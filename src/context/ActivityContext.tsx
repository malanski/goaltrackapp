import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

interface IActivityContext {
  activity: string
  setActivity: React.Dispatch<React.SetStateAction<string>>
  activityList: string[]
  isCheckedList: boolean[]
  isEmpty: boolean
  trueValues: boolean[]
  countTrueValues: number
  handleAddActivity: () => void
  handleRemoveActivity: (index: number) => void
  handleCheckActivity: (index: number) => void
  handleRemoveCheckedActivities: () => void
  storeData: (activityList: string[], isCheckedList: boolean[]) => Promise<void>
}


export const ActivityContext = createContext({} as IActivityContext)

export const ActivityContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [activity, setActivity] = useState('')
  const [activityList, setActivityList] = useState<string[]>([])
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  const isEmpty = activityList.length === 0
  const trueValues = isCheckedList.filter(value => value === true)
  const countTrueValues = trueValues.length

  useEffect(() => {
    getData();
  }, []);

  function handleAddActivity() {
    if (activityList.includes(activity)) {
      return Alert.alert("Atividade Repetida!", "Uma atividade com o mesmo nome ja foi cadstrada. Por favor adicione uma tarefa diferente.")
    }

    if (activity) {
      const updatedActivityList = [...activityList, activity]
      const updatedIsCheckedList = [...isCheckedList, false]

      setActivityList(updatedActivityList)
      setIsCheckedList(updatedIsCheckedList)
      setActivity('')
      storeData(updatedActivityList, updatedIsCheckedList)
      console.log(activityList)
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

  function handleRemoveCheckedActivities() {
    // Crie cópias atualizadas das listas
    const updatedActivityList = [...activityList];
    const updatedIsCheckedList = [...isCheckedList];

    // Use um loop inverso para evitar problemas de índice
    for (let i = updatedActivityList.length - 1; i >= 0; i--) {
      if (updatedIsCheckedList[i]) {
        // Remova a atividade e o estado de isChecked correspondente
        updatedActivityList.splice(i, 1);
        updatedIsCheckedList.splice(i, 1);
      }
    }

    // Atualize o estado com as listas atualizadas
    setActivityList(updatedActivityList);
    setIsCheckedList(updatedIsCheckedList);

    // Armazene os dados atualizados no AsyncStorage
    storeData(updatedActivityList, updatedIsCheckedList);
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
      const activityListData = await AsyncStorage.getItem('activityList')
      const isCheckedListData = await AsyncStorage.getItem('isCheckedList')

      if (activityListData && isCheckedListData) {
        const activityList = JSON.parse(activityListData)
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
    <ActivityContext.Provider
      value={{
        activity,
        isEmpty,
        handleAddActivity,
        handleRemoveActivity,
        handleCheckActivity,
        handleRemoveCheckedActivities,
        storeData,
        activityList,
        isCheckedList,
        setActivity,
        countTrueValues,
        trueValues
      }}>
      {children}
    </ActivityContext.Provider>
  )
}