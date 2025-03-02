import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

let counter = 0;

function increase() {
  counter++
  console.log(counter);
}
function decrease() {
  counter--;
  console.log(counter);
}


export default function App() {

  return (
    <View style={styles.container}>
      <Button style="button" title="increase" onPress={() => increase()} />
      <Button style="button" title="decrease" onPress={() => decrease} />
      <Text style="text">you clicked {counter} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
