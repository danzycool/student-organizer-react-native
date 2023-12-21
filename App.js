import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [displayedGoals, setDisplayedGoals] = useState([]);

  useEffect(() => {
    setDisplayedGoals([...courseGoals]);
  }, [courseGoals]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([
      ...courseGoals,
      enteredGoalText
    ]);
    // setCourseGoals(currentCourseGoals => [
    //   ...currentCourseGoals,
    //   enteredGoalText
    // ]);
  };



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='Enter Course Goal!'
          onChangeText={goalInputHandler} />
        <Button title='Add Goal'
          onPress={addGoalHandler} />
      </View>
      <Text style={styles.goalsHeader}>YOUR COURSE GOALS</Text>
      {displayedGoals.length < 1 && <Text style={styles.empty}>No Course Goal Set at the Moment...</Text>}
      <View style={styles.goalsContainer}>
        {displayedGoals.map((goal, index) => {
          return
          <View key={index} style={styles.goalItem}>
            <Text> {`${index + 1}. ${goal}`}</Text>
          </View>
        })}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,

  },
  goalsHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,

  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  empty: {
    textAlign: 'center'
  }
});
