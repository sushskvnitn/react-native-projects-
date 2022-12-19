import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
    <Pressable 
    android_ripple={{color:"#32eecd"}}
     onPress={props.deleteitem.bind(this,props.id)} 
     >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
      goalItem: {
            margin: 8,
            borderRadius: 6,
            backgroundColor: '#a065ec',
          },
          goalText: {
            color: 'white',
            padding: 8,
          }
});