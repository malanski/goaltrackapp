import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import React, { useContext, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import ActivityCard from './components/ActivityCard'
import Footer from '../../components/Footer'
import { Icon } from 'react-native-elements'
import CountTasks from './components/CountTasks'
import { ActivityContext } from '../../context/ActivityContext'
import { useFonts } from 'expo-font';
import Header from '../../components/Header'
import EmptyTask from './components/EmptyTask'


export default function Home() {
  const [loaded] = useFonts({
    boogalooRegular: require("../../../assets/fonts/Boogaloo-Regular.ttf")    
  });
  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);


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

  if (!loaded) {
    return <Text>Carregando fontes...</Text>;
  }
  
  return (
    <View>
      <Header />

      <TaskInput
        onAdd={handleAddActivity}
        onChangeText={(text) => setActivity(text)}
        value={activity}
      />
      <CountTasks
        activityList={activityList}
        countTrueValues={countTrueValues} />

      <View style={styles.activityListStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isEmpty ? (
            <EmptyTask />
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
