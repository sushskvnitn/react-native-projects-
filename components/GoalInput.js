import { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Modal ,Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
    <View style={styles.inputContainer}>
      <Image source={require('../assets/favicon.png')} style={{width: 100, height: 100,margin:25}} />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer} >
        <View style={styles.button} >
          <Button title="Add Goal" color="purple" onPress={addGoalHandler} />
        </View>
        <View style={styles.button} >
           <Button title="cancel " color="red" onPress={props.oncancelGoal} />
        </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#a065ec',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '95%',
    marginRight: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    width: '34%',
    margin: 8,
  },
});