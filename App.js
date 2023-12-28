import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    // if(enteredGoalText ==)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal, index) => index !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsHeader}>YOUR COURSE GOALS</Text>
          {courseGoals.length < 1 && <Text style={styles.empty}>No Course Goal at the Moment...</Text>}
          <FlatList
            data={courseGoals}
            renderItem={
              (itemData) => {
                return (
                  <GoalItem
                    itemData={itemData}
                    id={itemData.index}
                    onDeleteItem={deleteGoalHandler}
                  />)
              }
            }
            alwaysBounceVertical={false}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 4,
    marginTop: 15
  },
  goalsHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white'
  },
  empty: {
    textAlign: 'center',
    color: 'white'
  }
});
