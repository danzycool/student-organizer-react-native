import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeader}>YOUR COURSE GOALS</Text>
        {courseGoals.length < 1 && <Text style={styles.empty}>No Course Goal at the Moment...</Text>}
        <FlatList
          data={courseGoals}
          renderItem={
            (itemData) => {
              return <GoalItem itemData={itemData} />
            }
          }
          alwaysBounceVertical={false}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
  goalsHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  empty: {
    textAlign: 'center'
  }
});
