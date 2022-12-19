import { useState } from 'react';
import { StyleSheet, FlatList , View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';
export default function App() {
   const [courseGoals, setCourseGoals] = useState([]);
    const [modalisvisible, setModalisvisible] = useState(false);

  function startsaddgoalhandler() {
    setModalisvisible(true);
  }
  function endsaddgoalhandler() {
    setModalisvisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText}
    ]);
    endsaddgoalhandler();
  }

  function deleteitem(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="purple" onPress={startsaddgoalhandler}  />
       <GoalInput 
       visible={modalisvisible} 
       onAddGoal={addGoalHandler}
       oncancelGoal={endsaddgoalhandler}  /> 
     
      <View style={styles.goalsContainer}>
      <FlatList 
       data={courseGoals}
       keyExtractor={(item, index) =>{return item.key;}}
        renderItem={itemData => { return <GoalItem
        id={itemData.item.key}
        text={itemData.item.text} deleteitem={deleteitem} />}}
        alwaysBounceVertical={false}
         />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#7a7e82',
    padding: 8,
    borderRadius: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    width: '70%',
    marginRight: 8,
    padding: 4,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  goalsContainer: {
    flex: 5,
  },
 
});