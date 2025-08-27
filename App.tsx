// COMPONENTS!
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy } from './classes/DoggyComponent';

// Components codewise can be defined through a
// function or through a class
export default function App() {

  // JSX 
  // https://legacy.reactjs.org/docs/introducing-jsx.html
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! HI HELLO</Text>
      <ClassExample alias="HEY GUYS" />
      <Doggy alias="Solovino" age={6} />
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
  },
});
